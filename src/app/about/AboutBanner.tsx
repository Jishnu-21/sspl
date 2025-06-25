'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutBanner = () => {
  return (
    <section className="relative mt-[110px] md:min-h-[calc(100vh-110px)] min-h-[60vh] flex items-center overflow-hidden bg-[url('/images/about/banner.jpg')] bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/60 bg-black md:bg-contain bg-cover">
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[28px] sm:text-[32px] font-medium text-white leading-[1.4] mb-8">
            At SSPL, we turn complex data into powerful insights,
            enabling businesses to make smarter decisions and
            drive sustainable growth
          </h1>
          
      
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBanner;