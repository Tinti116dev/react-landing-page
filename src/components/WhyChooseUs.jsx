import React from "react";
import {
  UserGroupIcon,
  ClockIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

function WhyChooseUs() {
  const features = [
    {
      icon: UserGroupIcon,
      title: "Expert Team",
      description:
        "Certified professionals (CISSP, CEH, GCIH) with years of hands-on cybersecurity experience.",
      color: "bg-blue-500",
    },
    {
      icon: ClockIcon,
      title: "Fast Response",
      description:
        "15-min SLA for critical alerts — with an average response under 8 minutes.",
      color: "bg-red-500",
    },
    {
      icon: ChartBarIcon,
      title: "Clear Reporting",
      description:
        "Live dashboards and executive summaries give you instant visibility into your security posture.",
      color: "bg-green-500",
    },
    {
      icon: ShieldCheckIcon,
      title: "Compliance Ready",
      description:
        "Stay aligned with GDPR, HIPAA, PCI-DSS, POPIA, and more.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="pt-28 pb-16 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-400 mb-16">
          Proven expertise, rapid response, and compliance support tailored to
          your business.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 text-left flex items-start space-x-4"
            >
              {/* Icon */}
              <div
                className={`${feature.color} p-3 rounded-lg flex items-center justify-center`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
