import React from "react";
import { Users, Building2, BriefcaseBusiness, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "12,450",
    icon: Users,
  },
  {
    title: "Total Startups",
    value: "1,284",
    icon: Building2,
  },
  {
    title: "Total Opportunities",
    value: "8,932",
    icon: BriefcaseBusiness,
  },
  {
    title: "Total Revenue",
    value: "$58,240",
    icon: DollarSign,
  },
];

const AdminDashboardHomePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Overview</h2>
        <p className="text-default-500 mt-1">
          Platform statistics at a glance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-default-200 bg-content1 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-default-500">{stat.title}</p>
                  <h3 className="mt-2 text-3xl font-bold">{stat.value}</h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-default-100">
                  <Icon size={30} className="text-primary" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboardHomePage;