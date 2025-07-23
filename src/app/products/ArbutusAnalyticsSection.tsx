'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaSearch, FaCheckCircle, FaChartBar, FaComments, FaCogs } from 'react-icons/fa';

const ArbutusAnalyticsSection = () => {
  // Sample case studies data
  const caseStudies = [
    {
      title: "Auditing Analytics",
      description: "Auditors are developing the technical capacity to analyze the vast amounts of information they have access to and are using advanced techniques to mine that data to build stronger audit methodologies and improve the bottom line.",
      image: "/images/products/arbutus/Auditing Analytics.jpg",
      color: "bg-purple-400"
    },
    {
      title: "Telecom Analytics",
      description: "Telecom analytics include increasing sales, reducing churn and fraud, network management optimization, customer experience enhancement, improving risk management, automation of operational analytics and predictive analytics.",
      image: "/images/products/arbutus/Telecom Analytics.jpg",
      color: "bg-purple-400"
    },
    {
      title: "Retail Analytics",
      description: "Retail analytics is the process of providing analytical data on inventory levels, supply chain movement, consumer demand, sales, etc. that are crucial for making marketing, and procurement decisions. Through our solutions, we provide...",
      image: "/images/products/arbutus/Retail Analytics.jpg",
      color: "bg-purple-400"
    }
  ];

  // "Your Need" cards data (updated)
  const yourNeedCards = [
    { icon: FaDatabase, text: "Access All Data", description: "Access your Data: Big, Small, Complex, Disparate. Systems: Financial, Operational, IT. Platforms: On Premise, Cloud, PC, Mainframe." },
    { icon: FaSearch, text: "Explore", description: "Discover what data you have before you get started. Unlock new analytic opportunities based on what you find." },
    { icon: FaCheckCircle, text: "Verify & Prep", description: "Ensure your data is accurate and complete. Consolidate, Normalize, Cleanse, Discover." },
    { icon: FaChartBar, text: "Analyze", description: "Engineered for Analysis. Unlock the Power to ask any question of all your data and process at millions of records per second." },
    { icon: FaComments, text: "Communicate & Remediate", description: "Systematically Manage Your Results. Share Your Findings across your organization within Arbutus or within your Data Visualization or other Applications." },
    { icon: FaCogs, text: "Automate", description: "Automate Your Analytics. Scheduled, Centralized, Continuous. Focus your efforts where they're needed the most." },
  ];

 
  return (
    <div className="w-full">
      <section className=" bg-white w-full">
        <div className="">
          {/* Top heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pb-4 mb-0"
          >
            <h2 className="text-3xl md:text-3xl text-center font-bold text-[#366A00] ">Why Arbutus for Analytics?</h2>
          </motion.div>

          {/* Introductory paragraphs 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-800 text-lg justify-text"
          >
            We are a pivotal partner for analytics teams who see strong analytics as a key factor in their success.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-800 text-lg justify-text mb-8"
          >
            Arbutus has proven that we can make it easier and more cost effective to implement and use analytics within your team and audit processes.
            The immense capabilities of Arbutus simplify and support your path to analytics at every stage.
          </motion.p>
          */}

          {/* "Your Need" Cards Grid */}
          {/* Mobile Carousel */}
          <div className="flex flex-nowrap overflow-x-auto snap-x sm:hidden gap-4 w-full pb-2">
            <div className="flex gap-4">
              {yourNeedCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-[#1B3D69] p-3 min-h-[180px] rounded-lg shadow-md text-white text-center flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#366A00] transition-all duration-300 snap-center flex-shrink-0 w-64 transform transition-transform hover:scale-105`}
                >
                  <span className="mb-2 flex items-center justify-center w-12 h-12 rounded-full bg-[#23486b]">{React.createElement(card.icon, { className: "text-3xl text-white" })}</span>
                  <h3 className="text-lg font-bold mb-2 mt-1 text-white">{card.text}</h3>
                  <p className="font-medium text-xs leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Grid for larger screens */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {yourNeedCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#1B3D69] p-6 rounded-lg shadow-md text-white text-center flex flex-col items-center justify-center min-h-[220px] hover:shadow-xl hover:bg-[#366A00] transition-all duration-300 transform transition-transform hover:scale-105`}
              >
                <span className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-[#23486b]">{React.createElement(card.icon, { className: "text-4xl text-white" })}</span>
                <h3 className="text-xl font-bold mb-3 mt-1 text-white">{card.text}</h3>
                <p className="font-medium text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
          {/* Custom analytics paragraph */}
          <div className="w-full flex justify-center mt-8">
            <p className=" text-base md:text-lg text-gray-800">
              Develop complex, custom analytics using scripts, workflows or menu-driven functionality. Integrate with executables in R, Python, and DOS, enabling the development of efficient, unified analytics.
            </p>
          </div>
        </div>
      </section>
      {/* Arbutus Powering Data Analytics Section */}
      <section className="w-full py-6">
        <div className="mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#366A00] mb-4">
            Arbutus is Powering data analytics for over 1,000 growth-focused firms
          </h2>
          <p className="text-base md:text-lg text-gray-800">
            Whether it’s streamlining the tax administration of an entire nation or accelerating the audit transformation of a major energy sector leader, Arbutus empowers change at scale.<br/>
            Discover with us  “Why top organizations across the globe trust Arbutus technology to drive their Audit, Fraud Detection, Risk Management, Compliance, and IT initiatives?”.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ArbutusAnalyticsSection;