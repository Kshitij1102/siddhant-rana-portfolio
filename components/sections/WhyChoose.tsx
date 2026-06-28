import {
  Brain,
  Trophy,
  Target,
  HeartHandshake,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Published Research",
    description:
      "Evidence-backed research on fear of failure, resilience and performance in competitive cricketers.",
  },
  {
    icon: Brain,
    title: "Evidence-Based Practice",
    description:
      "Every intervention is based on modern sports psychology research and proven mental performance methods.",
  },
  {
    icon: Target,
    title: "Athlete-Centered Coaching",
    description:
      "Every athlete receives personalized mental performance strategies based on their goals and challenges.",
  },
  {
    icon: BarChart3,
    title: "Performance Enhancement",
    description:
      "Helping athletes improve confidence, focus, resilience, motivation and emotional control.",
  },
  {
    icon: ShieldCheck,
    title: "Pressure Management",
    description:
      "Learn to stay calm, composed and perform consistently during high-pressure competitions.",
  },
  {
    icon: HeartHandshake,
    title: "Holistic Support",
    description:
      "Supporting both athletic performance and long-term mental wellbeing throughout an athlete's journey.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-red-700">
            Why Choose Mind Balance
          </p>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-red-700" />

          <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
            Helping Athletes Perform
            <span className="text-red-700">
              {" "}When It Matters Most
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Combining scientific research, practical experience and
            athlete-centered coaching to unlock peak mental performance,
            confidence and long-term sporting success.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-red-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-red-300 hover:shadow-2xl"
              >

                {/* Number */}

                <div className="text-right text-xs font-bold tracking-[0.3em] text-gray-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}

                <div className="mt-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 transition-all duration-300 group-hover:bg-red-700">

                  <Icon className="h-7 w-7 text-red-700 transition-all duration-300 group-hover:text-white" />

                </div>

                {/* Title */}

                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

                {/* Bottom Line */}

                <div className="mt-6 h-[3px] w-14 rounded-full bg-red-700 transition-all duration-300 group-hover:w-24" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}