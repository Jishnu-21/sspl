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
          className="bg-amber-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-20 h-20 relative mr-4 flex-shrink-0 border border-amber-100">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.name}'s avatar`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="80px"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">{testimonial.name}</h3>
            {testimonial.course && <p className="text-xs text-amber-600 mb-2">{testimonial.course}</p>}
            <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TraineeTestimonialComponent;
