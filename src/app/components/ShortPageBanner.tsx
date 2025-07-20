'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ShortPageBannerProps {
  title: string;
  backgroundImage: string;
  subtitle?: string;
}

const ShortPageBanner: React.FC<ShortPageBannerProps> = ({
  title,
  backgroundImage,
  subtitle,
}) => {
  return (
    <section id="page-banner" className="page-banner relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full mt-[105px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className={`absolute inset-0 bg-black/30`}></div>
      </div>

      {/* Content Container */}
      <div className="container px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 h-full relative z-10">
        <div className="flex h-full items-center">
          <div className="flex flex-col w-full max-w-xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium text-white break-words sm:whitespace-normal"
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/90 text-base sm:text-lg mt-3"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortPageBanner;
