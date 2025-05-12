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
          className="bg-amber-50 p-5 rounded-lg shadow-sm flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-12 h-12 relative mr-4 flex-shrink-0">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.name}'s avatar`}
              fill
              className="rounded-full"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">{testimonial.name}</h3>
            <p className="text-xs text-amber-600 mb-2">{testimonial.course}</p>
            <p className="text-gray-700 text-sm line-clamp-4">{testimonial.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TraineeTestimonialComponent;
