'use client'
import React, { useState, useEffect } from 'react';
import ArbutusAnalyticsSection from './ArbutusAnalyticsSection';
import LogoMarquee from './LogoMarquee';

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

  const logos = [
    { name: 'Premium', logo: '/images/products/arbutus/partners/1.png' },
    { name: 'Burger', logo: '/images/products/arbutus/partners/2.png' },
    { name: 'JSC', logo: '/images/products/arbutus/partners/3.png' },
    { name: 'JSC', logo: '/images/products/arbutus/partners/4.png' },
    { name: 'JSC', logo: '/images/products/arbutus/partners/5.png' },
    { name: 'JSC', logo: '/images/products/arbutus/partners/6.png' },
    { name: 'JSC', logo: '/images/products/arbutus/partners/7.png' },
    { name: 'JSC', logo: '/images/products/arbutus/partners/8.png' },

    
    
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
        <h2 className="text-4xl text-center font-semibold text-[#366A00] mb-2">Arbutus</h2>
        {/* Subtitle centered */}
        <h3 className="text-lg text-center font-medium text-[#1B3D69] mb-2">
          for Operations, Finance, Audit, Fraud, Risk, Compliance, & IT Professionals
        </h3>
        <div className="h-[1px] bg-gray-300 w-full mb-4"></div>
        
        {/* Sub-section Title and Subtitle */}
        <h2 className="text-3xl md:text-3xl text-center font-bold text-[#366A00] mt-6">Analytics That Deliver</h2>
        <h3 className="text-md text-center text-[#1b3d69] mb-4">All Your Data.  Better Insights.  Lightning Speed.</h3>
        {/* Paragraph with justified alignment */}
        <p className="text-gray-800 text-justify">
          <span className="font-bold">ARBUTUS Software </span>provides the best in audit software and data analysis technology. Since 2003, we have been innovating and delivering specialized data analysis technology to our users. Today, Arbutus offers auditors and analysts, the very best in data analytics and audit software. It is well-designed to meet the essential features for auditing, risk analysis, and compliance professionals. Arbutus Audit Analytics represents the very best in audit software and data analysis technology. Based on 25 years of software innovation and development, Analytics has become a premium choice of leading audit and data analysis professionals.
        </p>
      </div>
      
 
      
      {/* Why Arbutus for Analytics section */}
      <div >
        <ArbutusAnalyticsSection />
      </div>
      <LogoMarquee clients={logos} />
    </div>
  );
};

export default ArbutusComponent;
