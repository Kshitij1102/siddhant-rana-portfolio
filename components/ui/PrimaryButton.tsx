import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryButton({
  href,
  children,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-red-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-red-800 hover:shadow-red-200"
    >
      {/* Glow */}

      <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}

      <span className="relative flex items-center gap-2">
        {children}

        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}