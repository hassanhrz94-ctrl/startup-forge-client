import React from "react";
import {
  Rocket,
  Users,
  UserPlus,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Startups",
    value: "128",
    icon: Rocket,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Team Members",
    value: "1,542",
    icon: Users,
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Applications",
    value: "386",
    icon: UserPlus,
    color: "from-emerald-500 to-teal-500",
  },
];

const StatsCard = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-default-200 bg-content1 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
          >
            {/* Top Gradient Line */}
            <div
              className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${item.color}`}
            />

            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-default-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight">
                  {item.value}
                </h2>

                <div className="mt-6 flex items-center gap-2 text-sm text-success">
                  <ArrowUpRight size={16} />
                  <span>+12% this month</span>
                </div>
              </div>

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
              >
                <Icon size={30} />
              </div>
            </div>

            {/* Background Blur Effect */}
            <div
              className={`absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl transition-all duration-500 group-hover:scale-150`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StatsCard;