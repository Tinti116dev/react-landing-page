// src/pages/Demo.jsx
import React from "react";
import demoBg from "../assets/images/Picture3.jpg"; // ✅ adjust filename to match your assets folder

export default function Demo() {
  return (
    <div
      className="relative py-20 px-6"
      style={{
        backgroundImage: `url(${demoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto bg-[#0f172a]/95 p-10 rounded-2xl shadow-lg text-white">
        <h2 className="text-2xl font-bold text-center mb-8">Request a Demo</h2>

        <form className="space-y-6">
          {/* Full Name + Job Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm">Full Name *</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Job Title / Role *</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>

          {/* Company Name + Size */}
          <div>
            <label className="block mb-2 text-sm">Company Name *</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Company Size</label>
            <select className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>Select...</option>
              <option>1-50</option>
              <option>51-200</option>
              <option>201-1000</option>
              <option>1000+</option>
            </select>
          </div>

          {/* Industry */}
          <div>
            <label className="block mb-2 text-sm">Industry / Sector *</label>
            <select
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option>Select...</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Government</option>
              <option>Other</option>
            </select>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm">Email Address *</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Areas of Interest */}
          <div>
            <label className="block mb-3 text-sm">Areas of Interest</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                "24/7 Threat Monitoring",
                "Incident Response",
                "Threat Intelligence",
                "Vulnerability Management",
                "Security Awareness Training",
                "Forensics & Post-Incident Analysis",
                "Incident Remediation Support",
                "General Overview / Other",
              ].map((area, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="text-blue-600 focus:ring-blue-600"
                  />
                  {area}
                </label>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <label className="block mb-2 text-sm">
              Current Cybersecurity Challenges or Goals
            </label>
            <textarea
              rows="3"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          {/* Additional Comments */}
          <div>
            <label className="block mb-2 text-sm">
              Additional Comments or Questions
            </label>
            <textarea
              rows="3"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              required
              className="mt-1 text-blue-600 focus:ring-blue-600"
            />
            <p>
              I agree to the{" "}
              <a href="/privacy" className="text-blue-400 underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-blue-400 underline">
                Terms
              </a>
              .
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
          >
            🚀 Request Demo
          </button>
        </form>
      </div>
    </div>
  );
}
