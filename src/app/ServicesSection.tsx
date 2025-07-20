'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UpArrow from './components/UpArrow';
import { motion as m, AnimatePresence } from 'framer-motion';

// Define motion components with proper types
const MotionDiv = m.div;
const MotionButton = m.button;
const MotionSection = m.section;

interface ServiceItemProps {
  id: string;
  number: string;
  title: string;
  description: string;
  url: string;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean;
  images: {
    main: string;
    secondary: string;
  };
}

const ServiceItem: React.FC<ServiceItemProps> = ({ id, number, title, description, url, isActive, onClick, isMobile, images }) => {
  return (
    <div className="mb-8 relative pl-2 md:pl-4">
      <div 
        className={`flex items-start cursor-pointer ${isActive ? 'text-blue-900' : 'text-gray-800'}`}
        onClick={onClick}
      >
        <div className="absolute -ml-4 md:-ml-6 font-bold text-gray-700 text-base md:text-xl">{number}</div>
        <div className="w-5 font-bold text-gray-700 hidden md:block">—</div>
        <div className="flex-grow">
          <h3 className={`${isActive ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} font-bold ${isActive ? 'text-blue-900' : 'text-gray-800'}`}>{title}</h3>
        </div>
        
      </div>
      
      {/* Expandable content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pl-2 md:pl-8">
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          
          {id === '01' && (
            <div>
              <p className="text-sm text-gray-600 mb-3">Access meaningful data to deliver key insights with powerful analytics tools</p>
              <div className="flex gap-2 mb-4">
                <span className="bg-green-700 text-white px-3 py-1 text-xs rounded-md">Telecom</span>
                <span className="bg-green-700 text-white px-3 py-1 text-xs rounded-md">Insurance</span>
                <span className="bg-green-700 text-white px-3 py-1 text-xs rounded-md">Wind-Mill</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">In a fast-paced demanding world, there has been a phenomenal growth seen in structured and unstructured data, data systems acquired from multiple sources which cater to the requirements of the businesses so as to derive insights faster & keep up with the momentum.</p>
              <div className="flex justify-between items-center">
                <Link href={url}>
                  <MotionButton 
                  className="flex items-center cursor-pointer text-sm text-green-700 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                    Learn More
                    <div className="ml-1 scale-75">
                      <UpArrow className="text-black" />
                    </div>
                  </MotionButton>
                </Link>
              </div>
            </div>
          )}
          
          {id !== '01' && (
            <Link href={url}>
              <MotionButton 
                className="flex items-center text-sm text-green-700 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Learn More
                <div className="ml-1 scale-75">
                  <UpArrow className="text-black" />
                </div>
              </MotionButton>
            </Link>
          )}
          
          {/* Mobile images - only shown on mobile when service is active */}
          {isMobile && isActive && (
            <div className="md:hidden mt-4">
              <MotionDiv 
                className="flex flex-row gap-3 justify-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}>
                <div className="w-1/2 aspect-square max-w-[150px]">
                  <Image 
                    src={images.main} 
                    alt={`${title} - Main`} 
                    width={250} 
                    height={250}
                    className="w-full h-full rounded-md shadow-md object-cover"
                  />
                </div>
                <div className="w-1/2 aspect-square max-w-[150px]">
                  <Image 
                    src={images.secondary} 
                    alt={`${title} - Secondary`} 
                    width={250} 
                    height={250}
                    className="w-full h-full rounded-md shadow-md object-cover"
                  />
                </div>
              </MotionDiv>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('01');
  const [isMobile, setIsMobile] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // Check if device is mobile on component mount and window resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      id: '01',
      number: '01',
      title: 'Predictive & Big Data Analytics',
      description: 'Our big data analytics solutions help businesses harness the power of data to make strategic decisions. We provide comprehensive analytics tools that transform raw data into actionable insights, enabling you to predict trends, optimize operations, and drive growth.',
      url: '/services/predictive-analysis',
      images: {
        main: '/images/home/bigdata.png',
        secondary: '/images/home/bigdata.jpg'
      }
    },
    {
      id: '02',
      number: '02',
      title: 'GRC Solutions & Services',
      description: 'Our Governance, Risk, and Compliance solutions help organizations meet regulatory requirements while optimizing business performance. We provide integrated frameworks to manage compliance, mitigate risks, and ensure proper governance across all operations.',
      url: '/services/grc-solutions-services',
      images: {
        main: '/images/home/grc.png',
        secondary: '/images/services/risk-management.jpg'
      }
    },
    {
      id: '03',
      number: '03',
      title: 'Revenue Assurance',
      description: 'Our Revenue Assurance services help businesses identify and prevent revenue leakage. We implement comprehensive systems to monitor, detect, and correct issues that impact your bottom line, ensuring maximum revenue capture and financial integrity.',
      url: '/services/revenue-assurance',
      images: {
        main: '/images/home/assurance.png',
        secondary: '/images/services/revenue-assurance-2.jpg'
      }
    },
    {
      id: '04',
      number: '04',
      title: 'Operations & Finance Analytics',
      description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.',
      url: '/services/operations-finance',
      images: {
        main: '/images/home/global-analytics.png',
        secondary: '/images/home/global-analytics.jpg'
      }
    },
    {
      id: '05',
      number: '05',
      title: 'Risk Management Audit Analytics',
      description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.',
      url: '/services/risk-management',
      images: {
        main: '/images/home/Risk Management Audit Analytics.jpg',
        secondary: '/images/services/risk-audit-2.jpg'
      }
    },
    {
      id: '06',
      number: '06',
      title: 'Fraud Management & Detection',
      description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.',
      url: '/services/fraud-management',
      images: {
        main: '/images/home/fraud management.jpg',
        secondary: '/images/services/fraud-management-2.jpg'
      }
    },
    {
      id: '07',
      number: '07',
      title: 'Data Migration',
      description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.',
      url: '/services/data-migration',
      images: {
        main: '/images/home/data migration.jpg',
        secondary: '/images/services/data-migration-2.jpg'
      }
    },
    {
      id: '08',
      number: '08',
      title: 'Algorithm Auditing',
      description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.',
      url: '/services/algorithm-auditing',
      images: {
        main: '/images/home/Algorithm Auditing.jpg',
        secondary: '/images/services/algorithm-audit-2.jpg'
      }
    },
    {
      id: '09',
      number: '09',
      title: 'Media Analytics',
      description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.',
      url: '/services/media-analytics',
      images: {
        main: '/images/home/media analytics.jpg',
        secondary: '/images/home/media analytics.jpg'
      }
    },
  ];

  // Split services into first row (4) and second row (5)
  const firstRowServices = services.slice(0, 4);
  const secondRowServices = services.slice(4);

  const handleToggle = (id: string) => {
    setActiveService(id);
  };

  // No need for pagination functions as we're showing all services at once

  return (
    <MotionSection 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-blue-900 mb-2">Services</h2>
        </MotionDiv>
        
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-600 mb-6 md:mb-8 max-w-3xl text-sm">
            A pioneer in analytics for over a decade, SSPL has been committed to transforming the data analytics landscape. Blending strategic insights with cutting-edge technology, we empower businesses to leverage data for growth and innovation. Our comprehensive suite of services spans predictive analytics, risk management, and custom solutions designed to address unique business challenges. With a team of seasoned experts and a client-centric approach, we've established ourselves as trusted partners in the analytics journey of organizations across diverse sectors.
          </p>
        </MotionDiv>
        
        {/* Responsive layout container - Column on mobile, Row on desktop */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-6">
          {/* Services list - Full width on mobile, Half width on desktop */}
          <MotionDiv 
            className="w-full md:w-1/2 relative pr-2 md:pr-4" 
            ref={servicesRef}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-full">
                {/* First row - 4 services */}
                <div className="mb-6">
                  {firstRowServices.map((service) => (
                    <ServiceItem
                      key={service.id}
                      id={service.id}
                      number={service.number}
                      title={service.title}
                      description={service.description}
                      url={service.url}
                      isActive={activeService === service.id}
                      onClick={() => handleToggle(service.id)}
                      isMobile={isMobile}
                      images={service.images}
                    />
                  ))}
                </div>
                
                {/* Second row - 5 services */}
                <div>
                  {secondRowServices.map((service) => (
                    <ServiceItem
                      key={service.id}
                      id={service.id}
                      number={service.number}
                      title={service.title}
                      description={service.description}
                      url={service.url}
                      isActive={activeService === service.id}
                      onClick={() => handleToggle(service.id)}
                      isMobile={isMobile}
                      images={service.images}
                    />
                  ))}
                </div>
              </div>
            </div>
          </MotionDiv>
          
          {/* Images column - Only visible on desktop */}
          <MotionDiv 
            className="hidden md:block w-full md:w-1/2 mb-6 md:mb-0 pl-4 md:pl-8 lg:pl-12"
            initial={{ opacity: 0, y: 30, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
            {services.map((service) => (
              activeService === service.id && (
                <MotionDiv 
                  key={service.id} 
                  className="relative w-full flex flex-col justify-center h-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}>
                  {/* Single larger image with increased height */}
                  <div className="w-full h-[700px] md:h-[750px] lg:h-[800px] flex items-center justify-center">
                    <Image 
                      src={service.images.main} 
                      alt={service.title} 
                      width={600} 
                      height={700}
                      className="max-w-full max-h-full rounded-md shadow-lg object-contain"
                      priority={activeService === '01'}
                    />
                  </div>
                </MotionDiv>
              )
            ))}
            </AnimatePresence>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
};

export default ServicesSection;
