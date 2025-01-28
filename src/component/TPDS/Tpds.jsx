import React, { useEffect, useMemo } from "react";
import AOS from "aos";
import "./tpds.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { BiCheckCircle } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";

const Tdps = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const subscriptionPlans = useMemo(
    () => [
      {
        title: "Business Basic",
        price: "₹2999",
        details: [
          "Water source and consumption data digitization",
          "Alert and alarm Management",
          "Regulatory compliances",
          "24*5 Email and Phone Support",
        ],
        users: "1 user per org",
        instruments: "5 field instruments per facility",
      },
      {
        title: "Business Standard",
        price: "₹5999",
        details: [
          "Water quality management",
          "APIs based data sources",
          "Advanced water data dashboards",
          "Regulatory documents management",
          "Water analytics including water neutrality",
          "Data availability reports",
          "User and Role management",
        ],
        users: "2 users per org",
        instruments: "15 field instruments per facility",
      },
      {
        title: "Business Premium",
        price: "₹9999",
        details: [
          "Support for SCADA, BMS, DCS, and OT integrations",
          "Escalation Engine for alerts",
          "Maintenance mode and data correction workflows",
          "Dedicated customer success manager",
        ],
        users: "5 users per org",
        instruments: "30 field instruments per facility",
      },
    ],
    []
  );

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6754758/pexels-photo-6754758.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto text-center text-white">
          <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
            Unified Real Time Monitoring
            <span>and Analytics Platform for Pollution</span>
            Control
          </h2>
          <div className="mt-6">
            <Link to="/contact" target="_blank">
              <button className="px-8 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300">
                Request Demo
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-blue-100 ">
        <div className="container mx-auto px-10">
          <h3 className="text-3xl font-bold text-center text-secondary mb-8">
            Ebhoom
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 font-light tracking-wide">
            <span className="block mb-6">
              Ebhoom is a Real-Time Data Acquisition, Monitoring, and Analytics
              suite of Products for Industrial Emissions, Effluent Discharges,
              and Ambient Air Monitoring. Ebhoom DAS Software, Ebhoom Server
              Platform, and Ebhoom Environ Data Logger provide a comprehensive
              solution for all Industry Environmental needs.
            </span>
            <span className="block mb-6">
              Ebhoom Client data acquisition software provides direct
              integration with any analyzer (make or model) using
              RS232/RS485/Modbus/Ascii Protocols, etc. Ebhoom Clients provide
              secured encrypted data communication with the Central Server using
              open REST-based API or MQTT-based protocols.
            </span>
            <span className="block mb-6">
              Ebhoom Environment provides a wireless data logger that eliminates
              the need for a PC for client-side data logging and can transmit
              data using LAN/Wifi/GPRS, etc. The wireless data logger provides
              capability to integrate with any of the standard industry
              analyzers using RS232/RS485 interface.
            </span>
            <span className="block mb-6">
              Ebhoom Mobile Application provides up-to-the-minute information on
              the data in the Ebhoom platform for industry and regulator
              consumption. The mobile application requires secured login
              credentials for viewing the data.
            </span>
            <span className="block mb-6">
              Ebhoom Central Server platform provides a common software for
              pollution boards to collect data from various industries using an
              Open API. The software provides pre-built reports, alarms, and
              alerts as per the regulatory standards prescribed by various
              regulatory authorities.
            </span>
            <span className="block">
              The Ad-hoc reporting module provides the capability to analyze the
              data up to 2-second granularity over the collected parameters and
              provide forecasting using Holt-Winters forecast models.
            </span>
          </p>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className=" py-12 px-20">
        <div className="container ">
          <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">
            Subscription Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white border border-[#034737] shadow-lg rounded-lg p-6 text-center"
                data-aos="fade-up"
              >
                <h4 className="text-2xl font-bold text-[#034737] mb-4">
                  {plan.title}
                </h4>
                <p className="text-2xl font-semibold text-gray-800 mb-4">
                  {plan.price}
                </p>
                <p className="text-gray-600 mb-6">
                  Per month, billed annually
                  <br />
                  {plan.users}
                  <br />
                  <span className="block">{plan.instruments}</span>
                </p>
                <Link
                  to="/subscriptionform"
                  className="block bg-white border border-[#034737] text-[#034737] py-2 px-6 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
                >
                  Get Started
                </Link>
                <ul className="text-left mt-6 space-y-3">
                  {plan.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <BiCheckCircle className="text-[#034737] mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/** */}
      <section id="products" className="py-16 ">
        <div className="container mx-auto px-10">
          {/* Section Heading */}
          <h3
            className="text-4xl font-bold text-center text-gray-700 mb-12"
            data-aos="fade-up"
          >
            Products
          </h3>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Product Card */}
            {[
              {
                title: "Data Acquisition",
                img: "/assets/images/icon/data-science.png",
                points: [
                  "Supports any digital analyzer make and models over RS232/RS485/Modbus protocols.",
                  "Seamless support for analog analyzers with 4-20mA, 0-10V, etc.",
                  "Supports any industrial-grade Ambient, Effluent, and Emission monitoring analyzers.",
                ],
              },
              {
                title: "Data Management",
                img: "/assets/images/icon/dashboard.png",
                points: [
                  "State-of-the-art software with cloud and on-premise deployment.",
                  "Browser-based interactive user interface.",
                  "Integrated workflow for seamless communication between industry and regulator.",
                ],
              },
              {
                title: "Mobile App",
                img: "/assets/images/icon/mobile-development.png",
                points: [
                  "Provides real-time data from industry emissions on mobile using secured login.",
                  "Real-time alerts and alarms available on the mobile.",
                  "Real-time charts, average value with prescribed limits.",
                ],
              },
              {
                title: "Reporting",
                img: "/assets/images/icon/report.png",
                points: [
                  "Pre-configured reports as per regulatory requirements.",
                  "Ad-hoc reporting and analytics on all captured data with interactive dashboards.",
                ],
              },
              {
                title: "Data Analysis",
                img: "/assets/images/icon/data-analysis.png",
                points: [
                  "Parameter limits and rules pre-configured as directed by CPCB.",
                  "Live alerts and alarms on all monitored parameters.",
                  "Highly scalable to handle 10,000+ analyzers connected in real-time.",
                  "Support wind rose projections on measured parameters.",
                  "Support forecasting models on any measured parameters.",
                ],
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white border-t-8 border-blue-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                {/* Product Icon */}
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                  />
                </div>
                {/* Title */}
                <h4 className="text-xl font-bold text-gray-700 mb-4">
                  {product.title}
                </h4>
                {/* Points */}
                <ul className="space-y-2 text-left">
                  {product.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <FiCheckCircle className="text-secondary w-5 h-5 flex-shrink-0 mr-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-10"></div>
      {/** */}
      <section id="services" className="py-16 ">
        <div className="container mx-auto px-10">
          {/* Section Heading */}
          <div className="mb-12 text-center">
            <h3 className="text-4xl font-bold text-gray-800">
              EBHOOM <span className="text-green-500">TPDS</span> for{" "}
              <span className="text-green-500">OCEMS</span>
            </h3>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
            {[
              {
                img: "/assets/images/icon/sketch.png",
                title: "Calibration",
                desc: "Monthly calibration service with EBHOOM buffer solution.",
                bgColor: "bg-red-100",
              },
              {
                img: "/assets/images/icon/motherboard.png",
                title: "Calibration History",
                desc: "Reports of each calibration.",
                bgColor: "bg-blue-100",
              },
              {
                img: "/assets/images/icon/technology.png",
                title: "Alerts",
                desc: "Get notified every time there's a relevant unread update.",
                bgColor: "bg-green-100",
              },
              {
                img: "/assets/images/icon/app-development.png",
                title: "Performance Monitoring",
                desc: "Sensor calibration monitoring and saves the history of calibration.",
                bgColor: "bg-yellow-100",
              },
              {
                img: "/assets/images/icon/list.png",
                title: "Dashboard",
                desc: "Showcase recent values in the module and the latest value charts.",
                bgColor: "bg-purple-200",
              },
              {
                img: "/assets/images/icon/network.png",
                title: "Admin Panel and Analytics",
                desc: "User Management and CMS Integration.",
                bgColor: "bg-pink-100",
              },
              {
                img: "/assets/images/icon/customer-service.png",
                title: "Users & Accounts",
                desc: "Allow users to browse through the app and check out their emission quality.",
                bgColor: "bg-indigo-100",
              },
              {
                img: "/assets/images/icon/customer-service.png",
                title: "Report",
                desc: "Generate reports and create daily, weekly or monthly snippets of the most significant metrics.",
                bgColor: "bg-teal-100",
              },
            ].map((service, index) => (
              <div
                key={index}
                className=" bg-white shadow-md rounded-lg p-6 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                {/* Service Icon */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${service.bgColor}`}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                </div>
                {/* Service Title */}
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h4>
                {/* Service Description */}
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tdps;
