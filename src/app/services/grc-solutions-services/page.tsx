"use client"

import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Header from '@/app/Header'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Grc = () => {
  return (
    <>
    <main className="flex flex-col bg-white min-h-screen">
    <Header/>
    <PageBanner
          backgroundImage="/images/about/banner.png"
          title="GRC Solution & Services"
          subtitle="Test and verify the working of application"
        />

    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-2">
            <div className="max-w-4xl mx-auto text-center mb-2">
              <p className="text-gray-700 leading-relaxed">
              We strengthen your core values, align your organization structure and infuse a culture that supports and sustains well in every season.
              </p>
            </div>
          </div>
        </section>
        
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        

        {/* Governance Framework Section */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#366A00] text-center mb-12">Governance Framework</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6">
            {/* Left side - Image */}
            <motion.div 
              className="w-full md:w-3/5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
                <Image 
                  src="/images/services/grc1.jpg" 
                  alt="Governance Framework" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div 
              className="w-full md:w-2/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#366A00] mt-1 text-lg">▢</span>
                  <span className="text-black">Reassess Core Values, Vision and Mission</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#366A00] mt-1 text-lg">▢</span>
                  <span className="text-black">Review Organizational Structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#366A00] mt-1 text-lg">▢</span>
                  <span className="text-black">Redesign Charters, Policies and Procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#366A00] mt-1 text-lg">▢</span>
                  <span className="text-black">Culture Consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#366A00] mt-1 text-lg">▢</span>
                  <span className="text-black">Training sessions held on Governance, Culture, Core Values & Ethics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#366A00] mt-1 text-lg">▢</span>
                  <span className="text-black">Training imparted to Operations Staff on Policies and Procedures</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
        
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 my-6"></div>

    <Footer/>
    </main>


    </>
  )
}

export default Grc