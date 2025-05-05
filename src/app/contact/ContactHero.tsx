'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative h-[400px] w-full mt-[105px]">
      <div className="w-full h-full">
        {/* Left Content Side */}
        <div className="h-full bg-[#f8f8f8]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16 h-full relative z-10">
            <div className="flex h-full items-center">
              <div className="flex flex-col">
                <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[40px] font-medium text-gray-900 whitespace-nowrap"
            >
              Contact us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mt-2"
            >
              Get in touch with us
            </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map Side */}
        <div className="absolute top-0 right-0 w-4/6 h-full bg-gray-900 hidden md:block">
          <Image
            src="/images/contact/1.png"
            alt="World Map"
            fill
            className="object-cover"
            priority
          />
          
    
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
