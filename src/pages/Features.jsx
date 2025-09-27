// src/pages/Features.jsx
import React from "react";
import {
  ShieldCheckIcon,
  FireIcon,
  BoltIcon,
  BugAntIcon,
  AcademicCapIcon,
  BeakerIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";

// ✅ Import your background image
import bgImage from "../assets/images/Picture2.jpg";

const features = [
  {
    title: "24/7 Monitoring",
    description: [
      "Real-time surveillance to spot and alert on cyber threats.",
      "Continuous real-time surveillance of your IT environment.",
      "Proactive detection of suspicious activities and breaches.",
      "Alerting and rapid escalation.",
    ],
    icon: ShieldCheckIcon,
    color: "bg-blue-600",
  },
  {
    title: "Incident Response",
    description: [
      "Expert analysts rapidly containing and resolving incidents.",
      "Trained SOC analysts ready to respond any hour.",
      "Step-by-step investigation and containment.",
      "Minimize disruption with fast resolution.",
    ],
    icon: FireIcon,
    color: "bg-red-600",
  },
  {
    title: "Threat Intelligence",
    description: [
      "Timely insights to anticipate and prevent attacks.",
      "Contextualized, real-time feeds of latest threats.",
      "Ongoing analysis to predict and prevent attacks.",
      "Personalized recommendations for your org.",
    ],
    icon: BoltIcon,
    color: "bg-purple-600",
  },
  {
    title: "Vulnerability Management",
    description: [
      "Continuous scanning to find and fix security weaknesses.",
      "Regular scans to identify security gaps.",
      "Prioritized remediation to reduce risk.",
      "Continuous monitoring of new vulnerabilities.",
    ],
    icon: BugAntIcon,
    color: "bg-orange-600",
  },
  {
    title: "Security Awareness Training",
    description: [
      "Empower your staff with phishing simulations and training.",
      "Employee-focused education programs.",
      "Phishing simulations & awareness.",
      "Empower staff as first line of defense.",
    ],
    icon: AcademicCapIcon,
    color: "bg-green-600",
  },
  {
    title: "Forensics & Analysis",
    description: [
      "Detailed investigations to strengthen future defense.",
      "Deep investigations for root cause.",
      "Evidence collection for compliance.",
      "Detailed reporting for future defense.",
    ],
    icon: BeakerIcon,
    color: "bg-indigo-600",
  },
  {
    title: "Incident Remediation Support",
    description: [
      "Hands-on guidance to recover and secure your infrastructure.",
      "Hands-on assistance for containment, eradication, and recovery.",
      "Guidance through patching, data restoration, and infrastructure rebuilds.",
      "Minimize downtime and operational impact after an incident.",
    ],
    icon: WrenchIcon,
    color: "bg-cyan-600",
  },
];

export default function Features() {
  return (
    <div
      className="relative text-white py-20 px-6"
      style={{
        backgroundImage: `url(${bgImage})`, // ✅ use imported background
        backgroundSize: "cover",
        backgroundPosition: "center", // ✅ keeps it centered
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="mt-2 text-gray-300">
            Explore the full details of our cybersecurity services.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/80 rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-10 h-10 ${feature.color} flex items-center justify-center rounded-lg`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="ml-3 text-xl font-semibold">{feature.title}</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                {feature.description.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-400 mr-2">✔</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
