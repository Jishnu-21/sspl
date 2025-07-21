'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clientsRow1 = [
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
];

const clientsRow2 = [
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

interface PartnerMarqueeProps {
  className?: string;
}

const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({ className = '' }) => {
  const duplicatedClientsRow1 = [...clientsRow1, ...clientsRow1];
  const duplicatedClientsRow2 = [...clientsRow2, ...clientsRow2];

  return (
    <div className={`w-full overflow-hidden space-y-4 ${className}`}>
      {/* First Row - Scroll Left */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-x-8"
          animate={{ x: '-50%' }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ width: '200%' }}
        >
          {duplicatedClientsRow1.map((client, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0">
              <div className="relative w-40 h-24 sm:w-60 sm:h-44">
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

      {/* Second Row - Scroll Right */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-x-8"
          animate={{ x: '0%' }}
          initial={{ x: '-50%' }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ width: '200%' }}
        >
          {duplicatedClientsRow2.map((client, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0">
              <div className="relative w-40 h-24 sm:w-60 sm:h-44">
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

export default PartnerMarquee;
