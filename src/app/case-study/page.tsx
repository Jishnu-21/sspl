'use client';

import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../components/PageBanner';
import ServiceGrid from './components/ServiceGrid';
import { serviceOfferings } from './data/ServiceData';
import { motion } from 'framer-motion';
import CaseStudiesSection from '../FeaturedProjectsSection';
import CTASection from '../CTASection';
import ContactSection from './components/ContactSection';

const CaseStudy = () => {
  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header />
        <PageBanner
          backgroundImage="/images/about/banner.png"
          title="Case Study"
          subtitle="Explore our success stories and innovative solutions"
        />
        
        <motion.div
          className="container mx-auto py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ServiceGrid services={serviceOfferings} />
        </motion.div>
        <CaseStudiesSection/>
        <CTASection/>
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default CaseStudy;