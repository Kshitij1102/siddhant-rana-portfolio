import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-red-100 opacity-50 blur-3xl" />

      {/* Decorative Circle */}

      <div className="absolute -top-4 right-6 h-16 w-16 rounded-full border-4 border-red-200" />

      {/* Main Image */}

      <div className="relative overflow-hidden rounded-[32px] border-8 border-white shadow-2xl">

        <Image
          src="/images/siddhant-rana.jpg"
          alt="Siddhant Rana"
          width={380}
          height={500}
          priority
          className="object-cover transition duration-500 hover:scale-105"
        />

      </div>

      {/* Floating Credential Card */}

      <div className="absolute -left-8 bottom-10 w-60 rounded-3xl border border-red-100 bg-white p-5 shadow-2xl backdrop-blur-xl">

        <p className="text-[11px] font-bold uppercase tracking-[0.30em] text-red-700">
          Credentials
        </p>

        <h3 className="mt-2 text-lg font-bold text-gray-900">
          Sports Psychologist
        </h3>

        <div className="mt-4 space-y-2.5">

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-700" />
            <p className="text-sm text-gray-600">
              Published Research
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-700" />
            <p className="text-sm text-gray-600">
              Psychological Testing
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-700" />
            <p className="text-sm text-gray-600">
              Biofeedback Training
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-700" />
            <p className="text-sm text-gray-600">
              Performance Enhancement
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}