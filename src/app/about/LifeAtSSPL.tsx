'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = Array.from({ length:  16}, (_, i) => ({
  src: `/images/about/life/${i + 1}.jpeg`,
  alt: `Life at SSPL ${i + 1}`
}));

const LifeAtSSPL = () => {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-semibold text-black text-center mb-14 text-comfortaa">
          Life @ SSPL
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] bg-gray-100 overflow-hidden"
            >
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtSSPL;
