'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import UpArrow from './components/UpArrow';

interface StatItemProps {
  title: string;
  value: string;
  description: string;
}

// Custom hook for number animation
const useNumberAnimation = (target: number, inView: boolean, delay: number = 0, isSpecial: boolean = false) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (inView && !isSpecial) {
      const timer = setTimeout(() => {
        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        const counter = setInterval(() => {
          start += increment;
          if (start >= target) {
            setDisplayValue(target);
            clearInterval(counter);
          } else {
            setDisplayValue(Math.floor(start));
          }
        }, 16);
        
        return () => clearInterval(counter);
      }, delay * 200);
      
      return () => clearTimeout(timer);
    }
  }, [inView, target, delay, isSpecial]);
  
  return displayValue;
};

const StatItem: React.FC<StatItemProps & { delay: number; inView: boolean }> = ({ 
  title, 
  value, 
  description, 
  delay,
  inView 
}) => {
  const isSpecialValue = value === '24/7';
  
  if (isSpecialValue) {
    return (
      <motion.div
        className="flex flex-col text-black"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ 
          opacity: inView ? 1 : 0, 
          y: inView ? 0 : 30,
          scale: inView ? 1 : 0.9
        }}
        transition={{ 
          duration: 0.6, 
          delay: delay * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <motion.div 
          className="relative pb-3 mb-4"
          initial={{ width: 0 }}
          animate={{ width: inView ? "100%" : 0 }}
          transition={{ duration: 0.8, delay: delay * 0.15 + 0.3 }}
        >
          <motion.div 
            className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm 2xl:text-sm font-semibold text-gray-700 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: delay * 0.15 + 0.2 }}
          >
            {title}
          </motion.div>
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-[#3A6B1B] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: inView ? "100%" : 0 }}
            transition={{ duration: 0.8, delay: delay * 0.15 + 0.4 }}
          />
        </motion.div>
        
        <div className="flex items-start mb-6 justify-between">
          <motion.div
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-6xl font-bold bg-clip-text"
            style={{ color: '#1b3d59' }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: inView ? 1 : 0.5,
              opacity: inView ? 1 : 0
            }}
            transition={{ 
              duration: 0.5, 
              delay: delay * 0.15 + 0.3,
              type: "spring",
              stiffness: 200
            }}
          >
            {value}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            animate={{ 
              opacity: inView ? 1 : 0,
              rotate: inView ? 0 : -90,
              scale: inView ? 1 : 0
            }}
            transition={{ 
              duration: 0.4, 
              delay: delay * 0.15 + 0.6,
              type: "spring"
            }}
          >
            <UpArrow className="text-[#3A6B1B] mt-2" delay={delay + 0.3} />
          </motion.div>
        </div>
        
        <motion.div 
          className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm 2xl:text-sm text-gray-600 max-w-[220px] leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 10
          }}
          transition={{ 
            duration: 0.4, 
            delay: delay * 0.15 + 0.5
          }}
        >
          {description}
        </motion.div>
      </motion.div>
    );
  }
  
  const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0;
  const suffix = value.replace(/[\d]/g, '');
  
  const animatedNumber = useNumberAnimation(numericValue, inView, delay);
  
  return (
    <motion.div
      className="flex flex-col text-black"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ 
        opacity: inView ? 1 : 0, 
        y: inView ? 0 : 30,
        scale: inView ? 1 : 0.9
      }}
      transition={{ 
        duration: 0.6, 
        delay: delay * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div 
        className="relative pb-3 mb-4"
        initial={{ width: 0 }}
        animate={{ width: inView ? "100%" : 0 }}
        transition={{ duration: 0.8, delay: delay * 0.15 + 0.3 }}
      >
        <motion.div 
          className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm 2xl:text-sm font-semibold text-gray-700 uppercase tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: delay * 0.15 + 0.2 }}
        >
          {title}
        </motion.div>
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-[#3A6B1B] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? "100%" : 0 }}
          transition={{ duration: 0.8, delay: delay * 0.15 + 0.4 }}
        />
      </motion.div>
      
      <div className="flex items-start mb-6 justify-between">
        <motion.div
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-6xl font-bold bg-clip-text"
          style={{ color: '#1b3d59' }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: inView ? 1 : 0.5,
            opacity: inView ? 1 : 0
          }}
          transition={{ 
            duration: 0.5, 
            delay: delay * 0.15 + 0.3,
            type: "spring",
            stiffness: 200
          }}
        >
          <motion.span>{animatedNumber}</motion.span>
          <span>{suffix}</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, rotate: -90, scale: 0 }}
          animate={{ 
            opacity: inView ? 1 : 0,
            rotate: inView ? 0 : -90,
            scale: inView ? 1 : 0
          }}
          transition={{ 
            duration: 0.4, 
            delay: delay * 0.15 + 0.6,
            type: "spring"
          }}
        >
          <UpArrow className="text-[#3A6B1B] mt-2" delay={delay + 0.3} />
        </motion.div>
      </div>
      
      <motion.div 
        className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm 2xl:text-sm text-gray-600 max-w-[220px] leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 10
        }}
        transition={{ 
          duration: 0.4, 
          delay: delay * 0.15 + 0.5
        }}
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      title: 'Experience',
      value: '25+',
      description: 'years of active, market-driven experience under our belt.',
    },
    {
      title: 'Global Analytics ',
      value: '24/7',
      description: 'continuous monitoring and support for your business needs.',
    },
    {
      title: 'Clients',
      value: '100+',
      description: 'satisfied clients who trust our expertise and solutions.',
    },
    {
      title: 'Projects',
      value: '150+',
      description: 'successful projects delivered across various industries.',
    },
  ];

  return (
    <section ref={ref} className="md:pb-18 pb-6 text-black overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px]">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-16 items-center">
          {/* Left side - Image loads when in view */}
          <motion.div 
            className="w-full lg:w-5/12 max-w-full mx-auto mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: inView ? 1 : 0,
              x: inView ? 0 : -50
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200"
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: 2,
                transition: { duration: 0.3 }
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <motion.div
                className="w-full h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative"
                animate={inView ? { 
                  rotateY: [0, 0.5, 0, -0.5, 0],
                  scale: [1, 1.005, 1, 1.005, 1]
                } : {}}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <Image
                  src="/images/home/sspl-community.png"
                  alt="SSPL Analytics"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 pointer-events-none" />
              </motion.div>
              
              {/* Enhanced floating elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg"
                animate={{ 
                  y: [0, 12, 0],
                  scale: [1, 0.7, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
                animate={{ 
                  x: [0, 8, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right side - Stats appear when in view */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: inView ? 1 : 0,
              x: inView ? 0 : 50
            }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-12">
              <div className="flex flex-col space-y-12">
                {stats.slice(0, 2).map((stat, index) => (
                  <StatItem
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    description={stat.description}
                    delay={index}
                    inView={inView}
                  />
                ))}
              </div>
              <div className="flex flex-col space-y-12">
                {stats.slice(2, 4).map((stat, index) => (
                  <StatItem
                    key={index + 2}
                    title={stat.title}
                    value={stat.value}
                    description={stat.description}
                    delay={index + 2}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;