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
        <h3 className="text-xl font-semibold text-[#1B3D69] mb-4">Arbutus Software</h3>
        <p className="text-gray-800 mb-4">
          <span className="font-bold">ARBUTUS Software </span>provides the best in audit software and data analysis technology. Since 2003, we have been innovating and delivering specialized data analysis technology to our users. Today, Arbutus offers auditors and analysts, the very best in data analytics and audit software. It is well-designed to meet the essential features for auditing, risk analysis, and compliance professionals. Arbutus Audit Analytics represents the very best in audit software and data analysis technology. Based on 25 years of software innovation and development, Analytics has become a premium choice of leading audit and data analysis professionals.


        </p>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left Side - YouTube Video */}
        <div className="h-full flex items-center">
          <div className="w-full relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
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
        <div className="h-full flex items-center">      
          <div className="w-full relative min-h-[400px] flex flex-col items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 50,
                  display: currentIndex === index ? 'flex' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-full px-4 flex flex-col items-center"
              >
                {/* Company Logo */}
                <div className="mb-6">
                  <div className="border-2 border-blue-100 rounded-lg p-4 bg-white shadow-sm">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} logo`} 
                      className="h-[80px] w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 w-full">
                  <p className="text-gray-800 italic mb-4 text-lg">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-gray-700 font-medium">
                    {testimonial.name}, {testimonial.title}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mb-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Arbutus for Analytics section */}
      <div className="mt-12 mb-16">
        <ArbutusAnalyticsSection />
      </div>
    </div>
  );
};

export default ArbutusComponent;
