import React from "react";

const Products = () => {
  const multiparameter = [
    {
      sensor: "Measuring Principle",
      paramenter: "UV VIS Dual Beam Technology - Attenuation, transmission",
    },
    {
      sensor: "Measuring Range ",
      paramenter: "see list of parameters",
    },
    {
      sensor: "optical path ",
      paramenter: "0.3 mm, 1 mm, 2 mm, 5mm, 10 mm, 50mm",
    },
    {
      sensor: "Parameters",
      paramenter: "SAC CODeq, BODeq, TOCeq, UVT, Turb 530, TSS",
    },
    {
      sensor: "Accuracy",
      paramenter: ".2%",
    },
    {
      sensor: "Reaction time T100 ",
      paramenter: "4s",
    },
    {
      sensor: "Housing material ",
      paramenter: "Stainless steel (1.4571/14404) or titanium (3.7035)",
    },
    {
      sensor: "Cable Length",
      paramenter: "500 cm",
    },
    {
      sensor: "Calibration interval ",
      paramenter: "24 months",
    },
    {
      sensor: "Power Supply ",
      paramenter: "230VAC Nominal",
    },
    {
      sensor: "Consumption",
      paramenter: "60W Max",
    },
    {
      sensor: "Warranty",
      paramenter: "1 year",
    },
  ];
  const ph = [
    {
      sensor: "Measuring Principle ",
      ph: "pH : Electrode & Potentiometric",
    },
    {
      sensor: "Measuring Range",
      ph: "pH: 0 –14 pH",
    },
    {
      sensor: "Accuracy",
      ph: "± 0.1pH (25 ℃)",
    },
    {
      sensor: "Response Time",
      ph: "≤60 Seconds",
    },
    {
      sensor: "Cable length",
      ph: "500 cm",
    },
    {
      sensor: "Power Supply",
      ph: "230VAC Nominal",
    },
    {
      sensor: "Consumption",
      ph: "60W Max",
    },
    {
      sensor: "Warranty",
      ph: "1 year",
    },
  ];
  const analyserCabinet = [
    {
      sensor: "Communication ",
      abs: "RS485 Modbus /Wifi/GPRS/ Ethernet",
    },
    {
      sensor: "Power supply",
      abs: "12 V DC",
    },
    {
      sensor: "Warranty ",
      abs: "2 years",
    },
    {
      sensor: "Consumption",
      abs: "60W Max",
    },
  ];
  return (
    <div>
      <div className="relative  h-[80vh] sm:h-[100vh] flex items-center justify-center ">
        {/* Custom Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
            linear-gradient(
              to bottom right, 
              rgba(72, 165, 47, 0.7), 
              rgba(35, 106, 128, 0.7)
            )`,
            clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
          }}
        ></div>

        {/* Additional Decorative Shapes */}
        <div className="absolute inset-0">
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <circle
              cx="20%"
              cy="20%"
              r="100"
              fill="#48a52f"
              fillOpacity="0.2"
            />
            <circle
              cx="80%"
              cy="60%"
              r="120"
              fill="#236a80"
              fillOpacity="0.2"
            />
            <circle cx="50%" cy="40%" r="70" fill="#48a52f" fillOpacity="0.1" />
            <circle cx="70%" cy="40%" r="90" fill="#48a52f" fillOpacity="0.1" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          {/* Main Text */}
          <h1
            className="text-4xl sm:text-5xl font-bold text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Products
          </h1>
          <p
            className="text-lg sm:text-xl text-white mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Online Continuous effluent Monitoring System,Complete sollution for
            backend montioring of Water. A complete solution for backend
            monitoring and control of your treatment plant
          </p>

          {/* Button */}
          <div className="mt-4 " data-aos="zoom-in" data-aos-delay="600">
            <p className="mb-4 text-md sm:text-lg text-white  max-w-xl ">
              Already using our product?{" "}
            </p>
            <a
              href="https://admin.ebhoom.com"
              target="__blank"
              className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="relative max-w-7xl mx-auto py-10 px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Features
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-2 rounded"></div>
        </div>

        {/* SVG Dotted Path (Hidden on Small Screens) */}
        <svg
          className="absolute w-full h-full hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M50,100 C200,50 400,150 600,100 S900,50 1100,100 
         M50,300 C200,250 400,350 600,300 S900,250 1100,300"
            stroke="rgba(72, 165, 47, 0.6)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 justify-items-center">
          {[
            {
              icon: "assets/images/icon/wifi3.png",
              content: "WiFi Connectivity",
            },
            {
              icon: "assets/images/icon/quality.png",
              content:
                "Water Quality Check: pH, Temperature, TDS, Turbidity, BOD, COD",
            },
            {
              icon: "assets/images/icon/monitor.png",
              content:
                "Easy Operation: Monitored easily by higher authorities & staff attendance",
            },
            {
              icon: "assets/images/icon/24-hours.png",
              content: "24 Hours Monitoring",
            },
            {
              icon: "assets/images/icon/high-signal.png",
              content: "In-Built GSM Internet",
            },
            {
              icon: "assets/images/icon/database.png",
              content: "Data Saved",
            },
            {
              icon: "assets/images/icon/worker.png",
              content: "Reduces Manpower: Reduces manpower & saves money",
            },
            {
              icon: "assets/images/icon/cross-platform.png",
              content: "Web & Mobile App",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center bg-white shadow-lg rounded-full transition-transform transform hover:scale-105 duration-300"
              style={{
                width: "180px",
                height: "180px",
                zIndex: 10,
              }}
            >
              <img
                className="w-12 h-12 mb-4"
                src={feature.icon}
                alt={feature.content}
              />
              <p className="text-sm font-normal text-gray-700 px-4">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20"></div>
      {/*video section */}
      <div className="relative bg-gray-900 py-16 lg:py-24">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-70"></div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10 text-center">
          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
            Watch Our Video
          </h2>

          {/* Video Embed */}
          <div className="relative overflow-hidden rounded-lg shadow-lg mx-auto mb-8 max-w-4xl">
            <iframe
              src="https://www.youtube.com/embed/shTSzR2weIQ?rel=0"
              title="YouTube video"
              allowFullScreen
              className="w-full h-[315px] md:h-[450px] lg:h-[500px]"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-100"></div>

      <div className="py-10 bg-gray-100">
        <div className="container mx-auto px-6">
          {/* Treatment Technology Equipments */}
          <div className="text-center mb-10" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-gray-800">
              Treatment Technology Equipments
            </h3>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              className="flex items-center bg-green-50 p-6 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/circuit.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Hardware Development
                </h4>
                <p className="text-gray-600 mt-2">
                  Treatment technology development competencies with
                  state-of-art technology
                </p>
              </div>
            </div>

            <div
              className="flex items-center bg-pink-50 p-6 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/factory.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Manufacturing
                </h4>
                <p className="text-gray-600 mt-2">
                  Scalable production capacities to capture market dynamics and
                  increasing growth rates
                </p>
              </div>
            </div>

            <div
              className="flex items-center bg-yellow-50 p-6 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/settings.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Installation and Maintenance
                </h4>
                <p className="text-gray-600 mt-2">
                  Nationwide partner network for installation and maintenance of
                  network connections, civil engineering, and project management
                  tools
                </p>
              </div>
            </div>
          </div>

          {/* IT Services and Solutions */}
          <div className="text-center mt-16 mb-10" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-gray-800">
              IT Services and Solutions
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              className="flex items-center bg-red-50 p-6 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/computer.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Software Development
                </h4>
                <p className="text-gray-600 mt-2">
                  IT front-end/back-end development competencies to develop
                  comprehensive software solutions
                </p>
              </div>
            </div>

            <div
              className="flex items-center bg-indigo-50 p-6 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/wifi2.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Software as a Service
                </h4>
                <p className="text-gray-600 mt-2">
                  Infrastructure resources to provide scalable and economical
                  software services
                </p>
              </div>
            </div>

            <div
              className="flex items-center bg-purple-50 p-6 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/globe.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Network Operations
                </h4>
                <p className="text-gray-600 mt-2">
                  The EBHOOM CMS portal for global pollution monitoring,
                  control, and management
                </p>
              </div>
            </div>
          </div>

          {/* Value-Added Smart Services */}
          <div className="text-center mt-16 mb-10" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-gray-800">
              Value-Added Smart Services
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              className="flex items-center bg-pink-50 p-6 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/pay.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Payment and Billing
                </h4>
                <p className="text-gray-600 mt-2">
                  PCI data security-compliant payment processing and billing for
                  seamless services
                </p>
              </div>
            </div>

            <div
              className="flex items-center bg-teal-50 p-6 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/search.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Future Smart Services
                </h4>
                <p className="text-gray-600 mt-2">
                  In-depth market expertise to capture trends and market demands
                </p>
              </div>
            </div>

            <div
              className="flex items-center bg-orange-50 p-6 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/monitor.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Data Analytics and Services
                </h4>
                <p className="text-gray-600 mt-2">
                  Big data and advanced analytics capabilities to offer and
                  enable data services like POI, scores, predictive maintenance,
                  and utilization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* */}
      <div className="py-10 ">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-10" data-aos="zoom-in">
            <h3 className="text-3xl font-bold text-gray-700">
              EBHOOM Turnkey Approach to Treatment Plant!
            </h3>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              className="flex items-center bg-gradient-to-r from-green-100 to-blue-100 p-6 shadow-lg rounded-lg"
              data-aos="fade-out"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/sketch.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Site Qualification
                </h4>
                <p className="text-gray-600 mt-2">
                  We offer industry-leading service
                </p>
              </div>
            </div>

            <div
              className="flex items-center bg-gradient-to-r from-green-100 to-blue-100 p-6 shadow-lg rounded-lg"
              data-aos="fade-out"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/motherboard.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Choice of Hardware
                </h4>
                <p className="text-gray-600 mt-2">
                  Partnerships with leading hardware providers, offering the
                  latest in treatment technology
                </p>
              </div>
            </div>

            <div
              className="flex items-center bg-gradient-to-r from-green-100 to-blue-100 p-6 shadow-lg rounded-lg"
              data-aos="fade-out"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/technology.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Engineering and Installation
                </h4>
                <p className="text-gray-600 mt-2">
                  Advanced analytics capabilities to offer and enable services
                  like predictive maintenance and utilization
                </p>
              </div>
            </div>

            <div
              className="flex items-center  bg-gradient-to-r from-green-100 to-blue-100 p-6 shadow-lg rounded-lg"
              data-aos="fade-out"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/app-development.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Operator Mobile App and WebApp
                </h4>
                <p className="text-gray-600 mt-2">
                  Our app allows operators to easily manage devices
                </p>
              </div>
            </div>

            <div
              className="flex items-center  bg-gradient-to-r from-green-100 to-blue-100 p-6 shadow-lg rounded-lg"
              data-aos="fade-out"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/list.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Commissioning
                </h4>
                <p className="text-gray-600 mt-2">
                  Ensuring the EBHOOM control and monitor device meets your
                  project's operational requirements
                </p>
              </div>
            </div>

            <div
              className="flex items-center  bg-gradient-to-r from-green-100 to-blue-100 p-6 shadow-lg rounded-lg"
              data-aos="fade-out"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/network.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Network Software
                </h4>
                <p className="text-gray-600 mt-2">
                  Our network management software offers real-time access
                  management of your treatment plant
                </p>
              </div>
            </div>

            <div
              className="flex items-center  bg-gradient-to-r from-green-100 to-blue-100 p-6 shadow-lg rounded-lg"
              data-aos="fade-out"
            >
              <img
                className="w-16 h-16"
                src="assets/images/icon/customer-service.png"
                alt="ebhoom"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold text-gray-800">
                  Customer Support and O&amp;M Services
                </h4>
                <p className="text-gray-600 mt-2">
                  We offer a variety of customer support packages to suit your
                  ongoing service needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20"></div>

      <div className="container mx-auto space-y-16 px-4 md:px-8">
        {/* Section 1: Multi Parameter Sensor */}
        <div className="space-y-8">
          <div className="text-center" data-aos="zoom-in">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Technical specifications - Multi Parameter Sensor
            </h3>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
            {/* Image: Left */}
            <div
              className="w-full md:w-1/2 cursor-pointer transform duration-300"
              style={{
                transform: "perspective(400px) rotateY(20deg)",
              }}
              data-aos="zoom-out"
            >
              <img
                src="/assets/images/Ebhoom/18.jpg"
                alt="Multi Parameter Sensor"
                className="w-full  duration-300"
              />
            </div>
            {/* Table: Right */}
            <div className="w-full md:w-1/2" data-aos="zoom-out">
              <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-200 text-left text-gray-800">
                    <th className="border border-gray-300 px-4 py-2">Sensor</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Multi Parameter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {multiparameter.map((item) => (
                    <tr key={item.sensor}>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.sensor}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.paramenter}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 2: pH Sensor */}
        <div className="space-y-8">
          <div className="text-center" data-aos="zoom-in">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Technical specifications - pH Sensor
            </h3>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
            {/* Table: Left */}
            <div className="w-full md:w-1/2" data-aos="zoom-out">
              <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-200 text-left text-gray-800">
                    <th className="border border-gray-300 px-4 py-2">Sensor</th>
                    <th className="border border-gray-300 px-4 py-2">pH</th>
                  </tr>
                </thead>
                <tbody>
                  {ph.map((item) => (
                    <tr key={item.sensor}>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.sensor}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.ph}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Image: Right */}
            <div className="w-full md:w-1/2" data-aos="zoom-in">
              <img
                src="/assets/images/Ebhoom/12.png"
                alt="pH Sensor"
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Analyser Cabinet */}
        <div className="space-y-8">
          <div className="text-center" data-aos="zoom-in">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Technical specifications - Analyser Cabinet
            </h3>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
            {/* Image: Left */}
            <div className="w-full md:w-1/2" data-aos="zoom-in">
              <img
                src="/assets/images/device_1.jpg"
                alt="Analyser Cabinet"
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            {/* Table: Right */}
            <div className="w-full md:w-1/2" data-aos="zoom-out">
              <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-200 text-left text-gray-800">
                    <th className="border border-gray-300 px-4 py-2">
                      SensorData collection hub & Display Cabinet
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      ABS make
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Display
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      2" LCD display
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Data Transfer features
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="list-disc ml-4 space-y-2">
                        <li>PDF/Excel report from Server</li>
                        <li>
                          All parameters displayed on the screen and accessible
                          with a username/password
                        </li>
                        <li>Cloud-based DATA logger for CPCB/SPCB Portal</li>
                        <li>
                          Visual alarm activated for status above set limits
                        </li>
                        <li>Additional custom features (optional)</li>
                      </ul>
                    </td>
                  </tr>
                  {analyserCabinet.map((item) => (
                    <tr key={item.sensor}>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.sensor}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.abs}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20"></div>
      <div className="container mx-auto px-4 space-y-8">
        {/* Section Heading */}
        <div className="text-center" data-aos="zoom-in">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 ">
            Installation & Commissioning
          </h3>
        </div>

        {/* Content Section */}
        <div className="flex justify-center">
          {/* Instruction List */}
          <div
            className="w-full md:w-2/3 lg:w-1/2 bg-indigo p-6 rounded-lg shadow-lg bg-indigo-100"
            data-aos="zoom-in"
          >
            <ol className="space-y-4 text-gray-700 text-base leading-relaxed">
              <li className="flex items-start space-x-2">
                <span>✔️</span>
                <p>
                  Connect the pH sensor in the pipeline and the multi-parameter
                  sensor in the open tank.
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <span>✔️</span>
                <p>
                  Fix the wall mount and insert the butterfly behind the
                  WWOCEMS24.
                </p>
              </li>
              <li className="flex items-start space-x-2">
                <span>✔️</span>
                <p>Plug in the DC charger adapter.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>✔️</span>
                <p>Check the display switch.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>✔️</span>
                <p>Verify the Internet connectivity.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>✔️</span>
                <p>Call customer support for new user registration.</p>
              </li>
              <li className="flex items-start space-x-2">
                <span>✔️</span>
                <p>
                  View the quality results on the app with login credentials.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
