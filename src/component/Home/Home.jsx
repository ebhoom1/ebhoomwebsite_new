import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Corrected imports
import { motion, useAnimation, useInView } from "framer-motion";
import naturegif from "../../assets/images/nature-unscreen.gif";
import Eicon from "../../assets/images/android-chrome-512x512.png";
import device_1 from "../../assets/images/device_1.jpg";
import device_2 from "../../assets/images/device_2.jpg";
import device_3 from "../../assets/images/device_3.jpg";
import mobileapp from "../../assets/images/mobile app.png";
import background_sec4 from "../../assets/images/background_sec4.jpg";
import startupindia from "../../assets/images/Startup India.svg";
import startupmission from "../../assets/images/kerala-startup-mission.svg";
import "./home.css";
import { NavLink } from "react-router-dom";
import SustainabilitySection from "./SustainabilitySection";

const Home = () => {
  const controls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has played

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!hasAnimated && scrollPosition > 300) {
      controls.start({ y: 0, opacity: 1 });
      setHasAnimated(true); // Prevent re-triggering
    }
  }, [scrollPosition, controls, hasAnimated]);

  const logos = [1, 2, 3, 4, 5, 6, 7, 8]; // Replace with your actual number of logos

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-gradient-to-r from-secondary to-primary overflow-hidden h-screen flex items-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
        }}
      >
        {/* Diagonal Overlay */}
        <div
          className="absolute inset-0 bg-white opacity-20"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
          }}
        ></div>

        {/* Glassmorphism Effect */}
        <div
          className="absolute top-1/4 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-lg -rotate-12"
          style={{ transform: "rotate(-10deg)" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-56 sm:w-72 h-56 sm:h-72 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-lg rotate-6"
          style={{ transform: "rotate(10deg)" }}
        ></div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10">
          {/* Left Column */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug text-white">
              <span className="block mb-3">Monitor</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
                Measure
              </span>
              <span
                className="block mb-4"
                style={{ WebkitTextStroke: "1px #fff", color: "transparent" }}
              >
                Make a Difference
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mt-4">
              Join the revolution of monitoring and managing our planet’s health
              with advanced technology.
            </p>
            <button
              onClick={() => window.open("https://ocems.ebhoom.com", "_blank")}
              className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-white text-secondary font-bold rounded-full shadow-lg hover:bg-gray-200 transition-all"
            >
              Learn More
            </button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={naturegif}
              alt="Nature GIF"
              className="max-w-xs sm:max-w-md lg:max-w-xl rounded-b-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      <div className="py-10"></div>
      {/* Animated Section */}
      {/*  Section 1*/}
      <section className="relative bg-[#f7fdfc] py-20 z-10 overflow-hidden">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col lg:flex-row items-center gap-x-8">
            {/* Floating Background */}
            <div className="lg:w-1/2 flex justify-center relative mb-6 mt-6 lg:mb-0">
              <motion.div
                className="absolute w-[1200px] h-[1200px] bg-gradient-to-r from-secondary to-primary -z-10"
                style={{
                  clipPath:
                    "path('M200 0 C 500 0, 350 100, 350 200 C 350 300, 250 400, 200 400 C 100 400, 0 300, 0 200 C 0 100, 100 0, 200 0 Z')",
                  top: "-60px",
                  left: "-50px",
                }}
                animate={{
                  clipPath: [
                    "path('M200 0 C 500 0, 350 90, 350 200 C 350 300, 250 400, 200 400 C 90 400, 0 300, 0 200 C 0 90, 100 0, 200 0 Z')",
                    "path('M200 0 C 500 20, 350 80, 350 200 C 350 320, 250 420, 200 400 C 90 380, 0 320, 0 200 C 0 80, 100 20, 200 0 Z')",
                    "path('M200 0 C 500 0, 350 90, 350 200 C 350 300, 250 400, 200 400 C 90 400, 0 300, 0 200 C 0 90, 100 0, 200 0 Z')",
                  ],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Image with Landing Animation */}
              <motion.img
                src={mobileapp}
                className="w-[450px] h-auto relative z-10 rounded-lg shadow-lg"
                alt="Mobile App"
                initial={{ y: -100, opacity: 0 }}
                animate={controls}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Text and Button */}
            <div className="content-b-image lg:w-1/2 flex flex-col justify-center items-center text-center">
              <h4 className="text-2xl md:text-3xl font-semibold mb-4">
                What if every drop, every watt,{" "}
                <span className="text-secondary">
                  and every breath counted?
                </span>{" "}
                Together, they do.
              </h4>
              <p className="text-gray-700 text-lg mb-6">
                We monitor ambient{" "}
                <strong className="text-secondary">Air quality</strong>, Water
                quality, Noise pollution and
                <br />
                Interactive monitoring application suits all pollution
                monitoring devices.
              </p>
              <NavLink
                to="/contact"
                className="px-6 py-3 text-white bg-secondary hover:bg-blue-600 rounded-md shadow-md transition-all duration-300"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/*section 2 */}
      <section className="relative z-10  py-40 ">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h4
              className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 "
              data-aos="fade-out"
            >
              EBHOOM complies with emission regulations using cutting-edge
              technology.
            </h4>
            <h5
              className="text-xl md:text-2xl font-semibold text-[#236a80] mb-6"
              data-aos="zoom-out"
            >
              "Online Continuous Emission Monitoring System"
            </h5>
            <p className="text-base md:text-lg text-gray-600">
              EBHOOM offers advanced solutions to monitor emissions continuously
              while adhering to environmental regulations. Our system is
              designed for high efficiency and reliability, ensuring compliance
              with ease.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mb-10">
            <NavLink to="/contact" target="_blank">
              <button
                className="px-6 py-3 text-white bg-[#236a80] hover:bg-[#1d5f6d] rounded-md shadow-md transition-all duration-300 relative"
                type="button"
              >
                Get your{" "}
                <span className="text-green-400 font-semibold">OCEMS</span> now
              </button>
            </NavLink>
          </div>
          {/* Background Circle Design */}
          <div className="absolute  top-20 left-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-green-300 to-green-400 opacity-40 animate-zoomInOut -z-10"></div>
          {/*three pic sec */}
          <div className="relative w-full max-w-md mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              className="w-full"
            >
              {/* Image 1 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                  <img
                    src={device_1}
                    alt="Device 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>

              {/* Image 2 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                  <img
                    src={device_2}
                    alt="Device 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>

              {/* Image 3 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                  <img
                    src={device_3}
                    alt="Device 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <div className="py-10"></div>

      {/**section 3 */}
      {/** Section 3 */}

      <section>
        <div
          className="relative w-full h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${background_sec4})`, // Replace with your suitable image
            backgroundAttachment: "fixed", // Makes the background image fixed
          }}
        >
          {/* Transparent Overlay */}
          <div className="absolute inset-0 bg-gray-800 bg-opacity-60"></div>

          {/* Content Over the Image */}
          <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
            <h3
              className="products-head mb-5 text-2xl lg:text-4xl font-bold"
              data-aos="fade-in"
            >
              Advanced technology for{" "}
              <span className="text-green-400">Environmental</span> solutions
            </h3>
            <h2
              className="products-head2 mb-3 text-xl lg:text-3xl font-semibold"
              data-aos="zoom-in"
            >
              Online Continuous Effluent <br /> Monitoring System
            </h2>
            <NavLink to="/products#wms">
              <button
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md shadow-md transition duration-300"
                type="button"
              >
                Learn more
              </button>
            </NavLink>
          </div>
        </div>
      </section>
      <div className="py-10"></div>
      {/*section 4 */}
      {/* Section 4 */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Image Grid Section */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1526529613260-5f7cad1eb4b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Office View 2"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/assets/images/grid3img.jpg"
                  alt="Office View 3"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-2 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1622322977885-8ee6d45ea016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Office View 1"
                  className="w-full h-[250px] md:h-[300px] object-cover"
                />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="flex flex-col justify-center items-center text-left">
              {/* Heading */}
              <h2 className="text-center text-xl font-bold text-gray-800 md:text-4xl mb-8">
                Revolutionizing Pollution Management with Cutting-Edge
                Technology
              </h2>
              <p
                className="text-lg text-gray-700 leading-relaxed mb-6"
                data-aos="zoom-out"
              >
                EBHOOM has the vision and the technology to transform our planet
                into a beautiful and clean one. EBHOOM is a turnkey solution
                provider for pollution-related challenges, offering unmatched
                professional expertise in water, stack & air quality measurement
                technologies, and software for CPCB-SPCB servers.
              </p>
              <NavLink to="/about">
                <button
                  className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-all justify-center "
                  type="button"
                >
                  Read more
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10"></div>
      {/**sustainability section */}
      <SustainabilitySection />
      <div className="py-10"></div>

      {/* Section 5 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.2 }}
        exit={{ opacity: 0, y: 100 }}
        className="bg-gradient-to-r from-gray-100 to-gray-300 py-10 md:py-16"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-start">
              {/* Icon and Heading Row */}
              <div className="flex items-center gap-4 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="url(#gold-gradient)"
                  viewBox="0 0 16 16"
                  className="drop-shadow-lg flex-shrink-0"
                >
                  <defs>
                    <linearGradient
                      id="gold-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#f9d423" />
                      <stop offset="100%" stopColor="#ff4e50" />
                    </linearGradient>
                  </defs>
                  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-800 leading-snug">
                  Our Expertise in Environmental Technology
                </h3>
              </div>

              {/* Description with Circles */}
              <div className="flex flex-wrap gap-6 mt-4 justify-center">
                {[
                  {
                    text: "Environmental Software Solutions",
                    color: "bg-blue-100",
                  },
                  { text: "Embedded Systems", color: "bg-orange-100" },
                  { text: "Analyzer Maintenance", color: "bg-green-100" },
                  {
                    text: "Data uploading to CPCB/SPCB",
                    color: "bg-yellow-100",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full ${item.color} shadow-lg`}
                  >
                    <p className="text-center text-sm sm:text-base font-medium text-gray-600 px-4">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-8">
                Proud Member of
              </h3>
              {/* Logo Grid */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
                <div className="bg-white w-28 h-28 sm:w-32 sm:h-32 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center">
                  <img
                    src={startupindia}
                    alt="Startup India"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                </div>
                <div className="bg-white w-28 h-28 sm:w-32 sm:h-32 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center">
                  <img
                    src={startupmission}
                    alt="Kerala Startup Mission"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="py-20"></div>
      {/*sectio 6 youtube video */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* YouTube Video */}
            <div className="w-full lg:w-2/3 flex justify-center">
              <div
                className="w-full"
                style={{
                  maxWidth: "640px", // Explicitly set max width
                  height: "360px", // Explicitly set height
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/UL0VAZGU6iI?rel=0"
                  title="YouTube video"
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </div>

            {/* Heading Section */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center text-center lg:text-left">
              <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                PURE <span className="text-green-500">LIFE</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Inspiring a greener future with sustainable practices and
                innovative solutions. Join us on our journey towards a healthier
                planet.
              </p>
              {/* Additional Content */}
              <p className="text-sm text-gray-500 mt-6 max-w-md">
                Your participation matters. Every small step counts toward
                making the Earth cleaner, greener, and sustainable for future
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20"></div>
      {/*section 7 client */}
      {/* <section className="py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-gray-800">Our Clients</h3>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="flex py-4 gap-6 animate-scroll whitespace-nowrap">
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center bg-white shadow-md rounded-lg p-4 
            w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex-shrink-0"
                >
                  <img
                    className="w-full h-full object-contain"
                    src={`assets/clients/${logo}.png`}
                    alt={`Client ${logo}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Client Section */}
<section className="py-12 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="text-center mb-6">
      <h3 className="text-3xl font-bold text-gray-800">Our Clients</h3>
    </div>

    {/* Scrolling Logos */}
    <div className="relative w-full overflow-hidden">
      <div className="flex py-4 animate-scroll">
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center bg-white shadow-md rounded-lg p-2 
                      w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 flex-shrink-0"
          >
            <img
              className="w-full h-full object-contain"
              src={`assets/clients/${logo}.png`}
              alt={`Client ${logo}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      <div className="mb-20"></div>
    </div>
  );
};

export default Home;
