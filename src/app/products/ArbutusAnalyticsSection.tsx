'use client'
import React from 'react';
import { motion } from 'framer-motion';

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

  // "Your Need" cards data
  const yourNeedCards = [
    { text: "Better teamwork when it comes to analytics?" },
    { text: "An alternative to ACL Desktop™?" },
    { text: "Better backend analytics and data quality to feed Tableau™ or Qlik™?" },
    { text: "Subject Matter Expertise in Audit Analytics?" },
    { text: "Simpler, more usable alternative to ACL Analytics Exchange™?" },
    { text: "Help for your team with skills and tools that go beyond Excel™?" },
    { text: "Bringing you pertinent data for your perusal" },
    { text: "Analytics that work & enhance Audit Management Technology" },
  ];

 
  return (
    <div className="-mx-4 md:-mx-6 lg:-mx-8">
      
      <section className="py-2 pt-12 bg-white overflow-hidden w-screen relative" style={{ left: "50%", right: "50%", marginLeft: "-51.1vw", marginRight: "-50vw", maxWidth: "100vw" }}>
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24">
          {/* Top heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pb-4 mb-0"
          >
            <h2 className="text-3xl md:text-3xl text-center font-bold text-[#366A00] mb-8">Why Arbutus for Analytics?</h2>
          </motion.div>

          {/* Introductory paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-800 text-lg text-center max-w-4xl mx-auto"
          >
            We are a pivotal partner for analytics teams who see strong analytics as a key factor in their success.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-800 text-lg text-center mb-8 max-w-4xl mx-auto"
          >
            Arbutus has proven that we can make it easier and more cost effective to implement and use analytics within your team and audit processes.
            The immense capabilities of Arbutus simplify and support your path to analytics at every stage.
          </motion.p>

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
                  className={`bg-[#1B3D69] p-3 min-h-[120px] rounded-lg shadow-md text-white text-center flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#366A00] transition-all duration-300 snap-center flex-shrink-0 w-56`}
                >
                  <span className="bg-white text-gray-800 text-xs font-bold px-2 py-0.5 rounded-full mb-2">YOUR NEED :</span>
                  <p className="font-medium text-xs leading-relaxed">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Grid for larger screens */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {yourNeedCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#1B3D69] p-6 rounded-lg shadow-md text-white text-center flex flex-col items-center justify-center min-h-[180px] hover:shadow-xl hover:bg-[#366A00] transition-all duration-300`}
              >
                <span className="bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full mb-4">YOUR NEED :</span>
                <p className="font-medium text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArbutusAnalyticsSection;
