'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TruOIComponent = () => {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  
  // Feature items for the marquee
  const firstRowItems = [
    "Real-time Analytics", 
    "Voice-activated AI", 
    "Multi-location Management", 
    "Operational Insights", 
    "Performance Tracking",
    "Automated Reporting",
    "Predictive Analysis",
    "Custom Dashboards",
    "Data Visualization",
    "KPI Monitoring"
  ];
  
  const secondRowItems = [
    "Business Intelligence", 
    "Decision Support", 
    "Process Automation", 
    "AI-powered Insights",
    "Trend Analysis",
    "Revenue Forecasting",
    "Inventory Management",
    "Staff Optimization"
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center text-[#366A00] mb-4">truOI</h2>
        <div className="h-[1px] bg-gray-300 w-full mb-4"></div>
        <p className="text-gray-800 mb-6">
          truOI delivers true business intelligence by transforming complex data into actionable insights. Our platform offers real-time data processing and analysis, intuitive visualization tools for better decision making, and customizable alerts and notifications for critical metrics.
        </p>
      </div>

      {/* AI-Powered Operations Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-center text-[#366A00] mb-6">AI-Powered Operations</h3>
        <div className="flex justify-center mb-8">
          <div className="max-w-2xl w-full">
            <Image 
              src="/images/products/tru-oi.png" 
              alt="AI-Powered Analytics Dashboard" 
              width={600}
              height={350}
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-800 font-medium mb-6">
            You dream big. You inspire. You lead with a vision. You now have the power of AI to bring a transformational change at unit level Operations.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              TruOI centralizes and automates your entire operations. Voice-activated AI Command instantly retrieves answers to any operational question for each location and keeps each location manager informed in real-time.
            </p>
            <p>
              AI-powered platform for Franchisors, multi-unit Franchisees, Chains, and restaurants. Seamlessly integrate all your locations with intelligent operations, analytics, and AI-powered staff. Optimize your business through automation and drastically improve operations using AI.
            </p>
          </div>
        </div>
      </div>

      {/* How TruOI Can Help You - Full Width Marquee */}
      <div className="-mx-4 md:-mx-6 lg:-mx-8 mb-12">
        <section className="py-12 bg-gray-100 overflow-hidden w-screen relative" style={{ left: "50%", right: "50%", marginLeft: "-51.2vw", marginRight: "-50vw", maxWidth: "100vw" }}>
          <div className="max-w-[95%] mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-5xl font-bold text-[#1B3D69] mb-2">Here's How TruOI Can Help You</h3>
              <p className="text-gray-600 text-sm">Turn Your Data Into Actionable Business Decisions</p>
            </div>
            
            {/* Feature blocks - animated marquee */}
            <div className="overflow-hidden mb-3">
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
            </div>
            
            <div className="overflow-hidden">
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
            </div>
          </div>
        </section>
      </div>

   

      {/* Partners Section */}
      <div className="-mx-4 md:-mx-6 lg:-mx-8 mb-12">
        <section className="py-12 bg-white overflow-hidden w-screen relative" style={{ left: "50%", right: "50%", marginLeft: "-51.2vw", marginRight: "-50vw", maxWidth: "100vw" }}>
          <div className="max-w-[95%] mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-5xl font-bold text-[#1B3D69] mb-4">
                TruOI is partnered with 3k+ fastest<br />
                growing companies
              </h3>
            </div>
            
            {/* Partner logos marquee */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-16 md:gap-24 lg:gap-32"
                style={{ 
                  width: "fit-content",
                  animation: "partner-marquee 30s linear infinite"
                }}
              >
                {/* First set of logos */}
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/dwinn.png" 
                    alt="Dwinn" 
                    width={100} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/baystate-health.png" 
                    alt="Baystate Health" 
                    width={150} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/bethesda.png" 
                    alt="Bethesda" 
                    width={180} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/cornell.png" 
                    alt="Cornell Medical Center" 
                    width={150} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/coxhealth.png" 
                    alt="Cox Health" 
                    width={150} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/bristol-myers.png" 
                    alt="Bristol Myers" 
                    width={150} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                
                {/* Duplicate set for seamless looping */}
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/dwinn.png" 
                    alt="Dwinn" 
                    width={100} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/baystate-health.png" 
                    alt="Baystate Health" 
                    width={150} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/bethesda.png" 
                    alt="Bethesda" 
                    width={180} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/cornell.png" 
                    alt="Cornell Medical Center" 
                    width={150} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/coxhealth.png" 
                    alt="Cox Health" 
                    width={150} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300">
                  <Image 
                    src="/images/partners/bristol-myers.png" 
                    alt="Bristol Myers" 
                    width={150} 
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About TruOI Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-[#366A00] mb-4">About TruOI</h3>
          <div className="h-[1px] bg-gray-300 w-full mb-8"></div>
        </div>

        {/* Analytics Image */}
        <div className="mb-10 flex justify-center">
          <div className="max-w-3xl w-full">
            <Image 
              src="/images/products/tru-oi-about.png" 
              alt="TruOI Analytics Report" 
              width={800}
              height={400}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Customer Driven Section */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h4 className="text-xl font-bold text-gray-800 mb-4">CUSTOMER DRIVEN. PEOPLE FOCUSED.</h4>
          <p className="text-gray-700 mb-8">
            For almost 20 years, TruOI has worked both domestically and internationally with growth-directed organizations seeking to simplify enterprise reporting, improve team member performance, and generate operational success in real time.
          </p>

          <h4 className="text-xl font-bold text-gray-800 mb-4">ONE TO ONE, NOT ONE TO MANY.</h4>
          <p className="text-gray-700 mb-8">
            With over 3,000 clients and experience in multiple industries, our team members bring unique one-to-one coaching and support experience to each engagement.
          </p>

          <p className="text-gray-700">
            Our Operational Intelligence Platform is not a static reporting system but a one-of-a-kind real-time measurement, automation, coaching & training, and business optimization.
          </p>
        </div>
      </div>

      <div className="-mx-4 md:-mx-6 lg:-mx-8 mb-12">
        <section className="py-12 bg-gray-100 overflow-hidden w-screen relative" style={{ left: "50%", right: "50%", marginLeft: "-51.2vw", marginRight: "-50vw", maxWidth: "100vw" }}>
          <div className="max-w-[95%] mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-5xl font-bold text-[#1B3D69] mb-2">
                Integrates All Corporate / Unit Software
              </h3>
              <p className="text-gray-600 text-sm">ANY DATA, ANY DEVICE, USING POWERFUL AI TECHNOLOGY</p>
            </div>
            
            {/* Software integration blocks - first row marquee */}
            <div className="overflow-hidden mb-3">
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
            </div>
            
            {/* Software integration blocks - second row marquee (reverse direction) */}
            <div className="overflow-hidden">
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
            </div>
          </div>
        </section>
      </div>
      
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
      `}</style>
    </div>
  );
};

export default TruOIComponent;
