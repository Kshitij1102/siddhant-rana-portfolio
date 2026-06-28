import { research } from "@/data/research";

export default function Research() {
  return (
    <section
      id="research"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-5xl font-black text-center text-gray-900">
          Evidence & Research
        </h2>

        <p className="mt-6 text-center text-xl text-gray-600">
          {research.title}
        </p>

      </div>
    </section>
  );
}