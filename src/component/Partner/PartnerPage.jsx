import React from "react";
import { FaMoneyBillWave, FaSyncAlt, FaTrophy, FaMapMarkedAlt } from "react-icons/fa";
import {
    UserPlus,
    Rocket,
    BadgeDollarSign,
    TrendingUp
  } from "lucide-react"; // Or any icon library you're using
  import { FaCloud, FaWater, FaLeaf, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const PartnerPage = () => {
  const handleFormRedirect = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSf-rqTOMwOevN7TFXSmW61d3Q1ICpkaYbZaPdLFDCkbfULBqg/viewform?usp=sharing", "_blank");
  };

  return (
    <main className="bg-white text-gray-800">
       {/* Hero Section with SVG Background */}
       <section className="relative overflow-hidden py-36 px-6 text-center bg-green-100">
        <svg className="absolute top-0 left-0 w-96 h-96 opacity-30 text-green-300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-10 right-10 w-48 h-48 opacity-30 text-green-200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="currentColor" />
        </svg>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
          GoodFoot Partner Network
          </h1>
          <p className="text-lg md:text-xl text-gray-600 py-4">
          Welcome to the revolution in sustainability.
At GoodFoot, we don’t just build products — we build possibilities. Now, we’re inviting bold
visionaries, high-performers, and future-forward businesses to join our Channel Partner
Network
          </p>
        </div>
      </section>

      {/* What You’ll Represent */}
      <section className="max-w-6xl mx-auto py-10 px-6 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-6">What You’ll Represent</h2>
  <div className="grid md:grid-cols-2 gap-10 text-left">
    <div className="bg-green-50 p-6 rounded-lg shadow">
      <FaCloud className="text-green-600 text-3xl mb-4" />
      <h3 className="text-xl font-semibold mb-2">Real-Time Pollution Monitoring Systems</h3>
      <p>Smart, precise, and regulatory-compliant — our OCEMS systems redefine industrial compliance.</p>
    </div>
    <div className="bg-green-50 p-6 rounded-lg shadow">
      <FaWater className="text-green-600 text-3xl mb-4" />
      <h3 className="text-xl font-semibold mb-2">Energy & Water Intelligence Dashboards</h3>
      <p>Real-time insights. Predictive analytics. Stunning UI. Everything your clients need to monitor and optimize.</p>
    </div>
    <div className="bg-green-50 p-6 rounded-lg shadow">
      <FaLeaf className="text-green-600 text-3xl mb-4" />
      <h3 className="text-xl font-semibold mb-2">Next-Gen ESG Software</h3>
      <p>Data-driven ESG reporting meets AI-powered decarbonization. No fluff. Just results.</p>
    </div>
    <div className="bg-green-50 p-6 rounded-lg shadow">
      <FaMobileAlt className="text-green-600 text-3xl mb-4" />
      <h3 className="text-xl font-semibold mb-2">Eco-Challenge & Smart Living Platforms</h3>
      <p>Our GoodFoot app inspires action, builds habits, and transforms communities — one challenge at a time.</p>
    </div>
  </div>
</section>

      {/* Why Join Us */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join Us?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-10">
          Be part of something powerful. Our solutions aren’t just ahead of the curve — they define it.
          When you partner with GoodFoot, you’re not selling tech — you’re offering impact, intelligence, and innovation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaMoneyBillWave className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Revenue Redefined</h3>
            <ul className="text-left list-disc pl-5 text-sm text-gray-700">
              <li>High-margin commissions</li>
              <li>Recurring SaaS income</li>
              <li>Performance bonuses and growth incentives</li>
              <li>Region exclusivity for top performers</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaSyncAlt className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Your Brand, Amplified</h3>
            <ul className="text-left list-disc pl-5 text-sm text-gray-700">
              <li>Custom-branded decks and sales kits</li>
              <li>Co-marketing campaigns</li>
              <li>Event participation & lead generation tools</li>
              <li>White-labeled software solutions</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaTrophy className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Next-Level Experience</h3>
            <ul className="text-left list-disc pl-5 text-sm text-gray-700">
              <li>Dedicated Partner Success Manager</li>
              <li>Sales engineering and pre-sales support</li>
              <li>Onboarding bootcamps</li>
              <li>Partner-only webinars and feature previews</li>
            </ul>
          </div>
         
        </div>
      </section>

      {/* Who You Are */}
<section className="max-w-6xl mx-auto py-20 px-6 text-center bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-lg">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">Who You Are</h2>
  <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-12">
    You're not just looking to resell. You're here to own your territory, dominate your niche, and grow a business that scales with you.
  </p>

  <ul className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6 text-left text-gray-700">
    <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <span className="text-green-600 mt-1 text-xl">✔️</span>
      <span>A systems integrator</span>
    </li>
    <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <span className="text-green-600 mt-1 text-xl">✔️</span>
      <span>A distributor or VAR</span>
    </li>
    <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <span className="text-green-600 mt-1 text-xl">✔️</span>
      <span>A consultant in energy, ESG, compliance, or sustainability</span>
    </li>
    <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <span className="text-green-600 mt-1 text-xl">✔️</span>
      <span>An entrepreneur with a growth mindset</span>
    </li>
  </ul>
</section>

      {/* Partner Journey Steps */}
      <section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-16 text-gray-800">
      Apply. Activate. Accelerate.
    </h2>

    {/* Dotted line connector */}
    <div className="relative">
      {/* Horizontal line */}
      <div className="absolute top-6 left-0 w-full border-t border-dotted border-green-500 z-0 hidden md:block"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {[
          {
            title: "Apply Now",
            icon: <UserPlus className="w-10 h-10 text-green-600 mb-4 mx-auto" />,
            description: "Fill out a quick application form and tell us who you are."
          },
          {
            title: "Get Onboarded",
            icon: <Rocket className="w-10 h-10 text-green-600 mb-4 mx-auto" />,
            description: "You’ll get access to our full partner kit, training, and demo tools."
          },
          {
            title: "Start Selling",
            icon: <BadgeDollarSign className="w-10 h-10 text-green-600 mb-4 mx-auto" />,
            description: "Pitch. Close. Earn. Expand."
          },
          {
            title: "Scale With Us",
            icon: <TrendingUp className="w-10 h-10 text-green-600 mb-4 mx-auto" />,
            description: "Unlock premium tiers, bonuses, and new verticals as you grow."
          }
        ].map((step, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Step Number Circle */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-lg shadow-md">
                {index + 1}
              </div>
            </div>

            {step.icon}
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

     {/* Partner Form Section */}
<section className="bg-gradient-to-b from-green-50 to-white py-24 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Become a Partner</h2>
    <p className="text-lg text-gray-700 mb-8">
      Let’s build something extraordinary together. Click the button below and fill in your details to get in touch with us.
    </p>
    <button
      onClick={handleFormRedirect}
      className="bg-[#101624] hover:bg-blue-700 text-white px-6 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
    >
      Fill the Partnership Form
    </button>
  </div>
</section>

    </main>
  );
};

export default PartnerPage;
