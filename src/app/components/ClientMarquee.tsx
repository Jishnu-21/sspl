'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';

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

  // Use animation controls to manage the marquee animation
  const controls = useAnimationControls();

  // Start the animation
  useEffect(() => {
    controls.start({
      x: '-50%',
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      },
    });
  }, [controls]);

  // Handle hover to pause/resume animation
  const handleHoverStart = () => {
    controls.stop(); // Pause the animation on hover
  };

  const handleHoverEnd = () => {
    controls.start({
      x: '-50%',
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      },
    }); // Resume the animation when hover ends
  };

  return (
    <div className={`w-full bg-gray-200 py-8 overflow-hidden ${className}`}>
      <div className="relative w-full">
        <motion.div
          className="flex items-center"
          initial={{ x: 0 }}
          animate={controls} // Use animation controls
          onHoverStart={handleHoverStart} // Pause on hover
          onHoverEnd={handleHoverEnd} // Resume on hover end
          style={{ width: 'fit-content' }}
        >
          {duplicatedClients.map((client, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
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