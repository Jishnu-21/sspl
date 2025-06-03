'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ArbutusAnalyticsSection from './ArbutusAnalyticsSection';

const ArbutusComponent = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "We use your product and it works great. We'll be adding more to this automation process on the table, and I'd love to get training from your end.",
      name: "Mr. Mohandes Liem",
      title: "Group IT Manager (Information Technology)",
      company: "A.A. Abunayyan Trading Company of Bahrain",
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
          <span className="font-bold">ARBUTUS</span> provides the best in audit software and data analysis technology. Since 2003, we have been innovating and delivering specialized data analysis technology to our users. Today, Arbutus offers auditors and business professionals the very best in data analysis technology. Arbutus Analyzer is the tool of choice for auditing, risk analysis, and compliance professionals. Arbutus Audit Analytics represents the very best in audit software and data analysis technology. Based on 25 years of software innovation and development, Analytics has been designed to meet the exacting standards that auditors demand.
        </p>
      </div>
      
      {/* Company Logos */}
      <div className="mb-8 flex justify-center">
        <div className="relative h-[120px] w-[240px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentIndex === index ? 1 : 0,
                display: currentIndex === index ? 'flex' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="border-2 border-blue-100 rounded-lg p-4 bg-white shadow-sm">
                <img 
                  src={testimonial.logo} 
                  alt={`${testimonial.company} logo`} 
                  className="h-[80px] w-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Testimonials Carousel */}
      <div className="mb-12 text-center max-w-3xl mx-auto relative overflow-hidden py-8">      
        <div className="relative h-[200px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: currentIndex === index ? 1 : 0,
                y: currentIndex === index ? 0 : 20,
                display: currentIndex === index ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="absolute w-full px-4"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
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
        <div className="flex justify-center space-x-2 mt-4">
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
      
      {/* Why Arbutus for Analytics section */}
      <div className="mt-12 mb-16">
        <ArbutusAnalyticsSection />
      </div>
    </div>
  );
};

export default ArbutusComponent;
