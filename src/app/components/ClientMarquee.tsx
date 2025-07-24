'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ClientMarqueeProps {
  className?: string;
}

const ClientMarquee: React.FC<ClientMarqueeProps> = ({ className = '' }) => {
  const clients = [
    { name: 'Reliance Life Insurance', logo: '/images/logos/Asset-4.svg' },
    { name: 'Indian Police', logo: '/images/logos/Asset-5.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-6.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-7.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-8.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-9.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-10.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-11.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-12.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-13.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-14.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-15.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-16.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-17.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-18.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-19.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-20.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-21.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-22.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-23.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-24.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-25.svg' },
 
  ];

  // Duplicate the clients array to create a seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];
  
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <div className="w-full text-center ">
        <h2 className="block text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-0 sm:-mt-6 md:-mt-8 mb-8 leading-none">Our Clients</h2>
      </div>
      <div className={`w-full  sm:py-8 overflow-hidden ${className}`}>
        <div className="relative w-full">
          <motion.div
            className="flex items-center"
            animate={isPaused ? {} : { x: '-50%' }}
            transition={{
              duration: 70,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
            style={{ width: 'fit-content' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedClients.map((client, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <div className="relative h-44 w-34">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ClientMarquee;