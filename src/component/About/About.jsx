import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaLightbulb } from "react-icons/fa";
import earth from "../../assets/images/earth.png";
const About = () => {
  return (
    <>
      {/* Why EBHOOM Section */}
      <div className="relative bg-green-50  py-12 px-20 rounded-lg shadow-lg mt-20">
        <motion.h3
          className="text-3xl font-bold text-gray-800 mb-6 text-left"
          animate={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Why EBHOOM?
        </motion.h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Ebhoom has the vision and the technology to transform our planet
              into a beautiful and clean one. Solid Waste Management and water
              pollution has always been a universal issue and Ebhoom is here to
              bring you Solutions. Our scope includes Water recycling solutions,
              solid waste management, Ecology restoration and Urban Gardening.
              One of our goals is to eradicate water scarcity. We have developed
              our own technology that can be used for desalination, which opens
              the path to abundant water for the entirety of earth. The three R
              principle of Reduce, Reuse and Recycle will be our guideline for
              Solid waste management. Our water disposal technologies will treat
              the waste/effluent water making it suitable for disposal and
              prevent the contamination of ground, ground water and other water
              resources. The reforestation is our eco-project, to give earth
              back the woods we took from her.
            </p>
          </motion.div>
          <motion.img
            className="w-3/4 mx-auto rounded-lg shadow-lg"
            src={earth}
            alt="ebhoom"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="py-10"></div>
      {/* Divider */}

      {/* Mission and Vision Section */}
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <motion.div
            className="bg-green-100 shadow-lg p-6 rounded-lg flex flex-col items-center text-center bg-green-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaLightbulb className="text-green-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At EBHOOM, we are on a mission to redefine how industries and
              communities approach environmental challenges. We combine advanced
              IoT technology with intuitive AI solutions to help our customers
              lead the way in sustainability and compliance.
            </p>
          </motion.div>
          <motion.div
            className="bg-green-100 shadow-lg p-6 rounded-lg flex flex-col items-center text-center bg-green-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaLeaf className="text-green-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              "A world where technology meets sustainability for a greener
              tomorrow." Our vision is to create a harmonious future where
              innovative solutions address global environmental challenges,
              ensuring a sustainable planet for generations to come.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="my-20"></div>
      {/* Divider */}

      {/* Additional Section: About Us */}
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-12 flex justify-center">
            {/* Round Background */}
            <div className="bg-green-50 rounded-full  shadow-lg w-full lg:w-2/3 text-center p-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                More About Us
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We are more than just a startup – we are engineers with a
                mission. A mission to heal our planet, protect its future, and
                empower people and businesses to join us on this journey toward
                a sustainable world. EBHOOM is not just another climate-tech
                venture. We are dreamers, problem-solvers, and changemakers who
                see technology as the bridge between the challenges of today and
                the solutions of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="py-20"></div>
      {/* Divider */}

      {/* Our Message Section */}
      <motion.div
        className="bg-green-100 py-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-green-800">Our Message</h3>
          </div>
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">
              Dear earth dwellers, <br />
              Our planet has been in existence for over 13 billion years. Now
              she is facing the consequences of human civilization in different
              forms, one of which is different types of pollution. As the
              advanced species on this planet, the responsibility is on our
              shoulders to restore this polluted planet into a better and fresh
              one. We have chosen to address these issues step by step. Our
              final goal is a clean earth, and to get there, Ebhoom Solution’s
              technologies will be the bridge. We will strive to become a global
              leading environmental services company that gives the best value
              to our customers and our biodiversity.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="py-5"></div>
      <div className="py-4"></div>
      {/* Divider */}
    </>
  );
};

export default About;
