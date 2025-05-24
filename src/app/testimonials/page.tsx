'use client'

import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { majorClients, minorClients } from './data/TestimonialData';
import { traineeTestimonials } from './data/TraineeTestimonialData';
import MajorClientTestimonial from './components/MajorClientTestimonial';
import MinorClientTestimonial from './components/MinorClientTestimonial';
import TraineeTestimonialComponent from './components/TraineeTestimonial';
import LoadMoreButton from './components/LoadMoreButton';
import PageBanner from '../components/PageBanner';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [visibleMajorClients, setVisibleMajorClients] = React.useState(2);
  const [visibleMinorClients, setVisibleMinorClients] = React.useState(4);
  const [visibleTrainees, setVisibleTrainees] = React.useState(4);
  
  const handleLoadMoreClients = () => {
    if (visibleMajorClients < majorClients.length) {
      setVisibleMajorClients(prev => prev + 1);
    }
    if (visibleMinorClients < minorClients.length) {
      setVisibleMinorClients(prev => prev + 2);
    }
  };

  const handleLoadMoreTrainees = () => {
    setVisibleTrainees(prev => Math.min(prev + 4, traineeTestimonials.length));
  };

  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header />
        
        <PageBanner
        backgroundImage="/images/about/banner.png"
        title="Testimonials"
      />
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-xl md:text-2xl lg:text-3xl text-[#366A00] font-bold text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What our clients are saying
            </motion.h1>
            
            <div className="flex flex-col lg:flex-row gap-10">
              <MajorClientTestimonial clients={majorClients.slice(0, visibleMajorClients)} />
              <MinorClientTestimonial clients={minorClients.slice(0, visibleMinorClients)} />
            </div>
            
            {(visibleMajorClients < majorClients.length || visibleMinorClients < minorClients.length) && (
              <LoadMoreButton onClick={handleLoadMoreClients} />
            )}
          </motion.div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-xl md:text-2xl lg:text-3xl text-[#366A00] font-bold text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What our trainees are saying
            </motion.h1>
            
            <TraineeTestimonialComponent testimonials={traineeTestimonials.slice(0, visibleTrainees)} />
            
            {visibleTrainees < traineeTestimonials.length && (
              <LoadMoreButton onClick={handleLoadMoreTrainees} />
            )}
          </motion.div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Testimonials;