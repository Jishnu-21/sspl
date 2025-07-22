'use client'

import React from 'react';
import Image from 'next/image';

const clientsRow1 = [
  { name: 'Premium', logo: '/images/products/tru-oi/logo/Asset-2.png' },
  { name: 'Burger', logo: '/images/products/tru-oi/logo/Asset-3.png' },
  { name: 'JSC', logo: '/images/products/tru-oi/logo/Asset-4.png' },
  { name: 'CoxHealth', logo: '/images/products/tru-oi/logo/Asset-5.png' },
  { name: 'NASA', logo: '/images/products/tru-oi/logo/Asset-6.png' },
  { name: 'Senior Helper', logo: '/images/products/tru-oi/logo/Asset-7.png' },
  { name: 'Lockheed Martin', logo: '/images/products/tru-oi/logo/Asset-8.png' },
  { name: 'Splash', logo: '/images/products/tru-oi/logo/Asset-9.png' },
  { name: 'Signal88', logo: '/images/products/tru-oi/logo/Asset-10.png' },
  { name: 'Honest-1', logo: '/images/products/tru-oi/logo/Asset-11.png' },
  { name: 'Right at Home', logo: '/images/products/tru-oi/logo/Asset-12.png' },
  { name: 'Sonic', logo: '/images/products/tru-oi/logo/Asset-13.png' },
];

const clientsRow2 = [
  { name: 'Honeywell', logo: '/images/products/tru-oi/logo/Asset-15.png' },
  { name: 'Trijicon', logo: '/images/products/tru-oi/logo/Asset-16.png' },
  { name: 'MAG', logo: '/images/products/tru-oi/logo/11.png' },
  { name: 'Pacmore', logo: '/images/products/tru-oi/logo/21.png' },
  { name: 'Pioneer', logo: '/images/products/tru-oi/logo/5.png' },
  { name: 'DWIHN', logo: '/images/products/tru-oi/logo/Asset-21.png' },
  { name: 'Cornell', logo: '/images/products/tru-oi/logo/Asset-22.png' },
  { name: 'Cornell', logo: '/images/products/tru-oi/logo/Asset-25.png' },
];

const ClientsMarquee = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <div className="marquee-container">
          {[clientsRow1, clientsRow2].map((rowClients, rowIndex) => (
            <div key={rowIndex} className="marquee-row">
              {[...Array(2)].map((_, dupIndex) => (
                <div key={dupIndex} className="marquee-content">
                  {rowClients.map((client, index) => (
                    <div key={index} className="client-logo mx-4 flex items-center justify-center opacity-90 mb-2">
                      <div className="relative w-[140px] h-[140px]">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          style={{ objectFit: 'contain' }}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }

        .marquee-row {
          display: flex;
          position: relative;
        }

        .marquee-content {
          display: flex;
          animation: marquee 35s linear infinite;
        }

        .marquee-row:nth-child(2) .marquee-content {
          animation-direction: reverse;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ClientsMarquee;