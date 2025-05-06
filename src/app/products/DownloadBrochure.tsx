'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DownloadBrochure = () => {
  const brochures = [
    {
      id: 1,
      name: 'assureBI',
      icon: '📊',
      file: '/brochures/assurebi-brochure.pdf'
    },
    {
      id: 2,
      name: 'CM Dashboard',
      icon: '📊',
      file: '/brochures/cm-dashboard-brochure.pdf'
    },
    {
      id: 3,
      name: 'Crime Dashboard',
      icon: '📊',
      file: '/brochures/crime-dashboard-brochure.pdf'
    }
  ];

  const handleDownload = (file: string, name: string) => {
    // In a real implementation, this would trigger the download
    // For now, we'll just log it
    console.log(`Downloading ${name} brochure from ${file}`);
    
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = file;
    link.download = `${name.toLowerCase().replace(' ', '-')}-brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-10 pl-1 md:pl-4 lg:pl-6">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-[#366A00] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Download Brochure
          </motion.h2>
          
          {/* Horizontal line - made more visible */}
          <motion.div 
            className="h-[1px] bg-gray-400 w-full border-t border-gray-300"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        
        <motion.div 
          className="flex flex-wrap gap-6 md:gap-8 lg:gap-10 pl-1 md:pl-4 lg:pl-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {brochures.map((brochure) => (
            <motion.div
              key={brochure.id}
              className="relative group cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleDownload(brochure.file, brochure.name)}
            >
              <div className="bg-white rounded-sm shadow-lg p-4 flex items-center w-[180px] h-[60px] relative overflow-hidden">
                {/* Shadow effect at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[15px] bg-gradient-to-t from-gray-200 to-transparent"></div>
                
                <div className="flex items-center">
                  <div className="text-red-500 text-xl mr-2">
                    {brochure.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-800">{brochure.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadBrochure;
