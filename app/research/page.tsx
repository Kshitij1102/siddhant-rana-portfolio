import Navbar from "@/components/layout/Navbar";
import { research } from "@/data/research";

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-white via-red-50 to-white">
        {/* ================= HERO ================= */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-[0.35em] text-red-700">
              Evidence & Research
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight text-gray-900 md:text-7xl">
              Research that{" "}
              <span className="text-red-700">
                Builds Better Athletes
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
              Scientific research that informs every consultation,
              helping athletes develop confidence, resilience,
              emotional regulation and peak mental performance.
            </p>
          </div>
        </section>

        {/* ================= FEATURED PUBLICATION ================= */}

        <section className="mx-auto max-w-7xl px-6 pb-28">
          <div className="grid gap-10 rounded-[40px] border border-red-100 bg-white p-12 shadow-2xl lg:grid-cols-[2fr_1fr]">

            {/* LEFT SIDE */}

            <div>
              <p className="font-semibold uppercase tracking-[0.35em] text-red-700">
                Featured Publication
              </p>

              <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900">
                {research.title}
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                {research.summary}
              </p>

              {/* Publication Details */}

              <div className="mt-12 grid gap-8 md:grid-cols-2">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
                    Journal
                  </p>

                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {research.journal}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
                    Publication Date
                  </p>

                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {research.publicationDate}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
                    Authors
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3">
                    {research.authors.map((author) => (
                      <span
                        key={author}
                        className="rounded-full bg-red-50 px-5 py-2 font-medium text-red-700"
                      >
                        {author}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Tags */}

              <div className="mt-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
                  Research Areas
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {research.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-red-200 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-red-700 hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}

              <div className="mt-14 flex flex-wrap gap-5">

                <a
                  href={research.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-red-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-red-800"
                >
                  Read Publication
                </a>

                <a
                  href={research.pdf}
                  download
                  className="rounded-full border-2 border-red-700 px-8 py-4 font-semibold text-red-700 transition hover:bg-red-700 hover:text-white"
                >
                  Download PDF
                </a>

              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="flex flex-col justify-center gap-6">

              <div className="rounded-3xl bg-red-700 p-8 text-center text-white shadow-xl">
                <h3 className="text-5xl font-black">1+</h3>
                <p className="mt-3 text-lg">
                  Published Research
                </p>
              </div>

              <div className="rounded-3xl border border-red-100 bg-red-50 p-8 text-center">
                <h3 className="text-4xl font-black text-red-700">
                  2026
                </h3>

                <p className="mt-2 font-medium text-gray-700">
                  Publication Year
                </p>
              </div>

              <div className="rounded-3xl border border-red-100 bg-white p-8">
                <ul className="space-y-5 text-lg font-medium text-gray-700">
                  <li>✔ Evidence Based</li>
                  <li>✔ Peer Reviewed</li>
                  <li>✔ Athlete Focused</li>
                  <li>✔ Applied Research</li>
                </ul>
              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  );
}