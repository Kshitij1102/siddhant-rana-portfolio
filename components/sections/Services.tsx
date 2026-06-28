import {
  Brain,
  Trophy,
  Users,
  Target,
  Shield,
  Heart,
  ClipboardList,
  Activity,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Mental Performance",
    description:
      "Improve focus, resilience, decision-making and emotional control during competition.",
  },
  {
    icon: Shield,
    title: "Performance Anxiety",
    description:
      "Develop strategies to stay calm, confident and composed under pressure.",
  },
  {
    icon: Trophy,
    title: "Confidence Building",
    description:
      "Strengthen self-belief and create a winning mindset for consistent performance.",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description:
      "Build practical performance goals, routines and habits that support long-term athletic success.",
  },
  {
    icon: Heart,
    title: "Emotional Regulation",
    description:
      "Learn evidence-based techniques to manage stress, frustration and emotions during training and competition.",
  },
  {
    icon: Users,
    title: "Team Dynamics",
    description:
      "Improve communication, leadership, trust and collaboration within teams for better collective performance.",
  },
  {
    icon: ClipboardList,
    title: "Psychological Testing",
    description:
      "Evidence-based psychological assessments to evaluate strengths, personality traits, mindset and performance barriers.",
  },
  {
    icon: Activity,
    title: "Biofeedback & Neurofeedback",
    description:
      "Advanced brain and body feedback training to improve attention, focus, self-regulation and peak athletic performance.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-red-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-red-700">
            How I Can Help
          </p>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-red-700"></div>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Sports Psychology Services
          </h2>

          <p className="mx-auto mt-6 text-lg leading-8 text-gray-600">
            Every athlete faces unique mental challenges. My services are
            designed to strengthen confidence, resilience, focus and overall
            performance through evidence-based sports psychology.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group flex h-full flex-col rounded-3xl border border-red-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-red-300 hover:shadow-2xl"
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 transition-all duration-300 group-hover:bg-red-700">
                  <Icon className="h-8 w-8 text-red-700 transition-all duration-300 group-hover:text-white" />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {/* Accent Line */}

                <div className="mt-4 h-[3px] w-16 rounded-full bg-red-700 transition-all duration-300 group-hover:w-24"></div>

                {/* Description */}

                <p className="mt-6 flex-1 leading-8 text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}