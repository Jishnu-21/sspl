'use client';

import React, { ReactNode, useEffect, useState } from 'react';
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
  bannerKey?: string; // <-- new prop
}

const PageBanner = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink,
  overlayOpacity = '60',
  children,
  bannerKey
}: PageBannerProps) => {
  const [dynamicImage, setDynamicImage] = useState<string | null>(null);

  useEffect(() => {
    if (!bannerKey) {
      setDynamicImage(null);
      return;
    }
    fetch(`/api/banners/${bannerKey}`)
      .then(async (res) => {
        if (!res.ok) throw new Error('No banner found');
        const data = await res.json();
        setDynamicImage(data.mediaUrl);
      })
      .catch(() => setDynamicImage(null));
  }, [bannerKey]);

  const imageToShow = dynamicImage || backgroundImage;

  return (
    <section id="page-banner" className="page-banner relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] w-full mt-[105px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageToShow}
          alt={title}
          fill
          priority
          className="object-fit-cover"
          sizes="100vw"
        />
        <div className={`absolute inset-0 bg-black/70`}></div>
      </div>
      <div className="container px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 h-full relative z-10">
        <div className="flex h-full items-center">
          <div className="flex flex-col w-full max-w-xl md:items-start items-center justify-center text-center md:text-left">
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
                className="text-base sm:text-lg text-white/90 mt-2 break-words"
              >
                {subtitle}
              </motion.p>
            )}
            {children && (
              <div className="mt-4 w-full flex flex-wrap gap-8 md:gap-12 text-white text-sm justify-center md:justify-start">
                {children}
              </div>
            )}
            {buttonText && (
              <motion.a
                href={buttonLink || '#'}
                className="inline-flex items-center px-4 sm:px-5 py-2 rounded bg-transparent text-white text-sm mt-4 sm:mt-6
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;