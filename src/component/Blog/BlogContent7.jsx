import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogContent7 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div>
      {/* Divider */}
      <div className="py-10"></div>
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12" data-aos="fade-up">
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
              src="/assets/images/ocemsbenefits.jpg"
              alt="OCEMS manufacturing"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              5 Benefits of Installing OCEMS in Manufacturing Plants
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              Manufacturing plants are essential to global industry but often come with a significant environmental footprint. Pollution from manufacturing activities, especially emissions, can harm ecosystems and lead to regulatory issues. Installing an Online Continuous Emission Monitoring System (OCEMS) offers an effective solution for reducing pollution, maintaining compliance, and improving overall operations. Here are five key benefits of implementing OCEMS in manufacturing plants.
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

            {/* Benefits Sections */}
            {[
              {
                title: '1. Real-Time Data for Proactive Management',
                content: `One of the primary advantages of OCEMS is real-time data monitoring. Emission levels are tracked continuously, allowing plant operators to detect anomalies or spikes immediately. This enables prompt action to rectify issues before they escalate into larger problems, preventing potential violations and downtime. Real-time insights help companies avoid unnecessary delays and ensure that equipment runs optimally, preventing harmful emissions at the source.`,
                benefit:
                  'Key Benefit: Instant access to emissions data facilitates timely decisions, reducing the likelihood of environmental hazards and maintaining production efficiency.',
              },
              {
                title: '2. Ensure Regulatory Compliance',
                content: `Manufacturing plants must comply with various local, national, and international environmental regulations. OCEMS systems automatically track and record emissions, generating reports that can be directly shared with regulatory bodies. By providing an auditable trail of emissions data, OCEMS helps companies prove compliance with laws such as the Air (Prevention and Control of Pollution) Act or national emissions standards.`,
                benefit:
                  'Key Benefit: Simplifies the reporting process and helps avoid costly penalties due to non-compliance with environmental regulations.',
              },
              {
                title: '3. Cost Savings through Fines Reduction and Process Optimization',
                content: `Non-compliance with environmental regulations can result in hefty fines, reputational damage, and potential legal issues. By proactively monitoring emissions and keeping them within permissible limits, OCEMS helps manufacturing plants avoid these penalties. Furthermore, the data provided can identify inefficiencies within the production process. Streamlining these processes leads to reduced waste, optimized fuel consumption, and overall operational cost savings.`,
                benefit:
                  'Key Benefit: Prevents fines and optimizes production processes, leading to significant cost savings in the long run.',
              },
              {
                title: '4. Improved Operational Efficiency',
                content: `Analyzing emissions data isn’t just about compliance; it also helps manufacturers optimize production processes. By closely monitoring energy usage and emissions, OCEMS can highlight areas where energy efficiency improvements are possible. This, in turn, leads to better resource management and reduced environmental impact, enhancing the overall productivity of the plant.`,
                benefit:
                  'Key Benefit: Continuous data analysis enables manufacturers to fine-tune operations, reducing waste and maximizing resource efficiency.',
              },
              {
                title: '5. Support for Sustainability and CSR Goals',
                content: `In today’s world, sustainability is more important than ever. Many companies are setting ambitious Corporate Social Responsibility (CSR) and sustainability goals. Installing OCEMS aligns manufacturing practices with these goals by providing measurable data on emissions reductions and environmental impact. This not only helps companies meet their sustainability targets but also enhances their corporate reputation and strengthens relationships with environmentally conscious consumers and stakeholders.`,
                benefit:
                  'Key Benefit: Demonstrates a commitment to sustainability, making it easier to meet CSR goals and enhance brand value.',
              },
            ].map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                <p className="font-semibold text-gray-700">{section.benefit}</p>
              </div>
            ))}

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Conclusion</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Implementing OCEMS in manufacturing plants is a smart, long-term investment that delivers multiple benefits. It provides real-time insights, ensures compliance, cuts costs, improves efficiency, and supports sustainability efforts. By installing OCEMS, manufacturers can meet environmental obligations while also improving their bottom line, creating a win-win scenario for both the business and the environment.
            </p>
          </div>

          {/* Empty column for spacing */}
          <div className="hidden lg:block lg:w-1/4"></div>
        </div>
      </div>
      {/* Divider */}
      <div className="py-10"></div>
    </div>
  );
};

export default BlogContent7;
