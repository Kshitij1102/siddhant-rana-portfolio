import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Save booking in Supabase
    const { error } = await supabase.from("appointments").insert([
      {
        full_name: body.full_name,
        email: body.email,
        phone: body.phone,
        age: body.age ? Number(body.age) : null,
        gender: body.gender,
        city: body.city,
        sport: body.sport,
        playing_level: body.playing_level,
        concern: body.concern,
        preferred_date: body.preferred_date,
        preferred_time: body.preferred_time,
        remarks: body.remarks,
      },
    ]);

    if (error) {
      console.log(error);

      return NextResponse.json(
        {
          message: "Database Error",
        },
        {
          status: 500,
        }
      );
    }

    // ===========================
    // EMAIL TO SIDDHANT
    // ===========================

    await resend.emails.send({
      from: "Mind Balance <onboarding@resend.dev>",
      to: "siddhant.sportspsych@gmail.com",
      subject: `🧠 New Consultation Request - ${body.full_name}`,
      html: `
      <div style="background:#f5f5f5;padding:40px;font-family:Arial,sans-serif;">

        <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.08);">

          <div style="background:#991b1b;color:white;padding:35px;text-align:center;">
            <h1 style="margin:0;font-size:32px;">🧠 Mind Balance</h1>
            <p style="margin-top:10px;font-size:18px;">
              New Consultation Request
            </p>
          </div>

          <div style="padding:35px;">

            <h2 style="color:#991b1b;border-bottom:2px solid #eee;padding-bottom:10px;">
              👤 Personal Information
            </h2>

            <table style="width:100%;line-height:2;">
              <tr><td><strong>Name</strong></td><td>${body.full_name}</td></tr>
              <tr><td><strong>Email</strong></td><td>${body.email}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${body.phone}</td></tr>
              <tr><td><strong>Age</strong></td><td>${body.age || "Not Provided"}</td></tr>
              <tr><td><strong>Gender</strong></td><td>${body.gender || "Not Provided"}</td></tr>
              <tr><td><strong>City</strong></td><td>${body.city || "Not Provided"}</td></tr>
            </table>

            <br>

            <h2 style="color:#991b1b;border-bottom:2px solid #eee;padding-bottom:10px;">
              🏅 Sports Information
            </h2>

            <table style="width:100%;line-height:2;">
              <tr><td><strong>Sport</strong></td><td>${body.sport || "Not Provided"}</td></tr>
              <tr><td><strong>Playing Level</strong></td><td>${body.playing_level || "Not Provided"}</td></tr>
            </table>

            <br>

            <h2 style="color:#991b1b;border-bottom:2px solid #eee;padding-bottom:10px;">
              🧠 Consultation Details
            </h2>

            <p><strong>Main Concern</strong><br><br>${body.concern || "Not Provided"}</p>

            <p><strong>Preferred Date</strong><br><br>${body.preferred_date || "Not Provided"}</p>

            <p><strong>Preferred Time</strong><br><br>${body.preferred_time || "Not Provided"}</p>

            <p><strong>Additional Notes</strong><br><br>${body.remarks || "None"}</p>

          </div>

          <div style="background:#fafafa;border-top:1px solid #eee;padding:25px;text-align:center;color:#666;font-size:14px;">
            This consultation request was submitted through the
            <strong>Mind Balance Portfolio Website</strong>.
            <br><br>
            Please contact the client to confirm the session.
          </div>

        </div>

      </div>
      `,
    });

    // ===========================
    // CONFIRMATION EMAIL TO CLIENT
    // ===========================

    await resend.emails.send({
      from: "Mind Balance <onboarding@resend.dev>",
      to: body.email,
      subject: "✅ We've Received Your Consultation Request",

      html: `
      <div style="background:#f5f5f5;padding:40px;font-family:Arial,sans-serif;">

        <div style="max-width:650px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.08);">

          <div style="background:#991b1b;color:white;padding:35px;text-align:center;">
            <h1 style="margin:0;">🧠 Mind Balance</h1>
            <p style="margin-top:10px;font-size:18px;">
              Consultation Request Received
            </p>
          </div>

          <div style="padding:35px;">

            <h2>Hello ${body.full_name},</h2>

            <p>
              Thank you for submitting your consultation request.
            </p>

            <p>
              We have successfully received your booking request.
            </p>

            <p>
              <strong>Siddhant Rana</strong> will personally review your details
              and contact you shortly to confirm your session.
            </p>

            <hr style="margin:30px 0;">

            <h3>Your Request Summary</h3>

            <table style="width:100%;line-height:2;">
              <tr><td><strong>Sport</strong></td><td>${body.sport || "-"}</td></tr>
              <tr><td><strong>Playing Level</strong></td><td>${body.playing_level || "-"}</td></tr>
              <tr><td><strong>Preferred Date</strong></td><td>${body.preferred_date || "-"}</td></tr>
              <tr><td><strong>Preferred Time</strong></td><td>${body.preferred_time || "-"}</td></tr>
            </table>

            <br>

            <p>
              If any changes are required, simply reply to this email.
            </p>

            <br>

            <p>
              Thank you for choosing <strong>Mind Balance</strong>.
            </p>

            <p>
              We look forward to helping you unlock your peak performance.
            </p>

          </div>

          <div style="background:#fafafa;padding:20px;text-align:center;color:#777;font-size:13px;">
            Mind Balance • Sports Psychology & Mental Performance Coaching
          </div>

        </div>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}