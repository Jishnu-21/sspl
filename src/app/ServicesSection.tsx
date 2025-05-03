'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import UpArrow from './components/UpArrow';

interface ServiceItemProps {
  id: string;
  number: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ id, number, title, description, isActive, onClick }) => {
  return (
    <div className="mb-8 relative pl-3 md:pl-5">
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
                <button className="flex items-center text-sm text-green-700 font-medium">
                  Learn More
                  <div className="ml-1 scale-75">
                    <UpArrow className="text-black" />
                  </div>
                </button>
              </div>
            </div>
          )}
          
          {id !== '01' && (
            <button className="flex items-center text-sm text-green-700 font-medium">
              Learn More
              <div className="ml-1 scale-75">
                <UpArrow className="text-black" />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
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
    },
    {
      id: '05',
      number: '05',
      title: 'Risk Management Audit Analytics',
      description: 'Our Risk Management Audit Analytics solutions provide comprehensive assessment and monitoring of organizational risks. We employ advanced analytical techniques to identify vulnerabilities, evaluate control effectiveness, and develop mitigation strategies.'
    },
    {
      id: '06',
      number: '06',
      title: 'Fraud Management & Detection',
      description: 'Our Fraud Management & Detection solutions leverage advanced analytics and machine learning to identify suspicious patterns and prevent fraudulent activities. We help organizations implement robust systems to safeguard assets and maintain operational integrity.'
    },
    {
      id: '07',
      number: '07',
      title: 'Data Migration',
      description: 'Our Data Migration services ensure smooth and secure transfer of data between systems, platforms, or environments. We handle complex migrations with minimal disruption, ensuring data integrity and compliance throughout the process.'
    },
    {
      id: '08',
      number: '08',
      title: 'Algorithm Auditing',
      description: 'We provide specialized services for auditing and validating algorithms across various applications. Our experts analyze algorithm performance, identify biases, and ensure accuracy, fairness, and compliance with industry standards and regulations.'
    },
    {
      id: '09',
      number: '09',
      title: 'Media Analytics',
      description: 'Our Media Analytics solutions help organizations understand audience behavior, content performance, and engagement metrics. We provide actionable insights to optimize media strategies, improve content relevance, and maximize ROI on media investments.'
    }
  ];

  const handleToggle = (id: string) => {
    setActiveService(id);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
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
            {services.map((service) => (
              activeService === service.id && (
                <div key={service.id} className="relative h-full w-full">
                  <Image 
                    src="/images/services/image1.png" 
                    alt={service.title} 
                    width={600} 
                    height={400}
                    className="w-full h-auto rounded-md shadow-md"
                    priority={activeService === '01'}
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
