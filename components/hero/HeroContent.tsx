import Badge from "@/components/ui/Badge";
import PrimaryButton from "@/components/ui/PrimaryButton";
import HeroStats from "./HeroStats";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-xl">

      {/* Badge */}

      <Badge>
        Evidence-Based Sports Psychology
      </Badge>

      {/* Heading */}

      <h1 className="mt-5 text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-[56px]">
        Helping Athletes
        <br />
        Master Their Mind &
        <br />
        <span className="text-red-700">
          Maximize Performance
        </span>
      </h1>

      {/* Name */}

      <div className="mt-5">

        <h2 className="text-2xl font-bold text-gray-900">
          Siddhant Rana
        </h2>

        <p className="mt-1 text-base font-semibold text-red-700">
          Sports Psychologist
        </p>

      </div>

      {/* Description */}

      <p className="mt-5 text-base leading-7 text-gray-600">
        Empowering athletes through evidence-based sports psychology,
        confidence coaching, resilience building, emotional regulation,
        psychological testing and performance enhancement to help them
        consistently perform at their highest level.
      </p>

      {/* Trust Badges */}

      <div className="mt-6 flex flex-wrap gap-2">

        <span className="rounded-full bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          ✓ Published Research
        </span>

        <span className="rounded-full bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          ✓ INSPA Member
        </span>

        <span className="rounded-full bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
          ✓ Evidence-Based Practice
        </span>

      </div>

      {/* Buttons */}

      <div className="mt-6 flex flex-wrap gap-4">

        <PrimaryButton href="/#contact">
          Book Consultation
        </PrimaryButton>

        <Link
          href="/research"
          className="group flex items-center gap-2 rounded-full border-2 border-red-700 px-6 py-3 font-semibold text-red-700 transition-all duration-300 hover:bg-red-700 hover:text-white"
        >
          Explore Research

          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

      </div>

      {/* Statistics */}

      <HeroStats />

    </div>
  );
}