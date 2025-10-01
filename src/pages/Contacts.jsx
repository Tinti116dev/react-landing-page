// src/pages/Contacts.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";

function Contacts() {
  return (
    <div className="bg-black text-gray-300 min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Header */}
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Contact Us
      </h1>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {/* Phone */}
        <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <FaPhoneAlt size={28} className="text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Phone</h2>
          <p className="text-gray-400">+263 783 269 827</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <FaEnvelope size={28} className="text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Email</h2>
          <p className="text-gray-400">support@unhack.com</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-white mb-4">
            Connect With Us
          </h2>
          <div className="flex space-x-6 text-white">
            <a
              href="https://www.facebook.com/profile.php?id=61580287678230"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://x.com/UnHack_Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://wa.me/263783269827"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer-style message */}
      <p className="text-sm text-gray-500 mt-12 text-center">
        We’ll get back to you within 24 hours.
      </p>
    </div>
  );
}

export default Contacts;
