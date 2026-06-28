interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <p className="font-semibold uppercase tracking-[0.35em] text-red-700">
        {badge}
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight text-gray-900">

        {title}

        {highlight && (
          <span className="text-red-700">
            {" "}
            {highlight}
          </span>
        )}

      </h2>

      <p className="mt-6 text-lg leading-9 text-gray-600">
        {description}
      </p>

    </div>
  );
}