import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./services.css";
import { FiPlus, FiMinus } from "react-icons/fi";
import emsscrn1 from "../../assets/images/emsscrn1.png";
import emsscrn2 from "../../assets/images/emsscrn2.png";

const Services = () => {
  // State for tracking active accordion (NEW)
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Function to toggle accordion (NEW)
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const parameter = [
    {
      item: "Step 1:",
      step: "Prepare different dilutions using Potassium Hydrogen Phthalate (KHP) with stock solution 1000ppm and check performance of instrument in respective dilutions. Calibrate optics of the system with the procedure detailed below.",
    },
    {
      item: "Step 2:",
      step: "Prepare stock standard (1000ppm equivalent COD) in laboratory and store it in refrigerator. Stock is stable upto six months, if stored in refrigerator. Hence, as a safety margin, do not use stock older than five months in calibration and also do not use stocks, if exposed in environment because of any reason.",
    },
    {
      item: "Step 3:",
      step: "Prepare working solution of nearly 1/3rd, 1/2, 2/3rd and 2 times of working range (i.e. COD levels expected in a plant) and perform the functional test on site within 24 hours.",
    },
    {
      item: "Step 4:",
      step: "Verify the results and if not found within 5% of the range, perform functional check again.",
    },
    {
      item: "Step 5:",
      step: "Submit middle dilution (of the range in use at plant) as sample for parallel COD measurements in lab along-with the samples.",
    },
  ];
  const installationAndCalibration = [
    {
      item: "Step 4:",
      step: "Send samples for testing to a EPA recognized laboratory, which has participated in AQC, within last one year and has passed the AQC criteria successfully.",
    },
    {
      item: "Step 5:",
      step: "Collect sample results within maximum seven days from the date of sampling.",
    },
    {
      item: "Step 6:",
      step: "Collect copy of certificate of Lab’s participation in AQC (as prescribed by CPCB) and its performance results in AQC, along-with the sample’s results each time either physically or electronically (email etc.).",
    },
    {
      item: "Step 7:",
      step: "Enter data of 12 (Twelve) Grab samples lab results of every parameter (pH, BOD, COD, TSS) into the OCEMS within seven days of sampling and maintain a record of calibration results entered in the OCEMS.",
    },
    {
      item: "Step 8:",
      step: "Ensure that there are no previous calibration results entries in the system. If there are entries, remove all entries from the system. These entries have to be removed only at the first time calibration.",
    },
    {
      item: "Step 9:",
      step: "While making calibration results entries, ensure that outliers (data points) as per given “Criteria of outliers” in this document, are not entered into the OCEMS.",
    },
    {
      item: "Step 10:",
      step: "within next seven days from the first sampling date, Repeat the exercise again following steps 1 to 7 again.",
    },
    {
      item: "Step 11:",
      step: "This time system should hold at-least total 15 valid calibration points (out of 24 data points) after calibration points entries.",
    },
    {
      item: "Step 12:",
      step: "Compare results of composite sampling with average of continuous 15 minute values received through OCEMS for both days. The composite sample results should not be an outlier.",
    },
    {
      item: "Step 13:",
      step: "If the system does not show Standard Error Mean (SEM) within prescribed criteria for any of the parameters, that particular parameter should be recalibrated, as per above procedure.",
    },
    {
      item: "Step 14:",
      step: "As COD is the principal component of measurement of these instruments, cross checkresults of COD of the middle dilution, as sample. If not within 5% range of prepared working solution, perform function check again for COD parameter.",
    },
    {
      item: "Step 15:",
      step: "Only (01) sample out of 24 samples (12 samples per day for two calibration days) shall be sent to SPCBs/PCCs or CPCB lab for cross check, while doing initial calibration of OCEMS in any industry. Sample should again be sent to SPCBs/PCCs or CPCB lab, when system fails in performance and is recommended for re-calibration. The SPCBs/PCCs or CPCB may accept sample only if it is preserved and transported following standard procedure. Report on basic installation and calibration of OCEMS at STPs should be sent to SPCBs/PCCs and CPCB.",
    },
    {
      item: "Step 16:",
      step: "SPCBs/PCCs or CPCB will check the results of STPs sample received with online data and may ask for repeat of basic calibration, if found to be deviating more than acceptable error in standard laboratory method.",
    },
  ];
  const validation = [
    {
      item: "Step 4:",
      step: "Sample should be given for testing to a EPA recognized laboratory only, which has participated in AQC - proficiency test, within last one year and has passed the criteria successfully.",
    },
    {
      item: "Step 5:",
      step: "Collect result from laboratory within maximum seven days from the date of sampling. ",
    },
    {
      item: "Step 6:",
      step: "Collect copy of certificate of Lab’s participation in AQC (as prescribed by CPCB) and its performance results in AQC, with the sample results each time either physically or electronically (email etc.).",
    },
    {
      item: "Step 7:",
      step: "Visit OCEMS and enter data point in the library- ensuring that outliers are not entered into the system. Now the system will have one entry added to library. These data points of calibration along-with global calibration value should be available at central portals of respective SPCB/PCC and CPCB.",
    },
    {
      item: "Step 8:",
      step: "If data point is an outlier, data entry should not be made in OCEMS, instead repeat the process from step 1 to step 7 again on the same day by picking up the sample again.",
    },
    {
      item: "Step 9:",
      step: "If two consecutive validation check samples fall out of range and remains outliers, recommend basic OCEMS calibration again through the supplier.",
    },
  ];

  useEffect(() => {
    const accordionItemHeaders = document.querySelectorAll(
      ".accordion-item-header"
    );

    const handleAccordionClick = (event) => {
      const header = event.currentTarget;
      header.classList.toggle("active");
      const body = header.nextElementSibling;
      if (header.classList.contains("active")) {
        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        body.style.maxHeight = 0;
      }
    };

    accordionItemHeaders.forEach((header) => {
      header.addEventListener("click", handleAccordionClick);
    });

    // Cleanup listeners on unmount
    return () => {
      accordionItemHeaders.forEach((header) => {
        header.removeEventListener("click", handleAccordionClick);
      });
    };
  }, []);

  return (
    <div>
      <div className="py-10"></div>
      <section
        id="services-hero"
        className="relative bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-16 overflow-hidden"
      >
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            {/* Left Content */}
            <div data-aos="fade-up">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Online Continuous Pollution Monitoring Application
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                A complete solution for backend emission | effluent | noise
                monitoring!
              </p>
              <p className="text-gray-600 mb-2">
                Connect EBHOOM Application with any Global device
              </p>
              <p className="text-gray-600 mb-2">
                Start your 14 days free trial
              </p>
              <p className="text-gray-600 mb-6">
                Get started with trial MODEL today
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
                <input
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:flex-grow"
                  placeholder="Your Email address"
                />
                <button className="px-4 py-2 lg:py-1.5 bg-secondary text-white rounded-lg hover:bg-secondary transition w-auto">
                  Request Demo
                </button>
              </div>

              <p className="text-gray-600">
                Already using our service?{" "}
                <a
                  href="https://ems.ebhoom.com/"
                  target="__blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  SignIn
                </a>
              </p>
            </div>

            {/* Right Content */}
            <div
              className="relative flex justify-center lg:justify-end"
              data-aos="fade-down"
            >
              {/* Image with rounded background */}
              <div
                className="bg-white shadow-lg rounded-3xl p-6 transform scale-90 md:scale-100 relative z-10"
                data-aos="zoom-in"
              >
                <img
                  src="assets/images/wms.png"
                  alt="WMS"
                  className="rounded-3xl shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Decorative Background */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-300 via-blue-100 to-white rounded-full h-[400px] w-[400px] md:w-[600px] md:h-[600px] transform -translate-x-1/4 translate-y-1/4 lg:translate-x-1/4 lg:-translate-y-1/4"></div>
            </div>
          </div>
        </div>

        {/* Decorative Edge Background */}
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-r from-blue-100 to-blue-200 rounded-b-[50px] -z-10"></div>
      </section>
      <div className="py-10 "></div>
      {/*what we offer */}
      <div className="py-16 ">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <div className="mb-12 text-center">
            <h3
              className="text-4xl font-extrabold text-gray-800"
              data-aos="zoom-in"
            >
              What We Offer ?
            </h3>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h4
              className="text-2xl font-semibold text-gray-600 mb-4 max-w-3xl leading-snug"
              data-aos="fade-down"
            >
              Connect any systems of air, water, noise & energy to{" "}
              <span className="font-extrabold text-secondary">EBHOOM EMS</span>{" "}
              application
            </h4>
            {/* Decorative Icons */}
            <div className="flex flex-wrap justify-center items-center mt-12 gap-6 mb-10">
              {/* Icon Cards */}
              {[
                { icon: "🌬️", label: "Air Quality" },
                { icon: "💧", label: "Water Monitoring" },
                { icon: "⚡", label: "Energy" },
                { icon: "🔊", label: "Noise Levels" },
                { icon: "📊", label: "Real-time Reporting" },
                { icon: "✅", label: "CPCB Compliant" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-48 h-48"
                  data-aos="slide-right"
                  data-aos-delay={index * 100}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h5 className="text-lg  text-gray-800 mt-4 text-center">
                    {item.label}
                  </h5>
                </div>
              ))}
            </div>
            {/* Description Paragraph 1 */}
            <p className="text-lg font-normal text-gray-700 mb-4 max-w-4xl">
              EBHOOM is a real-time Pollution monitoring system that can help
              you comply with the CPCB regulations. The data from EBHOOM can be
              submitted to the KSPCB in real time, which will help you to meet
              the requirements of the Board.
            </p>

            {/* Description Paragraph 2 */}
            <p className="text-lg text-gray-700 max-w-4xl">
              Easy to use and maintain. Compliant with CPCB and SPCB
              regulations. Helps to improve water quality management. Reduces
              the risk of pollution.
            </p>
            {/* Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="overflow-hidden " data-aos="fade-up">
                <img
                  src={emsscrn1}
                  alt="EMS Screen 1"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="overflow-hidden " data-aos="fade-up">
                <img
                  src={emsscrn2}
                  alt="EMS Screen 2"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-10"></div> */}
      <div className="flex items-center justify-center mt-8">
        <div
          className="w-3/4  flex flex-col items-center justify-center text-center py-16 bg-blue-100  shadow-lg rounded-xl"
          data-aos="zoom-in"
        >
          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-500 mb-6">
            For Calibrating your <span className="text-secondary">OCEMS</span>,
            contact us
          </h3>

          {/* Button */}
          <NavLink to="/contact" target="">
            <button
              className="bg-secondary text-white py-3 px-6 rounded-full shadow-md hover:bg-gray-800 hover:text-white hover:shadow-lg transition duration-300 transform hover:scale-105"
              type="button"
            >
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>

      <div className="py-10"></div>
      {/*calibration section */}
      <section id="calibration_ocems" className="py-16 ">
        <div className="container mx-auto px-6">
          {/* Title Section */}
          <div className="text-center mb-10" data-aos="zoom-out">
            <h3 className="text-4xl font-bold text-gray-800">
              Calibration of <span className="text-blue-500">OCEMS</span>
            </h3>
          </div>

          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div data-aos="fade-up">
              <p className="text-lg text-black leading-relaxed">
                STP Operators may deploy different makes of instruments based on
                different technologies measuring effluent quality in terms of{" "}
                <strong className="text-green-500">PH</strong>,{" "}
                <strong className="text-green-500">BOD</strong>,{" "}
                <strong className="text-green-500">COD</strong>, and{" "}
                <strong className="text-green-500">TSS</strong>. Therefore,
                operation and calibration mechanisms of such instruments will
                differ. This document covers calibration procedures for commonly
                used technologies for effluent monitoring, available as on date,
                such as UV-Vis principle-based systems for{" "}
                <strong className="text-green-500">BOD</strong>,{" "}
                <strong className="text-green-500">COD</strong>, &{" "}
                <strong className="text-green-500">TSS</strong> measurement
                having dual-beam scanning and multipoint calibration mechanisms.
              </p>
              <ul className="mt-6 text-black space-y-2">
                <li className="text-lg font-semibold">
                  Complete calibration of{" "}
                  <span className="text-blue-500">OCEMS</span> requires the
                  following checks, calibrations & validations:
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">&#9679;</span> Function
                  Check
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">&#9679;</span> Basic
                  Installation & Calibration
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">&#9679;</span>{" "}
                  Continuous Validation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">&#9679;</span>{" "}
                  Performance Check
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div data-aos="fade-down" className="flex justify-center">
              <img
                src="/assets/images/Ebhoom/23.png"
                alt="Ocems Calibration"
                style={{ height: "350px", width: "200px" }}
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="items-center mt-16">
            {/* Left Image */}
            {/* <div data-aos="fade-up">
              <img
                src="/assets/images/Ebhoom/6.png"
                alt="OCEMS"
                className="rounded-lg shadow-md"
                loading="lazy"
              />
            </div> */}

            {/* Right Content */}
            <div data-aos="fade-down">
              <p className="text-lg text-black leading-relaxed">
                The calibration shall be considered complete when processes (i),
                (ii), (iii), and (iv) have been successfully completed and all
                the conditions of the protocol are found to be within
                permissible ranges/limits mentioned in this document.
              </p>
              <p className="text-lg text-black leading-relaxed mt-6">
                Function checks, Installation & calibration checks are the
                responsibility of the firm or its authorized representative
                installing <span className="text-blue-500">OCEMS</span>.
                Ensuring continuous validation of{" "}
                <span className="text-blue-500">OCEMS</span> is the
                responsibility of the operator of STPs (to be verified by
                SPCBs/PCCs). Performance checks of{" "}
                <span className="text-blue-500">OCEMS</span> are the
                responsibility of SPCBs/PCCs to verify the performance of plants
                against stipulated standards.
              </p>
            </div>
          </div>

          {/* Third Row */}
          <div className="mt-16  items-center">
            {/* Left Content */}
            <div className="text-left" data-aos="fade-up">
              <h5 className="text-2xl font-bold text-gray-800 mb-4">
                OCEMS Function Check
              </h5>
              <p className="text-lg text-black leading-relaxed">
                The purpose of this exercise is to cross-verify the operation of
                basic electronics involved in the system. When required, this
                data should be shared through email with SPCBs/PCCs. Records of
                this function check should be available in the plant.
              </p>
              <h6 className="text-xl font-semibold text-gray-800 mt-6">
                Parameter-wise function check process is below:
              </h6>
              <ul className="space-y-4 mt-4 text-black">
                <li>
                  <strong className="text-green-500">pH:</strong> Calibrate pH
                  meter with Certified (having international traceability)
                  Buffer solutions of pH 4, 7, 9.2 & 10. Perform at least
                  two-point calibration within the expected range of the pH in
                  the plant. For example, if pH is expected to be 7.8, then
                  perform two-point calibration with pH 7 and 9.2.
                </li>
                <li>
                  <strong className="text-green-500">BOD:</strong> Not possible.
                </li>
                <li>
                  <strong className="text-green-500">COD:</strong> Use KHP
                  Certified Reference Material (CRM).
                </li>
                <li>
                  <strong className="text-green-500">TSS:</strong> Use Formazine
                  solution. Care should be taken while handling the solution.
                </li>
              </ul>
              <p className="text-lg text-black mt-6">
                The frequency of function tests is every 15 days. STPs may
                engage the firms providing services of O&M.
              </p>
            </div>

            {/* Right Image */}
            {/* <div className="flex justify-center" data-aos="fade-down">
              <div className="relative aspect-w-16 aspect-h-9 mt-5">
                <img
                  src="/assets/images/Ebhoom/8.png"
                  alt="Ocems Calibration"
                  className="rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/** steps sec1*/}
      <section id="faq" className="services bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="row gap-4 text-yellow-500" data-aos="zoom-out">
            <div className="accordion">
              <div className="accordion-item bg-white shadow-md rounded-md mb-4">
                <div className="accordion-item-header p-4 font-semibold text-lg ">
                  Steps
                </div>
                <div className="accordion-item-body max-h-0 overflow-hidden transition-all duration-300">
                  <div className="accordion-item-body-content p-4">
                    {parameter.map((item) => (
                      <p className="steps text-gray-800 mb-2">
                        <span className="font-bold mr-6">{item.item}</span>
                        {item.step}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** steps sec1 end*/}
        {/** Basic Installation and Calibration start*/}

        <div id="left_2" className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
            {/* Image Section */}
            {/* <div className="w-full lg:w-1/2" data-aos="fade-up">
              <img
                src="/assets/images/Ebhoom/16.png"
                className="w-full rounded-md shadow-lg"
                alt="OCEMS image"
                loading="lazy"
              />
            </div> */}

            {/* Content Section */}
            <div
              className="w-full  justify-center"
              data-aos="fade-down"
            >
              <h5 className="text-xl font-bold text-gray-800 mb-4">
                Basic Installation and Calibration of OCEMS
              </h5>
              <p className="text-black text-lg ">
                The purpose of this exercise is to ensure installation of the
                system in a plant and collect calibration data points for better
                matrix matching and to authenticate the range of measurement
                coverage. The data collected should be shared through email to
                SPCBs/PCCs or CPCB. Copy of this basic or initial calibration
                should be available at any point of time in the plant. If such
                exercise was not done earlier, the same should be completed and
                records be maintained. Basic calibration test should be repeated
                when two consecutive validation tests or performance tests fail
                and results fall beyond the “criteria of outliers” given in this
                document.
              </p>
            </div>
          </div>
        </div>
        {/** Basic Installation and Calibration end*/}
        {/*step 2 start */}
        <section id="faq" className="services py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="row space-y-4 " data-aos="zoom-out">
              <div className="accordion">
                {/* Accordion Item */}
                <div className="accordion-item bg-white rounded-lg shadow-md mb-4">
                  <div className="accordion-item-header p-4 font-semibold ">
                    Steps
                  </div>
                  <div className="accordion-item-body max-h-0 overflow-hidden transition-all duration-300">
                    <div className="accordion-item-body-content p-4 text-gray-700">
                      {/* Static Steps */}
                      <p className="steps mb-2">
                        <span className="font-bold mr-6">Step 1:</span> Conduct
                        Grab Sampling of effluent for 24 hours at an interval of
                        02 (Two) hours.
                      </p>
                      <p className="steps mb-2">
                        <span className="font-bold mr-6">Step 2:</span> Conduct
                        flow based composite sampling for every 24 hours. All
                        measurements shall be reported in metric SI units. For
                        Example, the flow shall be reported in m3/hr after
                        conversion factor of 4.546 is applied to the readings in
                        MGD.
                      </p>
                      <p className="steps mb-4">
                        <span className="font-bold mr-6">Step 3:</span> Follow
                        standard sampling procedure for:
                        <ul className="list-disc list-inside mt-2 ml-8">
                          <li>Flow-based composite preparation</li>
                          <li>Sample collection</li>
                          <li>Sample storage with ice</li>
                          <li>Sample preservation</li>
                          <li>Samples deposition</li>
                        </ul>
                      </p>

                      {/* Dynamic Steps */}
                      {installationAndCalibration.map((item, index) => (
                        <p key={index} className="steps mb-2">
                          <span className="font-bold mr-6">{item.item}</span>{" "}
                          {item.step}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*step 2 end */}
        {/**Continuous Validation of OCEMS  */}
        <div id="right_3" className="container mx-auto px-4 py-10">
          <div className="items-center ">
            {/* Content Section */}
            <div
              className="w-full  mb-6 lg:mb-0"
              data-aos="fade-up"
            >
              <h5 className="text-xl font-bold text-gray-800 mb-4">
                Continuous Validation of OCEMS
              </h5>
              <p className="text-black text-lg mb-4">
                The purpose of this exercise is to check the validity of earlier
                calibration and collection of validated calibration data points
                for better matrix matching and to authenticate the range of
                measurement coverage. Frequency of continuous validation by
                plant operators should be once in 15 (Fifteen) days. The data
                collected should also be shared through email to CPCB,
                SPCB/PCCs.
              </p>
              <p className="text-black mb-4">
                <span className="font-bold mr-4">Function 1:</span> OCEMS
                Function check as above (as per technology used) to be performed
                once in fifteen days or fortnightly basis.
              </p>
              <p className="text-black">
                <span className="font-bold mr-4">Function 2:</span> OCEMS
                Validation through routine calibration library generation, to be
                performed once in fifteen days or fortnightly basis.
              </p>
            </div>

            {/* Image Section */}
            {/* <div
              className="w-full lg:w-1/2 flex justify-center"
              data-aos="fade-down"
            >
              <img
                src="/assets/images/Ebhoom/3.jpg"
                alt="Ocems Calibration"
                className="w-full max-w-lg "
                loading="lazy"
              />
            </div> */}
          </div>
        </div>

        {/**step 3 start */}
        <div className="container mx-auto px-4 py-10">
          <div className="accordion-item bg-white shadow-md rounded-md mb-4 px-4">
            <div className="accordion-item-header p-4 font-semibold text-lg ">
              Process of Routine Calibration Library Generation
            </div>
            <div className="accordion-item-body max-h-0 overflow-hidden transition-all duration-300">
              <div className="accordion-item-body-content p-4">
                <p className="steps text-gray-800 mb-2">
                  <span className="font-bold mr-6">Step 1:</span> Pick up one
                  sample of effluent (treated water) from the OCEMS location.
                </p>
                <p className="steps text-gray-800 mb-2">
                  <span className="font-bold mr-6">Step 2:</span> Create data
                  entry point in OCEMS and note down exact date and time
                  along-with Global calibration value at this point of time.
                </p>
                <p className="steps text-gray-800 mb-2">
                  <span className="font-bold mr-6">Step 3:</span> Follow
                  standard sampling procedure for:
                  <ul className="list-disc list-inside">
                    <li>Sample collection</li>
                    <li>Sample preservation</li>
                    <li>Sample storage with ice</li>
                    <li>Sample deposition</li>
                  </ul>
                </p>
                {validation.map((item) => (
                  <p className="steps text-gray-800 mb-2">
                    <span className="font-bold mr-6">{item.item}</span>
                    {item.step}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
