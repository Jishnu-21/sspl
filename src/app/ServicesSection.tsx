'use client'
import React, { useState } from 'react';
import Image from 'next/image';
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
  isActive: boolean;
  onClick: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ id, number, title, description, isActive, onClick }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <MotionDiv 
      className="mb-8 relative pl-3 md:pl-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{ duration: 0.5, delay: parseInt(id) * 0.1 }}>
      <div 
        className={`flex items-start cursor-pointer ${isActive ? 'text-blue-900' : 'text-gray-800'}`}
        onClick={onClick}
      >
        <div className="absolute -ml-6 md:-ml-8 font-bold text-gray-700 text-base md:text-xl">{number}</div>
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
        <div className="pl-4 md:pl-12">
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
                <MotionButton 
                className="flex items-center text-sm text-green-700 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                  Learn More
                  <div className="ml-1 scale-75">
                    <UpArrow className="text-black" />
                  </div>
                </MotionButton>
              </div>
            </div>
          )}
          
          {id !== '01' && (
            <MotionButton 
              className="flex items-center text-sm text-green-700 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Learn More
              <div className="ml-1 scale-75">
                <UpArrow className="text-black" />
              </div>
            </MotionButton>
          )}
        </div>
      </div>
    </MotionDiv>
  );
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('01');

  const services = [
    {
      id: '01',
      number: '01',
      title: 'Predictive & Big Data Analytics',
      description: 'Our big data analytics solutions help businesses harness the power of data to make strategic decisions. We provide comprehensive analytics tools that transform raw data into actionable insights, enabling you to predict trends, optimize operations, and drive growth.'
    },
    {
      id: '02',
      number: '02',
      title: 'GRC Solutions & Services',
      description: 'Our Governance, Risk, and Compliance solutions help organizations meet regulatory requirements while optimizing business performance. We provide integrated frameworks to manage compliance, mitigate risks, and ensure proper governance across all operations.'
    },
    {
      id: '03',
      number: '03',
      title: 'Revenue Assurance',
      description: 'Our Revenue Assurance services help businesses identify and prevent revenue leakage. We implement comprehensive systems to monitor, detect, and correct issues that impact your bottom line, ensuring maximum revenue capture and financial integrity.'
    },
    {
      id: '04',
      number: '04',
      title: 'Operations & Finance Analytics',
      description: 'We provide advanced analytics solutions specifically designed for operations and finance departments. Our tools help optimize processes, reduce costs, improve cash flow management, and enhance overall financial performance.'
    }
  ];

  const handleToggle = (id: string) => {
    setActiveService(id);
  };

  return (
    <MotionSection 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        <h2 className="text-3xl md:text-4xl font-comfortaa font-bold text-blue-900 mb-2">About us</h2>
        <p className="text-gray-600 mb-6 md:mb-8 max-w-3xl text-sm">
          A pioneer in analytics for over a decade, SSPL has been committed to transforming the data analytics landscape. Blending strategic insights with cutting-edge technology, we empower businesses to leverage data for growth and innovation. Our comprehensive suite of services spans predictive analytics, risk management, and custom solutions designed to address unique business challenges. With a team of seasoned experts and a client-centric approach, we've established ourselves as trusted partners in the analytics journey of organizations across diverse sectors.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left column - Services list */}
          <div className="w-full md:w-1/2">
            <div>
              {services.map((service) => (
                <ServiceItem
                  key={service.id}
                  id={service.id}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  isActive={activeService === service.id}
                  onClick={() => handleToggle(service.id)}
                />
              ))}
            </div>
          </div>
          
          {/* Right column - Images */}
          <div className="w-full md:w-1/2 order-first md:order-last mb-6 md:mb-0">
            <AnimatePresence mode="wait">
            {services.map((service) => (
              activeService === service.id && (
                <MotionDiv 
                  key={service.id} 
                  className="relative h-full w-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}>
                  <Image 
                    src="/images/services/image1.png" 
                    alt={service.title} 
                    width={600} 
                    height={400}
                    className="w-full h-auto rounded-md shadow-md"
                    priority={activeService === '01'}
                  />
                </MotionDiv>
              )
            ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default ServicesSection;
