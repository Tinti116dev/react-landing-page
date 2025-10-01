// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
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
          <Link to="/contacts" className="hover:text-blue-400">
            Contacts
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with slide animation */}
      <div
        className={`md:hidden bg-black bg-opacity-95 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-3">
          <Link
            to="/pricing"
            className="block py-2 border-b border-gray-700"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            to="/features"
            className="block py-2 border-b border-gray-700"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            to="/demo"
            className="block py-2 border-b border-gray-700"
            onClick={toggleMenu}
          >
            Demo
          </Link>
          <Link
            to="/faqs"
            className="block py-2 border-b border-gray-700"
            onClick={toggleMenu}
          >
            FAQs
          </Link>
          <Link
            to="/contacts"
            className="block py-2 border-b border-gray-700"
            onClick={toggleMenu}
          >
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
