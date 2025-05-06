'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ArbutusAnalyticsSection from './ArbutusAnalyticsSection';

const ArbutusComponent = () => {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#1B3D69] mb-4">Arbutus Software</h3>
        <p className="text-gray-800 mb-4">
          <span className="font-bold">ARBUTUS</span> provides the best in audit software and data analysis technology. Since 2003, we have been innovating and delivering specialized data analysis technology to our users. Today, Arbutus offers auditors and business professionals the very best in data analysis technology. Arbutus Analyzer is the tool of choice for auditing, risk analysis, and compliance professionals. Arbutus Audit Analytics represents the very best in audit software and data analysis technology. Based on 25 years of software innovation and development, Analytics has been designed to meet the exacting standards that auditors demand.
        </p>
      </div>
      
      {/* Arbutus Image */}
      <div className="mb-8 flex justify-center">
        <div className="border-4 border-blue-100 p-1 max-w-2xl">
          <img 
            src="/images/products/arbutus-analytics.jpg" 
            alt="Arbutus Analytics Dashboard" 
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Testimonial */}
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <p className="text-gray-800 italic mb-2">
          "We use your product and it works great. We'll be adding more to this automation process on the table, and I'd love to get training from your end."
        </p>
        <p className="text-gray-700 font-medium">
          Mr. Mohandes Liem, Group IT Manager (Information Technology)
        </p>
        <p className="text-gray-600 text-sm">
          A.A. Abunayyan Trading Company of Bahrain
        </p>
      </div>
      
      {/* Why Arbutus for Analytics section */}
      <div className="mt-12 mb-16">
        <ArbutusAnalyticsSection />
      </div>
    </div>
  );
};

export default ArbutusComponent;
