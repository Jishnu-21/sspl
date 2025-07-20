'use client';

import React from 'react';
import Image from 'next/image';
import { MajorTestimonial } from '../data/TestimonialData';
import { motion } from 'framer-motion';

interface MajorClientTestimonialProps {
  clients: MajorTestimonial[];
}

const MajorClientTestimonial: React.FC<MajorClientTestimonialProps> = ({ clients }) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col space-y-6">
      {clients.map((client, index) => (
        <motion.div
          key={client.id}
          className="bg-[#1B3D69] p-6 rounded-lg shadow-sm flex-1 hover:bg-[#366a00] transition-colors duration-300 transform hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center mb-4">
            <div className="w-36 h-24 relative mr-4 bg-white p-1 rounded">
              <Image
                src={client.logo}
                alt={`${client.company} logo`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3 className="text-xl font-semibold text-white">{client.company}</h3>
          </div>
          
          <p className="text-white mb-4 italic">"{client.text}"</p>
          
          <div className="text-sm text-white">
            <p className="font-medium">{client.author}</p>
            <p>{client.position}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MajorClientTestimonial;
