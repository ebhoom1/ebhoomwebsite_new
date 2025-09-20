// import React from "react";
// import {
//   FaBolt,
//   FaChartLine,
//   FaLeaf,
//   FaGasPump,
//   FaCloud,
//   FaCheckCircle,
// } from "react-icons/fa";

// const Generator = () => {
//   return (
//     <div className="w-full bg-gradient-to-b from-[#f9fafb] to-[#eef6f9]">
//       {/* Hero Section */}
//       <div className="text-center py-16 px-6">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//           Diesel Generator Monitoring
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//           Smarter Energy. Cleaner Tomorrow.
//         </p>

//         {/* Dashboard Image */}
//         <div className="mt-10 flex justify-center">
//           <img
//             src="/assets/images/dg-dashboard.jpeg"
//             alt="DG Dashboard"
//             className="rounded-2xl shadow-2xl w-full max-w-4xl"
//           />
//         </div>
//       </div>

//       {/* Why it Matters */}
//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//           🚀 Why it matters
//         </h2>
//         <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
//           Your generators power your business. But fuel costs and emissions hold
//           you back. With our DG Dashboard, you see it all: every unit of energy,
//           every drop of diesel, every gram of CO₂. Simple. Clear. Actionable.
//         </p>
//       </div>

//       {/* What you get */}
//       <div className="bg-white py-16">
//         <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
//           ✨ What you get
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
//           {[
//             {
//               icon: <FaChartLine className="text-4xl text-blue-500" />,
//               title: "Energy at a glance",
//               desc: "Real-time kWh. Beautiful charts. Instant insights.",
//             },
//             {
//               icon: <FaGasPump className="text-4xl text-yellow-500" />,
//               title: "Diesel, decoded",
//               desc: "Know exactly how much fuel is burned each day.",
//             },
//             {
//               icon: <FaBolt className="text-4xl text-indigo-500" />,
//               title: "Efficiency made visible",
//               desc: "Track kWh/L. Spot trends. Unlock savings.",
//             },
//             {
//               icon: <FaCloud className="text-4xl text-green-500" />,
//               title: "Carbon clarity",
//               desc: "Automatic CO₂ reporting. ESG-ready. Future-proof.",
//             },
//             {
//               icon: <FaLeaf className="text-4xl text-emerald-500" />,
//               title: "Dashboards you’ll love",
//               desc: "Effortless. Clean. Intuitive. Always in sync.",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl p-8 text-center transition-transform hover:scale-105"
//             >
//               <div className="mb-4 flex justify-center">{item.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Side by side layout: Generator Image + Right Content */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-6 py-20">
//         {/* Generator Image Section */}
//         <div className="flex flex-col items-center bg-[#0d4859] rounded-2xl p-8 shadow-xl">
//           <img
//             src="/assets/images/diesel-generator.jpeg"
//             alt="Diesel Generator"
//             className="w-full max-w-md drop-shadow-2xl rounded-lg"
//           />

//         </div>

//         {/* Right side: Why it matters for you + Plans */}
//         <div className="space-y-12">
//           {/* Why it matters for you */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">
//               🌍 Why it matters for you
//             </h2>
//             <ul className="space-y-4 text-lg text-gray-700">
//               {[
//                 "Save fuel. Save money.",
//                 "Cut carbon. Win compliance.",
//                 "Smarter insights. Better decisions.",
//               ].map((point, i) => (
//                 <li key={i} className="flex items-center gap-3">
//                   <FaCheckCircle className="text-green-500" />
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Plans */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">📦 Plans</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[
//                 {
//                   title: "Starter",
//                   desc: [
//                     "1 DG",
//                     "Energy + Diesel + CO₂ basics",
//                     "ESG report, done for you",
//                   ],
//                 },
//                 {
//                   title: "Enterprise",
//                   desc: [
//                     "Multiple DGs",
//                     "Advanced analytics",
//                     "Predictive fuel + efficiency alerts",
//                     "SCADA & ERP integrations",
//                   ],
//                 },
//               ].map((plan, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-2xl shadow-lg p-8 border hover:border-blue-400 hover:shadow-xl transition-all"
//                 >
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                     {plan.title}
//                   </h3>
//                   <ul className="space-y-3 text-gray-700">
//                     {plan.desc.map((d, idx) => (
//                       <li key={idx} className="flex items-center gap-2">
//                         <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
//                         {d}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Generator;
import React from "react";
import {
  FaBolt,
  FaChartLine,
  FaLeaf,
  FaGasPump,
  FaCloud,
  FaCheckCircle,
  FaRocket,
  FaGift,
  FaGlobe,
  FaBoxOpen,
} from "react-icons/fa";

const Generator = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#0a0f1c] via-[#0e1829] to-[#0a0f1c] text-gray-200 relative overflow-hidden">
      {/* Background premium glow effect */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="premiumGlow" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#00c6ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0072ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#premiumGlow)" />
        </svg>
      </div>

      {/* Hero Section */}
      <div className="text-center py-20 px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Diesel Generator Monitoring
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          Smarter Energy. Cleaner Tomorrow.
        </p>

        {/* Dashboard Image */}
        <div className="mt-12 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,200,255,0.4)]">
            <img
              src="/assets/images/dg-dashboard.jpeg"
              alt="DG Dashboard"
              className="rounded-2xl w-full max-w-4xl border border-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Why it Matters */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center justify-center gap-2">
          <FaRocket className="text-blue-500" /> Why it matters
        </h2>
        <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto">
          Your generators power your business. But fuel costs and emissions hold
          you back. With our DG Dashboard, you see it all: every unit of energy,
          every drop of diesel, every gram of CO₂. Simple. Clear. Actionable.
        </p>
      </div>

      {/* What you get */}
      <div className="py-20 relative z-10">
        <h2 className="text-3xl font-bold text-cyan-400 mb-12 flex items-center justify-center gap-2">
          <FaGift className="text-pink-500" /> What you get
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <FaChartLine className="text-4xl text-cyan-400" />,
              title: "Energy at a glance",
              desc: "Real-time kWh. Beautiful charts. Instant insights.",
            },
            {
              icon: <FaGasPump className="text-4xl text-yellow-400" />,
              title: "Diesel, decoded",
              desc: "Know exactly how much fuel is burned each day.",
            },
            {
              icon: <FaBolt className="text-4xl text-indigo-400" />,
              title: "Efficiency made visible",
              desc: "Track kWh/L. Spot trends. Unlock savings.",
            },
            {
              icon: <FaCloud className="text-4xl text-green-400" />,
              title: "Carbon clarity",
              desc: "Automatic CO₂ reporting. ESG-ready. Future-proof.",
            },
            {
              icon: <FaLeaf className="text-4xl text-emerald-400" />,
              title: "Dashboards you’ll love",
              desc: "Effortless. Clean. Intuitive. Always in sync.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#121826]/60 backdrop-blur-xl border border-gray-700 rounded-xl shadow-lg hover:shadow-cyan-500/20 p-8 text-center transition-transform hover:scale-105"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Side by side layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-6 py-24 relative z-10">
        {/* Generator Image Section */}
        <div className="flex flex-col items-center bg-gradient-to-br from-[#0e2f3a] to-[#0a1e27] rounded-2xl p-8 shadow-xl border border-gray-700">
          <img
            src="/assets/images/diesel-generator.jpeg"
            alt="Diesel Generator"
            className="w-full max-w-md drop-shadow-[0_0_30px_rgba(0,200,255,0.4)] rounded-lg"
          />
        </div>

        {/* Right side */}
        <div className="space-y-12 mt-10">
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              Why it matters for you
            </h2>
            <ul className="space-y-4 text-lg text-gray-300">
              {[
                "Save fuel. Save money.",
                "Cut carbon. Win compliance.",
                "Smarter insights. Better decisions.",
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Starter",
                  desc: [
                    "1 DG",
                    "Energy + Diesel + CO₂ basics",
                    "ESG report, done for you",
                  ],
                },
                {
                  title: "Enterprise",
                  desc: [
                    "Multiple DGs",
                    "Advanced analytics",
                    "Predictive fuel + efficiency alerts",
                    "SCADA & ERP integrations",
                  ],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className="bg-[#121826]/70 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-gray-700 hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all"
                >
                  <h3 className="text-2xl font-bold text-gray-100 mb-6">
                    {plan.title}
                  </h3>
                  <ul className="space-y-3 text-gray-400">
                    {plan.desc.map((d, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-cyan-400 rounded-full"></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
