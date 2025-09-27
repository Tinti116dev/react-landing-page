// src/pages/FAQs.jsx
import React, { useState } from "react";
import { Transition } from "@headlessui/react"; // install: npm install @headlessui/react
import backgroundImg from "../assets/images/Picture4.png"; // adjust path to your image

const faqs = [
  {
    question: "What is UniStack SOCaaS?",
    answer:
      "UniStack SOCaaS is a managed Security Operations Center service that provides 24/7 threat monitoring, detection, and response to protect your business from cyberattacks.",
  },
  {
    question: "How does UniStack monitor threats?",
    answer:
      "We use advanced analytics, AI, and threat intelligence feeds to continuously monitor your network, endpoints, and cloud environments in real time.",
  },
  {
    question: "What types of incidents can you detect and respond to?",
    answer:
      "Our service covers ransomware, phishing, insider threats, unauthorized access, and other cyber threats with rapid incident response.",
  },
  {
    question: "Is your SOCaaS suitable for all business sizes?",
    answer:
      "Yes, our solutions are flexible and customized to meet the needs of small businesses up to large enterprises across Africa.",
  },
  {
    question: "How do I access reports and alerts?",
    answer:
      "Clients get secure portal access to dashboards with real-time alerts, incident details, and compliance reporting tailored to their requirements.",
  },
  {
    question: "What industries do you support?",
    answer:
      "We serve a wide range of industries including finance, healthcare, retail, government, and more, focusing on regulatory compliance and cyber resilience.",
  },
  {
    question: "How quickly do you respond to security incidents?",
    answer:
      "Response times are aligned with your service level agreement (SLA), typically within minutes of detection, ensuring fast containment and mitigation.",
  },
  {
    question: "Can UniStack SOCaaS help with compliance requirements?",
    answer:
      "Yes, our services support adherence to global and regional compliance standards such as GDPR, POPIA, PCI-DSS, and others.",
  },
  {
    question: "What is the onboarding process?",
    answer:
      "Onboarding involves integration with your IT environment, baseline tuning, and staff training, usually completed within 2–4 weeks.",
  },
  {
    question: "How do I get started with UniStack SOCaaS?",
    answer:
      "Contact us through our website or sales team for a personalized consultation and demo.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="bg-black bg-opacity-90 text-white py-20 px-6"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-2 text-gray-300">
            Answers to common questions about UniStack SOCaaS.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-90 rounded-lg shadow-md"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Animated Answer */}
              <Transition
                show={openIndex === index}
                enter="transition-all duration-300 ease-out"
                enterFrom="max-h-0 opacity-0"
                enterTo="max-h-screen opacity-100"
                leave="transition-all duration-200 ease-in"
                leaveFrom="max-h-screen opacity-100"
                leaveTo="max-h-0 opacity-0"
              >
                <div className="px-6 pb-4 text-gray-300 text-sm">
                  {faq.answer}
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
