'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    text: 'Substratad Solutions Pvt. Ltd. (SSPL) is a leading consulting firm specializing in Big Data Analytics, Data Visualization, Robotic Process Analytics, Business Intelligence, Digital Transformation, Data Migration, and Predictive Analytics. Our expert team has successfully implemented over 200+ projects across industries globally. .'
  },
  {
    text: 'Operating through our Global Analytics Hub, we provide 24/7 services to meet our clients\' diverse needs.Our commitment to excellence has earned us the Best Big Data Analytics Solution Company Award by WQPC. With a vision to be the leading data analytics and intelligence organization, we are dedicated to continuous customer service and advanced analytics solution development.'
  },
  {
    text: 'Our consultants help organizations leverage data analytics to manage operations across various functions, including operations, risk, and revenue assurance.As strategic thought leaders in Data and Big Data Analytics, we aim to enhance efficient enterprise management.At SSPL, we believe in simplifying complex data to empower businesses, driving informed decisions and fostering growth.'
  }
];

const AboutContent = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black text-center mb-8 sm:mb-10 md:mb-12 text-comfortaa">Who We Are</h2>
        
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-full sm:w-4/5 md:w-4/5 lg:w-4/5 group ${index % 2 === 1 ? 'sm:w-5/6 md:w-5/6 lg:w-5/6' : ''}`}>
                <div className="h-auto p-6 sm:p-7 md:p-8 rounded-xl border-2 border-green-600 bg-green-600 
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-green-700 
                  overflow-hidden flex items-center">
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl 
                    leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed 
                    font-normal text-center w-full">
                    {card.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;