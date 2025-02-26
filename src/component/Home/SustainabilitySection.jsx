import { useNavigate } from "react-router-dom";
import { FaLeaf, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import goodfootlogo1 from "../../assets/images/goodfootlogo1.png";

const SustainabilitySection = () => {
  const navigate = useNavigate(); // React Router navigation

  return (
    <section className="py-10 px-6 md:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-green-800">
          Sustainability Meets Innovation
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          At <span className="font-semibold text-green-700">EBHOOM</span>, we
          build technology that drives real-world environmental impact. From
          AI-powered ESG compliance to gamified sustainability actions, our
          platforms make going green effortless, intelligent, and rewarding.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 px-6 md:px-12">
        {/* EBHOOM ESG Card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="p-6 text-center border-l-4 border-green-600">
            <FaChartLine className="text-green-600 text-3xl mx-auto" />
            <h4 className="text-xl font-semibold mt-4 text-green-800">
              EBHOOM ESG: AI-Driven Sustainability & Compliance
            </h4>
            <p className="text-gray-700 mt-2">
              Stay ahead with automated BRSR, GRI, and global ESG reporting,
              real-time carbon tracking, and AI-powered decarbonization
              strategies—all in one seamless platform.
            </p>
            <a
              href="https://esg.ebhoom.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Explore ESG
            </a>
          </div>
        </div>

        {/* GoodFoot Card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="p-6 text-center border-l-4 border-[#236a80]">
            <FaLeaf className="text-[#236a80] text-3xl mx-auto" />
            <h4 className="text-xl sm:text-xl font-semibold mt-4 text-[#236a80] flex items-center justify-center flex-wrap text-center">
  <img src={goodfootlogo1} alt="GoodFoot Logo" className="h-8 sm:h-8 mr-2" />
  <span className="whitespace-nowrap">:</span><span className="whitespace-nowrap">Sustainability, Simplified.</span>
</h4>

            <p className="text-gray-700 mt-2">
              Track your carbon footprint, join AI-verified eco-challenges, rent
              EVs, shop in our eco-friendly marketplace, and earn rewards for
              making a difference. One app. Infinite impact.
            </p>
            <Link
              to="/goodfoot"
              className="mt-4 inline-block bg-[#236a80] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Discover GoodFoot
            </Link>
          </div>
        </div>
      </div>    
    </section>
  );
};

export default SustainabilitySection;
