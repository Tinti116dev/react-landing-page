// src/pages/TermsAndConditions.jsx
import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="bg-black text-gray-300 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Terms and Conditions
        </h1>

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            <strong>1. Introduction</strong>
            <br />
            Welcome to UnHack. These Terms and Conditions govern your use of our
            Security Operations Center as a Service ("SOCaaS") platform and
            services. By using our service, you agree to comply with these
            terms.
          </p>

          <p>
            <strong>2. Acceptance of Terms</strong>
            <br />
            By accessing or using UnHack services, you agree to be bound by
            these Terms and any additional terms referenced herein. If you do
            not agree, please do not use our services.
          </p>

          <p>
            <strong>3. Services Provided</strong>
            <br />
            UnHack offers managed security monitoring, threat detection,
            incident response, and related cybersecurity services aimed to
            protect your IT infrastructure.
          </p>

          <p>
            <strong>4. User Responsibilities</strong>
            <br />
            You agree to provide accurate information during onboarding, maintain
            the confidentiality of account credentials, and use our services in
            compliance with applicable laws and regulations.
          </p>

          <p>
            <strong>5. License and Intellectual Property</strong>
            <br />
            All content, software, and intellectual property provided by UnHack
            remains our property. You are granted a limited, non-exclusive
            license to use the services as described.
          </p>

          <p>
            <strong>6. Payment and Fees</strong>
            <br />
            Use of UnHack services is subject to agreed pricing and payment
            terms outlined in your service agreement. Late payments may result
            in service suspension.
          </p>

          <p>
            <strong>7. Confidentiality</strong>
            <br />
            Both parties agree to keep confidential any sensitive or proprietary
            information exchanged during the course of service delivery.
          </p>

          <p>
            <strong>8. Limitation of Liability</strong>
            <br />
            UnHack will use reasonable efforts to protect your systems but is
            not liable for indirect, incidental, or consequential damages
            arising from the use of our services.
          </p>

          <p>
            <strong>9. Termination</strong>
            <br />
            Either party may terminate the service agreement subject to notice
            terms specified. Upon termination, your access to our services will
            cease.
          </p>

          <p>
            <strong>10. Governing Law</strong>
            <br />
            These Terms are governed by the laws of the jurisdiction where
            UnHack is registered and operates.
          </p>

          <p>
            <strong>11. Changes to Terms</strong>
            <br />
            UnHack may update these Terms periodically. Continued use of
            services signifies acceptance of the revised Terms.
          </p>

          <p>
            <strong>12. Contact Information</strong>
            <br />
            For questions or concerns regarding these Terms, contact us at{" "}
            <a
              href="mailto:info@unhack.africa"
              className="text-blue-400 hover:underline"
            >
              info@unhack.africa
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
