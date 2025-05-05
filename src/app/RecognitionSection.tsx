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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 xl:gap-8">
          {logos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center group"
            >
              <div className="bg-white rounded-lg p-6 sm:p-7 md:p-8 lg:p-5 xl:p-8 w-full aspect-square flex flex-col items-center justify-center relative overflow-hidden
                transform transition-all duration-300 ease-in-out
                shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                group-hover:-translate-y-1
                before:absolute before:inset-0 before:z-0 before:bg-gradient-to-br before:from-white before:to-gray-50 before:opacity-0 before:transition-opacity before:duration-300
                group-hover:before:opacity-100
              ">
                <div className="relative w-full h-16 sm:h-20 md:h-24 lg:h-16 xl:h-20 2xl:h-24 mb-2 lg:mb-3 z-10 transform transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm sm:text-base lg:text-sm xl:text-base text-gray-800 font-bold relative z-10 transition-colors duration-300 group-hover:text-black mt-1 lg:mt-2">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
