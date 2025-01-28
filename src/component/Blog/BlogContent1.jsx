import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const BlogContent1 = () => {
  return (
    <>
      {/* Divider */}
      <div className="py-10"></div>

      {/* Divider */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block lg:col-span-3"></div>

          {/* Blog Content */}
          <div className="col-span-12 lg:col-span-6" data-aos="fade-up">
            <Link to="/blog" className="inline-block mb-6">
            <button className="px-4 py-2 border-2 border-gray-800 text-black text-sm rounded-2xl hover:bg-secondary hover:text-white transition">
                Back
              </button>
            </Link>
            <img
              className="w-full rounded-lg shadow-lg mb-6"
              src="/assets/images/understandingOCEMS.jpg"
              alt="ebhoom"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Understanding OCEMS: The Future of Industrial Pollution Control
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              With global awareness of environmental protection on the rise,
              industries face increasing pressure to adopt cleaner, more
              efficient practices. One of the key tools that industries are
              using to meet these expectations is the Online Continuous Emission
              Monitoring System (OCEMS).
            </p>

            <div className="flex items-center text-sm text-gray-600 mb-6">
              <span className="flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="mr-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                10/10/24
              </span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="mr-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                10 minute read
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              What is OCEMS?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              OCEMS, or Online Continuous Emission Monitoring System, is a
              sophisticated technology that continuously tracks emissions
              released by industrial processes. By using advanced sensors and
              data collection methods, OCEMS records real-time emission levels
              of key pollutants such as carbon dioxide (CO2), sulfur dioxide
              (SO2), nitrogen oxides (NOx), and particulate matter (PM).
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              The Need for Real-Time Monitoring
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
            One of the biggest advantages of OCEMS is real-time emission
                monitoring. In traditional systems, industries often relied on
                periodic sampling and testing, which left large gaps in data and
                made it difficult to react quickly to emission spikes. Real-time
                data provided by OCEMS fills this gap, offering continuous
                insights into emission levels, which enables industries to react
                immediately to irregularities. If pollutant levels spike
                unexpectedly, real-time monitoring systems alert operators
                instantly, allowing them to take immediate corrective action.It
                ensure ongoing compliance. With real-time data, industries can
                keep emissions below regulatory limits at all times, avoiding
                the risk of penalties or shutdowns.It also improve efficiency.
                Emission data can highlight areas where processes are
                inefficient, leading to opportunities for optimization, which
                not only reduces emissions but also lowers costs.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              How OCEMS Helps with Compliance
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              OCEMS ensures compliance by providing a continuous and accurate
              record of emissions that can be reported directly to regulatory
              authorities. This system enables industries to demonstrate that
              they are within the legal limits for pollutant discharge.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Future of OCEMS Technology
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The future of OCEMS is closely tied to advancements in IoT
              (Internet of Things) and AI (Artificial Intelligence). These
              technologies are expected to make emission monitoring even more
              efficient, precise, and user-friendly.
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
              <li>
                IoT Integration: The integration of IoT allows OCEMS devices to
                connect wirelessly to other industrial monitoring systems. This
                connectivity enables seamless data sharing across different
                platforms and locations, improving the accuracy of emission
                tracking.
              </li>
              <li>
                AI-Powered Analytics: Artificial intelligence can analyze the
                massive amount of data generated by OCEMS, providing actionable
                insights into trends and anomalies. With AI, industries can
                predict potential emission spikes and take preventative measures
                before non-compliance occurs.
              </li>
              <li>
                Cloud-Based Systems: Cloud computing is transforming how
                emission data is stored and accessed. With cloud-based OCEMS,
                industries can store vast amounts of emission data securely
                while making it easily accessible for audits, regulatory
                reporting, and performance analysis.
              </li>
              <li>
                Smarter Sensors: Advancements in sensor technology are improving
                the accuracy and reliability of OCEMS. New-generation sensors
                are more sensitive, durable, and capable of detecting a wider
                range of pollutants, making the systems more robust and
                versatile.
              </li>
            </ul>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block lg:col-span-3"></div>
        </div>
      </div>
      {/* Divider */}
      <div className="py-5"></div>
      <div className="py-1"></div>
      {/* Divider */}
    </>
  );
};

export default BlogContent1;
