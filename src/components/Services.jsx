import React from "react";
import {
  EyeIcon,
  ShieldExclamationIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // ✅ Import Link

function Services() {
  const services = [
    {
      title: "24/7 Monitoring",
      description: "Real-time surveillance to spot and alert on cyber threats.",
      icon: <EyeIcon className="h-8 w-8 text-blue-400" />,
    },
    {
      title: "Incident Response",
      description:
        "Expert analysts rapidly containing and resolving incidents.",
      icon: <ShieldExclamationIcon className="h-8 w-8 text-red-500" />,
    },
    {
      title: "Threat Intelligence",
      description: "Timely insights to anticipate and prevent attacks.",
      icon: <LightBulbIcon className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Vulnerability Management",
      description: "Continuous scanning to find and fix security weaknesses.",
      icon: <WrenchScrewdriverIcon className="h-8 w-8 text-orange-400" />,
    },
    {
      title: "Security Awareness Training",
      description: "Empower your staff with phishing simulations and training.",
      icon: <AcademicCapIcon className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Forensics & Analysis",
      description: "Detailed investigations to strengthen future defenses.",
      icon: <MagnifyingGlassIcon className="h-8 w-8 text-purple-400" />,
    },
    {
      title: "Incident Remediation Support",
      description: "Hands-on guidance to recover and secure your infrastructure.",
      icon: <WrenchIcon className="h-8 w-8 text-cyan-400" />,
      fullWidth: true,
    },
  ];

  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Protect your organization with our full-spectrum cybersecurity
            solutions, delivered by expert analysts around the clock.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-blue-500/20 transition ${
                service.fullWidth ? "md:col-span-3" : ""
              }`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              {/* ✅ Use Link instead of <a> */}
              <Link
                to="/features"
                className="text-blue-400 font-medium hover:underline"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
