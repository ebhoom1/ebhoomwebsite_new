import React from 'react';
import { FaCloudShowersHeavy, FaChartLine, FaRoute, FaBolt, FaRegBuilding } from 'react-icons/fa';

const RainSensing = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Rain Sensing Network 🌧️
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Because every drop counts. When the skies change, so does your city, and our network gives you the edge.
          </p>
        </div>

        {/* Value Proposition Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Why it Matters
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our Rain Sensing Network is built to help you navigate the instant shifts in deliveries, traffic, and demand that come with changing weather. It ensures your fleet never slows down by providing real-time live rainfall data with zero delay.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              This isn't just about sensing rain; it's about sensing opportunity. The actionable intelligence you get helps power your route planning, stock decisions, and delivery speed, allowing you to deliver faster, even in the rain, and stay ahead.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-w-16 aspect-h-9">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-xl overflow-hidden transform rotate-3 scale-105 transition-transform duration-500 hover:rotate-0 hover:scale-100">
                  <div className="p-8 text-white flex items-center justify-center h-full">
                    <FaCloudShowersHeavy className="text-9xl opacity-70 animate-pulse-slow" />
                    <div className="absolute top-4 left-4 text-sm font-semibold">Live Rainfall Data</div>
                    <div className="absolute bottom-4 right-4 text-xs">Zero Delay</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-12 border-t-2 border-gray-200" />

        {/* What You Get Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800">
            What You Get
          </h3>
          <p className="mt-2 text-gray-600">
            A comprehensive solution for real-time rain sensing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-5xl text-blue-500" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Precision Rainfall Sensing</h4>
            <p className="mt-2 text-gray-600">
              Every drop is measured and every shift is tracked. The system is built for urban accuracy.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              <FaBolt className="text-5xl text-yellow-500" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Blazing-Fast Data Transfer</h4>
            <p className="mt-2 text-gray-600">
              Data transfers from the sensor to your cloud dashboard in seconds. No lag, no blind spots.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              <FaRoute className="text-5xl text-green-500" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Actionable Intelligence</h4>
            <p className="mt-2 text-gray-600">
              Get the insights you need to power your route planning, stock decisions, and delivery speed.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              <FaRegBuilding className="text-5xl text-gray-500" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800">Always Reliable</h4>
            <p className="mt-2 text-gray-600">
              Built with an industrial-grade design, this system is reliable 24/7, come rain or shine.
            </p>
          </div>
        </div>

        <hr className="my-12 border-t-2 border-gray-200" />

        {/* Why it Matters for You Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 flex justify-center">
            {/* Using a placeholder since the image file is not accessible */}
            <img src="/assets/images/rainsensing.jpeg" alt="Rain Sensing Gauge" className="w-full max-w-md rounded-lg shadow-xl" />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Why it matters for you
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our system helps you **deliver faster, even in the rain**. It is designed to cut downtime, maximize your routes, and ensure you stay ahead by being always on.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Deliver faster. Even in the rain.</li>
              <li>Cut downtime. Maximize routes.</li>
              <li>Stay ahead. Always on.</li>
            </ul>
          </div>
        </div>

        <hr className="my-12 border-t-2 border-gray-200" />

        {/* Packages Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800">
            Packages
          </h3>
          <p className="mt-2 text-gray-600">
            Tailored solutions for different business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Urban Node */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-8 transition-all duration-300 hover:shadow-3xl">
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Urban Node</h4>
            <div className="bg-blue-100 text-blue-700 font-medium px-3 py-1 rounded-full inline-block text-sm mb-4">
              Ideal for Warehouses + Delivery Hubs
            </div>
            <ul className="text-gray-600 space-y-3 list-disc list-inside">
              <li>Local rainfall alerts</li>
              <li>Real-time data dashboard</li>
            </ul>
          </div>
          {/* Enterprise Grid */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-8 transition-all duration-300 hover:shadow-3xl">
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Enterprise Grid</h4>
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
  );
};

export default RainSensing;