import React, { useState } from "react";

const CookieModal = ({ showModal, setShowModal }) => {
  const [performance, setPerformance] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const handleAcceptAll = () => {
    setPerformance(true);
    setFunctional(true);
    setMarketing(true);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    setPerformance(false);
    setFunctional(false);
    setMarketing(false);
    setShowModal(false);
  };

  const handleSave = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6">
        {/* ❌ Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Cookie Preferences
        </h2>
        <p className="text-gray-600 mb-6">
          We use cookies and similar tracking technologies to enhance your
          experience on our website, improve functionality, analyze traffic, and
          provide relevant content. You can customize which types of cookies you
          allow below.
        </p>

        {/* Essential Cookies (always ON, greyed out) */}
        <div className="flex justify-between items-center py-3 border-b">
  <div>
    <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
    <p className="text-sm text-gray-600">
      Necessary for the website to function properly. These cookies
      cannot be disabled.
    </p>
  </div>
  <label className="relative inline-flex items-center cursor-not-allowed opacity-80">
    <input type="checkbox" checked readOnly disabled className="sr-only" />
    <div className="w-11 h-6 bg-blue-500 rounded-full after:content-[''] after:absolute after:top-0.5 after:left-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5"></div>
  </label>
</div>


        {/* Performance Cookies */}
        <div className="flex justify-between items-center py-3 border-b">
          <div>
            <h3 className="font-semibold text-gray-900">Performance Cookies</h3>
            <p className="text-sm text-gray-600">
              Help us understand how you interact with our website, so we can
              improve your experience.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={performance}
              onChange={() => setPerformance(!performance)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
        </div>

        {/* Functional Cookies */}
        <div className="flex justify-between items-center py-3 border-b">
          <div>
            <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
            <p className="text-sm text-gray-600">
              Remember your preferences and settings for a personalized
              experience.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={functional}
              onChange={() => setFunctional(!functional)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
        </div>

        {/* Marketing Cookies */}
        <div className="flex justify-between items-center py-3">
          <div>
            <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
            <p className="text-sm text-gray-600">
              Track your browsing habits for relevant advertising and marketing
              campaigns.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={marketing}
              onChange={() => setMarketing(!marketing)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={handleAcceptAll}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Accept All
          </button>
          <button
            onClick={handleSave}
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg"
          >
            Save Preferences
          </button>
          <button
            onClick={handleRejectAll}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
