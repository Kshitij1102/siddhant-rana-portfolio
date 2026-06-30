"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type BookingFormData = {
  full_name: string;
  email: string;
  phone: string;
  age?: number;
  gender: string;
  city: string;
  sport: string;
  playing_level: string;
  concern: string;
  preferred_date: string;
  preferred_time: string;
  remarks: string;
};

export default function BookingForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    try {
      setLoading(true);

      const response = await fetch("/api/book-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      await Swal.fire({
        icon: "success",
        title: "Booking Request Submitted!",
        text: "Thank you! Siddhant has received your consultation request and will contact you shortly.",
        confirmButtonColor: "#B91C1C",
        confirmButtonText: "Done",
      });

      reset();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#B91C1C",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

      {/* Full Name */}
      <div>
        <label className="mb-2 block font-semibold">
          Full Name
        </label>

        <input
          {...register("full_name", {
            required: "Full name is required",
          })}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
          placeholder="Enter your full name"
        />

        {errors.full_name && (
          <p className="mt-2 text-sm text-red-600">
            {errors.full_name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block font-semibold">
          Email Address
        </label>

        <input
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
          placeholder="Enter your email"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block font-semibold">
          Phone Number
        </label>

        <input
          {...register("phone", {
            required: "Phone number is required",
          })}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
          placeholder="+91XXXXXXXXXX"
        />

        {errors.phone && (
          <p className="mt-2 text-sm text-red-600">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Age */}
      <div>
        <label className="mb-2 block font-semibold">
          Age
        </label>

        <input
          type="number"
          {...register("age", {
            valueAsNumber: true,
          })}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
          placeholder="Age"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="mb-2 block font-semibold">
          Gender
        </label>

        <select
          {...register("gender")}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      {/* City */}
      <div>
        <label className="mb-2 block font-semibold">
          City
        </label>

        <input
          {...register("city")}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
          placeholder="Your City"
        />
      </div>

      {/* Sport */}
      <div>
        <label className="mb-2 block font-semibold">
          Sport
        </label>

        <input
          {...register("sport")}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
          placeholder="e.g. Cricket, Football, Tennis"
        />
      </div>

      {/* Playing Level */}
      <div>
        <label className="mb-2 block font-semibold">
          Playing Level
        </label>

        <select
          {...register("playing_level")}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
        >
          <option value="">Select Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Professional</option>
        </select>
      </div>

      {/* Main Concern */}
      <div>
        <label className="mb-2 block font-semibold">
          Main Concern
        </label>

        <textarea
          {...register("concern")}
          rows={4}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
          placeholder="Describe what you'd like help with..."
        />
      </div>

      {/* Preferred Date */}
      <div>
        <label className="mb-2 block font-semibold">
          Preferred Date
        </label>

        <input
          type="date"
          {...register("preferred_date")}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
        />
      </div>

      {/* Preferred Time */}
      <div>
        <label className="mb-2 block font-semibold">
          Preferred Time
        </label>

        <input
          type="time"
          {...register("preferred_time")}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
        />
      </div>

      {/* Additional Notes */}
      <div>
        <label className="mb-2 block font-semibold">
          Additional Notes
        </label>

        <textarea
          {...register("remarks")}
          rows={4}
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-red-700"
          placeholder="Anything else Siddhant should know?"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full rounded-xl py-4 text-lg font-bold text-white transition ${
          loading
            ? "cursor-not-allowed bg-gray-400"
            : "bg-red-700 hover:bg-red-800"
        }`}
      >
        {loading ? "Submitting..." : "Submit Booking Request"}
      </button>
    </form>
  );
}