// src/pages/Demo.jsx
import { useState } from "react";

export default function Demo() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    companyName: "",
    companySize: "",
    industry: "",
    email: "",
    phone: "",
    areasOfInterest: [],
    challenges: "",
    comments: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "areasOfInterest") {
      setFormData((prev) => {
        if (checked) {
          return { ...prev, areasOfInterest: [...prev.areasOfInterest, value] };
        } else {
          return {
            ...prev,
            areasOfInterest: prev.areasOfInterest.filter((v) => v !== value),
          };
        }
      });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demo Request Submitted:", formData);
    alert("Thank you! Your demo request has been submitted.");
  };

  return (
    <div
      className="min-h-screen py-16 px-6 lg:px-20 bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/demo-bg.jpg')" }} // change path to your actual image
    >
      <div className="max-w-4xl mx-auto bg-gray-900 bg-opacity-90 shadow-lg rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Request a Demo</h1>
        <p className="text-gray-300 text-center mb-8">
          Fill out the form below to schedule your personalized demo with our
          cybersecurity experts.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block font-medium">Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 text-black"
            />
          </div>

          {/* Job Title */}
          <div>
            <label className="block font-medium">Job Title / Role *</label>
            <input
              type="text"
              name="jobTitle"
              required
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 text-black"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block font-medium">Company Name *</label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 text-black"
            />
          </div>

          {/* Company Size */}
          <div>
            <label className="block font-medium">Company Size</label>
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 text-black"
            >
              <option value="">Select company size</option>
              <option value="micro">Micro – 1-9 employees</option>
              <option value="small">Small – 10-49 employees</option>
              <option value="medium">Medium – 50-249 employees</option>
              <option value="large">Large – 250+ employees</option>
            </select>
          </div>

          {/* Industry */}
          <div>
            <label className="block font-medium">Industry / Sector</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 text-black"
            >
              <option value="">Select an industry</option>
              <option value="Financial Services">Financial Services</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Retail">Retail</option>
              <option value="Legal">Legal</option>
              <option value="Government">Government</option>
              <option value="Technology">Technology</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 text-black"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 text-black"
            />
          </div>

          {/* Areas of Interest */}
          <div>
            <label className="block font-medium">Areas of Interest</label>
            <div className="grid grid-cols-2 gap-2 mt-2 text-gray-200">
              {[
                "24/7 Threat Monitoring",
                "Incident Response",
                "Threat Intelligence",
                "Vulnerability Management",
                "Security Awareness Training",
                "Forensics and Post-Incident Analysis",
                "Incident Remediation Support",
                "General Overview / Other",
              ].map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="areasOfInterest"
                    value={item}
                    checked={formData.areasOfInterest.includes(item)}
                    onChange={handleChange}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <label className="block font-medium">
              Current Cybersecurity Challenges or Goals
            </label>
            <textarea
              name="challenges"
              value={formData.challenges}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 text-black"
              rows={3}
            />
          </div>

          {/* Additional Comments */}
          <div>
            <label className="block font-medium">
              Additional Comments or Questions
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1 text-black"
              rows={3}
            />
          </div>

          {/* Consent */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mr-2"
            />
            <span className="text-sm">
              I agree to the{" "}
              <a
                href="/privacy-policy"
                className="text-blue-400 underline"
                target="_blank"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/terms-and-conditions"
                className="text-blue-400 underline"
                target="_blank"
              >
                Terms & Conditions
              </a>
              .
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          >
            Submit Demo Request
          </button>
        </form>
      </div>
    </div>
  );
}
