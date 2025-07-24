'use client'
import React from 'react';
import Image from 'next/image';

const clientsRow1 = [
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
];

const clientsRow2 = [
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