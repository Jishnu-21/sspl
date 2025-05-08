'use client'
import React, { useEffect, useRef } from 'react';
import { Carousel } from '@/components/ui/apple-cards-carousel';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

const CaseStudiesSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  // Sample case studies data
  const caseStudies = [
    {
      title: "Auditing Analytics",
      description: "Auditors are developing the technical capacity to analyze the vast amounts of information they have access to and are using advanced techniques to mine that data to build stronger audit methodologies and improve the bottom line.",
      image: "/images/services/image1.png",
      color: "bg-purple-400"
    },
    {
      title: "Telecom Analytics",
      description: "Telecom analytics include increasing sales, reducing churn and fraud, network management optimization, customer experience enhancement, improving risk management, automation of operational analytics and predictive analytics.",
      image: "/images/services/image2.png",
      color: "bg-purple-400"
    },
    {
      title: "Telecom Analytics",
      description: "Telecom analytics include increasing sales, reducing churn and fraud, network management optimization, customer experience enhancement, improving risk management, automation of operational analytics and predictive analytics.",
      image: "/images/services/image2.png",
      color: "bg-purple-400"
    },
    {
      title: "Telecom Analytics",
      description: "Telecom analytics include increasing sales, reducing churn and fraud, network management optimization, customer experience enhancement, improving risk management, automation of operational analytics and predictive analytics.",
      image: "/images/services/image2.png",
      color: "bg-purple-400"
    },
    {
      title: "Telecom Analytics",
      description: "Telecom analytics include increasing sales, reducing churn and fraud, network management optimization, customer experience enhancement, improving risk management, automation of operational analytics and predictive analytics.",
      image: "/images/services/image2.png",
      color: "bg-purple-400"
    },
    {
      title: "Retail Analytics",
      description: "Retail analytics is the process of providing analytical data on inventory levels, supply chain movement, consumer demand, sales, etc. that are crucial for making marketing, and procurement decisions. Through our solutions, we provide...",
      image: "/images/services/image3.png",
      color: "bg-purple-400"
    }
  ];

  // Create card items for the carousel
  const cardItems = caseStudies.map((study, index) => (
    <div 
      key={index}
      className="flex-shrink-0 w-80 flex flex-col h-full rounded-xl overflow-hidden shadow-lg"
    >
      <div className={`${study.color} h-48 overflow-hidden relative rounded-t-xl`}>
        <Image 
          src={study.image} 
          alt={study.title}
          fill
          className="object-cover opacity-70"
        />
      </div>
      <div className="p-4 bg-white flex-1 rounded-b-xl">
        <h3 className="text-sm font-medium mb-2 text-gray-800">{study.title}</h3>
        <p className="text-xs text-gray-600 mb-4">{study.description}</p>
        <div className="mt-auto">
          <button className="flex items-center text-black text-xs font-medium">
            Learn More
            <div className="w-4 h-4 ml-1 rounded-full bg-black text-white flex items-center justify-center">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  ));

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="py-24 overflow-hidden rounded-3xl my-8 shadow-xl relative"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0  z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/case-studies.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="max-w-[95%] mx-auto relative z-20">
        {/* Top heading */}
        <div className="pb-4 mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Case Studies</h2>
        </div>
        {/* Horizontal line that extends across the entire section */}
        <div
          className="border-b border-white w-full mb-8"
          style={{ transformOrigin: 'left' }}
        />
        <div className="flex flex-col md:flex-row">
          {/* Left side content */}
          <div className="md:w-1/3 mb-10 md:mb-0 pr-8 relative">
            <p className="text-sm text-white leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            {/* Vertical line that connects with the horizontal line */}
            <div
              className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white"
              style={{ top: '-30px', transformOrigin: 'top' }}
            />
          </div>
          
          {/* Right side scrollable cards */}
          <div className="md:w-2/3 overflow-hidden relative">
            <div className="relative">
              <Carousel items={cardItems} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudiesSection;
