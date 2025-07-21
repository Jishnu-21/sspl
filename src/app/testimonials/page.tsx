'use client'

import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { majorClients, minorClients } from './data/TestimonialData';
import { traineeTestimonials } from './data/TraineeTestimonialData';
import MajorClientTestimonial from './components/MajorClientTestimonial';
import MinorClientTestimonial from './components/MinorClientTestimonial';
import TraineeTestimonialComponent from './components/TraineeTestimonial';
import LoadMoreButton from './components/LoadMoreButton';
import ShortPageBanner from '../components/ShortPageBanner';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  const [visibleMajorClients, setVisibleMajorClients] = React.useState(2);
  const [visibleMinorClients, setVisibleMinorClients] = React.useState(4);
  const [visibleTrainees, setVisibleTrainees] = React.useState(4);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLoadMoreClients = () => {
    setVisibleMajorClients(majorClients.length);
    setVisibleMinorClients(minorClients.length);
  };

  const handleLoadMoreTrainees = () => {
    setVisibleTrainees(traineeTestimonials.length);
  };

  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header />
        <ShortPageBanner
        backgroundImage="/images/testimonials/banner.webp"
        title="Testimonials"
        bannerKey='testimonials'
      />
        <section className="py-4 px-4 sm:px-6 lg:px-8">
          <div 
            className="max-w-7xl mx-auto"
            data-aos="fade-up"
          >
            <h1 
              className="text-xl md:text-2xl lg:text-4xl text-[#366A00] font-bold text-center mb-12"
              data-aos="fade-up"
            >
              What our clients are saying
            </h1>
            
            <div className="flex flex-col lg:flex-row gap-10" data-aos="fade-up">
              <MajorClientTestimonial clients={majorClients.slice(0, visibleMajorClients)} />
              <MinorClientTestimonial clients={minorClients.slice(0, visibleMinorClients)} />
            </div>
            
            {(visibleMajorClients < majorClients.length || visibleMinorClients < minorClients.length) && (
              <div data-aos="fade-up">
                <LoadMoreButton onClick={handleLoadMoreClients} />
              </div>
            )}
          </div>
        </section>

        <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div 
            className="max-w-7xl mx-auto"
            data-aos="fade-up"
          >
            <h1 
              className="text-xl md:text-2xl lg:text-4xl text-[#366A00] font-bold text-center mb-12"
              data-aos="fade-up"
            >
              What our trainees are saying
            </h1>
            
            <div data-aos="fade-up">
              <TraineeTestimonialComponent testimonials={traineeTestimonials.slice(0, visibleTrainees)} />
            </div>
            {visibleTrainees < traineeTestimonials.length && (
              <div data-aos="fade-up">
                <LoadMoreButton onClick={handleLoadMoreTrainees} />
              </div>
            )}
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Testimonials;