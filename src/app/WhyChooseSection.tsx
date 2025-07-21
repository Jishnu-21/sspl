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
  if (windowWidth > 1024) {
    cardsPerView = 3;
  } else if (windowWidth > 768) {
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
    <div className="container py-4 md:py-0 mx-auto 2xl:px-8 max-w-[1920px]">
      <div className="rounded-2xl overflow-hidden p-4 sm:p-8 lg:p-12 xl:p-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-black mb-3 sm:mb-4 md:mb-6"
            variants={titleParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Array.from('Why choose us?').map((char, idx) => (
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
          <div className="w-16 sm:w-24 h-1 bg-[#1B3D69] mx-auto rounded-full"></div>
        </div>

        {/* Only render one layout at a time */}
        {windowWidth <= 1024 ? (
          // Mobile: show cards stacked vertically
          <div className="flex flex-col gap-y-4">
            {contentItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1B3D69] to-[#152d4f] rounded-2xl p-4 border border-[#1B3D69] shadow-xl flex flex-col h-full justify-center w-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 relative group overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300
                }}
              >
                {/* Green overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" style={{ backgroundColor: 'rgba(58, 107, 27, 0.2)' }}></div>
                <div className="text-center relative z-20">
                  <div className="mb-4">
                    <motion.div
                      className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-6xl text-white mx-auto w-fit"
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                    >
                      {React.createElement(item.icon)}
                    </motion.div>
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg 2xl:text-lg text-white leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : windowWidth >= 1024 ? (
          // Desktop grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 items-stretch">
            {contentItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1B3D69] to-[#152d4f] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-[#1B3D69] shadow-xl flex flex-col h-full justify-center w-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 relative group overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300
                }}
              >
                {/* Green overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" style={{ backgroundColor: 'rgba(58, 107, 27, 1)' }}></div>
                <div className="text-center relative z-20">
                  <div className="mb-4 sm:mb-6">
                    <motion.div
                      className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-6xl text-white mx-auto w-fit"
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                    >
                      {React.createElement(item.icon)}
                    </motion.div>
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                    {item.title}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base md:text-sm lg:text-sm 2xl:text-lg text-white leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Carousel for sm and md
          <div className="w-full max-w-full overflow-x-hidden">
            <div className="relative w-full max-w-full">
              <div className="flex space-x-4 transition-transform duration-500" style={{ transform: `translateX(-${carouselIndex * (100 / cardsPerView)}%)` }}>
                {contentItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex-shrink-0 ${cardsPerView === 2 ? 'w-1/2' : 'w-full'} transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 relative group overflow-hidden`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    {/* Green overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" style={{ backgroundColor: 'rgba(58, 107, 27, 0.2)' }}></div>
                    <div className="bg-gradient-to-br from-[#1B3D69] to-[#152d4f] rounded-2xl p-4 sm:p-6 md:p-8 border border-[#1B3D69] shadow-xl h-full flex flex-col justify-center relative z-20">
                      <div className="text-center">
                        <div className="mb-4 sm:mb-6">
                          <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-6xl text-white mx-auto w-fit">
                            {React.createElement(item.icon)}
                          </div>
                        </div>
                        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                          {item.title}
                        </h3>
                        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg 2xl:text-lg text-white leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Carousel navigation */}
              <div className="flex justify-between mt-4 gap-2">
                <button onClick={prev} disabled={carouselIndex === 0} className="text-white/80 px-5 py-3 rounded-lg bg-white/20 hover:bg-white/30 disabled:opacity-50 text-base sm:text-lg active:scale-95 transition-all">Prev</button>
                <button onClick={next} disabled={carouselIndex >= contentItems.length - cardsPerView} className="text-white/80 px-5 py-3 rounded-lg bg-white/20 hover:bg-white/30 disabled:opacity-50 text-base sm:text-lg active:scale-95 transition-all">Next</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyChooseSection;