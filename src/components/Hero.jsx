import { Link } from "react-router-dom";
import dashboardImg from "../assets/images/dashboard.jpg"; // adjust path if needed

function Hero() {
  return (
<section id="hero" className="pt-28 pb-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-3xl font-extrabold mb-6 leading-tight">
            Complete Cyber Protection, 24/7. <br />
            Defend. Detect. Respond.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Stay ahead of cyber threats with our expert SOCaaS:
            <br />
            24/7 Monitoring · Rapid Response · Threat Intelligence ·
            Vulnerability Management · Security Awareness · Forensics ·
            Incident Remediation
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/demo"
              className="px-5 py-3 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition"
            >
              Request a Demo
            </Link>
            <Link
              to="/features"
              className="px-5 py-3 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition"
            >
              Explore Features
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={dashboardImg}
            alt="Dashboard Preview"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
