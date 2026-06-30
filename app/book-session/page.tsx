import BookingForm from "@/components/booking/BookingForm";

export default function BookSessionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-red-50 to-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* Heading */}

        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-red-700">
            Book a Consultation
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight text-gray-900">
            Let's Begin Your{" "}
            <span className="text-red-700">
              Mental Performance Journey
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Fill out the form below and Siddhant will personally review your
            request before confirming your consultation.
          </p>
        </div>

        {/* Booking Form */}

        <div className="rounded-[40px] border border-red-100 bg-white p-10 shadow-2xl">
          <BookingForm />
        </div>
      </section>
    </main>
  );
}