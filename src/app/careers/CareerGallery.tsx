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
    <section className="py-24 bg-white">
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
            <h3 className="text-[#1B3D69] uppercase font-medium mb-3">OUR GALLERY</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">We've been here almost 17 years</h2>
            <p className="text-gray-600 mb-8">
              At SSPL, we've built a collaborative and innovative workspace where talented professionals come together to solve complex data challenges. Our team has been delivering cutting-edge analytics solutions for nearly two decades, helping businesses across industries transform their data into actionable insights.
            </p>
          </motion.div>

          {/* Right Gallery Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Row 1 */}
            <motion.div className="col-span-2 row-span-1" variants={fadeInUp}>
              <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                <Image 
                  src="/images/careers/office1.jpg" 
                  alt="SSPL Office Space" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                <Image 
                  src="/images/careers/team1.jpg" 
                  alt="SSPL Team Member" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div variants={fadeInUp}>
              <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                <Image 
                  src="/images/careers/analytics.jpg" 
                  alt="Data Analytics" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                <Image 
                  src="/images/careers/meeting.jpg" 
                  alt="Team Meeting" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                <Image 
                  src="/images/careers/support.jpg" 
                  alt="Customer Support" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Row 3 */}
            <motion.div variants={fadeInUp}>
              <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                <Image 
                  src="/images/careers/workspace.jpg" 
                  alt="Collaborative Workspace" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative h-48 md:h-56 w-full rounded-md overflow-hidden">
                <Image 
                  src="/images/careers/team2.jpg" 
                  alt="Team Member" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerGallery;
