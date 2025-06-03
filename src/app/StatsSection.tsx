'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import UpArrow from './components/UpArrow';

interface StatItemProps {
  title: string;
  value: string;
  description: string;
}

const StatItem: React.FC<StatItemProps & { delay: number }> = ({ title, value, description, delay }) => {
  return (
    <motion.div
      className="flex flex-col text-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.2 }}
    >
      <div className="relative pb-2 mb-2">
        <div className="text-sm font-medium text-black">{title}</div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
      </div>
      <div className="flex items-start mb-4 justify-between">
        <span className="text-6xl font-bold text-black">{value}</span>
        <UpArrow className="text-black mt-2" delay={delay + 0.3} />
      </div>
      <div className="text-sm text-gray-600 max-w-[200px] leading-relaxed">{description}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const [visibleStats, setVisibleStats] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  const stats = [
    {
      title: 'Experience',
      value: '25+',
      description: 'years of active, market-driven experience under our belt.',
    },
    {
      title: 'Clients',
      value: '100+',
      description: 'years of active, market-driven experience under our belt.',
    },
    {
      title: 'Global Analytics Hub',
      value: '24/7',
      description: 'years of active, market-driven experience under our belt.',
    },
    {
      title: 'Projects',
      value: '100+',
      description: 'years of active, market-driven experience under our belt.',
    },
  ];

  useEffect(() => {
    if (inView) {
      // Start showing stats one by one with a delay when the section is in view
      const interval = setInterval(() => {
        setVisibleStats((prev) => {
          if (prev < stats.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 200); // Show a new stat every 200ms

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-24 pb-32 bg-white text-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left side - Image */}
          <div className="md:w-1/3 lg:w-5/12 flex items-center">
            <motion.div
              className="bg-gray-200 w-full h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/home/sspl-community.png"
                alt="SSPL Analytics"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                style={{ minHeight: '100%' }}
              />
            </motion.div>
          </div>

          {/* Right side - Stats */}
          <div className="md:w-2/3 lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {stats.slice(0, visibleStats).map((stat, index) => (
                <StatItem
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  description={stat.description}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;