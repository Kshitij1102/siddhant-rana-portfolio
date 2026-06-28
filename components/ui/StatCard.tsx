import { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
}

export default function StatCard({
  value,
  label,
  icon,
}: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-red-100 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-red-300 hover:shadow-xl">

      {/* Background Glow */}

      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-red-100 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100" />

      {/* Icon */}

      {icon && (
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-700 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white">
          {icon}
        </div>
      )}

      {/* Value */}

      <h3 className="text-3xl font-black text-red-700">
        {value}
      </h3>

      {/* Accent Line */}

      <div className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-red-700 transition-all duration-300 group-hover:w-16" />

      {/* Label */}

      <p className="mt-3 text-xs font-medium leading-5 text-gray-600">
        {label}
      </p>

    </div>
  );
}