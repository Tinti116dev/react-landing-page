// src/components/CookieModal.jsx
import React, { useState } from "react";

function CookieModal({ isOpen, onClose }) {
  const [performance, setPerformance] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (!isOpen) return null;

  const handleRejectAll = () => {
    setPerformance(false);
    setFunctional(false);
    setMarketing(false);
    onClose();
  };

  const handleAcceptAll = () => {
    setPerformance(true);
    setFunctional(true);
    setMarketing(true);
    onClose();
  };

  const handleSavePreferences = () => {
    // here you could store in localStorage or send to backend
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-gray-900 text-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-4">Cookie Preferences</h2>
        <p className="text-gray-300 mb-6">Manage Your Cookie Settings</p>
        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
          We use cookies and similar tracking technologies to enhance your
          experience on our website, improve functionality, analyze traffic,
          and provide relevant content. You can customize which types of
          cookies you allow below.
        </p>

        {/* Cookie Categories */}
        <div className="space-y-5">
          {/* Essential Cookies */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Essential Cookies</h3>
              <p className="text-gray-400 text-sm">
                Necessary for the website to function properly. These cookies
                cannot be disabled.
              </p>
            </div>
            <div className="relative">
              <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center px-1 cursor-not-allowed opacity-80">
                <div className="w-4 h-4 bg-white rounded-full translate-x-6" />
              </div>
            </div>
          </div>

          {/* Performance Cookies */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Performance Cookies</h3>
              <p className="text-gray-400 text-sm">
                Help us understand how you interact with our site.
              </p>
            </div>
            <button
              onClick={() => setPerformance(!performance)}
              className={`w-12 h-6 rounded-full flex items-center px-1 transition ${
                performance ? "bg-blue-600" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition ${
                  performance ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Functional Cookies */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Functional Cookies</h3>
              <p className="text-gray-400 text-sm">
                Remember your preferences for a personalized experience.
              </p>
            </div>
            <button
              onClick={() => setFunctional(!functional)}
              className={`w-12 h-6 rounded-full flex items-center px-1 transition ${
                functional ? "bg-blue-600" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition ${
                  functional ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Marketing Cookies */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Marketing Cookies</h3>
              <p className="text-gray-400 text-sm">
                Track browsing habits for relevant advertising.
              </p>
            </div>
            <button
              onClick={() => setMarketing(!marketing)}
              className={`w-12 h-6 rounded-full flex items-center px-1 transition ${
                marketing ? "bg-blue-600" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition ${
                  marketing ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* How to update preferences */}
        <div className="mt-8 text-gray-400 text-sm leading-relaxed">
          <p>• Use the toggles above to enable or disable specific cookie categories.</p>
          <p>• Your selections will be saved and applied immediately.</p>
          <p>• You can change your preferences anytime via the footer link.</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium"
          >
            Accept All
          </button>
          <button
            onClick={handleSavePreferences}
            className="px-4 py-2 bg-grey-600 hover:bg-blue-700 rounded-lg text-sm font-medium"
          >
            Save Preferences
          </button>
          <button
            onClick={handleRejectAll}
            className="px-4 py-2 bg-red-700 hover:bg-red-600 rounded-lg text-sm font-medium"
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieModal;
