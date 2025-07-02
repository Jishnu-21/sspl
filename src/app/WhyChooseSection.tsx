'use client'

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaTrophy, FaGlobeAmericas, FaChartLine } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const contentItems = [
  {
    title: 'Award-Winning Expertise',
    description: 'Recognized as the Best Big Data Analytics Solution Company by WQPC, SSPL has a proven track record of delivering cutting-edge analytics solutions. Our expertise spans multiple industries, helping businesses transform raw data into actionable insights for smarter decision-making.',
    icon: FaTrophy
  },
  {
    title: '24/7 Global Analytics Hub',
    description: 'We operate a round-the-clock analytics hub, ensuring continuous support and seamless integration of Big Data, AI, and Business Intelligence solutions. No matter the time zone, we help businesses optimize performance and stay ahead of the competition.',
    icon: FaGlobeAmericas
  },
  {
    title: 'End-to-End Data Solutions',
    description: 'From Predictive Analytics and Digital Transformation to Robotic Process Automation (RPA), we provide customized solutions tailored to business needs. Our AI-powered insights enhance efficiency, improve risk management, and drive sustainable growth.',
    icon: FaChartLine
  }
];

// Animation variants for letter-by-letter title
const titleParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const letterVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 500, damping: 30 } },
};

const WhyChooseSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Responsive state for carousel
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine how many cards to show at a time
  let cardsPerView = 1;
  if (windowWidth >= 1024) {
    cardsPerView = 3;
  } else if (windowWidth >= 768) {
    cardsPerView = 2;
  }

  // Carousel navigation handlers
  const next = () => {
    setCarouselIndex((prev) => Math.min(prev + 1, contentItems.length - cardsPerView));
  };
  const prev = () => {
    setCarouselIndex((prev) => Math.max(prev - 1, 0));
  };
  useEffect(() => {
    setCarouselIndex(0); // Reset carousel index on resize
  }, [cardsPerView]);

  return (
    <div className="py-4">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px]">
        <div className="rounded-2xl overflow-hidden  bg-gradient-to-br from-[#1B3D69] to-[#152d4f] p-8 sm:p-12 lg:p-16">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              variants={titleParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Array.from('Why choose SSPL?').map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={letterVariant}
                  style={{ 
                    display: char === ' ' ? 'inline-block' : 'inline-block', 
                    minWidth: char === ' ' ? '0.5em' : undefined
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          {/* Only render one layout at a time */}
          {windowWidth >= 1024 ? (
            // Desktop grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {contentItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <div className="text-center">
                    <div className="mb-6">
                      <motion.div
                        className="text-4xl sm:text-5xl md:text-6xl text-white/90 mx-auto w-fit"
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                      >
                        {React.createElement(item.icon)}
                      </motion.div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Carousel for sm and md
            <div className="w-full">
              <div className="relative w-full">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${carouselIndex * (100 / cardsPerView)}%)` }}>
                  {contentItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex-shrink-0 px-2 ${cardsPerView === 2 ? 'w-1/2' : 'w-full'}`}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: index * 0.2,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl h-full flex flex-col justify-center">
                        <div className="text-center">
                          <div className="mb-6">
                            <div className="text-4xl sm:text-5xl md:text-6xl text-white/90 mx-auto w-fit">
                              {React.createElement(item.icon)}
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Carousel navigation */}
                <div className="flex justify-between mt-4">
                  <button onClick={prev} disabled={carouselIndex === 0} className="text-white/80 px-4 py-2 rounded bg-white/20 hover:bg-white/30 disabled:opacity-50">Prev</button>
                  <button onClick={next} disabled={carouselIndex >= contentItems.length - cardsPerView} className="text-white/80 px-4 py-2 rounded bg-white/20 hover:bg-white/30 disabled:opacity-50">Next</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;