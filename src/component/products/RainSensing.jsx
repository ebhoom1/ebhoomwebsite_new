

import {
  FaCloudShowersHeavy,
  FaChartLine,
  FaRoute,
  FaBolt,
  FaRegBuilding,
} from "react-icons/fa";

const RainSensing = () => {
  return (
    <div className="relative mt-10">
      {/* Top Wave */}
      <svg
        viewBox="0 0 1920 250"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-40 md:h-56 lg:h-64"
        preserveAspectRatio="none"
      >
        <path
          d="
    M0,160
    C160,230 320,90 480,160
    C640,230 800,90 960,160
    C1120,230 1280,90 1440,160
    C1600,230 1760,90 1920,160
    L1920,250 L0,250 Z
  "
          fill="#d3eff8"
        />
      </svg>

      {/* Background wrapper (full width) */}
      <div className="w-full bg-[#d3eff8]">
        {/* Content container (centered) */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight" >
              Rain Sensing.Real-time 🌧️
            </h2>
            <p className="mt-4 text-lg text-gray-800 max-w-2xl mx-auto">
              Because every drop counts. When the skies change, so does your
              city, and our network gives you the edge.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Why it Matters
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Rain Sensing Network is built to help you navigate the
                instant shifts in deliveries, traffic, and demand that come with
                changing weather. It ensures your fleet never slows down by
                providing real-time live rainfall data with zero delay.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                This isn't just about sensing rain; it's about sensing
                opportunity. The actionable intelligence you get helps power
                your route planning, stock decisions, and delivery speed,
                allowing you to deliver faster, even in the rain, and stay
                ahead.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-xl overflow-hidden transform rotate-3 scale-105 transition-transform duration-500 hover:rotate-0 hover:scale-100">
                  <div className="p-8 text-white flex items-center justify-center h-60">
                    <FaCloudShowersHeavy className="text-9xl opacity-70 animate-pulse-slow" />
                    <div className="absolute top-4 left-4 text-sm font-semibold">
                      Live Rainfall Data
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs">
                      Zero Delay
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">What You Get</h3>
            <p className="mt-2 text-gray-600">
              A comprehensive solution for real-time rain sensing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <FaChartLine className="text-5xl text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">
                Precision Rainfall Sensing
              </h4>
              <p className="mt-2 text-gray-600">
                Every drop is measured and every shift is tracked. The system is
                built for urban accuracy.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <FaBolt className="text-5xl text-yellow-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">
                Blazing-Fast Data Transfer
              </h4>
              <p className="mt-2 text-gray-600">
                Data transfers from the sensor to your cloud dashboard in
                seconds. No lag, no blind spots.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <FaRoute className="text-5xl text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">
                Actionable Intelligence
              </h4>
              <p className="mt-2 text-gray-600">
                Get the insights you need to power your route planning, stock
                decisions, and delivery speed.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <FaRegBuilding className="text-5xl text-gray-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">
                Always Reliable
              </h4>
              <p className="mt-2 text-gray-600">
                Built with an industrial-grade design, this system is reliable
                24/7, come rain or shine.
              </p>
            </div>
          </div>

          {/* Why it matters for you */}
          <div className="relative my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center  backdrop-blur-md rounded-2xl shadow-xl p-8">
              {/* Image with gradient blob */}
              <div className="flex justify-center relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
                <img
                  src="/assets/images/rainsensing.png"
                  alt="Rain Sensing Gauge"
                  className="relative w-full max-w-md rounded-lg shadow-2xl"
                />
              </div>

              {/* Text Section */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Why it matters for you
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our system helps you <b>deliver faster, even in the rain</b>.
                  It’s designed to cut downtime, maximize your routes, and keep
                  you ahead by always being on.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deliver faster. Even in the rain.",
                    "Cut downtime. Maximize routes.",
                    "Stay ahead. Always on.",
                  ].map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Packages */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Packages</h3>
            
            <p className="mt-2 text-gray-600">
              Tailored solutions for different business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-8 transition-all duration-300 hover:shadow-3xl">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                Urban Node
              </h4>
              <div className="bg-blue-100 text-blue-700 font-medium px-3 py-1 rounded-full inline-block text-sm mb-4">
                Ideal for Warehouses + Delivery Hubs
              </div>
              <ul className="text-gray-600 space-y-3 list-disc list-inside">
                <li>Local rainfall alerts</li>
                <li>Real-time data dashboard</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-8 transition-all duration-300 hover:shadow-3xl">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                Enterprise Grid
              </h4>
              <div className="bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full inline-block text-sm mb-4">
                Plug-and-play for Delivery Giants
              </div>
              <ul className="text-gray-600 space-y-3 list-disc list-inside">
                <li>City-wide sensor mesh</li>
                <li>API access for logistics apps</li>
                <li>Predictive rainfall patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RainSensing;
