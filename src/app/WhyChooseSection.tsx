'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contentItems = [
  {
    title: 'Award-Winning Expertise',
    description: 'Recognized as the Best Big Data Analytics Solution Company by WQPC, SSPL has a proven track record of delivering cutting-edge analytics solutions. Our expertise spans multiple industries, helping businesses transform raw data into actionable insights for smarter decision-making.'
  },
  {
    title: '24/7 Global Analytics Hub',
    description: 'We operate a round-the-clock analytics hub, ensuring continuous support and seamless integration of Big Data, AI, and Business Intelligence solutions. No matter the time zone, we help businesses optimize performance and stay ahead of the competition.'
  },
  {
    title: 'End-to-End Data Solutions',
    description: 'From Predictive Analytics and Digital Transformation to Robotic Process Automation (RPA), we provide customized solutions tailored to business needs. Our AI-powered insights enhance efficiency, improve risk management, and drive sustainable growth.'
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
        className="sticky top-0 py-16 sm:py-20 lg:py-24 bg-white min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
          <div className="rounded-lg overflow-hidden shadow-xl" style={{ backgroundColor: '#1B3D69' }}>
            <div className="flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 lg:p-20 xl:p-24 relative min-h-[600px] md:min-h-[600px] lg:min-h-[700px] gap-6 md:gap-4">
              {/* Background gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B3D69] to-[#152d4f] opacity-50"></div>
              <div className="w-full md:w-[45%] lg:w-[40%] md:mb-0 md:pl-0 lg:pl-8 text-center md:text-left relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white md:whitespace-nowrap inline-block pb-2 border-b-2 border-white/30 md:border-none">
                  Why choose SSPL?
                </h2>
              </div>
              
              <div className="w-full md:w-[40%] lg:w-[45%] px-2 sm:px-4 md:pr-8 relative h-[350px] sm:h-[320px] lg:h-[400px] z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    className="absolute p-4 sm:p-6 lg:p-10 rounded-md shadow-lg h-[350px] sm:h-[320px] lg:h-[400px] flex flex-col justify-center w-full"
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
                    <div className="text-white">
                      <div className="flex items-start">
                        <div className="mr-2 font-medium text-sm sm:text-lg lg:text-xl font-poppins leading-tight">{currentIndex + 1}.</div>
                        <div className="flex-1">
                          <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-medium leading-tight mb-2 sm:mb-3 font-poppins">
                            {contentItems[currentIndex].title} –
                          </p>
                          <p className="text-[11px] sm:text-sm lg:text-base xl:text-lg leading-tight font-comfortaa">
                            {contentItems[currentIndex].description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress bar */}
              <div className="absolute left-0 bottom-0 w-full h-1 bg-white/20">
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