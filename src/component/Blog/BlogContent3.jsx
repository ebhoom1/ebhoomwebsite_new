import React from 'react';
import { Link } from 'react-router-dom';

const BlogContent3 = () => {
  return (
    <>
      {/* Divider */}
      <div className="py-10"></div>
      
      {/* Divider */}
      <div className="container mx-auto px-4 lg:px-8" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row">
          {/* Empty column for centering */}
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
              src="/assets/images/banglore.jpg"
              alt="Bangalore water crisis"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Water Crisis in Bangalore: How Water Treatment Solutions Can Prevent Future Shortages
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bangalore, often referred to as India’s Silicon Valley, is facing an escalating water crisis. With rapid
              population growth, expanding industries, and shrinking water resources, the city is on the brink of a serious
              water shortage. While the crisis is worsening, there is hope—water treatment solutions offer a pathway to
              sustainable water management, potentially averting a looming catastrophe. This blog explores the causes of
              Bangalore's water crisis and how the adoption of modern water treatment technologies can help prevent future
              shortages.
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

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Causes of the Crisis</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Several factors contribute to Bangalore's ongoing water crisis:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Urbanization and Population Growth:</strong> Bangalore’s rapid expansion has placed immense pressure
                on its water resources. With a population exceeding 12 million, the demand for water has far outstripped
                the city’s natural supply.
              </li>
              <li>
                <strong>Industrialization:</strong> As Bangalore grows as an industrial hub, water consumption has surged.
                Factories and tech parks require vast amounts of water, contributing to the depletion of local lakes and
                groundwater.
              </li>
              <li>
                <strong>Poor Water Management:</strong> Inadequate infrastructure and outdated water management systems have
                led to widespread wastage. Over-extraction of groundwater has reduced the water table, making water less
                accessible for daily use.
              </li>
              <li>
                <strong>Climate Change:</strong> Irregular rainfall patterns due to climate change have worsened the water
                crisis, leading to droughts and erratic monsoons that fail to replenish reservoirs and groundwater levels.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Role of Water Treatment Solutions</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Modern water treatment solutions can help alleviate Bangalore’s water crisis:
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>1. Wastewater Treatment:</strong> By treating industrial and domestic wastewater, industries and
              households can recycle water for landscaping, cooling, and cleaning, reducing dependence on freshwater.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>2. Rainwater Harvesting:</strong> Implementing systems across residential and industrial zones can
              capture rainwater for future use, reducing groundwater dependence.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>3. Water Recycling:</strong> Recycling greywater for non-potable uses in factories and housing
              complexes can dramatically decrease water demand.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sustainable Water Management</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Leakage Detection and Repair:</strong> Upgrading old pipelines and implementing smart systems can
                reduce water losses.
              </li>
              <li>
                <strong>Regulating Groundwater Extraction:</strong> Monitoring groundwater use can prevent over-extraction,
                allowing natural recharge.
              </li>
              <li>
                <strong>Public Awareness:</strong> Campaigns can encourage conservation and efficient water use.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Conclusion</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bangalore's water crisis can be mitigated through advanced water treatment solutions and sustainable
              practices. Collaboration among industries, residents, and policymakers is essential to ensure a sustainable
              future.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Related News</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Read more about solutions for Bengaluru’s water crisis{' '}
              <a
                href="https://www.thehindu.com/data/a-possible-solution-for-bengalurus-water-crisis-data/article67939268.ece"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                here
              </a>
              .
            </p>
          </div>

          {/* Empty column for centering */}
          <div className="hidden lg:block lg:w-1/4"></div>
        </div>
      </div>
      {/* Divider */}
      <div className="py-6"></div>
      <div className="py-2"></div>
      {/* Divider */}
    </>
  );
};

export default BlogContent3;
