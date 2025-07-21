'use client';
import React from 'react';
import Image from 'next/image';

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

const PartnerMarquee = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="relative">
        {/* First Row - Left to Right */}
        <div className="mb-3 sm:mb-4 md:mb-6">
          <div className="marquee-wrapper overflow-hidden">
            <div className="marquee-row-1 flex gap-2 sm:gap-3 md:gap-4">
              {/* Original logos */}
              {clientsRow1.map((client, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="flex-shrink-0 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-1 sm:p-3 md:p-4"
                >
                  <div className="relative w-40 h-28 sm:w-44 sm:h-32 md:w-48 md:h-36 lg:w-52 lg:h-40 xl:w-56 xl:h-44">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {clientsRow1.map((client, index) => (
                <div 
                  key={`row1-dup-${index}`} 
                  className="flex-shrink-0 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-1 sm:p-3 md:p-4"
                >
                  <div className="relative w-40 h-28 sm:w-44 sm:h-32 md:w-48 md:h-36 lg:w-52 lg:h-40 xl:w-56 xl:h-44">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className=" transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div>
          <div className="marquee-wrapper overflow-hidden">
            <div className="marquee-row-2 flex gap-2 sm:gap-3 md:gap-4">
              {/* Original logos */}
              {clientsRow2.map((client, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="flex-shrink-0 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-1 sm:p-3 md:p-4"
                >
                  <div className="relative w-44 h-32 sm:w-48 sm:h-36 md:w-52 md:h-40 lg:w-56 lg:h-44 xl:w-60 xl:h-48">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {clientsRow2.map((client, index) => (
                <div 
                  key={`row2-dup-${index}`} 
                  className="flex-shrink-0 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-1 sm:p-3 md:p-4"
                >
                  <div className="relative w-44 h-32 sm:w-48 sm:h-36 md:w-52 md:h-40 lg:w-56 lg:h-44 xl:w-60 xl:h-48">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>

      <style jsx>{`
        .marquee-wrapper {
          position: relative;
          width: 100%;
        }

        .marquee-row-1 {
          animation: marquee-left 45s linear infinite;
          width: fit-content;
        }

        .marquee-row-2 {
          animation: marquee-right 50s linear infinite;
          width: fit-content;
        }

        /* Pause animation on hover for better user experience */
        .marquee-wrapper:hover .marquee-row-1,
        .marquee-wrapper:hover .marquee-row-2 {
          animation-play-state: paused;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Responsive animation speeds */
        @media (max-width: 640px) {
          .marquee-row-1 {
            animation-duration: 35s;
          }
          .marquee-row-2 {
            animation-duration: 40s;
          }
        }

        @media (min-width: 1024px) {
          .marquee-row-1 {
            animation-duration: 60s;
          }
          .marquee-row-2 {
            animation-duration: 65s;
          }
        }
      `}</style>
    </div>
  );
};

export default PartnerMarquee;