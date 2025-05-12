'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    text: 'Substratad Solutions Pvt. Ltd. (SSPL) is a leading consulting firm specializing in Big Data Analytics, Data Visualization, Robotic Process Analytics, Business Intelligence, Digital Transformation, Data Migration, and Predictive Analytics. Our expert team has successfully implemented over 200+ projects across industries globally. Operating through our Global Analytics Hub, we provide 24/7 services to meet our clients\' diverse needs.'
  },
  {
    text: 'Our commitment to excellence has earned us the Best Big Data Analytics Solution Company Award by WQPC. With a vision to be the leading data analytics and intelligence organization, we are dedicated to continuous customer service and advanced analytics solution development. Our consultants help organizations leverage data analytics to manage operations across various functions, including operations, risk, and revenue assurance.'
  },
  {
    text: 'As strategic thought leaders in Data and Big Data Analytics, we aim to enhance efficient enterprise management.At SSPL, we believe in simplifying complex data to empower businesses, driving informed decisions and fostering growth.'
  }
];

const AboutContent = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-black text-center mb-6 sm:mb-7 md:mb-8 text-comfortaa">Who We Are</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-5 md:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="h-auto sm:h-[280px] md:h-[300px] p-4 rounded-lg border border-[#1B3D69] bg-white 
                transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                <p className="text-gray-700 text-[14px] sm:text-[14px] md:text-[15px] leading-[1.4] sm:leading-[1.4] md:leading-[1.5] font-light">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
