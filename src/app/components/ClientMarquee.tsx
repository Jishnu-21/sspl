'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ClientMarqueeProps {
  className?: string;
}

const ClientMarquee: React.FC<ClientMarqueeProps> = ({ className = '' }) => {
  const clients = [
    { name: 'Indian Police', logo: '/images/logos/1.svg' },
    { name: 'Toyota', logo: '/images/logos/2.svg' },
    { name: 'GPIC', logo: '/images/logos/3.svg' },
    { name: 'Reliance Life Insurance', logo: '/images/logos/4.svg' },
    { name: 'Godrej', logo: '/images/logos/5.svg' },
  ];

  // Duplicate the clients array to create a seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className={`w-full bg-gray-200 py-8 overflow-hidden ${className}`}>
      <div className="relative w-full">
        <motion.div
          className="flex items-center"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: 'linear',
            repeatType: 'loop'
          }}
          style={{ width: 'fit-content' }}
        >
          {duplicatedClients.map((client, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 mx-8"
            >
              <div className="relative h-14 w-36">
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
  );
};

export default ClientMarquee;
