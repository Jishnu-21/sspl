'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ShortPageBanner from '../components/ShortPageBanner';
import { FaEye, FaLock, FaLightbulb } from 'react-icons/fa';

const STOCK_IMAGE = "/images/about/about.webp";
const BANNER_KEY = "about";

const AboutBanner = () => {


  return (
    <section className="min-h-screen flex flex-col">
      <ShortPageBanner
        backgroundImage="/images/about/about.webp"
        title=''
        bannerKey='about'
      />

      {/* Blue Section with Vision & Values */}
      <section className="w-full bg-gradient-to-r from-[#1B3D69] via-[#234e75] to-[#1b3d69] py-4 shadow-lg flex-1 flex flex-col justify-center">
        <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white text-center mb-4 sm:mb-6 md:mb-8 text-comfortaa">
            Our Vision & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl hover:rounded-3xl">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent border-2 border-white/30 mb-4 shadow-lg transition-all duration-300">
                <FaEye size={30} className="text-white" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Vision</h3>
              <p className="text-white/90 text-justify text-sm px-4">
                Formed with a vision to be “the leading data analytics and data intelligence organisation”, we at SSPL are committed to continuous customer service and advance analytics solution Development Company. Helping our clients to steer towards their corporate vision and attain their goals with best possible optimized analytics solutions and services.
              </p>
            </div>
            {/* Protect & respect confidentiality */}
            <div className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl hover:rounded-3xl">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent border-2 border-white/30 mb-4 shadow-lg transition-all duration-300">
                <FaLock size={30} className="text-white" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Protect & respect confidentiality</h3>
              <p className="text-white/90 text-justify text-sm px-4">
                We often work in sensitive environments where the slightest breach of confidentiality- or the appearance of a breach- could have severe consequences and hinder our ability to serve our clients well. We strictly maintain our clients’ confidentiality and do everything we can to encourage others involved in the process including the service providers etc to share our approach.
              </p>
            </div>
            {/* Lead with insight */}
            <div className="flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl hover:rounded-3xl">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-transparent border-2 border-white/30 mb-4 shadow-lg transition-all duration-300">
                <FaLightbulb size={30} className="text-white" />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">Lead with insight</h3>
              <p className="text-white/90 text-justify text-sm px-4">
                Our consultants carry a wealth of expertise that most companies are always looking forward to tap into managing analytics for their various internal functions such as Operations, Risk and Revenue Assurance but struggle to achieve. SSPL is a strategic thought leader in the discipline of Data and Big Data Analytics for efficient Enterprise Management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutBanner;
