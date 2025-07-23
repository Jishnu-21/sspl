'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PartnerMarquee from './PartnerMarquee';
import { MdShowChart, MdInventory, MdPeople, MdTrendingUp, MdSentimentSatisfiedAlt, MdAccessTime, MdStorage, MdCodeOff } from 'react-icons/md';

const TruOIComponent = () => {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  
  // Feature items for the marquee
  const firstRowItems = [
    {
      label: "Increase Sales & Profits",
      icon: <MdShowChart size={32} />,
    },
    {
      label: "Reduce Inventory Costs",
      icon: <MdInventory size={32} />,
    },
    {
      label: "Reduce Labor Costs",
      icon: <MdPeople size={32} />,
    },
    {
      label: "Increase Talent Performance",
      icon: <MdTrendingUp size={32} />,
    },
  ];

  const secondRowItems = [
    {
      label: "Increase Customer Satisfaction",
      icon: <MdSentimentSatisfiedAlt size={32} />,
    },
    {
      label: "Reduce Reporting Time",
      icon: <MdAccessTime size={32} />,
    },
    {
      label: "No Need for Data Warehouse",
      icon: <MdStorage size={32} />,
    },
    {
      label: "No Programming Experience Required",
      icon: <MdCodeOff size={32} />,
    },
  ];

  return (
    <div>
      <motion.div 
        className="mb-"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl md:text-4xl lg:text-4xl font-semibold text-center text-[#366A00] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          truOI
        </motion.h2>
        <h3 className="text-lg text-center font-medium text-[#1B3D69] mb-2">
        AI-Powered Operations Management Solutions for Multi-Unit Businesses.
        </h3>
        <div className="h-[1px] bg-gray-300 text-justify w-full mb-4"></div>
        <motion.p 
          className="text-gray-800 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
TruOI is an intelligent AI platform purpose-built for multi-unit businesses — including Franchisors, Franchisees, Restaurants, and Retail Chains.
</motion.p>
        <motion.p 
          className="text-gray-800 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
Designed to streamline and elevate operations, TruOI delivers smart, AI-driven tools to optimize performance across all locations. From simplifying site audits and monitoring employee training to managing digital checklists, incident reports, and customized alerts — everything you need is at your fingertips.
</motion.p>
        <motion.p 
          className="text-gray-800 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
With all units connected in a single, unified system, site managers gain actionable insights, while leadership teams maintain complete visibility and control across the network.
</motion.p>
      </motion.div>

      {/* AI-Powered Operations Section */}
    

      {/* How TruOI Can Help You - Card Grid Section */}
      <motion.div 
        className="mb-6 sm:mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <section className="py-6 sm:py-10  overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
            <motion.div 
              className="text-center mb-4 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#366A00] mb-2">Here's How TruOI Can Help You</h3>
              <p className="text-gray-600 text-md">Turn Your Data Into Actionable Business Decisions</p>
            </motion.div>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-row items-center justify-center gap-0 w-full">
                {firstRowItems.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <motion.div
                      className="rounded-xl bg-[#1b3d69] hover:bg-[#366a00] transition-colors duration-300 shadow-md p-4 flex flex-col items-center justify-center h-36 w-56 text-center cursor-pointer group transition-transform hover:scale-105"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.07 }}
                    >
                      <span className="mb-3 text-white">{item.icon}</span>
                      <span className="text-white text-base font-semibold">{item.label}</span>
                    </motion.div>
                    {idx !== firstRowItems.length - 1 && (
                      <div className="flex-1 flex items-center justify-center">
                        <div className="border-t border-dotted border-blue-200 w-12 md:w-16 lg:w-20 xl:w-24"></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-center gap-0 w-full">
                {secondRowItems.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <motion.div
                      className="rounded-xl bg-[#1b3d69] hover:bg-[#366a00] transition-colors duration-300 shadow-md p-4 flex flex-col items-center justify-center h-36 w-56 text-center cursor-pointer group transition-transform hover:scale-105"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.07 }}
                    >
                      <span className="mb-3 text-white">{item.icon}</span>
                      <span className="text-white text-base font-semibold">{item.label}</span>
                    </motion.div>
                    {idx !== secondRowItems.length - 1 && (
                      <div className="flex-1 flex items-center justify-center">
                        <div className="border-t border-dotted border-blue-200 w-12 md:w-16 lg:w-20 xl:w-24"></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Partners Section */}
      <motion.div 
        className="-mx-4 md:-mx-6 lg:-mx-8 mb-6 sm:mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <section className=" bg-white overflow-hidden w-screen relative" style={{ left: "50%", right: "50%", marginLeft: "-51.2vw", marginRight: "-50vw", maxWidth: "100vw" }}>
          <div className="max-w-[95%] mx-auto">
            <motion.div 
              className="text-center mb-6 sm:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#366a00] ">
                TruOI is partnered with 3k+ fastest<br />
                growing companies
              </h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <PartnerMarquee />
            </motion.div>
          </div>
        </section>
      </motion.div>

{/* About TruOI Section */}
<motion.div 
  className="mb-8"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
  <motion.div 
    className="text-center mb-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
             

    <h3  className="text-2xl md:text-3xl lg:text-3xl font-semibold text-center text-[#366A00] mb-4 sm:mb-6">About TruOI</h3>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full mb-6"></div>
  </motion.div>

  <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
    {/* Analytics Image */}
    <motion.div 
      className="w-full max-w-[500px] mx-auto h-auto lg:order-1 order-2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Image 
        src="/images/products/tru-oi-about.png" 
        alt="TruOI Analytics Report" 
        width={600}
        height={300}
        className="w-full h-auto object-contain"
      />
    </motion.div>

    {/* Customer Driven Section */}
    <motion.div 
      className="flex flex-col justify-center h-full lg:order-2 order-1 space-y-4"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
          <div className="w-1 h-6 bg-[#366A00] rounded-full mr-3"></div>
          CUSTOMER DRIVEN. PEOPLE FOCUSED.
        </h4>
        <p className="text-gray-700  text-smtext-justify leading-relaxed">
          For almost 20 years, TruOI has worked both domestically and internationally with growth-directed organizations seeking to simplify enterprise reporting, improve team member performance, and generate operational success in real time.
        </p>
      </motion.div>

      <motion.div
        className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
          <div className="w-1 h-6 bg-[#366A00] rounded-full mr-3"></div>
          ONE TO ONE, NOT ONE TO MANY.
        </h4>
        <p className="text-gray-700 text-sm text-justify leading-relaxed">
          With over 3,000 clients and experience in multiple industries, our team members bring unique one-to-one coaching and support experience to each engagement.
        </p>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-[#366A00]/5 to-[#366A00]/10 rounded-lg p-5 border border-[#366A00]/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-gray-700 text-justify leading-relaxed font-medium">
          Our Operational Intelligence Platform is not a static reporting system but a one-of-a-kind real-time measurement, automation, coaching & training, and business optimization.
        </p>
      </motion.div>
    </motion.div>
  </div>
</motion.div>

      {/* Integration Section */}
      <motion.div 
        className="-mx-4 md:-mx-6 lg:-mx-8 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <section className="py-6 sm:py-10 bg-gray-100 overflow-hidden w-screen relative" style={{ left: "50%", right: "50%", marginLeft: "-51.2vw", marginRight: "-50vw", maxWidth: "100vw" }}>
          <div className="max-w-[95%] mx-auto">
            <motion.div 
              className="text-center mb-4 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#366a00] mb-2">
                Integrates All Corporate / Unit Software
              </h3>
              <p className="text-gray-600 text-sm">ANY DATA, ANY DEVICE, USING POWERFUL AI TECHNOLOGY</p>
            </motion.div>
            
            {/* Software integration blocks - first row marquee */}
            <motion.div 
              className="overflow-hidden mb-2 sm:mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div 
                className="flex gap-3 animate-marquee"
                style={{ 
                  width: "fit-content",
                  animation: "integration-marquee 25s linear infinite"
                }}
              >
                {/* First row of integration blocks */}
                {[
                  "POS (POINT-OF-SALE)",
                  "CRM",
                  "ERP",
                  "EXCEL",
                  "GOOGLE SHEETS",
                  "ACCOUNTING-CORP",
                  "ACCOUNTING-UNIT",
                  "LOYALTY SOFTWARE",
                  "ROYALTY SOFTWARE",
                  "VERTICAL SOFTWARE"
                ].map((item, index) => (
                  <div 
                    key={`integration-1-${index}`} 
                    className="bg-[#1B3D69] h-10 rounded flex items-center text-white justify-center px-6 whitespace-nowrap transition-colors duration-300 hover:bg-[#366A00] hover:text-white cursor-pointer"
                  >
                    <span className="text-white font-medium transition-colors  hover:text-white">{item}</span>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  "POS (POINT-OF-SALE)",
                  "CRM",
                  "ERP",
                  "EXCEL",
                  "GOOGLE SHEETS",
                  "ACCOUNTING-CORP",
                  "ACCOUNTING-UNIT",
                  "LOYALTY SOFTWARE",
                  "ROYALTY SOFTWARE",
                  "VERTICAL SOFTWARE"
                ].map((item, index) => (
                  <div 
                    key={`integration-1-dup-${index}`} 
                    className="bg-[#1B3D69] h-10 rounded flex items-center text-white justify-center px-6 whitespace-nowrap transition-colors duration-300 hover:bg-[#366A00] hover:text-white cursor-pointer"
                  >
                    <span className="text-white font-medium transition-colors  hover:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Software integration blocks - second row marquee (reverse direction) */}
            <motion.div 
              className="overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div 
                className="flex gap-3"
                style={{ 
                  width: "fit-content",
                  animation: "integration-marquee-reverse 30s linear infinite"
                }}
              >
                {/* Second row of integration blocks */}
                {[
                  "HUMAN RESOURCES",
                  "MARKETING",
                  "SOCIAL MEDIA",
                  "INVENTORY",
                  "PRODUCTION",
                  "LABOR MANAGEMENT",
                  "WORKFLOW",
                  "CUSTOMER SERVICE",
                  "FRANCHISE APPS",
                  "CUSTOM APPS" 
                ].map((item, index) => (
                  <div 
                    key={`integration-2-${index}`} 
                    className="bg-[#1B3D69] h-10 rounded flex items-center text-white justify-center px-6 whitespace-nowrap transition-colors duration-300 hover:bg-[#366A00] hover:text-white cursor-pointer"
                  >
                    <span className="text-white font-medium transition-colors  hover:text-white">{item}</span>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  "HUMAN RESOURCES",
                  "MARKETING",
                  "SOCIAL MEDIA",
                  "INVENTORY",
                  "PRODUCTION",
                  "LABOR MANAGEMENT",
                  "WORKFLOW",
                  "CUSTOMER SERVICE",
                  "FRANCHISE APPS",
                  "CUSTOM APPS"
                ].map((item, index) => (
                  <div 
                    key={`integration-2-dup-${index}`} 
                    className="bg-[#1B3D69] h-10 rounded flex items-center text-white justify-center px-6 whitespace-nowrap transition-colors duration-300 hover:bg-[#366A00] hover:text-white cursor-pointer"
                  >
                    <span className="text-white font-medium transition-colors  hover:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <h3 className="text-2xl text-center pt-6 md:text-3xl lg:text-3xl font-bold text-[#366a00] ">
        One Platform - One Sign-on
              </h3>
      </motion.div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes partner-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes integration-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes integration-marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .partner-marquee {
          animation: partner-marquee 20s linear infinite;
          display: flex;
          will-change: transform;
        }
        
        .overflow-hidden:hover .partner-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TruOIComponent;