'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutBanner = () => {
  return (
    <section className="relative min-h-screen bg-[#E6E6E6] flex items-center justify-center">
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[28px] sm:text-[32px] font-medium text-gray-800 leading-[1.4] mb-8">
            At SSPL, we turn complex data into powerful insights,
            enabling businesses to make smarter decisions and
            drive sustainable growth
          </h1>
          
          <motion.button
            className="inline-flex items-center px-5 py-2 rounded bg-transparent text-[#1B3D69] text-sm
              border border-[#1B3D69] hover:bg-white transition-colors duration-300"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Download the Brochure
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBanner;
