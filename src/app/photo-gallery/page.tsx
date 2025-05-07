'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import Header from '../Header';
import Footer from '../Footer';

// Generate array of 32 images
const galleryImages = Array.from({ length: 32 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.jpg`,
  alt: `SSPL Gallery Image ${i + 1}`
}));

const PhotoGallery = () => {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header />
      <PageBanner
        title="Photo Gallery"
        backgroundImage="/images/about/banner.png"
      />
      
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index % 10 * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative aspect-square overflow-hidden rounded-md shadow-sm"
              >
                <div className="relative h-full w-full bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                
                {/* Simple hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default PhotoGallery;