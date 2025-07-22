'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CareerGallery = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">We've been here almost 25 years</h2>
            <p className="text-gray-600 text-justify mb-8">
              At SSPL, we've built a collaborative and innovative workspace where talented professionals come together to solve complex data challenges. Our team has been delivering cutting-edge analytics solutions for nearly two decades, helping businesses across industries transform their data into actionable insights.
            </p>
          </motion.div>

          {/* Right Gallery Grid with Title Above */}
          <div className="flex flex-col items-center w-full">
            <h3 className="text-[#366A00] uppercase font-medium mb-3 text-center text-lg tracking-widest relative">
              OUR GALLERY
              <span className="block mx-auto mt-2 w-12 h-1 bg-[#366A00] rounded-full"></span>
            </h3>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Row 1 */}
              <motion.div className="col-span-2 row-span-1" variants={fadeInUp}>
                <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Team Meeting" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" 
                    alt="Business Professional" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Row 2 */}
              <motion.div variants={fadeInUp}>
                <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                    alt="Female Professional" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                    alt="Male Professional" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80" 
                    alt="Diverse Team Collaboration" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Row 3 */}
              <motion.div variants={fadeInUp}>
                <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80" 
                    alt="Career Growth Discussion" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Training Session" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerGallery;