// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer({ onOpenCookieModal }) {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo + Tagline */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="UnHack Logo" className="h-10 mr-2" />
            </div>
            <p className="text-white font-medium">
              Ready for always-on cyber defense?
              <br />
              Get your tailored demo or security assessment today.
            </p>
          </div>

          {/* Center: Social Media */}
          <div className="flex justify-center space-x-6 text-white">
            <a href="https://www.facebook.com/profile.php?id=61580287678230" className="hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://x.com/UnHack_Africa" className="hover:text-white">
              <FaXTwitter size={20} />
            </a>
            <a href="+263783269827" className="hover:text-green-400">
              <FaWhatsapp size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Right: Buttons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="#start"
              className="px-5 py-2 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition"
            >
              Start Free Trial
            </a>
            <a
              href="#signup"
              className="px-5 py-2 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="/privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </a>
            {/* Call the function passed down */}
<a
  href="/cookie-preference"
  onClick={(e) => {
    e.preventDefault();
    if (typeof onOpenCookieModal === "function") onOpenCookieModal();
  }}
  className="hover:text-blue-400"
>
  Cookie Preferences
</a>

          </div>
          <p>© {new Date().getFullYear()} UnHack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
