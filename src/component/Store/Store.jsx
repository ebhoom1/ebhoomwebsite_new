import React, { useState } from "react";

const Store = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-green-50 h-[600px] flex items-center justify-center">
        <div className="absolute top-30 right-60 transform -translate-x-1/2 -translate-y-16 rotate-12 z-0">
          <div className="w-[150px] h-[150px] bg-blue-300 rounded-md opacity-30"></div>
        </div>
        <div className="absolute top-80 right-20 transform -translate-x-1/2 -translate-y-16 rotate-12 z-0">
          <div className="w-[50px] h-[50px] bg-blue-300 rounded-md opacity-30"></div>
        </div>
        <div className="absolute top-50 left-60 transform -translate-x-1/2 -translate-y-16 -rotate-6 z-0">
          <div className="w-[300px] h-[300px] bg-indigo-300 rounded-md opacity-30"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-gray-600">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-aos="zoom-in">
            Welcome to the EBHOOM Store
          </h2>
          <p className="text-lg lg:text-xl mb-6">
            Discover the latest solutions to revolutionize your water management
            systems and sustainability goals.
          </p>
          <a
            href="#store-products"
            className="bg-white text-secondary hover:text-white hover:bg-blue-400 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Explore Products
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="py-10"></div>

      {/* Store Section */}
      <div id="store-products" className="container mx-auto px-4">
        {/* <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Store</h1>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="shadow-lg rounded-lg p-6 text-center bg-white">
            <span className="text-sm font-medium bg-yellow-400 text-white py-1 px-3 rounded-lg mb-3 inline-block">
              Available
            </span>
            <img
              className="w-full rounded-md mb-3"
              src="assets/images/device_1.jpg"
              alt="Ebhoom"
            />
            <h5 className="text-xl font-semibold text-secondary">OCEMS MARS</h5>
            <p className="text-gray-600 text-sm mt-3 mb-5">
              A complete solution for backend monitoring and control of your
              treatment plant
            </p>
            <button
              className="bg-secondary text-white py-2 px-6 rounded-lg hover:bg-blue transition"
              type="button"
              onClick={openModal} // Open modal on click
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"
          aria-hidden="true"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full mx-4 sm:mx-8 md:mx-auto relative">
            <div className="max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="p-4 flex justify-between items-center border-b">
                <h5 className="text-xl font-semibold">Pre-Book Now</h5>
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={closeModal} // Close modal on click
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Choose a model that suits you
                </h3>

                {/* Models */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[
                    {
                      model: "MODEL P",
                      features: [
                        "BOD, COD parameters",
                        "Up to 16 control pump control",
                        "Up to 10 flow rates",
                        "Up to 10 tank levels",
                        "Operator tracker and attendance register",
                      ],
                    },
                    {
                      model: "MODEL H",
                      features: [
                        "Up to 16 control pump control",
                        "Up to 8 flow rates",
                        "Up to 8 tank levels",
                        "Operator tracker and attendance register",
                      ],
                    },
                    {
                      model: "MODEL M",
                      features: [
                        "Up to 8 control pump control",
                        "Up to 4 flow rates",
                        "Up to 4 tank levels",
                        "Operator tracker and attendance register (Optional)",
                      ],
                    },
                    {
                      model: "MODEL L",
                      features: [
                        "Up to 2 control pump control",
                        "Up to 2 flow rates",
                        "Up to 2 tank levels",
                        "Operator tracker and attendance register (Optional)",
                      ],
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 p-4 rounded-lg shadow-lg border-l-4 border-blue-500"
                    >
                      <h4 className="text-lg font-semibold text-blue-600 mb-4">
                        {item.model}
                      </h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        {item.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Form */}
                <div className="mt-8">
                  <iframe
                    className="w-full h-[500px] border-none rounded-md"
                    src="https://forms.zohopublic.in/infoebhoom/form/BookWMS/formperma/KxG_fxhpU0A2u3BWVCPOxjNe1HYmnT5bdD2ppJjj5Lc"
                    title="Booking Form"
                  ></iframe>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t">
                <button
                  className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition"
                  onClick={closeModal} // Close modal on click
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="py-5"></div>
    </>
  );
};

export default Store;
