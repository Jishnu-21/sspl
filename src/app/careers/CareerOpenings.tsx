'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface JobPosition {
  title: string;
  location: string;
  country: string;
  type: string;
  vacancies: number;
  deadline: string;
}

const CareerOpenings = () => {
  const openPositions: JobPosition[] = [
    {
      title: 'Product Designer (UI/UX Designer)',
      location: 'Tokyo',
      country: 'Japan',
      type: 'Full-Time',
      vacancies: 1,
      deadline: '30 June, 2021'
    },
    {
      title: 'Social Media Manager',
      location: 'Moscow',
      country: 'Russia',
      type: 'Full-Time',
      vacancies: 1,
      deadline: '30 June, 2021'
    },
    {
      title: 'Director of Accounting',
      location: 'Mumbai',
      country: 'India',
      type: 'Full-Time',
      vacancies: 3,
      deadline: '30 June, 2021'
    },
    {
      title: 'Principal Software Engineer',
      location: 'Tokyo',
      country: 'Japan',
      type: 'Full-Time',
      vacancies: 1,
      deadline: '30 June, 2021'
    },
    {
      title: 'Social Media Manager',
      location: 'Moscow',
      country: 'Russia',
      type: 'Full-Time',
      vacancies: 1,
      deadline: '30 June, 2021'
    },
    {
      title: 'Social Media Manager',
      location: 'Moscow',
      country: 'Russia',
      type: 'Full-Time',
      vacancies: 1,
      deadline: '30 June, 2021'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#3b7c0b] mb-2">
            Our all open positions ({openPositions.length.toString().padStart(2, '0')})
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openPositions.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{job.title}</h3>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3b7c0b] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{job.location}, {job.country}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3b7c0b] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">{job.type}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3b7c0b] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm">{job.vacancies} Vacancy</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-red-500 text-sm">
                  <span className="font-medium">Deadline:</span> {job.deadline}
                </div>
                
                <button className="group flex items-center justify-center w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOpenings;
