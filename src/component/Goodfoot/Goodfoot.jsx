import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mobile1 from "../../assets/images/mobile1.png";
import mobile2 from "../../assets/images/mobile2.png";
import mobile3 from "../../assets/images/mobile3.png";
import dashboardgoodfoot from "../../assets/images/dashboardgoodfoot.png";
import socialhub from "../../assets/images/socialhub.png";
import verify from "../../assets/images/verify.png";
import ev from "../../assets/images/ev.png";
import goodfootbgimage from "../../assets/images/goodfootbg.png";
import goodfootlogotitle from "../../assets/images/goodfootlogotitle.png";

import {
  FaRecycle,
  FaBicycle,
  FaUsers,
  FaLeaf,
  FaStore,
  FaCalendarAlt,
} from "react-icons/fa";

const GoodFoot = () => {
  return (
    <div className=" text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left py-24 px-6 mt-4">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={goodfootbgimage}
            alt="GoodFoot Hero"
            className="w-full h-auto max-w-2xl mx-auto "
          />
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
          <div className="relative w-full flex flex-col items-center lg:items-start">
            {/* Coming Soon Badge */}
            <div className="bg-yellow-400 text-white text-sm font-semibold px-3 py-1 rounded-full mb-3 ">
              Coming Soon
            </div>

            {/* Title */}
            {/* <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700 leading-tight text-center lg:text-left" data-aos="fade-up" >
              GoodFoot: The App That Moves the World Forward
            </h1> */}
            {/* Title - Replace "GoodFoot" with Logo */}
            <h1
              className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700 leading-tight text-center lg:text-left"
              data-aos="fade-up"
            >
              <img
                src={goodfootlogotitle}
                alt="GoodFoot Logo"
                className="inline-block h-12 w-auto lg:h-16 "
              />{" "}
              : The App That Moves the World Forward
            </h1>
          </div>

          <p className="text-lg text-gray-700 mt-4 max-w-lg">
            Sustainability isn’t just a choice—it’s a movement. GoodFoot is the
            ultimate eco-lifestyle platform, designed to make sustainable living
            effortless, rewarding, and deeply impactful.
          </p>
          <div className="mt-6 space-x-4 lg:ml-40">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
              Download Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 text-center ">
        <h3 className="text-3xl font-bold text-gray-800 ">
          Built for Action. Designed for Change.
        </h3>
        <p className="text-lg text-gray-600 mt-2">
          Everything You Need to Go Green. All in One Place.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 px-4 mx-auto w-fit">
          {/* Card Component */}
          {[
            {
              icon: <FaRecycle className="text-4xl text-green-600" />,
              title: "Join AI-Verified Eco-Challenges",
              desc: "Take on fun, rewarding sustainability tasks, compete with friends, and earn impact points.",
            },
            {
              icon: <FaBicycle className="text-4xl text-green-600" />,
              title: "EV Rentals & Sustainable Transport",
              desc: "Find, book, and ride shared EV scooters & bikes for a cleaner city.",
            },
            {
              icon: <FaUsers className="text-4xl text-green-600" />,
              title: "Community-Powered Change",
              desc: "Connect with eco-conscious friends, companies, and local sustainability groups.",
            },
            {
              icon: <FaStore className="text-4xl text-green-600" />,
              title: "The Eco-Friendly Marketplace",
              desc: "Shop curated green products, support ethical brands, and offset your footprint in one tap.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative w-80 p-6 bg-white shadow-lg rounded-xl  
                   before:absolute before:top-0 before:left-0 before:w-14 before:h-14 before:border-t-4 before:border-l-4 before:border-green-600 before:rounded-tl-xl 
                   after:absolute after:bottom-0 after:right-0 after:w-14 after:h-14 after:border-b-4 after:border-r-4 after:border-green-600 after:rounded-br-xl"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-wrap items-center justify-center py-12 px-8">
        {/* Left Side: Mobile Mockups */}
        <div className="relative w-full lg:w-3/5 flex justify-center">
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
            {/* Center Mobile */}
            <img
              src={mobile1}
              alt="Mobile Mockup"
              className="shadow-2xl rounded-xl relative top-2 left-10 w-44 h-auto sm:w-64 sm:h-auto lg:w-[255px] lg:h-[526px] lg:top-6 lg:right-[-50px] z-10 transition-all duration-500 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(34,197,94,0.6)]"
            />
            {/* Left Mobile */}
            <img
              src={mobile2}
              alt="Mobile Mockup"
              className="absolute top-4 left-[-60px] shadow-2xl rounded-2xl opacity-90 w-36 h-auto sm:w-48 sm:h-auto lg:w-[181px] lg:h-[373px] lg:top-10 lg:left-[-110px] md:left-[-130px]"
            />
            {/* Right Mobile */}
            <img
              src={mobile3}
              alt="Mobile Mockup"
              className="absolute top-4 right-[-60px] shadow-2xl rounded-2xl opacity-90 w-36 h-auto sm:w-48 sm:h-auto lg:w-[181px] lg:h-[373px] lg:top-10 lg:right-[-70px] md:right-[-120px]"
            />
          </div>
        </div>

        {/* Right Side: Responsive Content */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6 mt-8 lg:mt-0">
          {/* First Section */}
          <div className="flex items-start gap-4">
            <FaLeaf className="text-green-600 text-3xl mt-1" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Track Your Carbon Footprint
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Monitor your lifestyle's impact on the environment and receive
                tailored decarbonization plans.
              </p>
            </div>
          </div>

          {/* Green Decorative Line (SVG Path) */}
          <svg width="100" height="15" className="hidden md:block">
            <path d="M0,5 L100,5" stroke="green" strokeWidth="2" />
          </svg>

          {/* Second Section */}
          <div className="flex items-start gap-4">
            <FaCalendarAlt className="text-green-600 text-3xl mt-1" />
            <div>
              <h3 className="text-md md:text-lg font-semibold text-gray-800">
                Sustainable Events, Simplified
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Book and discover eco-conscious experiences, from green concerts
                to climate summits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Features */}
      <section className="py-16 px-20 md:px-10 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          AI That Makes Green Living Second Nature
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Real-Time Carbon Dashboard */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <img
              src={dashboardgoodfoot}
              alt="Carbon Dashboard"
              className="w-full max-w-[300px] md:w-[250px] h-[180px] md:h-[200px] object-cover rounded-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-xl font-semibold">
                Real-Time Carbon Dashboard
              </h3>
              <p className="text-gray-600  md:text-base">
                Monthly insights that quantify and gamify sustainability.
              </p>
            </div>
          </div>

          {/* AI-Verified Challenges */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-xl font-semibold">
                AI-Verified Challenges
              </h3>
              <p className="text-gray-600  md:text-base">
                Get instant verification for completed eco-challenges and earn
                rewards faster.
              </p>
            </div>
            <img
              src={verify}
              alt="AI Verified Challenges"
              className="w-full max-w-[300px] md:w-[250px] h-[180px] md:h-[200px] object-cover rounded-lg"
            />
          </div>

          {/* Smart EV Rentals */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-xl font-semibold">
                Smart EV Rentals
              </h3>
              <p className="text-gray-600  md:text-base">
                Locate zero-carbon transport in your city and reduce emissions
                instantly.
              </p>
            </div>
            <img
              src={ev}
              alt="Smart EV Rentals"
              className="w-full max-w-[300px] md:w-[250px] h-[180px] md:h-[200px] object-cover rounded-lg"
            />
          </div>

          {/* Eco-Social Hub */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-6">
            <img
              src={socialhub}
              alt="Eco-Social Hub"
              className="w-full max-w-[300px] md:w-[250px] h-[180px] md:h-[200px] object-cover rounded-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-xl font-semibold">
                Eco-Social Hub
              </h3>
              <p className="text-gray-600  md:text-base">
                Find and engage with like-minded individuals & sustainable
                brands in a vibrant green community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards & Gamification */}
      {/* Rewards & Gamification */}
      <section className="py-16 text-center bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-700">
            Earn Rewards. Make a Difference. Repeat.
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mt-2">
            Your Impact. Your Rewards. Your Future.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Earn Points */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <span className="text-4xl">🌱</span>
              <h3 className="text-xl font-semibold mt-3">
                Earn GoodFoot Points
              </h3>
              <p className="text-gray-600 mt-1">
                Get rewarded for every sustainable action.
              </p>
            </div>

            {/* Convert Rewards */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <span className="text-4xl">💰</span>
              <h3 className="text-xl font-semibold mt-3">Redeem Rewards</h3>
              <p className="text-gray-600 mt-1">
                Convert points into discounts, perks, & carbon credits.
              </p>
            </div>

            {/* Compete & Get Recognized */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <span className="text-4xl">🏆</span>
              <h3 className="text-xl font-semibold mt-3">
                Compete & Get Recognized
              </h3>
              <p className="text-gray-600 mt-1">
                Rank on leaderboards & showcase your impact.
              </p>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-10">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
              Join the Challenge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoodFoot;
