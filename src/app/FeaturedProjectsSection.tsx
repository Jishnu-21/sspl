'use client'
import React, { useEffect, useRef } from 'react';
import { Carousel } from '@/components/ui/apple-cards-carousel';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const CaseStudiesSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  // Adjust the inView settings to prevent reanimation and flickering
  const isInView = useInView(sectionRef, { 
    once: true, // Set to true to animate only once when it first enters viewport
    amount: 0.2,
    margin: "-100px 0px -100px 0px" // Add margin to trigger animation before fully in view
  });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      // Use a slight delay before hiding to prevent flickering during scroll
      const timeout = setTimeout(() => {
        controls.start('hidden');
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [controls, isInView]);

  // PDF file paths for each case study
  const casePdfs: Record<string, string | { [key: string]: string }> = {
    "Internal Audit Analytics": "/pdfs/case-study/assureBI_IA_DataSheet.pdf",
    "Telecom Analytics": "/pdfs/telecom.pdf",
    "Retail Analytics": "/pdfs/case-study/assureBI_Retail_DataSheet.pdf",
    "Banking Analytics": "/pdfs/banking.pdf",
    "Insurance Analytics": "/pdfs/case-study/assureBI_Insurance_DataSheet.pdf",
    "Oil & Energy Analytics": "/pdfs/case-study/assureBI_IA_Energy_DataSheet.pdf",
    "Media Analytics": "/pdfs/case-study/assureBI_Media_Analytics.pdf",
    "Data Migration": "/pdfs/case-study/assureBI_DataMigration.pdf",
    "Robotic Process Automation": "/pdfs/case-study/assureBI_Document_RPA.pdf"
  };

  // Function to open PDF in a new tab
  const openPdf = (title: string, subType?: string) => {
    const pdfPath = casePdfs[title];
    if (typeof pdfPath === 'string') {
      window.open(pdfPath, '_blank');
    } else if (typeof pdfPath === 'object' && subType && pdfPath[subType]) {
      window.open(pdfPath[subType], '_blank');
    }
  };

  // Sample case studies data
  const caseStudies = [
    {
      title: "Internal Audit Analytics",
      description: "Auditors are developing the technical capacity to analyse the vast amounts of information they have captured, and are using the insights generated from that data to build stronger audit methodologies and improve the bottom line...",
      image: "/images/case-study/internal-audit-analysis.jpg",
      color: "bg-[#a4ce4e]"
    },
    {
      title: "Telecom Analytics",
      description: "Telecom analytics include increasing sales, reducing churn and fraud, network management monitoring, billing analytics, revenue assurance, improving risk management, automation of operational analytics and predictive analytics...",
      image: "/images/case-study/telecom-analytics.jpg",
      color: "bg-[#a4ce4e]"
    },
    {
      title: "Retail Analytics",
      description: "Retail analytics is the process of providing analytical data on inventory levels, supply chain movement, consumer demand, sales, etc. that are crucial for making marketing, and procurement decisions. Through our solution, we are able to provide...",
      image: "/images/case-study/retail-analytics.jpg",
      color: "bg-[#a4ce4e]"
    },
    {
      title: "Banking Analytics",
      description: "While basic reporting and descriptive analytics continues to be a must-have for banks, advances predictive and prescriptive analytics are now starting to generate powerful insights...",
      image: "/images/case-study/banking-analytics.jpg",
      color: "bg-[#a4ce4e]"
    },
    {
      title: "Insurance Analytics",
      description: "Analytics is emerging as a game changer for the Insurance industry facing significant profitability and growth challenges. Advanced and Predictive Analytics are now taking turn for better business management...",
      image: "/images/case-study/insurance-analytics.jpg",
      color: "bg-[#a4ce4e]"
    },
    {
      title: "Oil & Energy Analytics",
      description: "Analytics can be a core catalyst to achieving high performance in the energy industry but it takes pragmatic action to become analytically empowered...",
      image: "/images/case-study/oil-energy-analytics.jpg",
      color: "bg-[#a4ce4e]"
    },
    {
      title: "Media Analytics",
      description: "An unprecedented amount of data is being generated from enormous video traffic presents an array of opportunities and challenges for the Channel...",
      image: "/images/case-study/media-analytics.jpg",
      color: "bg-[#a4ce4e]"
    },
    {
      title: "Data Migration",
      description: "Businesses spend huge investment migrating data between information-intensive applications. Yet up to 75 percent of new systems fail to meet expectations often because flaws in the migration...",
      image: "/images/case-study/data-analytics.jpg",
      color: "bg-[#a4ce4e]"
    },
    {
      title: "Robotic Process Automation",
      description: "We offer following solutions of Robotic Process Automation including assureBI Arabic ChatBOT and assureBI bankRPA...",
      image: "/images/case-study/robot-analytics.jpg",
      color: "bg-[#a4ce4e]",
    }
  ];

  // Create card items for the carousel - Responsive card sizes
  const cardItems = caseStudies.map((study, index) => (
    <div 
      key={index}
      className="flex-shrink-0 w-72 sm:w-80 md:w-84 lg:w-96 flex flex-col h-full rounded-xl overflow-hidden shadow-lg"
    >
      <div className="h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden relative rounded-t-xl">
        <Image 
          src={study.image} 
          alt={study.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 bg-white flex-1 rounded-b-xl">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 text-gray-800">{study.title}</h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 line-clamp-3">{study.description}</p>
        <div className="mt-auto">
          
            <button 
              onClick={() => openPdf(study.title)}
              className="flex items-center text-black text-xs sm:text-sm md:text-base font-medium hover:text-[#366A00] transition-colors cursor-pointer"
            >
              View Case Study
              <div className="w-3 h-3 sm:w-4 sm:h-4 ml-1 mt-[-2px] rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#366A00]">
                <svg className="w-2 h-2 sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
      y: 80, // More significant vertical movement
      scale: 0.92, // More noticeable scaling effect
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7, // Slightly longer to appreciate the animation
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoother motion
      }
    }
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 relative will-change-transform overflow-visible">
      <motion.section 
        ref={sectionRef}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="py-4 sm:py-6 overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl my-2 sm:my-3 md:my-4 shadow-xl relative"
      >
        {/* Solid Color Background */}
        <div className="absolute inset-0 w-full h-full bg-[#1B3D69] z-0"></div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1920px] relative z-20">
          {/* Top heading */}
          <div className="pb-2 sm:pb-3 md:pb-4 mb-0 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-3 md:mt-4 font-bold text-white">Case Studies</h2>
          </div>
          {/* Horizontal line that extends across the entire section */}
          <div className="border-b border-white w-full mb-4 sm:mb-6 md:mb-8" />
          
          <div className="flex flex-col lg:flex-row">
            {/* Left side content */}
            <div className="lg:w-1/3 mb-6 sm:mb-8 md:mb-10 lg:mb-0 pr-0 lg:pr-6 xl:pr-8 relative">
              <p className="text-sm sm:text-base text-justify md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              {/* Vertical line that connects with the horizontal line */}
              <div
                className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-white"
                style={{ top: '-20px' }}
              />
            </div>
            
            {/* Right side scrollable cards */}
            <div className="lg:w-2/3 overflow-hidden -mt-8 sm:-mt-12 md:-mt-16">
              <div className="relative">
                <Carousel items={cardItems} />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CaseStudiesSection;