'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(-1);
  const [titleVisible, setTitleVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calculate slides based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4; // xl screens
      if (window.innerWidth >= 1024) return 3; // lg screens
      if (window.innerWidth >= 768) return 2;  // md screens
      return 1; // sm screens
    }
    return 4;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const totalSlides = Math.ceil(services.length / itemsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides, autoPlay]);

  // Title animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === titleRef.current) {
            setTitleVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const getCurrentSlideServices = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return services.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 w-full mt-8 sm:mt-10 md:mt-10 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px]">
        {/* Animated Title */}
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

        {/* Carousel Container */}
        <div className="relative pb-20 flex items-center">
          {/* Navigation Buttons - now outside and vertically centered */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200"
            aria-label="Previous services"
            style={{ marginLeft: '-2rem' }}
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>
          <div 
            ref={carouselRef}
            className="overflow-hidden rounded-2xl mb-12 w-full"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out w-full"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                // Always render itemsPerSlide slots per slide
                const cards = services.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide);
                const emptySlots = itemsPerSlide - cards.length;
                return (
                  <div
                    key={slideIndex}
                    className="flex gap-4 md:gap-6 w-full flex-shrink-0 px-12 md:px-16"
                  >
                    {cards.map((service, cardIndex) => {
                      const actualIndex = slideIndex * itemsPerSlide + cardIndex;
                      const isHovered = actualIndex === hoveredCard;
                      return (
                        <div
                          key={actualIndex}
                          className={`
                            group relative cursor-pointer
                            transition-all duration-500 ease-out
                            hover:scale-105 hover:z-10
                            ${itemsPerSlide === 1 ? 'w-full' : 
                              itemsPerSlide === 2 ? 'w-1/2' : 
                              itemsPerSlide === 3 ? 'w-1/3' : 'w-1/4'}
                            h-80 md:h-[22rem] lg:h-[24rem]
                          `}
                          onMouseEnter={() => setHoveredCard(actualIndex)}
                          onMouseLeave={() => setHoveredCard(-1)}
                        >
                          {/* Card Container */}
                          <div className={`
                            relative w-full h-full
                            transition-transform duration-600 ease-in-out
                            transform-style-preserve-3d
                            ${isHovered ? 'rotate-y-180' : ''}
                            shadow-lg hover:shadow-2xl
                            rounded-2xl
                          `}>
                            {/* Front of Card */}
                            <div className="absolute inset-0 backface-hidden bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col">
                              <div className="w-full h-2/3 relative overflow-hidden flex items-center justify-center">
                                <img
                                  src={service.image}
                                  alt={service.title}
                                  className="object-cover w-full h-full"
                                  style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                                />
                              </div>
                              <div className="p-4 h-1/3 flex flex-col justify-center bg-white/95 backdrop-blur-sm">
                                <h3 className="text-gray-900 font-bold text-lg md:text-xl text-center transition-colors duration-300 group-hover:text-blue-900 line-clamp-2">
                                  {service.title}
                                </h3>
                              </div>
                            </div>

                            {/* Back of Card */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 p-6 flex flex-col bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-inner">
                              <h3 className="text-blue-900 font-bold text-xl mb-4 line-clamp-2">
                                {service.title}
                              </h3>
                              
                              <div className="flex-1 flex flex-col justify-between">
                                <p className="text-gray-700 text-sm leading-relaxed mb-4 overflow-y-auto line-clamp-6">
                                  {service.description}
                                </p>
                                
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-blue-100">
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
                        </div>
                      );
                    })}
                    {/* Add empty spacers if this slide has fewer cards */}
                    {emptySlots > 0 &&
                      Array.from({ length: emptySlots }).map((_, i) => (
                        <div
                          key={`spacer-${i}`}
                          className={`
                            ${itemsPerSlide === 1 ? 'w-full' : 
                              itemsPerSlide === 2 ? 'w-1/2' : 
                              itemsPerSlide === 3 ? 'w-1/3' : 'w-1/4'}
                            h-80 md:h-[22rem] lg:h-[24rem] invisible
                          `}
                          aria-hidden="true"
                        />
                      ))}
                  </div>
                );
              })}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200"
            aria-label="Next services"
            style={{ marginRight: '-2rem' }}
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
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