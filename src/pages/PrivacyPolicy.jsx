// src/pages/PrivacyPolicy.jsx
import React from "react";
import backgroundImg from "../assets/images/img00001.jpg"; // adjust path if needed

export default function PrivacyPolicy() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Privacy & Policy
        </h1>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p className="text-gray-300">
            We are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your personal
            information when you visit our website or use our services, in
            compliance with applicable data protection laws such as GDPR, POPIA,
            and others.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Contact information: Name, email address, phone number</li>
            <li>Account details: Username, password, service preferences</li>
            <li>Usage data: IP address, browser type, pages visited, time spent, cookies</li>
            <li>Communication data: Emails, support requests, feedback</li>
            <li>
              Payment information: Billing details processed securely by third-party providers
            </li>
          </ul>
        </section>

        {/* How We Use */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Provide, operate, and improve our SOCaaS platform and services</li>
            <li>Communicate with you about your account, updates, and support</li>
            <li>Deliver personalized content and marketing communications (with consent)</li>
            <li>Monitor and enhance security of our systems and your data</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </section>

        {/* Sharing */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Information Sharing and Disclosure</h2>
          <p className="text-gray-300 mb-3">
            We do not sell your personal data. We may share your information with:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              Trusted service providers assisting with delivery of our services
              (e.g., hosting, payment processing)
            </li>
            <li>Legal authorities, if required by law or to protect our rights</li>
            <li>Business partners with your consent or as outlined in this policy</li>
          </ul>
        </section>

        {/* Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
          <p className="text-gray-300">
            We implement industry-standard security measures such as encryption,
            access controls, and regular audits to protect your data from
            unauthorized access, loss, or alteration.
          </p>
        </section>

        {/* Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
          <p className="text-gray-300 mb-3">
            Depending on your jurisdiction, you may have rights regarding your
            personal data, including:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Accessing your data</li>
            <li>Correcting inaccuracies</li>
            <li>Requesting data deletion or restriction</li>
            <li>Objecting to processing</li>
            <li>Data portability</li>
            <li>Withdrawing consent at any time</li>
          </ul>
          <p className="text-gray-300 mt-2">
            To exercise your rights, contact us at{" "}
            <span className="font-semibold">info@unhack.africa</span>.
          </p>
        </section>

        {/* Retention */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
          <p className="text-gray-300">
            We retain your personal data only as long as necessary for the
            purposes outlined in this policy or as required by law.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Cookies and Tracking</h2>
          <p className="text-gray-300">
            We use cookies as described in our Cookie Policy to enhance your
            experience. You can manage your cookie preferences on our site.
          </p>
        </section>

        {/* Transfers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">International Transfers</h2>
          <p className="text-gray-300">
            Your data may be transferred and processed outside your country of
            residence. Where applicable, we ensure such transfers comply with
            legal safeguards.
          </p>
        </section>

        {/* Children */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Children’s Privacy</h2>
          <p className="text-gray-300">
            Our services are not directed at children under 13 (or minimum age
            per respective laws). We do not knowingly collect personal data from
            children without parental consent.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Changes to this Privacy Policy</h2>
          <p className="text-gray-300">
            We may update this policy periodically. We will notify you of
            significant changes by posting the new policy on our website with an
            updated effective date.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-300">
            For any questions or concerns about this Privacy Policy or our data
            practices, please contact:
          </p>
          <p className="text-gray-300 mt-2">📧 Email: info@unhack.africa</p>
        </section>

        {/* Last updated */}
        <p className="text-gray-400 text-sm text-center mt-12">
          Last updated: September 2025
        </p>
      </div>
    </div>
  );
}
