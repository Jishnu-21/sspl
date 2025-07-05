'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

// Generate array of gallery images from the photo-gallery directory
const galleryImages = [
  { src: '/images/photo-gallery/g-7.jpg.jpeg', alt: 'SSPL Gallery Image 5' }, 
  // Sixth row
  { src: '/images/photo-gallery/g-30.jpg.jpeg', alt: 'SSPL Gallery Image 26' },
  { src: '/images/photo-gallery/g-31.jpg.jpeg', alt: 'SSPL Gallery Image 27' },
  { src: '/images/photo-gallery/g-32.jpg.jpeg', alt: 'SSPL Gallery Image 28' },
  { src: '/images/photo-gallery/g-33.jpg.jpeg', alt: 'SSPL Gallery Image 29' },
  { src: '/images/photo-gallery/g-34.jpg.jpeg', alt: 'SSPL Gallery Image 30' },
  
  // Seventh row
  { src: '/images/photo-gallery/g-35.jpg.jpeg', alt: 'SSPL Gallery Image 31' },
  { src: '/images/photo-gallery/g-36.jpg.jpeg', alt: 'SSPL Gallery Image 32' },
  { src: '/images/photo-gallery/g-37.jpg.jpeg', alt: 'SSPL Gallery Image 33' },
  { src: '/images/photo-gallery/g-39.jpg.jpeg', alt: 'SSPL Gallery Image 34' },
  { src: '/images/photo-gallery/g-40.jpg.jpeg', alt: 'SSPL Gallery Image 35' },
  
  // Ninth row
  { src: '/images/photo-gallery/g-46.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-47.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-48.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-49.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-50.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Tenth row
  { src: '/images/photo-gallery/g-22-1.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-52.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-53.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-54.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-55.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Eleventh row
  { src: '/images/photo-gallery/g-56.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-57.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-58.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-59.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-60.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Twelfth row
  { src: '/images/photo-gallery/g-61.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-62.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-63.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-64.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-65.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Thirteenth row
  { src: '/images/photo-gallery/g-66.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-67.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-68.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-69.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-70.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Fourteenth row
  { src: '/images/photo-gallery/g-71.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-72.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-73.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-74.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-75.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Fifteenth row
  { src: '/images/photo-gallery/g-76.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-77.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-78.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-79.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-80.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Sixteenth row
  { src: '/images/photo-gallery/g-81.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-82.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-83.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-84.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-85.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Seventeenth row
  { src: '/images/photo-gallery/g-86.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-87.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-88.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-90.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Eighteenth row
  { src: '/images/photo-gallery/g-91.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-92.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-93.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-94.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  // Nineteenth row
  { src: '/images/photo-gallery/g-97.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-98.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-99.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-100.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Twentieth row
  { src: '/images/photo-gallery/g-101.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-102.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-103.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-104.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-105.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Twenty-first row
  { src: '/images/photo-gallery/g-106.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-107.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-201.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-202.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-203.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  { src: '/images/photo-gallery/g-204.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  // Twenty-second row
  { src: '/images/photo-gallery/g-205.jpg.jpeg', alt: 'SSPL Gallery Image 36' },
  { src: '/images/photo-gallery/g-206.jpg.jpeg', alt: 'SSPL Gallery Image 37' },
  { src: '/images/photo-gallery/g-207.jpg.jpeg', alt: 'SSPL Gallery Image 38' },
  { src: '/images/photo-gallery/g-208.jpg.jpeg', alt: 'SSPL Gallery Image 39' },
  { src: '/images/photo-gallery/g-22-2.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  { src: '/images/photo-gallery/g-22-3.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  { src: '/images/photo-gallery/g-22-4.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  { src: '/images/photo-gallery/g-22-5.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
  { src: '/images/photo-gallery/g-22-6.jpg.jpeg', alt: 'SSPL Gallery Image 40' },
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  
  const openImage = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header />
      {/* Custom styled banner with reduced height for photo gallery page only */}
      <section id="page-banner" className="page-banner relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full mt-[105px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/photo-gallery/banner.png"
            alt="Photo Gallery"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className={`absolute inset-0 bg-black/50`}></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16 h-full relative z-10">
          <div className="flex h-full items-center">
            <div className="flex flex-col w-full max-w-xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium text-white break-words sm:whitespace-normal"
              >
                Photo Gallery
              </motion.h1>
            </div>
          </div>
        </div>
      </section>
      
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
                className="group relative aspect-square overflow-hidden rounded-md shadow-sm cursor-pointer"
                onClick={() => openImage(image)}
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
                {/* Hover overlay with #1B3D69 */}
                <div className="absolute inset-0 bg-[#1B3D69]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeImage}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                onClick={closeImage}
                aria-label="Close image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default PhotoGallery;