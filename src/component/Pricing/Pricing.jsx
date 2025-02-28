import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { BiCheckCircle } from "react-icons/bi";

const SubscriptionPage = () => {
  const emsPlans = useMemo(
    () => [
      {
        title: "Business Basic",
        price: "₹2999",
        details: [
          "Water source and consumption data digitization",
          "Alert and alarm Management",
          "Regulatory compliances",
          "24*5 Email and Phone Support",
        ],
        users: "1 user per org",
        parameter: "5 parameters",
        instruments: "5 field instruments per facility",
      },
      {
        title: "Business Standard",
        price: "₹5999",
        details: [
          "Water quality management",
          "APIs based data sources",
          "Advanced water data dashboards",
          "Regulatory documents management",
          "Water analytics including water neutrality",
          "Data availability reports",
          "User and Role management",
        ],
        users: "2 user per org",
        parameter: "15 parameters",
        instruments: "15 field instruments per facility",
      },
      {
        title: "Business Premium",
        price: "₹9999",
        details: [
          "Support for SCADA, BMS, DCS, and OT integrations",
          "Escalation Engine for alerts",
          "Maintenance mode and data correction workflows",
          "Dedicated customer success manager",
        ],
        users: "5 user per org",
        parameter: "30 parameters",
        instruments: "30 field instruments per facility",
      },
    ],
    []
  );

  const esgPlans = useMemo(
    () => [
      {
        title: "ESG Basic",
        price: "₹4999",
        details: [
          "Limited to one report format (BRSR or GRI)",
          "Monthly decarbonization report generation with limited AI usage",
          "No external API integrations",
          "Covers all carbon accounting scopes (Scope 1, 2, 3)",
          "Supports up to 5GB of ESG-related data",
          "Email & knowledge base support",
        ],
        users: "1 user per company",
      },
      {
        title: "ESG Standard",
        price: "₹9999",
        details: [
          "Access to 3 report formats (BRSR, GRI, CDP)",
          "AI-driven sustainability insights & decarbonization roadmaps",
          "Access to external ESG data APIs",
          "Covers all carbon accounting scopes",
          "Supports up to 20GB of ESG-related data",
          "Automated regulatory compliance alerts",
          "Priority email & phone support",
        ],
        users: "5 user per company",
      },
      {
        title: "ESG Premium",
        price: "₹19999",
        details: [
          "Access to all major report formats (BRSR, GRI, CDP, SASB, TCFD)",
          "Automated decarbonization strategies and AI-generated action plans",
          "Full API access for seamless third-party integrations",
          "Covers all carbon accounting scopes with detailed breakdowns",
          "Supports up to 50GB of ESG-related data",
          "Includes asset tracking & carbon offset portfolio management",
          "Real-time compliance updates & risk forecasting",
          "Dedicated account manager & 24/7 support",
        ],
        users: "15 user per company",
      },
      {
        title: "ESG Enterprise",
        price: "₹49999",
        details: [
          "Unlimited users",
          "Supports all global ESG reporting standards",
          "Unlimited AI-driven sustainability insights",
          "Full API suite with custom integration capabilities",
          "Real-time carbon tracking & predictive analytics",
          "Supports up to 500GB of ESG-related data",
          "Advanced carbon asset management & marketplace integration",
          "AI-driven global regulatory compliance alerts",
          "Dedicated ESG consultant & 24/7 priority support",
        ],
        users: "Unlimited users",
      },
    ],
    []
  );

  const renderPlans = (plans) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-white border border-[#034737] shadow-lg rounded-lg p-6 text-center"
          data-aos="fade-up"
        >
          <h4 className="text-xl md:text-2xl font-bold text-[#034737] mb-4">
            {plan.title}
          </h4>
          <p className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">
            {plan.price}
          </p>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Per month, billed annually
            <br />
            {plan.users}
            {plan.parameter && (
              <>
                <br />
                {plan.parameter}
              </>
            )}
          </p>
          <Link
            to="/subscriptionform"
            className="block bg-white border border-[#034737] text-[#034737] py-2 px-6 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
          >
            Get Started
          </Link>
          <ul className="text-left mt-6 space-y-3">
            {plan.details.map((detail, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <BiCheckCircle className="text-[#034737] text-2xl shrink-0 mr-2" />
                <span className="text-sm md:text-base">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-8 px-4 sm:px-6 md:px-20 mt-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl  font-bold text-[#034737] mb-4">
          Choose Your Subscription Plan
        </h1>
        <p className="text-gray-600 md:text-lg">
          Flexible plans to meet your business needs
        </p>
      </div>
      <section className="mb-16">
        {/* <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 text-center">
          EMS Pricing
        </h4> */}
        <div className="text-center mb-8">
          <h2 className="text-xl  font-semibold text-gray-800">EMS Pricing</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto  mt-2 rounded"></div>
        </div>

        {renderPlans(emsPlans)}
      </section>
      <section>
        <div className="text-center mb-8">
          <h2 className="text-xl  font-semibold text-gray-800">ESG Pricing</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto  mt-2 rounded"></div>
        </div>
        {renderPlans(esgPlans)}
      </section>
    </div>
  );
};

export default SubscriptionPage;
