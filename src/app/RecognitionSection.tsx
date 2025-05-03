'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const RecognitionSection = () => {
  // Sample logos data
  const logos = [
    { name: 'Audi', logo: '/images/logos/b1.png' },
    { name: 'BMW', logo: '/images/logos/b2.png' },
    { name: 'Ford', logo: '/images/logos/b3.png' },
    { name: 'Mercedes Benz', logo: '/images/logos/b4.png' },
    { name: 'Peugeot', logo: '/images/logos/b5.png' },
    { name: 'Volkswagen', logo: '/images/logos/b6.png' },
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Recognition</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 w-full aspect-square flex flex-col items-center justify-center">
                <div className="relative w-full h-16 mb-4">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-800 font-bold">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
