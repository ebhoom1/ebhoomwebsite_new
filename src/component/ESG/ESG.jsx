import React from "react";
import {
  CheckCircle,
  Bot,
  BarChart3,
  Globe,
  Leaf,
  ShieldCheck,
  RefreshCcw,
  Lightbulb,
} from "lucide-react"; // Lucide icons
import {
  ChartBarIcon,
  ScaleIcon,
  GlobeAltIcon,
  CloudIcon,
} from "@heroicons/react/outline"; // Heroicons
import bgimageesg from "../../assets/images/esg-hero.png";
import roadmap1 from "../../assets/images/roadmap1.png";
import roadmap2 from "../../assets/images/roadmap2.png";
import decrb from "../../assets/images/decrb-1.png";
import dashboard from "../../assets/images/dashboard.png";

const ESG = () => {
  return (
    <div className=" text-gray-900">
      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${bgimageesg})` }}
        className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="relative z-10 px-4 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
            EBHOOM ESG: The Future of Responsible Business
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            One Platform. Total ESG Mastery.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg">
              Book a Demo
            </button>
            <button className="bg-white text-gray-900 hover:bg-gray-200 py-3 px-6 rounded-lg">
              Talk to Our ESG Experts
            </button>
          </div>
        </div>
      </section>

      {/* Why ESG Section */}
      <section className="relative bg-white py-16 px-6 md:px-16 text-center w-4/5 mx-auto -mt-16 shadow-lg rounded-lg z-20">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why ESG Compliance Matters
        </h2>
        <p className="text-gray-600 mt-4">
          ESG isn't just about compliance—it's about building a sustainable,
          profitable future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white shadow-md rounded-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold">📈 Increase Market Value</h3>
            <p className="text-gray-500 mt-2">
              ESG-compliant companies gain investor trust and long-term
              stability.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold">⚖ Regulatory Compliance</h3>
            <p className="text-gray-500 mt-2">
              Stay ahead of BRSR, GRI, and IFRS reporting frameworks.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold">🌱 Sustainable Growth</h3>
            <p className="text-gray-500 mt-2">
              Reduce risk, optimize resources, and boost reputation.
            </p>
          </div>
        </div>
      </section>
      <div className="py-10"></div>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-16">
  {/* Centered Heading and Paragraph */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      The Power of AI in ESG
    </h2>
    <p className="text-gray-600 mt-4">
      Unlock AI-driven insights to elevate your ESG strategy.
    </p>
  </div>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
    {/* Left: Features Cards */}
    <div>
      <div className="mt-6 space-y-6">
        {[
          {
            icon: <CheckCircle size={32} className="text-green-600" />,
            title: "Automated ESG Reporting",
            text: "Generate reports in seconds aligned with global ESG frameworks.",
          },
          {
            icon: <Bot size={32} className="text-blue-600" />,
            title: "AI-Powered Decarbonization",
            text: "Predict, optimize, and accelerate your net-zero strategies.",
          },
          {
            icon: <BarChart3 size={32} className="text-purple-600" />,
            title: "Compliance Tracking",
            text: "Track Scope 1, 2, and 3 emissions with intelligent alerts.",
          },
          {
            icon: <Globe size={32} className="text-teal-600" />,
            title: "All-in-One Dashboard",
            text: "Monitor carbon footprint, water usage, and more in real-time.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-full shadow-md space-x-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="bg-gray-100 p-3 rounded-full flex items-center justify-center">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right: Image */}
    <div className="flex justify-center">
      <img
        src={decrb} // Ensure correct path
        alt="Decarbonization"
        className="rounded-xl shadow-lg w-full max-w-md"
      />
    </div>
  </div>
</section>

      <div className="py-10"></div>

      {/* Beyond Compliance: Driving Impact Section */}
      <section className="relative py-16 px-6 md:px-16 flex flex-col md:flex-row md:items-center bg-gray-100">
        {/* Left Side - Green Background */}
        <div className="w-full md:w-1/3 px-8 bg-green-900 text-white p-12 rounded-l-3xl relative">
          <h2 className="text-3xl md:text-4xl font-bold">
            Beyond Compliance: Driving Impact
          </h2>
          <p className="text-green-200 mt-6">
            From Data to Action. From Action to Change. Most ESG platforms stop
            at compliance. We take it further.
          </p>
        </div>
        {/* Right Side  */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 md:mt-0 px-6 relative ">
          {[
            {
              title: "🌍 Carbon Reduction Strategies",
              desc: "AI-driven roadmaps for reducing emissions, boosting efficiency, and unlocking sustainability ROI.",
            },
            {
              title: "📊 ESG Risk Analytics",
              desc: "AI-driven ESG materiality assessments that uncover hidden risks before they impact your business.",
            },
            {
              title: "🔄 Circular Economy Optimization",
              desc: "Identify waste reduction opportunities, recycling strategies, and sustainable sourcing practices.",
            },
            {
              title: "💡 Smart ESG Investments",
              desc: "Align your ESG strategy with sustainable finance, carbon credit trading, and responsible investment opportunities.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg text-gray-900"
            >
              <h3 className="text-2xl font-semibold text-green-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Decarbonization Roadmap Section */}
      <section className="relative py-16 px-6 md:px-16 text-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Decarbonization Roadmap
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Plan your emissions reductions effectively.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* First Image with Overlay */}
          <div className="relative group">
            <img
              src={roadmap1}
              alt="Decarbonization Roadmap"
              className="mx-auto shadow-2xl rounded-2xl transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center rounded-2xl">
              <p className="text-white text-lg font-semibold px-4">
                AI-powered insights for sustainable decision-making.
              </p>
            </div>
          </div>

          {/* Second Image with Overlay */}
          <div className="relative group">
            <img
              src={roadmap2}
              alt="Roadmap Steps"
              className="mx-auto shadow-2xl rounded-2xl transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center rounded-2xl">
              <p className="text-white text-lg font-semibold px-4">
                A step-by-step approach to net-zero emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The EBHOOM Edge Section */}
      <section className="py-16 px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">The EBHOOM Edge</h2>
        <p className="text-gray-600 mt-4">Seamless. Scalable. Smart.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              title: "🔹 Real-Time Data Sync",
              desc: "Connect effortlessly with IoT sensors, ERP systems, and third-party ESG databases for live tracking.",
            },
            {
              title: "🔹 AI-Powered ESG Score",
              desc: "Get a dynamic ESG performance score to benchmark against industry leaders.",
            },
            {
              title: "🔹 Plug & Play API",
              desc: "Integrate effortlessly with SAP, Oracle, Salesforce, and enterprise sustainability platforms.",
            },
            {
              title: "🔹 Secure & Cloud-Powered",
              desc: "Built on a scalable, encrypted cloud architecture for enterprise-grade security.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 shadow-lg rounded-lg text-center"
            >
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray-500 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 px-6 md:px-16 text-center bg-gray-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Your Net Zero Journey Starts Now
        </h2>
        <p className="text-gray-300 mt-4">
          Join leading businesses in sustainable transformation.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg">
            Book a Demo
          </button>
          <button className="bg-white text-gray-900 hover:bg-gray-200 py-3 px-6 rounded-lg">
            Talk to Our ESG Experts
          </button>
        </div>
      </section>
    </div>
  );
};

export default ESG;
