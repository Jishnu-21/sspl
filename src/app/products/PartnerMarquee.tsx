'use client'

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
                    <div key={index} className="client-logo mx-0 flex items-center justify-center opacity-90">
                      <div className="relative w-[280px] h-[200px]">
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
