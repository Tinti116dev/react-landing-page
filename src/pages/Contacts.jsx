// src/pages/Contacts.jsx
import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="bg-black text-white min-h-screen pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          We’re here to help you with your cybersecurity needs. Reach out
          anytime, and one of our expert team members will get back to you
          promptly.
        </p>

        {/* Contact Info */}
        <div className="bg-gray-900 rounded-xl p-8 mb-12 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <FaWhatsapp className="text-green-400 mr-3" size={20} />
              <span>+263783269827</span>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              support@unhack.africa
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 rounded-xl p-8 mb-12 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-300 mb-2">Full Name *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">Email Address *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-gray-300 mb-2">Company Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Subject / Inquiry Type */}
            <div>
              <label className="block text-gray-300 mb-2">Subject *</label>
              <select
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option>General Inquiry</option>
                <option>Sales & Demo Request</option>
                <option>Support</option>
                <option>Partnerships</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-2">Message *</label>
              <textarea
                required
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Extra Links */}
        <div className="bg-gray-900 rounded-xl p-8 shadow-lg space-y-6 text-center">
          {/* Schedule Demo */}
          <Link
            to="/demo"
            className="block text-blue-400 hover:text-blue-500 font-semibold text-lg"
          >
            📅 Schedule a Demo
          </Link>

          {/* Newsletter Signup */}
          <div>
            <p className="mb-3">Sign up for our newsletter to stay updated.</p>
            <form className="flex flex-col sm:flex-row justify-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-4 text-white">
            <a
              href="https://www.facebook.com/profile.php?id=61580287678230"
              className="hover:text-blue-400"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://x.com/UnHack_Africa"
              className="hover:text-white"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://wa.me/263783269827"
              className="hover:text-green-400"
            >
              <FaWhatsapp size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
