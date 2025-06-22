'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


const ContactHero = () => {
  return (
    <section className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full mt-[70px] sm:mt-[85px] md:mt-[95px] lg:mt-[105px]">
      <div className="w-full h-full">
        {/* Left Content Side */}
        <div className="h-full bg-[#f8f8f8] w-full md:w-auto">
          <div className="container  mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-16 h-full relative z-10">
            <div className="flex h-full items-center">
              <div className="flex flex-col w-full md:w-[55%] lg:w-auto">
                <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium text-gray-900 break-words md:break-normal"
            >
              Contact us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 mt-2"
            >
              Get in touch with us
            </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map Side - Hidden on mobile and iPad, visible on lg and up */}
        <div className="absolute top-0 right-0 w-3/5 lg:w-4/6 h-full bg-gray-900 hidden lg:block">
          <Image
            src="/images/contact/banner.png"
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
