'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    text: 'Substratad Solutions Pvt. Ltd. (SSPL) is a leading consulting firm specializing in Big Data Analytics, Data Visualization, Robotic Process Analytics, Business Intelligence, Digital Transformation, Data Migration, and Predictive Analytics. Our expert team has successfully implemented over 200+ projects across industries globally. Operating through our Global Analytics Hub, we provide 24/7 services to meet our clients\' diverse needs.'
  },
  {
    text: 'Our commitment to excellence has earned us the Best Big Data Analytics Solution Company Award by WQPC. With a vision to be the leading data analytics and intelligence organization, we are dedicated to continuous customer service and advanced analytics solution development. Our consultants help organizations leverage data analytics to manage operations across various functions, including operations, risk, and revenue assurance. As strategic thought leaders in Data and Big Data Analytics, we aim to enhance efficient enterprise management.'
  },
  {
    text: 'At SSPL, we believe in simplifying complex data to empower businesses, driving informed decisions and fostering growth.'
  }
];

const AboutContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-semibold text-black text-center mb-14 text-comfortaa">Who We Are</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-[280px] p-5 rounded-lg border border-[#1B3D69] bg-white 
                transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <p className="text-gray-700 text-[12px] leading-[1.6] font-light">
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
