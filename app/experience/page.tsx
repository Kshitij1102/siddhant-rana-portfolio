import Navbar from "@/components/layout/Navbar";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-white via-red-50 to-white">
        {/* ================= HERO ================= */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-[0.35em] text-red-700">
              Experience & Qualifications
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight text-gray-900 md:text-7xl">
              Building Confidence Through
              <span className="text-red-700">
                {" "}Education & Practice
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
              Combining scientific research, practical experience and athlete-
              centered care to help athletes consistently perform at their best.
            </p>
          </div>
        </section>


        {/* ================= ACHIEVEMENTS ================= */}

<section className="mx-auto max-w-7xl px-6 pb-20">

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

    {/* Card 1 */}

    <div className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
        🏆
      </div>

      <h3 className="mt-6 text-5xl font-black text-red-700">
        1+
      </h3>

      <p className="mt-3 text-lg font-semibold text-gray-800">
        Published Research
      </p>

    </div>

    {/* Card 2 */}

    <div className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
        💼
      </div>

      <h3 className="mt-6 text-5xl font-black text-red-700">
        6+
      </h3>

      <p className="mt-3 text-lg font-semibold text-gray-800">
        Professional Experiences
      </p>

    </div>

    {/* Card 3 */}

    <div className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
        🏅
      </div>

      <h3 className="mt-6 text-5xl font-black text-red-700">
        10+
      </h3>

      <p className="mt-3 text-lg font-semibold text-gray-800">
        Sports Worked With
      </p>

    </div>

    {/* Card 4 */}

    <div className="rounded-3xl border border-red-100 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
        ⭐
      </div>

      <h3 className="mt-6 text-4xl font-black text-red-700">
        INSPA
      </h3>

      <p className="mt-3 text-lg font-semibold text-gray-800">
        Professional Member
      </p>

    </div>

  </div>

</section>

        {/* ================= TIMELINE ================= */}

        <section className="mx-auto max-w-6xl px-6 pb-28">

          <div className="relative">

            {/* Vertical Line */}

            <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-red-200"></div>

            <div className="space-y-14">

              {experience.map((item) => (

                <div
                  key={`${item.year}-${item.title}`}
                  className="relative flex gap-8"
                >

                  {/* Timeline Dot */}

                  <div className="relative z-10 mt-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-lg font-bold text-white shadow-lg">
                    ●
                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-3xl border border-red-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                      {item.year}
                    </span>

                    <h2 className="mt-5 text-3xl font-black text-gray-900">
                      {item.title}
                    </h2>

                    <h3 className="mt-2 text-xl font-semibold text-red-700">
                      {item.organization}
                    </h3>

                    <p className="mt-1 font-medium text-gray-500">
                      {item.location}
                    </p>

                    <p className="mt-6 leading-8 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

      </main>
    </>
  );
}