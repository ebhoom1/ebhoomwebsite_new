import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const BlogList = () => {
  return (
    <div>
      <div className="py-6"></div>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Blog Heading */}
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
              Our Blog
            </h1>
            <p
              className="text-lg text-gray-600 mt-2 text-center max-w-2xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Stay updated with the latest trends and insights in technology,
              environment, and industrial solutions.
            </p>
          </div>

          {/* Blog Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="fade-up"
          >
            {/* Card 1 */}
            <Link to="/blog/understandingOCEMS" className="block">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition  h-full flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  src="/assets/images/understandingOCEMS.jpg"
                  alt="Understanding OCEMS"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Understanding OCEMS: The Future of Industrial Pollution
                    Control
                  </h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
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
                        width="13"
                        height="13"
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
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/blog/periyar-river" className="block">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  src="/assets/images/periyar.jpg"
                  alt="Periyar River"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Industrial Effluent and Wastewater Dumping: The Periyar
                    River Pollution Crisis.
                  </h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
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
                        width="13"
                        height="13"
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
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/blog/water-crisis-banglore" className="block">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  src="/assets/images/banglore.jpg"
                  alt="Water Crisis Bangalore"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Water Crisis in Bangalore: How Water Treatment Solutions Can
                    Prevent Future Shortages
                  </h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
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
                        width="13"
                        height="13"
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
                </div>
              </div>
            </Link>
            {/**card 4 */}
  <Link to="/blog/kakkanad-lessons" className="block">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src="/assets/images/kakkanad.jpg"
        alt="ebhoom"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Water Treatment Technologies for Residential Complexes: Lessons from Kakkanad Flats
        </h3>
        <div className="flex justify-between text-sm text-gray-600 mt-4">
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
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
              width="13"
              height="13"
              fill="currentColor"
              className="mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            5 minute read
          </span>
        </div>
      </div>
    </div>
  </Link>
  {/**card 5 */}

  <Link to="/blog/waste-management" className="block">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        src="/assets/images/watermanagement.jpg"
        alt="ebhoom"
      />

      {/* Content Section */}
      <div className="p-4 flex-grow flex flex-col">
        <p className="text-lg font-semibold text-gray-800 mb-3">
          Efficient Water Treatment Solutions for Industrial Wastewater Management
        </p>
        <div className="mt-auto flex justify-between items-center text-sm text-gray-600">
          {/* Date */}
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

          {/* Read Time */}
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
            5 minute read
          </span>
        </div>
      </div>
    </div>
  </Link>
{/**card 6 */}
<Link to="/blog/couple-recycles-10000-tonnes-of-waste" className="block">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src="/assets/images/ocems.jpg"
        alt="ebhoom"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          A Step-by-Step Guide to Implementing OCEMS in Your Industry
        </h3>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 px-4 pb-4">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            className="mr-1"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          11/10/24
        </span>
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
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
    </div>
  </Link>
  {/**card 7*/}
  <Link to="/blog/ocems" className="block">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src="/assets/images/ocemsbenefits.jpg"
        alt="ebhoom"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          5 Benefits of Installing OCEMS in Manufacturing Plants
        </h3>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 px-4 pb-4">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            className="mr-1"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          11/10/24
        </span>
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
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
    </div>
  </Link>
  {/**card 8 */}
  <Link to="/blog/carbon-tracking" className="block">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col">
      <img
        className="w-full h-48 object-contain"
        src="/assets/images/carbonfootprint.png"
        alt="ebhoom"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Carbon Emission Tracking: The Key to Reducing Your Industry’s Carbon
          Footprint
        </h3>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 px-4 pb-4">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            className="mr-1"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          11/10/24
        </span>
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            className="mr-1"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
          5 minute read
        </span>
      </div>
    </div>
  </Link>
  {/**card 9 */}
  <Link to="/blog/carbon-footprint" className="block">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src="/assets/images/carbonurban.jpg"
        alt="ebhoom"
      />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          The Growing Carbon Footprint of Cities: How Urban Areas Can Reduce
          Emissions
        </h3>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 px-4 pb-4">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            className="mr-1"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          11/10/24
        </span>
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
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
    </div>
  </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
