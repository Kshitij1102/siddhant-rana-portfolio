import {
  Award,
  BriefcaseBusiness,
  Dumbbell,
  ShieldCheck,
} from "lucide-react";

import StatCard from "@/components/ui/StatCard";

export default function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">

      <StatCard
        value="1+"
        label="Published Research"
        icon={<Award className="h-6 w-6" />}
      />

      <StatCard
        value="6+"
        label="Professional Experience"
        icon={<BriefcaseBusiness className="h-6 w-6" />}
      />

      <StatCard
        value="10+"
        label="Sports Worked With"
        icon={<Dumbbell className="h-6 w-6" />}
      />

      <StatCard
        value="100%"
        label="Evidence-Based"
        icon={<ShieldCheck className="h-6 w-6" />}
      />

    </div>
  );
}