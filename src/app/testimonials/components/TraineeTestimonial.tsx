'use client';

import React from 'react';
import Image from 'next/image';
import { TraineeTestimonial } from '../data/TraineeTestimonialData';
import { motion } from 'framer-motion';

interface TraineeTestimonialProps {
  testimonials: TraineeTestimonial[];
}

const TraineeTestimonialComponent: React.FC<TraineeTestimonialProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          className="bg-[#1B3D69] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-row hover:bg-[#366a00] transition-colors duration-300 transform hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-14 h-16 md:w-16 md:h-20 lg:w-20 lg:h-24 relative mr-4 flex-shrink-0 border border-white/30 overflow-hidden rounded">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.name}'s avatar`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 640px) 56px, (max-width: 1024px) 64px, 80px"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white mb-1">{testimonial.name}</h3>
            {testimonial.course && <p className="text-xs text-white/80 mb-2">{testimonial.course}</p>}
            <p className="text-white text-justify text-sm leading-relaxed">{testimonial.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TraineeTestimonialComponent;
