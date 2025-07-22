'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PartnerMarquee from './PartnerMarquee';

const TruOIComponent = () => {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  
  // Feature items for the marquee
  const firstRowItems = [
    "Increase Sales & Profits", 
    "ReduceInventory Costs", 
    "Reduce Labor Costs", 
    "Increase Talent Performance", 
    "Increase Sales & Profits", 
    "ReduceInventory Costs", 
    "Reduce Labor Costs", 
    "Increase Talent Performance", 
  ];
  
  const secondRowItems = [
   "Increase Customer Satisfaction",
    "Reduce Reporting Time",
    "No Need for Data Warehouse",
    "No Programming Experience Required",
   "Increase Customer Satisfaction",
    "Reduce Reporting Time",
    "No Need for Data Warehouse",
    "No Programming Experience Required",
  ];

  return (
    <div>
      <motion.div 
        className="mb-4 sm:mb-8"
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
        <div className="h-[1px] bg-gray-300 text-justify w-full mb-4"></div>
        <motion.p 
          className="text-gray-800 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          truOI delivers true business intelligence by transforming complex data into actionable insights. Our platform offers real-time data processing and analysis, intuitive visualization tools for better decision making, and customizable alerts and notifications for critical metrics.
        </motion.p>
      </motion.div>

      {/* AI-Powered Operations Section */}
      <motion.div 
        className="mb-6 sm:mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3 
          className="text-2xl md:text-3xl lg:text-3xl font-semibold text-center text-[#366A00] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          AI-Powered Operations
        </motion.h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-center">
          {/* Image Section */}
          <motion.div 
            className="w-full h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Image 
              src="/images/products/tru-oi.png" 
              alt="AI-Powered Analytics Dashboard" 
              width={600}
              height={350}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-gray-800 font-medium text-justify mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              You dream big. You inspire. You lead with a vision. You now have the power of AI to bring a transformational change at unit level Operations.
            </motion.p>

            <motion.div 
              className="space-y-2 sm:space-y-4 text-justify text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>
                TruOI centralizes and automates your entire operations. Voice-activated AI Command instantly retrieves answers to any operational question for each location and keeps each location manager informed in real-time.
              </p>
              <p>
                AI-powered platform for Franchisors, multi-unit Franchisees, Chains, and restaurants. Seamlessly integrate all your locations with intelligent operations, analytics, and AI-powered staff. Optimize your business through automation and drastically improve operations using AI.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* How TruOI Can Help You - Full Width Marquee */}
      <motion.div 
        className="-mx-4 md:-mx-6 lg:-mx-8 mb-6 sm:mb-10"
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
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#1B3D69] mb-2">Here's How TruOI Can Help You</h3>
              <p className="text-gray-600 text-sm">Turn Your Data Into Actionable Business Decisions</p>
            </motion.div>
            
            {/* Feature blocks - animated marquee */}
            <motion.div 
              className="overflow-hidden mb-2 sm:mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div 
                ref={firstRowRef}
                className="flex gap-3 animate-marquee"
                style={{ 
                  width: "fit-content",
                  animation: "marquee 30s linear infinite"
                }}
              >
                {[...firstRowItems, ...firstRowItems].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-300 h-10 rounded flex items-center justify-center px-4 whitespace-nowrap"
                  >
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div 
                ref={secondRowRef}
                className="flex gap-3"
                style={{ 
                  width: "fit-content",
                  animation: "marquee-reverse 25s linear infinite"
                }}
              >
                {[...secondRowItems, ...secondRowItems].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-300 h-10 rounded flex items-center justify-center px-4 whitespace-nowrap"
                  >
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#1B3D69] ">
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
    <h3 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-[#366A00] mb-3">About TruOI</h3>
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
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#1B3D69] mb-2">
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
                    className="bg-white h-10 rounded flex items-center justify-center px-6 whitespace-nowrap"
                  >
                    <span className="text-gray-700 font-medium">{item}</span>
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
                    className="bg-white h-10 rounded flex items-center justify-center px-6 whitespace-nowrap"
                  >
                    <span className="text-gray-700 font-medium">{item}</span>
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
                    className="bg-white h-10 rounded flex items-center justify-center px-6 whitespace-nowrap"
                  >
                    <span className="text-gray-700 font-medium">{item}</span>
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
                    className="bg-white h-10 rounded flex items-center justify-center px-6 whitespace-nowrap"
                  >
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
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