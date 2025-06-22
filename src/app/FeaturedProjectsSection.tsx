'use client'
import React, { useEffect, useRef } from 'react';
import { Carousel } from '@/components/ui/apple-cards-carousel';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { FaChartLine, FaChartBar, FaShoppingCart, FaUniversity, FaUmbrella, FaOilCan, FaTv, FaDatabase, FaRobot } from 'react-icons/fa';

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
    "Internal Audit Analytics": "/pdfs/internal-audit-analytics.pdf",
    "Telecom Analytics": "/pdfs/telecom.pdf",
    "Retail Analytics": "/pdfs/retail.pdf",
    "Banking Analytics": "/pdfs/banking.pdf",
    "Insurance Analytics": "/pdfs/insurance.pdf",
    "Oil & Energy Analytics": "/pdfs/oil-energy-  .pdf",
    "Media Analytics": "/pdfs/media.pdf",
    "Data Migration": "/pdfs/data.pdf",
    "Robotic Process Automation": {
      "assureBI Arabic ChatBOT": "/pdfs/robot1.pdf",
      "assureBI bankRPA": "/pdfs/robot2.pdf"
    }
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
      subtypes: ["assureBI Arabic ChatBOT", "assureBI bankRPA"]
    }
  ];

  // Create card items for the carousel
  const cardItems = caseStudies.map((study, index) => (
    <div 
      key={index}
      className="flex-shrink-0 w-80 flex flex-col h-full rounded-xl overflow-hidden shadow-lg"
    >
      <div className="h-64 overflow-hidden relative rounded-t-xl">
        <Image 
          src={study.image} 
          alt={study.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 bg-white flex-1 rounded-b-xl">
        <h3 className="text-sm font-medium mb-2 text-gray-800">{study.title}</h3>
        <p className="text-xs text-gray-600 mb-4">{study.description}</p>
        <div className="mt-auto">
          {study.subtypes && (
            <div className="flex flex-col space-y-2">
              {study.subtypes.map((subtype, idx) => (
                <button 
                  key={idx}
                  onClick={() => openPdf(study.title, subtype)}
                  className="flex items-center text-black text-xs font-medium hover:text-[#366A00] transition-colors cursor-pointer"
                >
                  {subtype}
                  <div className="w-4 h-4 ml-1 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#366A00]">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          )}
          {!study.subtypes && index !== 0 && (
            <button 
              onClick={() => openPdf(study.title)}
              className="flex items-center text-black text-xs font-medium hover:text-[#366A00] transition-colors cursor-pointer"
            >
              View Case Study
              <div className="w-4 h-4 ml-1 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#366A00]">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          )}
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
    <div className="relative will-change-transform overflow-visible">
      <motion.section 
        ref={sectionRef}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className="py-24 overflow-hidden rounded-3xl my-8 shadow-xl relative"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div className="absolute inset-0  z-10"></div> {/* Added proper overlay */}
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

        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px] relative z-20">
          {/* Top heading */}
          <div className="pb-4 mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Case Studies</h2>
          </div>
          {/* Horizontal line that extends across the entire section */}
          <div
            className="border-b border-white w-full mb-8"
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
                style={{ top: '-30px' }}
              />
            </div>
            
            {/* Right side scrollable cards */}
            <div className="md:w-2/3 overflow-hidden -mt-16">
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