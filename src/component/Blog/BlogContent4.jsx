import React from 'react';
import { Link } from 'react-router-dom';

const BlogContent4 = () => {
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
              src="/assets/images/kakkanad.jpg"
              alt="Kakkanad Flats water pollution"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Water Treatment Technologies for Residential Complexes: Lessons from Kakkanad Flats
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              In recent years, water pollution in residential complexes has become a growing concern, with the Kakkanad Flats incident serving as a stark reminder of the potential dangers. The pollution of water sources due to poor waste management and inadequate treatment facilities has led to severe health risks for residents. This alarming situation underscores the importance of advanced water treatment technologies in residential complexes. In this blog, we will discuss the water issues plaguing residential areas, explore modern water treatment technologies, and examine how the Kakkanad Flats pollution could have been avoided with proper systems in place.
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

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Water Issues in Residential Areas</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Residential complexes often face water quality issues due to pollution and contamination, which can stem from multiple sources:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Poor Wastewater Management:</strong> Inadequate sewage treatment or mismanagement of wastewater disposal can lead to contamination of groundwater and surrounding water bodies.
              </li>
              <li>
                <strong>Lack of Proper Water Treatment:</strong> Many residential complexes lack modern water treatment systems, relying on outdated or insufficient infrastructure that fails to remove contaminants effectively.
              </li>
              <li>
                <strong>Health Risks:</strong> Polluted water can carry pathogens, chemicals, and heavy metals that cause serious health problems, including gastrointestinal illnesses, skin infections, and other diseases.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies for Residential Water Treatment</h3>
            <h4 className="text-lg font-medium text-gray-800 mb-3">1. Sewage Treatment Plants (STPs)</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sewage Treatment Plants (STPs) are designed to treat domestic wastewater, ensuring that pollutants are removed before the water is discharged or reused. STPs operate in several stages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Primary Treatment: Removes large particles and debris.</li>
              <li>Secondary Treatment: Breaks down organic waste through biological processes.</li>
              <li>
                Tertiary Treatment: Uses advanced filtration and chemical treatments to eliminate any remaining contaminants, including pathogens, nitrates, and phosphates.
              </li>
            </ul>

            <h4 className="text-lg font-medium text-gray-800 mb-3">2. Rainwater Harvesting Systems</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Rainwater harvesting is another sustainable solution for residential complexes. By collecting and storing rainwater, complexes can use this water for non-potable purposes, reducing dependence on municipal water supplies and conserving groundwater resources.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Case Study: Kakkanad Flats</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Kakkanad Flats incident serves as a cautionary tale about the dangers of neglecting proper water treatment. In this residential complex, untreated sewage and waste were allowed to accumulate in the water supply, causing significant pollution.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Conclusion</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Kakkanad Flats incident highlights the urgent need for residential complexes to adopt advanced water treatment technologies. With increasing urbanization and water demand, ensuring the proper treatment and management of water resources is critical to maintaining public health and preventing environmental damage.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Related News</h3>
            <p className="text-gray-700 leading-relaxed">
              To read more about the Kakkanad DLF Flats water pollution crisis, visit the article{' '}
              <a
                href="https://www.onmanorama.com/lifestyle/health/2024/06/18/e-coli-bacteria-suspected-water-kakkanad-dlf-flat-pollution-ensure-safety-purification.html"
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

export default BlogContent4;
