// src/components/CookieButton.jsx
import React from "react";
import { FaCookieBite } from "react-icons/fa";

function CookieButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed left-4 bottom-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 transition"
      aria-label="Cookie Preferences"
    >
      <FaCookieBite size={22} />
    </button>
  );
}

export default CookieButton;
