'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CareerClients = () => {
  const clients = [
    { name: 'Netflix', logo: '/images/clients/netflix.svg' },
    { name: 'YouTube', logo: '/images/clients/youtube.svg' },
    { name: 'Google', logo: '/images/clients/google.svg' },
    { name: 'Lenovo', logo: '/images/clients/lenovo.svg' },
    { name: 'Slack', logo: '/images/clients/slack.svg' },
    { name: 'Verizon', logo: '/images/clients/verizon.svg' },
    { name: 'Lexmark', logo: '/images/clients/lexmark.svg' },
    { name: 'Microsoft', logo: '/images/clients/microsoft.svg' }
  ];

  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <motion.div 
            className="md:col-span-4 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              We Just keep growing with 6.3k Companies
            </h2>
            <p className="text-gray-600">
              Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent.
            </p>
          </motion.div>

          {/* Right Logos Grid */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="relative h-12 w-full">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerClients;
