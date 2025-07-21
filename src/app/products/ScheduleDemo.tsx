'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const ScheduleDemo = () => {

   const router = useRouter()

  // Add Toaster component at the top level of the component
 

  return (
    <>
      <section className="py-2 sm:py-4 md:py-6 lg:py-8" style={{ backgroundColor: '#0F1A42' }}>
        <Toaster position="top-right" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:gap-8 lg:gap-16">
            {/* Left side content */}
            <motion.div 
              className="w-full text-white pt-4 sm:pt-6 md:pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Schedule A Demo</h2>
              <p className="text-sm sm:text-base">
                If you want to see a specific product feature or prefer a live 
                demonstration, please fill out the form below and we'll contact you 
                to schedule a live demonstration with one of our platform experts. 
                We'll show you how the products work and how easy they are to 
                set up and use.
              </p>
            </motion.div>
          </div>
        </div>
      {/* CTA Button below the section */}
      <div className="w-full flex justify-center py-6" style={{ backgroundColor: '#0F1A42' }}>
        <button 
          className="px-10 py-3 rounded-lg cursor-pointer border border-white text-white font-bold text-lg shadow-lg transition-all duration-300 bg-[#2D3A62] hover:bg-[#366A00] hover:text-white"
          onClick={() => router.push('/contact')}
        >
          Get in Touch
        </button>
      </div>
      </section>
    </>
  );
};

export default ScheduleDemo;
