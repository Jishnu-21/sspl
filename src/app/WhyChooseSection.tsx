'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FaTrophy, FaGlobeAmericas, FaChartLine } from 'react-icons/fa';

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

// Throttle function to limit the rate at which a function can fire
const throttle = <T extends (...args: any[]) => any>(func: T, limit: number): T => {
  let inThrottle: boolean;
  return ((...args: Parameters<T>): ReturnType<T> => {
    if (!inThrottle) {
      const result = func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
      return result;
    }
    return undefined as ReturnType<T>;
  }) as T;
};

const WhyChooseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<number>(0);

  // Detect when the component is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculate scroll progress within the parent container
  const calculateProgress = (scrollY: number) => {
    if (!sectionRef.current) return 0;
    const section = sectionRef.current;
    const parent = section.parentElement;
    if (!parent) return 0;

    const parentRect = parent.getBoundingClientRect();
    const parentTop = window.scrollY + parentRect.top;
    const parentHeight = parentRect.height;
    const windowHeight = window.innerHeight;

    // Calculate progress based on scroll position within the parent container
    const scrollProgress = (scrollY - parentTop) / (parentHeight - windowHeight);
    return Math.max(0, Math.min(1, scrollProgress));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isInView || !sectionRef.current) return;
      
      const progress = calculateProgress(window.scrollY);
      const targetIndex = Math.min(
        contentItems.length - 1,
        Math.floor(progress * contentItems.length)
      );

      if (targetIndex !== currentIndex) {
        setCurrentIndex(targetIndex);
      }
    };

    const onScroll = () => {
      if (!scrollRef.current) {
        scrollRef.current = requestAnimationFrame(() => {
          handleScroll();
          scrollRef.current = 0;
        });
      }
    };

    if (isInView) {
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollRef.current) {
        cancelAnimationFrame(scrollRef.current);
      }
    };
  }, [currentIndex, isInView]);

  return (
    <div className="h-[250vh] relative">
      <section 
        ref={sectionRef} 
        className="sticky top-0 py-6 sm:py-10 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-white min-h-screen flex items-center"
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px]">
          <div className="rounded-lg overflow-hidden shadow-xl" style={{ backgroundColor: '#1B3D69' }}>
            <div className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 relative min-h-[400px] sm:min-h-[450px] md:min-h-[580px] lg:min-h-[400px] xl:min-h-[650px] 2xl:min-h-[700px] gap-2 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-8">
              {/* Background gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B3D69] to-[#152d4f] opacity-50"></div>
              <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] mb-1 sm:mb-2 md:mb-0 md:pl-0 lg:pl-6 xl:pl-8 2xl:pl-12 text-center md:text-left relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white inline-block pb-1 border-b-2 border-white/30 md:border-none md:whitespace-nowrap">
                  Why choose SSPL?
                </h2>
              </div>
              
              <div className="w-full md:w-[40%] lg:w-[45%] xl:w-[50%] px-2 sm:px-4 md:pr-6 lg:pr-8 xl:pr-10 2xl:pr-12 relative h-[280px] sm:h-[300px] lg:h-[350px] xl:h-[380px] 2xl:h-[420px] z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    className="absolute p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 rounded-md shadow-lg h-[280px] sm:h-[300px] lg:h-[350px] xl:h-[380px] 2xl:h-[420px] flex flex-col justify-center w-full"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      willChange: 'transform'
                    }}
                  >
                    <div className="text-white text-center flex flex-col items-center justify-center h-full">
                      <div className="mb-2 sm:mb-3 md:mb-6 text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                        {React.createElement(contentItems[currentIndex].icon)}
                      </div>
                      <div className="px-1">
                        <p className="text-base sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium leading-tight mb-2 sm:mb-3 lg:mb-5 xl:mb-6 font-poppins">
                          {contentItems[currentIndex].title}
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base xl:text-base 2xl:text-lg leading-tight sm:leading-snug lg:leading-snug font-comfortaa max-w-md mx-auto">
                          {contentItems[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress bar */}
              <div className="absolute left-0 bottom-0 w-full h-1 lg:h-1 xl:h-1.5 bg-white/20">
                <div 
                  className="h-full bg-white transition-all duration-500 ease-out"
                  style={{
                    width: `${((currentIndex + 1) / contentItems.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseSection;