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
    description: 'Unlock the Power of Data for Smarter Decisions\n\nWe help businesses harness vast volumes of data to forecast trends, improve decision-making, and gain competitive advantage. Our solutions combine predictive models, machine learning, and data visualization to drive strategy and growth.',
    color: 'from-blue-900/20',
    image: '/images/home/bigdata.png'
  },
  {
    title: 'GRC Solutions & Services',
    description: 'Integrated Governance, Risk & Compliance Frameworks\n\nWe deliver comprehensive GRC solutions that help organizations streamline compliance, manage enterprise risk, and ensure robust governance. Our frameworks align with industry standards, enabling proactive decision-making and regulatory adherence.',
    color: 'from-blue-900/20',
    image: '/images/home/grc.png'
  },
  {
    title: 'Media Analytics',
    description: 'Measure and Maximize Media Impact\n\nOur media analytics solutions track and evaluate media content across digital and traditional channels. We provide insights on audience behavior, campaign performance, and brand sentiment to help optimize your communication and marketing strategies.',
    color: 'from-blue-900/20',
    image: '/images/home/media analytics.jpg'
  },
  {
    title: 'Revenue Assurance',
    description: 'Safeguard and Maximize Your Revenue Streams\n\nOur revenue assurance services detect and eliminate leakages across billing, operations, and customer lifecycles. We design control systems that ensure accurate revenue recognition and reduce financial discrepancies.',
    color: 'from-blue-900/20',
    image: '/images/home/assurance.png'
  },
  {
    title: 'Risk Management Audit Analytics',
    description: 'Enhancing Assurance Through Smart Analytics\n\nWe offer data-driven tools tailored for audit and risk management functions. Our solutions help identify anomalies, assess control effectiveness, and mitigate risks, ensuring operational integrity and compliance across the organization.',
    color: 'from-blue-900/20',
    image: '/images/home/Risk Management Audit Analytics.jpg'
  },
  {
    title: 'Operations & Finance Analytics',
    description: 'Optimize Performance and Drive Financial Health\n\nDesigned for operations and finance leaders, our analytics tools streamline workflows, enhance cost-efficiency, and improve cash flow management. Gain actionable insights to support strategic planning and performance tracking.',
    color: 'from-blue-900/20',
    image: '/images/home/global-analytics.png'
  },
  {
    title: 'Fraud Management & Detection',
    description: 'Proactive Fraud Prevention Powered by Analytics\n\nWe provide intelligent fraud detection systems that monitor financial transactions, identify suspicious patterns, and prevent potential losses. Our tools support real-time alerts and forensic analysis for regulatory and internal fraud risk mitigation.',
    color: 'from-blue-900/20',
    image: '/images/home/fraud management.jpg'
  },
  {
    title: 'Data Migration',
    description: 'Seamless, Secure, and Structured Data Transition\n\nWe offer end-to-end data migration services that ensure safe transfer of information between systems, platforms, or formats. Our processes ensure data integrity, minimal downtime, and full compatibility with your business applications.',
    color: 'from-blue-900/20',
    image: '/images/home/data migration.jpg'
  },
  {
    title: 'Algorithm Auditing',
    description: 'Ensure Fairness, Accuracy & Transparency in AI\n\nWe conduct thorough audits of algorithmic systems to evaluate compliance, performance, and ethical alignment. Our services help detect bias, validate model behavior, and ensure your algorithms operate within legal and operational guidelines.',
    color: 'from-blue-900/20',
    image: '/images/home/Algorithm Auditing.jpg'
  },
 
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3, 6);
  const thirdRow = services.slice(6, 9);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch/drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    setTranslateX(-diffX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50; // Minimum swipe distance
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        // Swiped right - previous slide
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else {
        // Swiped left - next slide
        setCurrentSlide((prev) => Math.min(prev + 1, services.length - 1));
      }
    }
    setTranslateX(0);
  };

  const handleMouseStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diffX = startX - currentX;
    setTranslateX(-diffX);
  };

  const handleMouseEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else {
        setCurrentSlide((prev) => Math.min(prev + 1, services.length - 1));
      }
    }
    setTranslateX(0);
  };

  // Function to render formatted description
  const renderDescription = (description: string) => {
    const parts = description.split('\n\n');
    const heading = parts[0];
    const content = parts[1] || '';
    
    return (
      <>
        <h4 className="text-[#366a00] font-bold text-sm md:text-base mb-2 leading-tight">
          {heading}
        </h4>
        <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-4 overflow-y-auto">
          {content}
        </p>
      </>
    );
  };

  return (
    <div className={`
      py-2 sm:py-4
      transition-colors duration-300
      w-full mt-4 sm:mt-8 md:mt-10
    `} ref={containerRef}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px]">
        {/* Animated title */}
        <h2 
          ref={titleRef}
          className={`
            text-center mb-4 sm:mb-8 md:mb-16
            relative
            transform transition-all duration-1000 ease-out
            ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
          `}
        >
          <div className="relative z-10 inline-block">
            <span className="block text-5xl sm:text-6xl md:text-7xl font-light text-gray-300 leading-none">What we do?</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-black -mt-4 sm:-mt-6 md:-mt-8 leading-none">Services</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-900/10 blur-3xl transform -skew-y-6"></div>
        </h2>
        
        <div className="space-y-8">
          {/* Desktop View */}
          <div className="hidden md:block">
            {[firstRow, secondRow, thirdRow].map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-between gap-2 mb-4">
                {row.map((service, index) => {
                  const actualIndex = rowIndex * 3 + index;
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
                          ? 'w-[36%] scale-105 z-10' 
                          : 'w-[32%] hover:scale-102'
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
                            <h3 className="text-black font-bold text-xl md:text-2xl text-center transition-colors duration-300 group-hover:text-blue-900">
                              {service.title}
                            </h3>
                          </div>
                        </div>

                        {/* Back of card with enhanced description display */}
                        <div className={`
                          absolute inset-0
                          backface-hidden
                          rotate-y-180
                          p-6 md:p-6
                          flex flex-col
                          bg-gradient-to-br from-blue-50 to-white
                          rounded-2xl
                          border border-blue-100
                          shadow-inner
                        `}>
                          <h3 className="text-black font-bold text-xl md:text-2xl text-left mb-3 transition-colors duration-300 group-hover:text-blue-900">
                            {service.title}
                          </h3> 
                          <div className="flex-1 flex flex-col justify-between">
                            <div className="mb-4 overflow-y-auto">
                              {renderDescription(service.description)}
                            </div>
                            
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

          {/* Mobile Carousel View */}
          <div className="md:hidden">
            <div className="relative">
              {/* Carousel Container */}
              <div 
                ref={carouselRef}
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseStart}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseEnd}
                onMouseLeave={handleMouseEnd}
              >
                <div 
                  className="flex transition-transform duration-300 ease-out"
                  style={{
                    transform: `translateX(${-currentSlide * 100 + (isDragging ? (translateX / window.innerWidth) * 100 : 0)}%)`,
                  }}
                >
                  {services.map((service, index) => {
                    const isVisible = visibleCards.includes(index);
                    
                    return (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 px-1"
                        data-card-index={index}
                      >
                        <Link 
                          href={`/services/${serviceLinks[service.title as keyof typeof serviceLinks] || '#'}`}
                          className={`
                            group relative block
                            transition-all duration-700 ease-out
                            h-[18rem] xs:h-[20rem] sm:h-[22rem]
                            rounded-xl
                            cursor-pointer
                            transform-gpu
                            ${isVisible 
                              ? 'translate-y-0 opacity-100' 
                              : 'translate-y-8 opacity-0'
                            }
                          `}
                          onClick={(e) => {
                            if (isDragging || Math.abs(translateX) > 10) {
                              e.preventDefault();
                            }
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
                              <div className="w-full h-60 xs:h-64 sm:h-72 relative overflow-hidden rounded-t-xl">
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="p-3 xs:p-4 bg-white/90 backdrop-blur-sm flex-1 flex items-center justify-center">
                                <h3 className="text-black font-bold text-base xs:text-lg text-center transition-colors duration-300 group-hover:text-blue-900 leading-tight">
                                  {service.title}
                                </h3>
                              </div>
                            </div>

                            {/* Back of card */}
                            <div className={`
                              absolute inset-0
                              backface-hidden
                              rotate-y-180
                              pt-2 pb-3 px-3 xs:pt-2 xs:pb-4 xs:px-4
                              flex flex-col
                              bg-gradient-to-br from-blue-50 to-white
                              rounded-xl
                              border border-blue-100
                            `}>
                              <h3 className="text-blue-900 font-bold text-base xs:text-lg mb-2 leading-tight mt-0">
                                {service.title}
                              </h3>
                              
                              <div className="flex-1 flex flex-col justify-between">
                                <div className="mb-3 overflow-y-auto line-clamp-6">
                                  {renderDescription(service.description)}
                                </div>
                                
                                <div className="flex items-center justify-between mt-auto">
                                  <span className="text-blue-900 text-xs xs:text-sm font-semibold">
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
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${currentSlide === index 
                        ? 'bg-blue-900 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                      }
                    `}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
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