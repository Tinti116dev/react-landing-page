import React from "react";
import { Link } from "react-router-dom";

function Advantage() {
  return (
    <section className="pt-28 pb-16 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-center">Our Advantage</h2>

        {/* Paragraph */}
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          At UnHack, we combine cutting-edge technology with expert human analysis
          to deliver unparalleled cybersecurity protection. Our SOCaaS offering
          is built on a foundation of real-time threat intelligence, rapid
          incident response, and comprehensive vulnerability management, all backed
          by certified professionals. With a 15-minute SLA for critical alerts
          and transparent live reporting, we ensure your organization stays one
          step ahead of cyber threats while minimizing operational disruption.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/demo"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Request A Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
