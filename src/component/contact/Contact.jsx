import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-40">
      <div className="relative container mx-auto px-6 lg:px-20">
        {/* Heading Section */}
        <div className="relative text-center mb-16">
          {/* Background Shapes */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 z-0 ">
            <div className="w-[300px] h-[300px] bg-green-100 rounded-full opacity-50"></div>
          </div>
          <div className="absolute top-16 right-10 z-0">
            <div className="w-[150px] h-[150px] bg-green-200 rounded-full opacity-30"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Have questions? We're here to help! Reach out to us anytime.
            </p>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Office Address */}
          <div className="bg-white shadow-md border border-gray-200 rounded-lg p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
              <i className="fas fa-map-marker-alt text-green-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Office Address
            </h3>
            <p className="text-gray-600">
            GoodFoot Sustainability Private Limited <br />
              Near Bharata Mata College, Thrikkakara P.O, Ernakulam-682021
            </p>
            <p className="text-gray-600 mt-4">
            GoodFoot Sustainability Private Limited <br />
              CUSAT, RISE TBI, University Road, South Kalamassery, Kochi,
              Kerala-682022
            </p>
          </div>

          {/* Phone and Email */}
          <div className="bg-white shadow-md border border-gray-200 rounded-lg p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
              <i className="fas fa-phone-alt text-green-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Phone & Email
            </h3>
            <p className="text-gray-600">
              <a href="tel:+916282386462" className="hover:text-green-500">
                +91 62823 86462
              </a>
            </p>
            <p className="text-gray-600 mt-4">
              <a href="mailto:info@ebhoom.com" className="hover:text-green-500">
                info@ebhoom.com
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="bg-white shadow-md border border-gray-200 rounded-lg p-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
              <i className="fas fa-thumbs-up text-green-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Social Media
            </h3>
            <div className="flex flex-col space-y-4 mt-4">
              {/* Facebook */}
              <a
                href="https://facebook.com/ebhoomsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-500 hover:text-blue-600"
              >
                <i className="fab fa-facebook-f text-xl"></i>
                <span className="text-lg">Facebook</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ebhoom__/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-500 hover:text-pink-500"
              >
                <i className="fab fa-instagram text-xl"></i>
                <span className="text-lg">Instagram</span>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/ebhoomsolutions?s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-500 hover:text-blue-500"
              >
                <i className="fab fa-twitter text-xl"></i>
                <span className="text-lg">Twitter</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/ebhoom-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-500 hover:text-blue-700"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
                <span className="text-lg">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white shadow-md rounded-2xl p-4 mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.11839610864!2d76.2943523!3d10.0070781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0877bdf5e920ef%3A0xd36270de5dfd79b0!2sEBHOOM%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1663775213665!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl"
            title="EBHOOM Solutions Location"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          <iframe
            src="https://forms.zohopublic.in/infoebhoom/form/ContactUs/formperma/GLIiLreuAa-hUQD9zcaA3G2kwoe4Rdlvw2awM1CmHfI"
            className="w-full h-[700px] rounded-2xl"
            title="Contact Us Form"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
