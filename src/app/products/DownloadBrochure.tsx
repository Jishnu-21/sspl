'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaChartBar, FaChartPie } from 'react-icons/fa';

const DownloadBrochure = () => {
  const brochures = [
    {
      id: 1,
      name: 'assureBI',
      icon: <FaChartBar className="text-2xl text-[#366A00] group-hover:text-red-600 transition-colors duration-200" />,
      file: '/brochures/assurebi-brochure.pdf'
    },
    {
      id: 2,
      name: 'CM Dashboard',
      icon: <FaChartPie className="text-2xl text-[#366A00] group-hover:text-blue-600 transition-colors duration-200" />,
      file: '/brochures/cm-dashboard-brochure.pdf'
    },
    {
      id: 3,
      name: 'Crime Dashboard',
      icon: <FaFilePdf className="text-2xl text-[#366A00] group-hover:text-red-600 transition-colors duration-200" />,
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {brochures.map((brochure, idx) => (
            <motion.div
              key={brochure.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(54,106,0,0.12)" }}
              transition={{ type: 'spring', stiffness: 300, delay: idx * 0.1 }}
              onClick={() => handleDownload(brochure.file, brochure.name)}
            >
              <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center w-[200px] h-[110px] relative overflow-hidden border border-gray-100 group-hover:border-[#366A00] transition-colors duration-200">
                <div className="mb-2">
                  {brochure.icon}
                </div>
                <span className="text-base font-semibold text-gray-800 group-hover:text-[#366A00] transition-colors duration-200">{brochure.name}</span>
                <span className="text-xs text-gray-500 mt-1 group-hover:text-[#366A00] transition-colors duration-200">PDF Brochure</span>
                {/* Animated download arrow */}
                <motion.div
                  className="absolute bottom-3 right-3 text-[#366A00] group-hover:text-red-600"
                  initial={{ x: 10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadBrochure;
