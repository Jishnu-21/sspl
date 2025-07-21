'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ShortPageBannerProps {
  title: string;
  backgroundImage: string;
  subtitle?: string;
  bannerKey?: string;
}

const ShortPageBanner: React.FC<ShortPageBannerProps> = ({
  title,
  backgroundImage,
  subtitle,
  bannerKey,
}) => {
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
    <section
      id="page-banner"
      className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full mt-[105px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageToShow}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center justify-center w-full max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium text-white break-words"
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
    </section>
  );
};

export default ShortPageBanner;
