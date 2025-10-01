import React from "react";
import {
  BuildingOfficeIcon,
  BoltIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

function TrustProof() {
  const items = [
    {
      icon: BuildingOfficeIcon,
      title: "Industry Leaders Trust Us",
      description:
        "Trusted by financial, legal, and retail leaders across the globe for their most critical security needs.",
      color: "bg-blue-500",
      textColor: "text-blue-400",
    },
    {
      icon: BoltIcon,
      title: "Lightning Fast Response",
      highlight: "<30",
      subtext: "Minutes",
      description: "Average client breaches mitigated in under 30 minutes.",
      color: "bg-red-500",
      textColor: "text-red-500",
    },
    {
      icon: CheckCircleIcon,
      title: "Unmatched Reliability",
      highlight: "99.9%",
      subtext: "Uptime",
      description: "99.9% uptime across all managed environments.",
      color: "bg-green-500",
      textColor: "text-green-500",
    },
  ];

  return (
    <section className="pt-28 pb-16 text-white">
      {/* Foreground Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4">Trust & Proof</h2>
        <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
          Don’t just take our word for it. Our track record speaks for itself
          with industry-leading performance and the trust of major organizations
          worldwide.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div
                className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}
              >
                <item.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* Highlighted Metric (optional) */}
              {item.highlight && (
                <p
                  className={`text-2xl font-bold ${item.textColor} mb-1`}
                  dangerouslySetInnerHTML={{ __html: item.highlight }}
                />
              )}
              {item.subtext && (
                <p className={`font-semibold ${item.textColor} mb-2`}>
                  {item.subtext}
                </p>
              )}

              {/* Description */}
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustProof;
