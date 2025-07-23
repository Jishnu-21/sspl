'use client';

import React from 'react';
import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
}

interface ClientsMarqueeProps {
  clients: Client[];
}

const ClientsMarquee: React.FC<ClientsMarqueeProps> = ({ clients }) => {
  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <div className="marquee-row">
          {[...Array(2)].map((_, dupIndex) => (
            <div key={dupIndex} className="marquee-content">
              {clients.map((client, index) => (
                <div
                  key={`${dupIndex}-${index}`}
                  className="client-logo mx-4 flex items-center justify-center opacity-90 mb-2"
                >
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
      </div>

      <style jsx>{`
        .marquee-row {
          display: flex;
          position: relative;
        }

        .marquee-content {
          display: flex;
          animation: marquee 35s linear infinite;
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
