'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageBannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  overlayOpacity?: string;
  children?: ReactNode;
}

const PageBanner = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink,
  overlayOpacity = '60',
  children
}: PageBannerProps) => {
  return (
    <section className="relative h-[500px] md:h-[550px] lg:h-[600px] w-full mt-[105px]">
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
        <div className={`absolute inset-0 bg-black/${overlayOpacity}`}></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16 h-full relative z-10">
        <div className="flex h-full items-center">
          <div className="flex flex-col max-w-xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[40px] font-medium text-white whitespace-nowrap"
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/90 mt-2"
              >
                {subtitle}
              </motion.p>
            )}
            
            {buttonText && (
              <motion.a
                href={buttonLink || '#'}
                className="inline-flex items-center px-5 py-2 rounded bg-transparent text-white text-sm mt-6
                  border border-white hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {buttonText}
              </motion.a>
            )}
            
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
