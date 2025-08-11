// src/components/Autonerve.jsx

import React from "react";
import AutonerveImage from "../../assets/images/autonerve.png"; // Adjust path as needed

const Autonerve = () => {
  const coreCapabilities = [
    {
      title: "Secure Remote Control",
      description:
        "Trigger pumps, aerators, blowers, dosing units, and valves from anywhere with command authentication, encryption, and fail-safe interlocks.",
    },
    {
      title: "Role-Based Permissions",
      description:
        "Ensure only authorized operators can issue specific commands, with different control levels for various team members.",
    },
    {
      title: "Real-Time Feedback Loop",
      description:
        "Receive live status confirmation after each command and automatic fallback to a safe state if acknowledgement fails.",
    },
    {
      title: "Predictive Maintenance Intelligence",
      description:
        "Continuously monitor vibration, temperature, and electrical data to detect early signs of wear and receive automated alerts before failures occur.",
    },
    {
      title: "Full Audit Trail",
      description:
        "Every action is logged with a timestamp, operator ID, and reason code, providing a tamper-proof history for compliance and safety reviews.",
    },
  ];

  const benefits = [
    {
      title: "Reduce Operational Delays",
      description: "Cut delays by up to 80% by enabling instant remote action.",
    },
    {
      title: "Cut Costs",
      description: "Reduce site visits and travel costs by 30–50%.",
    },
    {
      title: "Extend Equipment Life",
      description:
        "Add 2–5 years to equipment life through predictive maintenance.",
    },
    {
      title: "Ensure Compliance",
      description:
        "Maintain regulator-ready audit logs for every remote intervention.",
    },
  ];

  const howItWorks = [
    {
      title: "Connect",
      description:
        "AutoNerve Edge Gateway links to your equipment PLC, SCADA, or direct Modbus/relay output.",
    },
    {
      title: "Secure",
      description: "TLS-encrypted command channel with user authentication.",
    },
    {
      title: "Control",
      description:
        "Send commands from EBHOOM cloud dashboard, mobile app, or API.",
    },
    {
      title: "Verify",
      description: "Live equipment status updates confirm command execution.",
    },
    {
      title: "Predict",
      description:
        "Vibration, temperature, and electrical trend analysis spot trouble early.",
    },
  ];

  const useCases = [
    {
      title: "STP & ETP Plants",
      description:
        "Start/stop aerators and pumps, monitor motor health, prevent breakdowns during load changes.",
    },
    {
      title: "Manufacturing",
      description:
        "Adjust valves or blowers for emission control while tracking mechanical wear.",
    },
    {
      title: "Utilities",
      description:
        "Manage dosing pumps remotely, predict service needs before they disrupt supply.",
    },
    {
      title: "Environmental Consultants",
      description:
        "Operate monitoring rigs remotely and maintain uptime without frequent site visits.",
    },
  ];

  const techSpecs = [
    {
      label: "Protocols",
      value: "Modbus RTU/TCP, MQTT command topics, HTTP API",
    },
    {
      label: "Security",
      value: "TLS 1.2+, role-based access control, command signing",
    },
    {
      label: "Hardware",
      value: "Works with EBHOOM gateways (ESP32, Industrial Linux)",
    },
    {
      label: "Command Types",
      value: "Digital ON/OFF, analog setpoint, predefined sequences",
    },
    {
      label: "Predictive Inputs",
      value:
        "Vibration sensor, thermocouple/RTD, current & voltage sensors, tachometer",
    },
    {
      label: "Fail-Safes",
      value: "Watchdog timers, auto-revert logic, interlock mapping",
    },
  ];

  const faqs = [
    {
      question: "Can remote commands override safety interlocks?",
      answer:
        "No — safety interlocks always take priority to prevent unsafe operations.",
    },
    {
      question: "Can I integrate this with my SCADA system?",
      answer:
        "Yes — via Modbus or MQTT, AutoNerve can plug into most existing SCADA/PLC setups.",
    },
    {
      question: "How does predictive maintenance work?",
      answer:
        "Sensors feed real-time vibration, temperature, voltage, current, and RPM data to our AI engine, which detects abnormal patterns and sends alerts before failures happen.",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 lg:py-25 mt-60">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-500 to-blue-600 dark:from-green-700 dark:to-blue-900 overflow-hidden shadow-2xl rounded-3xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24 -mt-60">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg
            className="absolute h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M100 0L50 100H0V0H100ZM50 100L100 0H0L50 100Z"
              fill="url(#gradient)"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="100%" stopColor="#223a5aff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/*inside Hero Section */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between py-12 lg:py-14 text-white">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Operate your environmental infrastructure without being on site.
            </h2>
            <p className="mt-4 text-lg lg:text-xl opacity-90">
              With AutoNerve Remote Operations, EBHOOM brings secure, real-time
              control and predictive insight to your OCEMS, STP, ETP, and plant
              assets—right from your dashboard or mobile app.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <a
                onClick={() => (window.location.href = "tel:+916282386462")}
                className="bg-white text-blue-600 dark:bg-gray-800 dark:text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-600 transition duration-300 transform hover:scale-105 cursor-pointer"
              >
                Book a Live Demo
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end px-6">
            <img
              src={AutonerveImage}
              alt="AutoNerve Remote Operations"
              className="rounded-xl shadow-2xl w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16" >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Why Remote Operations + Predictive Maintenance?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Manual site visits cost time, money, and delay critical responses.
            Equipment failures cost even more. AutoNerve enables your team to
            act safely, instantly, and intelligently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Delays in emergency interventions",
            "High travel & labor costs for on-site checks",
            "Inconsistent control due to human error",
            "Difficulty logging and auditing manual interventions",
            "Unexpected pump or motor failures due to undetected wear",
          ].map((problem, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4"
            data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="text-red-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </span>
              <p className="text-gray-700 dark:text-gray-300">{problem}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Capabilities Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Core Capabilities
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A suite of features designed to provide complete control and insight
            into your operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {coreCapabilities.map((capability, index) => (
            <div
              key={index}
              className="relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl border-t-4 border-green-500 dark:border-green-400"
            data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {capability.title}
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
{/* How It Works Section */}
      <div className="bg-white dark:bg-gray-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white font-bold text-2xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
       {/* Use Cases Section */}
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Use Cases
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-right"
                data-aos-delay={index * 150}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24 mt-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Benefits for Your Operations
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transform your workflow with tangible improvements in efficiency,
            cost, and reliability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-blue-50 dark:bg-blue-900 p-8 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 duration-300"
           data-aos="flip-up"
              data-aos-delay={index * 100}
           >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
     
      {/* Technical Specs & FAQ Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16 lg:py-24 -mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Specs */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Technical Specs
              </h2>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <table className="w-full text-left">
                  <tbody>
                    {techSpecs.map((spec, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-700"
                      >
                        <td className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                FAQ
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-lg bg-white dark:bg-gray-900 shadow-md p-6 cursor-pointer"
                  >
                    <summary className="flex justify-between items-center font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                      {faq.question}
                      <svg
                        className="w-6 h-6 text-gray-400 dark:text-gray-600 transform group-open:rotate-180 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autonerve;
