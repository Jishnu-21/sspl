'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section 
      className="relative flex items-center justify-center text-center py-20 sm:py-24 md:py-32 lg:py-40 w-full mt-[70px] sm:mt-[85px] md:mt-[95px] lg:mt-[105px] overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 250% 80% at 50% -30%, rgba(120, 40, 200, 0.25), transparent 70%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white break-words"
        >
          Let's Start a Conversation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          We're here to help you solve challenges, scale your business, and unlock new opportunities.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;
