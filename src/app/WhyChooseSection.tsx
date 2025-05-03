'use client'

import React, { useState, useEffect, useRef } from 'react';

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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Handle scroll-based navigation only when component is in view
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (!isInView) return;

      const currentScrollY = window.scrollY;
      const progress = calculateProgress(currentScrollY);

      // Calculate which index should be shown based on scroll progress
      const targetIndex = Math.min(
        contentItems.length - 1,
        Math.floor(progress * contentItems.length)
      );

      if (targetIndex !== currentIndex) {
        setIsAnimating(true);
        setCurrentIndex(targetIndex);
        setTimeout(() => setIsAnimating(false), 600); // Match animation duration
      }

      setLastScrollY(currentScrollY);
    }, 200); // Reduced throttle time for smoother response

    if (isInView) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, currentIndex, isAnimating, isInView]);

  return (
    <div className="h-[200vh] relative">
      <section 
        ref={sectionRef} 
        className="sticky top-0 py-8 lg:py-12 xl:py-16 bg-white h-screen flex items-center"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
          <div className="rounded-lg overflow-hidden shadow-xl" style={{ backgroundColor: '#1B3D69' }}>
            <div className="flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative">
              <div className="w-full md:w-[45%] lg:w-[40%] mb-6 md:mb-0 md:pl-0 lg:pl-4 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-6xl font-bold text-white leading-tight">Why choose SSPL?</h2>
              </div>
              
              <div className="w-full md:w-[40%] lg:w-[45%] px-4 md:pr-6 relative h-[280px] lg:h-[320px]">
                {contentItems.map((item, index) => (
                  <div
                    key={index}
                    className="absolute p-4 sm:p-6 lg:p-8 rounded-md shadow-lg md:h-[280px] lg:h-[320px] flex flex-col justify-center"
                    style={{
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      opacity: index === currentIndex ? 1 : index < currentIndex ? 0 : Math.max(0.1, 1 - (index - currentIndex) * 0.3),
                      transform: `
                        translate3d(0, ${index > currentIndex ? (index - currentIndex) * 15 : index < currentIndex ? -20 : 0}px, ${index > currentIndex ? (index - currentIndex) * -20 : 0}px)
                        scale(${index > currentIndex ? Math.max(0.85, 1 - (index - currentIndex) * 0.08) : 1})
                        rotate3d(1, 0, 0, ${index > currentIndex ? (index - currentIndex) * -2 : 0}deg)
                      `,
                      zIndex: contentItems.length - Math.abs(index - currentIndex),
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: `0 ${index > currentIndex ? (index - currentIndex) * 4 : 0}px ${index > currentIndex ? (index - currentIndex) * 8 : 0}px rgba(0,0,0,0.1)`
                    }}
                  >
                    <div className="text-white">
                      <div className="flex items-start">
                        <div className="mr-2 font-medium text-lg sm:text-xl font-poppins leading-tight">{index + 1}.</div>
                        <div className="flex-1">
                          <p className="text-base sm:text-lg lg:text-xl font-medium leading-tight mb-2 font-poppins">
                            {item.title} –
                          </p>
                          <p className="text-xs sm:text-sm lg:text-base leading-relaxed font-comfortaa">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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