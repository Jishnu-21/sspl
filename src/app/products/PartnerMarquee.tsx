'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';

interface PartnerMarqueeProps {
  className?: string;
}

const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({ className = '' }) => {
  const clients = [
    { name: 'Premium', logo: '/images/products/tru-oi/logo/1.png' },
    { name: 'Burger', logo: '/images/products/tru-oi/logo/2.png' },
    { name: 'JSC', logo: '/images/products/tru-oi/logo/3.png' },
    { name: 'CoxHealth', logo: '/images/products/tru-oi/logo/4.png' },
    { name: 'NASA', logo: '/images/products/tru-oi/logo/5.png' },
    { name: 'Senior Helper', logo: '/images/products/tru-oi/logo/6.png' },
    { name: 'Lockheed Martin', logo: '/images/products/tru-oi/logo/7.png' },
    { name: 'Splash', logo: '/images/products/tru-oi/logo/8.png' },
    { name: 'Signal88', logo: '/images/products/tru-oi/logo/9.png' },
    { name: 'Honest-1', logo: '/images/products/tru-oi/logo/10.png' },
    { name: 'Right at Home', logo: '/images/products/tru-oi/logo/11.png' },
    { name: 'Sonic', logo: '/images/products/tru-oi/logo/12.png' },
    { name: 'Sysco', logo: '/images/products/tru-oi/logo/13.png' },
    { name: 'Honeywell', logo: '/images/products/tru-oi/logo/14.png' },
    { name: 'Trijicon', logo: '/images/products/tru-oi/logo/15.png' },
    { name: 'MAG', logo: '/images/products/tru-oi/logo/17.png' },
    { name: 'Pacmore', logo: '/images/products/tru-oi/logo/18.png' },
    { name: 'Arizona', logo: '/images/products/tru-oi/logo/19.png' },
    { name: 'Pioneer', logo: '/images/products/tru-oi/logo/20.png' },
    { name: 'DWIHN', logo: '/images/products/tru-oi/logo/21.png' },
    { name: 'Baystate', logo: '/images/products/tru-oi/logo/22.png' },
    { name: 'Bethesda', logo: '/images/products/tru-oi/logo/23.png' },
    { name: 'Cornell', logo: '/images/products/tru-oi/logo/24.png' },
  ];

  // Duplicate the clients array to create a seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  // Split clients into two groups for different rows
  const firstHalf = clients.slice(0, Math.ceil(clients.length / 2));
  const secondHalf = clients.slice(Math.ceil(clients.length / 2));

  // Duplicate each half for seamless scrolling
  const duplicatedFirstHalf = [...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf];
  const duplicatedSecondHalf = [...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf];

  // Use animation controls to manage the marquee animation
  const controls = useAnimationControls();

  // Start the animation
  useEffect(() => {
    controls.start({
      x: '-50%',
      transition: {
        duration: 120,
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
        duration: 120,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      },
    }); // Resume the animation when hover ends
  };

  return (
    <div className={`w-full py-8 overflow-hidden ${className}`}>
      <div className="relative w-full">
        <motion.div
          className="grid grid-rows-2 gap-8"
          initial={{ x: 0 }}
          animate={controls}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          style={{ width: 'fit-content' }}
        >
          {/* First row */}
          <div className="flex items-center">
            {duplicatedFirstHalf.map((client, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0 mx-8">
                <div className="relative h-18 w-36">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Second row */}
          <div className="flex items-center">
            {duplicatedSecondHalf.map((client, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0 mx-8">
                <div className="relative h-18 w-36">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerMarquee;