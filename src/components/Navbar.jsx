import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        {/* Nav Links */}
        <div className="space-x-6">
          <Link to="/pricing" className="hover:text-blue-400">
            Pricing
          </Link>
          <Link to="/features" className="hover:text-blue-400">
            Features
          </Link>
          <Link to="/demo" className="hover:text-blue-400">
            Demo
          </Link>
          <Link to="/faqs" className="hover:text-blue-400">
            FAQs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
