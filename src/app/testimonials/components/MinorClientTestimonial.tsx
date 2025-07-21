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
              className="bg-[#1B3D69] p-5 rounded-lg shadow-md flex-1 hover:shadow-lg transition-shadow hover:bg-[#366a00] transition-colors duration-300 transform hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (pairIndex * 2 + index) * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-32 h-20 relative mr-4 bg-white p-1 rounded">
                  <Image
                    src={client.logo}
                    alt={`${client.company} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-1"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{client.company}</h3>
              </div>
              
              <p className="text-white text-justify text-sm mb-4 leading-relaxed">{client.text}</p>
              
              <div className="text-xs text-white border-t border-white/30 pt-3">
                <p className="font-medium">{client.author}</p>
                {client.position && <p>{client.position}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MinorClientTestimonial;
