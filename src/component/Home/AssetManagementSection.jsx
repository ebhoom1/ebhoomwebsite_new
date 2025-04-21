import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CheckCircle } from "lucide-react"; // modern replacement for ✅

const features = [
  "Easy-to-use interface designed for on-site operators and maintenance teams",
  "Centralized dashboard for real-time visibility across assets and logs",
  "Full traceability from QR code to final report",
  "Designed for industrial compliance and operational resilience",
];

const AssetManagementSection = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        {/* Title Block */}
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold text-[#236a80]">
            EBHOOM Asset Management
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Designed to help you manage, track, and maintain all your
            environmental assets with total visibility.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-all flex gap-3"
            >
              <CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
              <p className="text-gray-800 font-medium text-lg">{item}</p>
            </div>
          ))}
        </div>

        <div className="py-5"></div>

        {/* CTA Card */}
        <div className="relative border border-gray-700 rounded-3xl shadow-xl p-10 md:p-12 max-w-5xl mx-auto text-center overflow-hidden bg-[#0f1523]">
          <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm pointer-events-none rounded-3xl" />
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl font-bold text-[#45badd] text-center">
              Ready to Digitize Your Assets?
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
              Whether you're managing a treatment plant, manufacturing facility,
              or utility infrastructure,
              <strong className="text-white">
                {" "}EBHOOM’s Asset Management{" "}
              </strong>
              system ensures
              <strong className="text-white">
                {" "}better uptime, lower costs, and total control
              </strong>.
            </p>
            <p className="flex items-center justify-center gap-3 text-gray-300 text-lg text-center">
              <FaPhoneAlt className="text-[#45badd]" />
              Contact us today or request a demo to see it in action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetManagementSection;
