import React from 'react'
import { Link } from 'react-router-dom';


const BlogContent2 = () => {
  return (
    <>
    {/* Divider */}
    <div className="py-10"></div>
    {/* Divider */}
    <div className="container mx-auto px-4 lg:px-8" data-aos="fade-up">
      <div className="flex flex-col lg:flex-row">
        {/* Empty Column for Centering */}
        <div className="hidden lg:block lg:w-1/4"></div>

        {/* Main Content */}
        <div className="w-full lg:w-1/2">
          <Link to="/blog">
            <button className="px-4 py-2 border-2 border-gray-700 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-700 hover:text-white transition mb-6">
              Back
            </button>
          </Link>
          <img
            className="w-full rounded-lg shadow-lg mb-6"
            src="/assets/images/periyar.jpg"
            alt="ebhoom"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Industrial Effluent and Wastewater Dumping: The Periyar River Pollution Crisis.
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Periyar River in Kerala, once a crucial water source, is now under severe threat due to unchecked industrial pollution. Factories in the region have been discharging untreated wastewater and harmful effluents directly into the river, leading to high levels of contamination. This has affected both the environment and public health, with toxic chemicals and heavy metals like lead and mercury found in the water, causing illnesses among local residents and damaging aquatic life.
          </p>
          <div className="flex items-center text-sm text-gray-600 space-x-6 mb-6">
            <span className="flex items-center">
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
              3 minute read
            </span>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Why is This Happening?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Industries often bypass regulatory guidelines, dumping pollutants without proper treatment. Without Effluent Treatment Plants (ETPs), harmful chemicals enter the river, reducing oxygen levels and killing aquatic life. Water contamination also affects agriculture and spreads diseases in nearby communities.
            <br /><br />
            On August 19, for the first time in the preceding 11 days, satellite images of Kerala captured fractures in the cloud cover. The state government lifted the red alert consequently. The fragmented clouds over the state unearthed the real devastation. Everybody had one question: was it normal?
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            How Technology Can Help: The Role of Pollution Monitoring Systems
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Advanced technology can play a pivotal role in addressing river water pollution. Solutions like Online Continuous Emission Monitoring Systems (OCEMS) can track emissions and effluent discharge in real-time, providing immediate data on pollution levels. These systems help industries:
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Monitor Effluent Discharge: Track pollution levels continuously and in real-time.</li>
              <li>Maintain Compliance: Ensure they meet environmental regulations.</li>
              <li>
                Take Preventive Action: Identify and fix potential issues before they escalate into major pollution events.
              </li>
            </ul>
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Conclusion</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Periyar River pollution crisis is a wake-up call. By enforcing stricter compliance, using ETPs, and leveraging real-time monitoring technologies like OCEMS, industries can help reduce pollution and safeguard our rivers for future generations.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Related News</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            To read more about the government initiatives to address the Periyar River pollution, visit the article{' '}
            <a
              href="https://timesofindia.indiatimes.com/city/kochi/government-initiatives-to-address-periyar-river-pollution/articleshow/110448494.cms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              here
            </a>
            .
          </p>
        </div>

        {/* Empty Column for Centering */}
        <div className="hidden lg:block lg:w-1/4"></div>
      </div>
    </div>
    {/* Divider */}
    <div className="py-6"></div>
    <div className="py-2"></div>
    {/* Divider */}
  </>
  )
}

export default BlogContent2
