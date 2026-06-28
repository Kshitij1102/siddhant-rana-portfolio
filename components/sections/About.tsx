import Image from "next/image";
import {
  Target,
  Eye,
  Brain,
  Award,
  Activity,
  BadgeCheck,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* ================= TOP ================= */}

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-red-700">
              About Mind Balance
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight text-gray-900">
              Helping Athletes Build
              <br />
              <span className="text-red-700">
                Confidence, Focus &
                <br />
                Peak Performance
              </span>
            </h2>

            <div className="mt-8">
              <h3 className="text-3xl font-bold text-gray-900">
                Meet Siddhant Rana
              </h3>

              <p className="mt-2 text-lg font-semibold text-red-700">
                Sports Psychologist
              </p>
            </div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              I help athletes improve confidence, resilience, emotional
              regulation and mental toughness through evidence-based sports
              psychology interventions tailored to individual performance
              goals.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              My approach combines research, psychological assessment and
              practical mental skills training to help athletes consistently
              perform at their highest level.
            </p>
          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">
            <div className="absolute h-[460px] w-[460px] rounded-full bg-red-100 opacity-50 blur-3xl" />

            <div className="relative h-[500px] w-full max-w-[420px] overflow-hidden rounded-[36px] shadow-2xl">
              <Image
                src="/images/siddhant-about.jpg"
                alt="Siddhant Rana"
                fill
                priority
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Credentials */}

            <div className="absolute -left-8 bottom-12 w-72 rounded-3xl border border-red-100 bg-white p-6 shadow-2xl">
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-red-700">
                Credentials
              </h4>

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-red-700" />
                  <span className="text-gray-700">
                    Published Research
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-red-700" />
                  <span className="text-gray-700">
                    INSPA Member
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-red-700" />
                  <span className="text-gray-700">
                    Psychological Testing
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-red-700" />
                  <span className="text-gray-700">
                    Biofeedback & Neurofeedback
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CARDS ================= */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <Target className="h-10 w-10 text-red-700" />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Mission
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Helping athletes unlock peak performance through confidence,
              resilience and evidence-based mental performance coaching.
            </p>
          </div>

          <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <Eye className="h-10 w-10 text-red-700" />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Vision
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Making sports psychology accessible to athletes while promoting
              healthier, stronger and more resilient sporting communities.
            </p>
          </div>

          <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <Brain className="h-10 w-10 text-red-700" />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Approach
            </h3>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li>✓ Athlete-Centred Care</li>
              <li>✓ Evidence-Based Practice</li>
              <li>✓ Goal-Oriented Coaching</li>
              <li>✓ Performance Enhancement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}