import React from "react";
import pricingBg from "../assets/images/Picture1.png"; // keep your background

function Pricing() {
  return (
    <div
      className="relative py-24 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${pricingBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-12">Our Packages</h2>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Package */}
          <div className="bg-[#0f172a] rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Basic Package</h3>
            <ul className="space-y-3 text-gray-200 mb-6">
              <li>✔ 24/7 Monitoring</li>
              <li>✔ Threat Intelligence</li>
              <li>✔ Incident Response (Standard SLA: 1-hour)</li>
              <li>✔ Vulnerability Management (Quarterly scans & reports)</li>
            </ul>
            <p className="font-bold text-lg text-blue-400 mb-6">
              $1,000–$2,500/month
            </p>
            <button className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition font-semibold">
              Get Started
            </button>
          </div>

          {/* Advanced Package */}
          <div className="bg-[#0f172a] rounded-xl shadow-lg p-8 relative border-2 border-blue-500">
            {/* Most Popular badge */}
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
              Most Popular
            </span>
            <h3 className="text-xl font-semibold mb-4">Advanced Package</h3>
            <ul className="space-y-3 text-gray-200 mb-6">
              <li>✔ Everything in Basic, plus:</li>
              <li>
                ✔ Vulnerability Management (Continuous scanning +
                prioritized remediation)
              </li>
              <li>✔ Incident Remediation Support (Standard)</li>
            </ul>
            <p className="font-bold text-lg text-blue-400 mb-6">
              $3,000–$6,000/month
            </p>
            <button className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition font-semibold">
              Get Started
            </button>
          </div>

          {/* Premium Package */}
          <div className="bg-[#0f172a] rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Premium Package</h3>
            <ul className="space-y-3 text-gray-200 mb-6">
              <li>✔ Everything in Advanced, plus:</li>
              <li>✔ Priority Incident Remediation (24/7, 15-min SLA)</li>
              <li>✔ Customized reporting & compliance support</li>
            </ul>
            <p className="font-bold text-lg text-blue-400 mb-6">
              $7,000–$15,000/month
            </p>
            <button className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition font-semibold">
              Get Started
            </button>
          </div>
        </div>

        {/* Add-on Services */}
        <h3 className="text-2xl font-bold text-center mt-20 mb-8">
          Standalone & Add-On Services
        </h3>

        <div className="space-y-6">
          {/* Service 1 */}
          <div className="bg-[#1e293b] rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-2">
              Security Awareness Training
            </h4>
            <p className="text-gray-200 mb-3">
              Includes phishing simulations and practical exercises, designed to
              raise employee vigilance and reduce breach risk.
            </p>
            <p className="font-bold text-gray-100">
              Per user: $20–$50/month OR Per training session: $1,000–$5,000
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#1e293b] rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-2">
              Forensics & Post-Incident Analysis
            </h4>
            <p className="text-gray-200 mb-3">
              In-depth investigations after suspected or confirmed incidents.
              Includes evidence gathering, analysis, and detailed reporting to
              support remediation, audits, or legal action.
            </p>
            <p className="font-bold text-gray-100">
              Per incident/project: $5,000–$20,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
