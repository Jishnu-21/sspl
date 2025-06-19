'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  color: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'Predictive & Big Data Analytics',
    description: 'Our big data analytics solutions help businesses harness the power of data to make strategic decisions. We provide comprehensive analytics tools that transform raw data into actionable insights, enabling you to predict trends, optimize operations, and drive growth.',
    color: 'from-blue-900/20',
    image: '/images/home/bigdata.png'
  },
  {
    title: 'GRC Solutions & Services',
    description: 'Our Governance, Risk, and Compliance solutions help organizations meet regulatory requirements while optimizing business performance. We provide integrated frameworks to manage compliance, mitigate risks, and ensure proper governance across all operations.',
    color: 'from-blue-900/20',
    image: '/images/home/grc.png'
  },
  {
    title: 'Revenue Assurance',
    description: 'Our Revenue Assurance services help businesses identify and prevent revenue leakage. We implement comprehensive systems to monitor, detect, and correct issues that impact your bottom line, ensuring maximum revenue capture and financial integrity.',
    color: 'from-blue-900/20',
    image: '/images/home/assurance.png'
  },
  {
    title: 'Operations & Finance Analytics',
    description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.',
    color: 'from-blue-900/20',
    image: '/images/home/global-analytics.png'
  },
  {
    title: 'Risk Management Audit Analytics',
    description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.',
    color: 'from-blue-900/20',
    image: '/images/home/Risk Management Audit Analytics.jpg'
  },
  {
    title: 'Fraud Management & Detection',
    description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.',
    color: 'from-blue-900/20',
    image: '/images/home/fraud management.jpg'
  },
  {
    title: 'Data Migration',
    description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.',
    color: 'from-blue-900/20',
    image: '/images/home/data migration.jpg'
  },
  {
    title: 'Algorithm Auditing',
    description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.',
    color: 'from-blue-900/20',
    image: '/images/home/Algorithm Auditing.jpg'
  },
  {
    title: 'Media Analytics',
    description: 'Our Media Analytics services help organizations monitor, analyze, and gain insights from media data to optimize campaigns and measure brand impact.',
    color: 'from-blue-900/20',
    image: '/images/home/media analytics.jpg'
  }
];

const serviceLinks = {
  'Predictive & Big Data Analytics': 'predictive-analysis',
  'GRC Solutions & Services': 'grc-solutions-services',
  'Revenue Assurance': 'revenue-assurance',
  'Operations & Finance Analytics': 'operations-finance',
  'Risk Management Audit Analytics': 'risk-management',
  'Fraud Management & Detection': 'fraud-management',
  'Data Migration': 'data-migration',
  'Algorithm Auditing': 'algorithm-auditing',
  'Media Analytics': 'media-analytics'
};

const ServicesList = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [titleVisible, setTitleVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              setTitleVisible(true);
            } else {
              const cardIndex = parseInt((entry.target as HTMLElement).dataset.cardIndex || '0');
              if (!visibleCards.includes(cardIndex)) {
                setTimeout(() => {
                  setVisibleCards(prev => [...prev, cardIndex]);
                }, cardIndex * 100); // Stagger the animations
              }
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe title
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Observe all cards
    const cards = containerRef.current?.querySelectorAll('[data-card-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [visibleCards]);

  const firstRow = services.slice(0, 4);
  const secondRow = services.slice(4);

  return (
    <div className={`
      py-12 sm:py-16 md:py-20
      transition-colors duration-300
      w-full mt-8 sm:mt-10 md:mt-10
    `} ref={containerRef}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px]">
        {/* Animated title */}
        <h2 
          ref={titleRef}
          className={`
          text-center mb-16
          relative
            transform transition-all duration-1000 ease-out
            ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
          `}
        >
          <div className="relative z-10 inline-block">
            <span className="block text-5xl sm:text-6xl md:text-7xl font-light text-gray-300 leading-none">What we do</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-black -mt-4 sm:-mt-6 md:-mt-8 leading-none">Services</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-900/10 blur-3xl transform -skew-y-6"></div>
        </h2>
        
        <div className="space-y-8">
          {/* Desktop View */}
          <div className="hidden md:block">
            {[firstRow, secondRow].map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-between gap-4 mb-8">
                {row.map((service, index) => {
                  const actualIndex = rowIndex * 4 + index;
                  const isVisible = visibleCards.includes(actualIndex);
                  const isHovered = actualIndex === activeIndex;
                  
                  return (
                    <Link 
                      href={`/services/${serviceLinks[service.title as keyof typeof serviceLinks] || '#'}`}
                      key={index}
                      data-card-index={actualIndex}
                      className={`
                        group relative
                        transition-all duration-700 ease-out
                        ${isHovered
                          ? 'w-[28%] scale-105 z-10' 
                          : 'w-[22%] hover:scale-102'
                        }
                        h-[22rem]
                        rounded-2xl
                        cursor-pointer
                        transform-gpu
                        ${isVisible 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-16 opacity-0'
                        }
                      `}
                      onMouseEnter={() => setActiveIndex(actualIndex)}
                      onMouseLeave={() => setActiveIndex(-1)}
                    >
                      {/* Card container with flip animation */}
                      <div className={`
                        relative w-full h-full
                        transition-transform duration-600 ease-in-out
                        transform-style-preserve-3d
                        ${isHovered ? 'rotate-y-180' : ''}
                        shadow-lg hover:shadow-2xl
                        rounded-2xl
                      `}>
                        {/* Front of card */}
                        <div className={`
                          absolute inset-0
                          backface-hidden
                          flex flex-col
                          bg-white
                          rounded-2xl
                          border border-gray-100
                          transition-all duration-300
                        `}>
                          <div className="w-full h-74 relative overflow-hidden rounded-t-2xl">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4 bg-white/90 backdrop-blur-sm">
                            <h3 className="text-black font-bold text-lg text-center transition-colors duration-300 group-hover:text-blue-900">
                              {service.title}
                            </h3>
                          </div>
                        </div>

                        {/* Back of card with enhanced description display */}
                        <div className={`
                          absolute inset-0
                          backface-hidden
                          rotate-y-180
                          p-6 md:p-8
                          flex flex-col
                          bg-gradient-to-br from-blue-50 to-white
                          rounded-2xl
                          border border-blue-100
                          shadow-inner
                        `}>
                          <h3 className="text-blue-900 font-bold text-xl mb-4">
                            {service.title}
                          </h3>
                          
                          <div className="flex-1 flex flex-col justify-between">
                            <p className="text-gray-700 text-sm leading-relaxed mb-4 overflow-y-auto">
                              {service.description}
                            </p>
                            
                            <div className="flex items-center justify-between mt-auto">
                              <span className="text-blue-900 text-sm font-semibold">
                                Learn More
                              </span>
                              <div className="text-blue-900 text-2xl transform transition-transform duration-300 hover:translate-x-2">
                                →
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {services.map((service, index) => {
                const isVisible = visibleCards.includes(index);
                
                return (
                  <Link 
                    href={`/services/${serviceLinks[service.title as keyof typeof serviceLinks] || '#'}`}
                    key={index}
                    data-card-index={index}
                    className={`
                      group relative
                      transition-all duration-700 ease-out
                      h-[16rem] xs:h-[18rem] sm:h-[20rem]
                      rounded-xl
                      cursor-pointer
                      transform-gpu
                      ${isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                      }
                    `}
                    style={{
                      transitionDelay: isVisible ? '0ms' : `${index * 100}ms`
                    }}
                  >
                    <div className={`
                      relative w-full h-full
                      transition-transform duration-600 ease-in-out
                      transform-style-preserve-3d
                      group-hover:rotate-y-180
                      shadow-lg hover:shadow-xl
                      rounded-xl
                    `}>
                      {/* Front of card */}
                      <div className={`
                        absolute inset-0
                        backface-hidden
                        flex flex-col
                        bg-white
                        rounded-xl
                        border border-gray-100
                      `}>
                        <div className="w-full h-36 xs:h-40 sm:h-44 relative overflow-hidden rounded-t-xl">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-2 xs:p-3 bg-white/90 backdrop-blur-sm">
                          <h3 className="text-black font-bold text-sm xs:text-base text-center transition-colors duration-300 group-hover:text-blue-900 line-clamp-2">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Back of card */}
                      <div className={`
                        absolute inset-0
                        backface-hidden
                        rotate-y-180
                        p-3 xs:p-4
                        flex flex-col
                        bg-gradient-to-br from-blue-50 to-white
                        rounded-xl
                        border border-blue-100
                      `}>
                        <div className="flex items-center mb-2">
                          <h3 className="text-blue-900 font-bold text-sm xs:text-base line-clamp-2">
                            {service.title}
                          </h3>
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-between">
                          <p className="text-gray-700 text-xs xs:text-sm leading-relaxed line-clamp-4 xs:line-clamp-5 mb-2">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-blue-900 text-xs font-semibold">
                              Learn More
                            </span>
                            <div className="text-blue-900 text-lg transform transition-transform duration-300 hover:translate-x-1">
                              →
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ServicesList;