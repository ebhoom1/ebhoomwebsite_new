// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./blog.css";

// const blogPosts = [
//   {
//     title: "Understanding OCEMS: The Future of Industrial Pollution Control",
//     img: "/assets/images/understandingOCEMS.jpg",
//     link: "/blog/understandingOCEMS",
//     date: "10/10/24",
//     readTime: "10 minute read",
//   },
//   {
//     title: "Industrial Effluent and Wastewater Dumping: The Periyar River Pollution Crisis",
//     img: "/assets/images/periyar.jpg",
//     link: "/blog/periyar-river",
//     date: "10/10/24",
//     readTime: "3 minute read",
//   },
//   {
//     title: "Water Crisis in Bangalore: How Water Treatment Solutions Can Prevent Future Shortages",
//     img: "/assets/images/banglore.jpg",
//     link: "/blog/water-crisis-banglore",
//     date: "10/10/24",
//     readTime: "10 minute read",
//   },
//   {
//     title: "Water Treatment Technologies for Residential Complexes: Lessons from Kakkanad Flats",
//     img: "/assets/images/kakkanad.jpg",
//     link: "/blog/kakkanad-lessons",
//     date: "10/10/24",
//     readTime: "5 minute read",
//   },
//   {
//     title: "Efficient Water Treatment Solutions for Industrial Wastewater Management",
//     img: "/assets/images/watermanagement.jpg",
//     link: "/blog/waste-management",
//     date: "10/10/24",
//     readTime: "5 minute read",
//   },
//   {
//     title: "A Step-by-Step Guide to Implementing OCEMS in Your Industry",
//     img: "/assets/images/ocems.jpg",
//     link: "/blog/couple-recycles-10000-tonnes-of-waste",
//     date: "11/10/24",
//     readTime: "3 minute read",
//   },
//   {
//     title: "5 Benefits of Installing OCEMS in Manufacturing Plants",
//     img: "/assets/images/ocemsbenefits.jpg",
//     link: "/blog/ocems",
//     date: "11/10/24",
//     readTime: "3 minute read",
//   },
//   {
//     title: "Carbon Emission Tracking: The Key to Reducing Your Industry’s Carbon Footprint",
//     img: "/assets/images/carbonfootprint.png",
//     link: "/blog/carbon-tracking",
//     date: "11/10/24",
//     readTime: "5 minute read",
//   },
//   {
//     title: "The Growing Carbon Footprint of Cities: How Urban Areas Can Reduce Emissions",
//     img: "/assets/images/carbonurban.jpg",
//     link: "/blog/carbon-footprint",
//     date: "11/10/24",
//     readTime: "3 minute read",
//   },
//   {
//     title: "ESG: The Future of Sustainable Business Practices",
//     img: "/assets/images/esg.jpg",
//     link: "/blog/esg",
//     date: "15/03/25",
//     readTime: "5 minute read",
//   },
//   {
//     title: "The Science Behind Carbon Emissions: How They Affect Our Planet",
//     img: "/assets/images/carbon-emission.jpg",
//     link: "/blog/carbon-emission",
//     date: "15/03/25",
//     readTime: "4 minute read",
//   },
// ];

// const BlogList = () => {
//   const [visibleCount, setVisibleCount] = useState(6); // Show 6 blogs initially

//   const handleLoadMore = () => {
//     setVisibleCount((prevCount) => prevCount + 6);
//   };

//   return (
//     <div>
//       <div className="py-6"></div>
//       <div className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6 lg:px-12">
//           {/* Blog Heading */}
//           <div className="flex flex-col items-center mb-10">
//             <h1 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
//               Our Blog
//             </h1>
//             <p
//               className="text-lg text-gray-600 mt-2 text-center max-w-2xl"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               Stay updated with the latest trends and insights in technology,
//               environment, and industrial solutions.
//             </p>
//           </div>

//           {/* Blog Cards */}
//           <div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             data-aos="fade-up"
//           >
//             {blogPosts.slice(0, visibleCount).map((post, index) => (
//               <Link to={post.link} className="block" key={index}>
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col">
//                   <img className="w-full h-48 object-cover" src={post.img} alt={post.title} />
//                   <div className="p-4 flex-grow">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                       {post.title}
//                     </h3>
//                   </div>
//                   <div className="flex justify-between items-center text-sm text-gray-600 px-4 pb-4">
//                     <span className="flex items-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="mr-1" viewBox="0 0 16 16">
//                         <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
//                       </svg>
//                       {post.date}
//                     </span>
//                     <span className="flex items-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="mr-1" viewBox="0 0 16 16">
//                         <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
//                         <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
//                       </svg>
//                       {post.readTime}
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Read More Button */}
//           {visibleCount < blogPosts.length && (
//             <div className="flex justify-center mt-8">
//               <button
//                 onClick={handleLoadMore}
//                 className="px-6 py-2 bg-gray-700 text-white font-medium rounded-xl hover:bg-gray-800 transition"
//               >
//                 Read More
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogList;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const blogPosts = [
  {
    title: "Understanding OCEMS: The Future of Industrial Pollution Control",
    img: "/assets/images/understandingOCEMS.jpg",
    link: "/blog/understandingOCEMS",
    date: "10/10/24",
    readTime: "10 minute read",
  },
  {
    title: "Industrial Effluent and Wastewater Dumping: The Periyar River Pollution Crisis",
    img: "/assets/images/periyar.jpg",
    link: "/blog/periyar-river",
    date: "10/10/24",
    readTime: "3 minute read",
  },
  {
    title: "Water Crisis in Bangalore: How Water Treatment Solutions Can Prevent Future Shortages",
    img: "/assets/images/banglore.jpg",
    link: "/blog/water-crisis-banglore",
    date: "10/10/24",
    readTime: "10 minute read",
  },
  {
    title: "Water Treatment Technologies for Residential Complexes: Lessons from Kakkanad Flats",
    img: "/assets/images/kakkanad.jpg",
    link: "/blog/kakkanad-lessons",
    date: "10/10/24",
    readTime: "5 minute read",
  },
  {
    title: "Efficient Water Treatment Solutions for Industrial Wastewater Management",
    img: "/assets/images/watermanagement.jpg",
    link: "/blog/waste-management",
    date: "10/10/24",
    readTime: "5 minute read",
  },
  {
    title: "A Step-by-Step Guide to Implementing OCEMS in Your Industry",
    img: "/assets/images/ocems.jpg",
    link: "/blog/couple-recycles-10000-tonnes-of-waste",
    date: "11/10/24",
    readTime: "3 minute read",
  },
  {
    title: "5 Benefits of Installing OCEMS in Manufacturing Plants",
    img: "/assets/images/ocemsbenefits.jpg",
    link: "/blog/ocems",
    date: "11/10/24",
    readTime: "3 minute read",
  },
  {
    title: "Carbon Emission Tracking: The Key to Reducing Your Industry’s Carbon Footprint",
    img: "/assets/images/carbonfootprint.png",
    link: "/blog/carbon-tracking",
    date: "11/10/24",
    readTime: "5 minute read",
  },
  {
    title: "The Growing Carbon Footprint of Cities: How Urban Areas Can Reduce Emissions",
    img: "/assets/images/carbonurban.jpg",
    link: "/blog/carbon-footprint",
    date: "11/10/24",
    readTime: "3 minute read",
  },
  {
    title: "ESG: The Future of Sustainable Business Practices",
    img: "/assets/images/esg.jpg",
    link: "/blog/esg",
    date: "15/03/25",
    readTime: "5 minute read",
  },
  {
    title: "The Science Behind Carbon Emissions: How They Affect Our Planet",
    img: "/assets/images/carbon-emission.jpg",
    link: "/blog/carbon-emission",
    date: "15/03/25",
    readTime: "4 minute read",
  },
  {
    title: "The ESG Blueprint: From Principles to Performance in the New Corporate Landscape",
    img: "/assets/images/blueprint.png", // Placeholder image
    link: "/blog/esg-blueprint",
    date: "01/08/25",
    readTime: "15 minute read", // Estimated read time
  },
  {
    title: "The ESG Leader's Playbook: 6 Steps to Go from Good to Best-in-Class",
    img: "/assets/images/leadersbook.png", // Placeholder image
    link: "/blog/esg-leader-playbook",
    date: "01/08/25",
    readTime: "10 minute read", // Estimated read time
  },
];

const BlogList = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 blogs initially

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

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
            {blogPosts.slice(0, visibleCount).map((post, index) => (
              <Link to={post.link} className="block" key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col">
                  <img className="w-full h-48 object-cover" src={post.img} alt={post.title} />
                  <div className="p-4 flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600 px-4 pb-4">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="mr-1" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="mr-1" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Read More Button */}
          {visibleCount < blogPosts.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-gray-700 text-white font-medium rounded-xl hover:bg-gray-800 transition"
              >
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
