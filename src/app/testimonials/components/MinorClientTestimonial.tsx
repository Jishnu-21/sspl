'use client';

import React from 'react';
import Image from 'next/image';
import { MinorTestimonial } from '../data/TestimonialData';
import { motion } from 'framer-motion';

interface MinorClientTestimonialProps {
  clients: MinorTestimonial[];
}

const MinorClientTestimonial: React.FC<MinorClientTestimonialProps> = ({ clients }) => {
  // Create pairs of clients for the layout
  const clientPairs = [];
  for (let i = 0; i < clients.length; i += 2) {
    if (i + 1 < clients.length) {
      clientPairs.push([clients[i], clients[i + 1]]);
    } else {
      clientPairs.push([clients[i]]);
    }
  }

  return (
    <div className="w-full lg:w-1/2 flex flex-col space-y-6">
      {clientPairs.map((pair, pairIndex) => (
        <div key={`pair-${pairIndex}`} className="flex flex-col space-y-3 flex-1">
          {pair.map((client, index) => (
            <motion.div
              key={client.id}
              className="bg-amber-50 p-4 rounded-lg shadow-sm flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (pairIndex * 2 + index) * 0.1 }}
            >
              <div className="flex items-center mb-2">
                <div className="w-10 h-6 relative mr-3">
                  <Image
                    src={client.logo}
                    alt={`${client.company} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{client.company}</h3>
              </div>
              
              <p className="text-gray-700 text-sm mb-2 line-clamp-3">{client.text}</p>
              
              <div className="text-xs text-gray-600">
                <p className="font-medium">{client.author}</p>
                <p>{client.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MinorClientTestimonial;
