'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ArbutusAnalyticsSection from './ArbutusAnalyticsSection';

const ArbutusComponent = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "We use your product and it works great. We'll be adding more to this automation process on the table, and I'd love to get training from your end.",
      name: "Mr. Mohandas Unni",
      title: "Group IT Manager (Information Technology)",
      company: "Y.K. Almoayyed & Sons , Kingdom of Bahrain",
      logo: '/images/testimonials/yk.jpg',
    },
    {
      quote: "We have been using Arbutus Analyzer tool since 2020 and to summarize our experience we can conclude as below: The organization has been utilizing the tool on recurring basis. The overall design of logics and output makes it user friendly. The interface is quite seamless and helps in deriving targeted outliers. In addition to that, post-sale customer experience is satisfying.",
      name: "Maitree Panchal",
      title: "Finance",
      company: "Birla Sun Life Insurance",
      logo: '/images/testimonials/birla.gif',
    },
  ];

  // State for current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      <div className="mb-6">
        {/* Heading centered */}
        <h2 className="text-4xl text-center font-semibold text-[#366A00] mb-4">Arbutus</h2>
        <div className="h-[1px] bg-gray-300 w-full mb-4"></div>
        
        {/* Sub-heading centered */}
        <h3 className="text-xl text-center font-semibold text-[#1B3D69] mb-4">Arbutus Software</h3>
        
        {/* Paragraph with justified alignment */}
        <p className="text-gray-800 mb-4 text-justify">
          <span className="font-bold">ARBUTUS Software </span>provides the best in audit software and data analysis technology. Since 2003, we have been innovating and delivering specialized data analysis technology to our users. Today, Arbutus offers auditors and analysts, the very best in data analytics and audit software. It is well-designed to meet the essential features for auditing, risk analysis, and compliance professionals. Arbutus Audit Analytics represents the very best in audit software and data analysis technology. Based on 25 years of software innovation and development, Analytics has become a premium choice of leading audit and data analysis professionals.
        </p>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - YouTube Video */}
        <div className="h-full flex items-center order-1 lg:order-none mb-8 lg:mb-0 min-h-[400px] lg:min-h-[440px]">
          <div className="w-full relative pb-[65%] h-0 rounded-lg overflow-hidden shadow-lg min-h-[400px] lg:min-h-[440px]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/C3ABVOIBQXY"
              title="Arbutus Software Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Right Side - Testimonials */}
        <div className="h-full flex flex-col order-2 lg:order-none min-h-[400px] lg:min-h-[440px]">
          <div className="w-full flex flex-col items-center justify-center relative min-h-[400px] lg:min-h-[440px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  display: currentIndex === index ? 'flex' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="w-full px-2 sm:px-4 flex flex-col items-center mb-6 absolute left-0 right-0"
              >
                {/* Company Logo */}
                <div className="mb-6">
                  <div className="border-2 border-blue-100 rounded-lg p-2 sm:p-4 bg-white shadow-sm flex justify-center items-center">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} logo`} 
                      className="h-[48px] sm:h-[60px] md:h-[80px] w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-gray-100 w-full">
                  <p className="text-gray-800 italic mb-4 text-sm sm:text-base">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-gray-700 font-medium text-sm">
                    {testimonial.name}, {testimonial.title}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Dots indicator */}
          <div className="flex justify-center items-center space-x-2 mt-4 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#1B3D69] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Arbutus for Analytics section */}
      <div >
        <ArbutusAnalyticsSection />
      </div>
    </div>
  );
};

export default ArbutusComponent;
