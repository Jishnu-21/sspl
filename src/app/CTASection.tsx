'use client'
import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        <motion.div 
          className="bg-[#0f2756] rounded-lg overflow-hidden relative py-20 px-8 text-center text-white h-[280px] flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background circles - positioned exactly like the reference */}
          <div className="absolute top-[-15%] left-[5%] w-40 h-40 rounded-full bg-[#1a3666] opacity-40"></div>
          <div className="absolute bottom-[-20%] right-[5%] w-72 h-72 rounded-full bg-[#1a3666] opacity-40"></div>
          <div className="absolute top-[40%] right-[25%] w-12 h-12 rounded-full bg-[#1a3666] opacity-40"></div>
          <div className="absolute bottom-[25%] left-[20%] w-6 h-6 rounded-full bg-[#1a3666] opacity-40"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Transform Your Data, Transform Your Business</h2>
            <p className="text-base mb-6 opacity-90">Get AI-driven insights for smarter decisions. Contact us today!</p>
            
            <motion.a 
              href="#contact"
              className="inline-block px-8 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-[#0f2756] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
