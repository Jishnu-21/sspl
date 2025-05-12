'use client';

import React from 'react';
import { ServiceOffering } from '../data/ServiceData';
import { motion } from 'framer-motion';

interface ServiceGridProps {
  services: ServiceOffering[];
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  return (
    <div className="py-8">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#366A00] mb-4">
          Regulatory Invoicing Essentials
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto px-4">
          Utilizing the Big Data Analytics techniques and associated technologies, we offer the following services that are 
          intended to help and support the requirements of our clients & deliver results in the most efficient manner.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center h-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
          >
            {service.icon && (
              <div className="mb-3">
                <img 
                  src={service.icon} 
                  alt={`${service.title} icon`} 
                  className="w-12 h-12 object-contain"
                />
              </div>
            )}
            <h3 className="text-sm md:text-base font-medium text-gray-800">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
