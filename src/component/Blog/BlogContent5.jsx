import React from 'react';
import { Link } from 'react-router-dom';

const BlogContent5 = () => {
  return (
    <div>
      {/* Divider */}
      <div className="py-10"></div>
      {/* Divider */}
      <div className="container mx-auto px-4 lg:px-8" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row">
          {/* Empty column for spacing */}
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
              src="/assets/images/watermanagement.jpg"
              alt="industrial wastewater treatment"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Efficient Water Treatment Solutions for Industrial Wastewater Management
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              Industrial wastewater is a significant contributor to environmental pollution, with factories and plants discharging vast amounts of contaminated water into the environment daily. From chemicals to heavy metals, the pollutants found in industrial wastewater can cause serious harm to ecosystems, aquatic life, and human health. To address this growing concern, industries must adopt efficient water treatment solutions that help manage and treat wastewater responsibly. This blog explores the different types of industrial wastewater, highlights the importance of Effluent Treatment Plants (ETPs), and showcases the benefits of wastewater recycling for sustainable industrial growth.
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
                10 minute read
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Industrial Wastewater</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The composition of industrial wastewater varies depending on the type of industry. However, common pollutants often found in industrial effluents include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Organic Waste:</strong> Increases Biological Oxygen Demand (BOD) in water, depleting oxygen levels and harming aquatic life.</li>
              <li><strong>Chemicals and Toxins:</strong> Hazardous chemicals such as acids, alkalis, and dyes.</li>
              <li><strong>Heavy Metals:</strong> Toxic substances like lead, mercury, and cadmium.</li>
              <li><strong>Oil and Grease:</strong> Pollutes water surfaces, disrupting marine ecosystems.</li>
              <li><strong>Suspended Solids:</strong> Clogs water bodies and reduces water quality.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Effluent Treatment Plants (ETPs): How They Work</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Effluent Treatment Plants (ETPs) are critical for treating industrial wastewater and ensuring that pollutants are removed before the water is released back into the environment or reused.
            </p>

            <h4 className="text-lg font-medium text-gray-800 mb-3">1. Primary Treatment</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Physical removal of large particles and solids using screening, sedimentation, and filtration.
            </p>

            <h4 className="text-lg font-medium text-gray-800 mb-3">2. Secondary Treatment</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Biological processes to break down organic matter with bacteria and microorganisms.
            </p>

            <h4 className="text-lg font-medium text-gray-800 mb-3">3. Tertiary Treatment</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Advanced chemical and physical treatments to remove pollutants like heavy metals and toxins.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Wastewater Recycling: Benefits of Recycling Treated Water</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Recycling treated wastewater helps industries reduce freshwater consumption and manage resources sustainably:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Water Conservation:</strong> Reduces demand for freshwater.</li>
              <li><strong>Cost Savings:</strong> Reduces water sourcing and disposal costs.</li>
              <li><strong>Reduced Environmental Impact:</strong> Minimizes discharge of pollutants.</li>
              <li><strong>Improved Compliance:</strong> Helps meet regulatory standards.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Conclusion</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Efficient water treatment solutions are crucial for managing industrial wastewater and ensuring the long-term sustainability of industries. Investing in advanced water treatment technologies is essential to manage resources responsibly and reduce environmental impact.
            </p>
          </div>

          {/* Empty column for spacing */}
          <div className="hidden lg:block lg:w-1/4"></div>
        </div>
      </div>
      {/* Divider */}
      <div className="py-6"></div>
      <div className="py-2"></div>
      {/* Divider */}
    </div>
  );
};

export default BlogContent5;
