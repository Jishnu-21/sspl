'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface MarqueeItem {
  logo: string;
  hoverDetails: {
    title: string;
    description: string;
    image1: string;
    industry?: string;
    scopeOfWork?: string;
  };
}

const RecognitionSection: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const marqueeItems: MarqueeItem[] = [
    {
      logo: '/images/awards/award1.jpg',
      hoverDetails: {
        title: 'TechVikram Technical Talk Award',
        description: 'Recognizing excellence in faculty and student development through a technical talk on Big Data Analytics.',
        image1: '/images/awards/award1.jpg',
        industry: 'Education',
        scopeOfWork: 'Faculty and Student Development',
      },
    },
    {
      logo: '/images/awards/award2.jpg',
      hoverDetails: {
        title: 'Excellence Award',
        description: 'Recognizing achievements in productivity, quality innovation, and management.',
        image1: '/images/awards/award2.jpg',
        industry: 'General',
        scopeOfWork: 'Productivity, Quality Innovation, Management',
      },
    },
    {
      logo: '/images/awards/award3.jpg',
      hoverDetails: {
        title: 'Leadership Innovation Excellence Award',
        description: 'Recognizing leadership, innovation, and dedication in the corporate sector.',
        image1: '/images/awards/award3.jpg',
        industry: 'Corporate',
        scopeOfWork: 'Leadership, Innovation, Dedication',
      },
    },
    {
      logo: '/images/awards/award4.jpg',
      hoverDetails: {
        title: 'Highest Growth Year Over Year',
        description: 'Recognizing exceptional growth and performance over the previous year.',
        image1: '/images/awards/award4.jpg',
        industry: 'Business',
        scopeOfWork: 'Growth and Performance',
      },
    },
    {
      logo: '/images/awards/award6.jpg',
      hoverDetails: {
        title: 'India Excellence Award',
        description: 'Recognizing outstanding contributions to society.',
        image1: '/images/awards/award6.jpg',
        industry: 'General',
        scopeOfWork: 'Social Impact / Community Service',
      },
    },
    {
      logo: '/images/awards/award8.jpg',
      hoverDetails: {
        title: 'FIT-IGNOU Centre of Excellence',
        description: 'Recognizing excellence in advanced education and research',
        image1: '/images/awards/award8.jpg',
        industry: 'Education & Research',
        scopeOfWork: 'Advanced Education and Research',
      },
    },
  ];

  return (
    <section className="py-4  bg-white text-black" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Recognition</h2>
        </div>
      </div>
      
      <div className="relative w-full" data-aos="fade-up">
        {/* Hover Section - Appears above the marquee on hover */}
        {hoveredItem && (
          <div className="absolute bottom-full left-0 w-full z-20 bg-[#1B3D69] bg-opacity-95 flex items-start p-4 md:p-6 transition-opacity duration-300">
            {marqueeItems.map(
              (item) =>
                item.logo === hoveredItem && (
                  <div key={item.logo} className="flex flex-col md:flex-row w-full gap-4 md:gap-6">
                    {/* Left Image Section */}
                    <div className="w-full md:w-1/4 flex flex-col gap-4">
                      <div className="relative w-full h-32 md:h-40">
                        <Image
                          src={item.hoverDetails.image1}
                          alt={`${item.hoverDetails.title} Image`}
                          fill
                          className="object-contain rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                    {/* Right Text Section */}
                    <div className="w-full md:w-3/4 text-white">
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl md:text-4xl font-bold">{item.hoverDetails.title}</h2>
                      </div>
                      <p className="mt-2 text-xl md:text-xl leading-relaxed">{item.hoverDetails.description}</p>
                      {item.hoverDetails.industry && (
                        <p className="mt-2 text-base md:text-lg text-blue-200">
                          <span className="font-semibold text-white">Industry:</span> {item.hoverDetails.industry}
                        </p>
                      )}
                      {item.hoverDetails.scopeOfWork && (
                        <p className="mt-1 text-base md:text-lg text-blue-200">
                          <span className="font-semibold text-white">Scope of Work:</span> {item.hoverDetails.scopeOfWork}
                        </p>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        )}

        {/* Marquee Section */}
        <div className="relative w-full overflow-x-auto overflow-y-hidden bg-white py-4 hide-scrollbar" data-aos="fade-up">
          <div className="flex whitespace-nowrap gap-4 sm:gap-6 md:gap-8 animate-marquee-desktop" style={{ WebkitOverflowScrolling: 'touch' }}>
            {/* Logos repeated to create seamless loop */}
            {marqueeItems.concat(marqueeItems, marqueeItems).map((item, index) => (
              <div
                key={`${item.logo}-${index}`}
                className="relative flex-shrink-0 w-[260px] h-[170px] sm:w-[300px] sm:h-[190px] md:w-[340px] md:h-[220px] lg:w-[380px] lg:h-[250px] cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.logo)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.logo}
                    alt={item.hoverDetails.title}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 380px"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Static right arrow indicator */}
   
        </div>

        {/* Scroll Indicator for all screens */}
        <div className="flex justify-center mt-2" aria-hidden="true">
          <div className="flex items-center gap-1">
            <span className="block w-2 h-2 rounded-full bg-[#1B3D69]" ></span>
            <span className="block w-2 h-2 rounded-full bg-[#1B3D69]" ></span>
            <span className="block w-2 h-2 rounded-full bg-[#1B3D69]" ></span>
          
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee-desktop {
            animation: marquee 12s linear infinite;
          }
          .animate-marquee-desktop:hover {
            animation-play-state: paused;
          }
          @media (max-width: 768px) {
            .animate-marquee-desktop {
              animation: none !important;
            }
          }
          .bottom-full {
            bottom: 100%;
          }
          .hide-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE 10+ */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome/Safari/Webkit */
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-bounce {
            animation: bounce 1.2s infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default RecognitionSection;