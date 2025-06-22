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
        title: 'Excellence in Innovation',
        description:
          'Awarded for outstanding innovation in data analytics solutions that have transformed business operations.',
        
        image1: '/images/awards/award1.jpg',
      },
    },
    {
      logo: '/images/awards/award2.jpg',
      hoverDetails: {
        title: 'Excellence Award',
        description:
          'Recognized by WQPC for providing the most technically advanced Big Data Analytics solutions in the industry.',
       
        image1: '/images/awards/award2.jpg',
      },
    },
    {
      logo: '/images/awards/award3.jpg',
      hoverDetails: {
        title: 'Technology Leadership Award',
        description:
          'Honored for leadership in developing cutting-edge technology solutions that drive business growth.',
        
        image1: '/images/awards/award3.jpg',
      },
    },
    {
      logo: '/images/awards/award4.jpg',
      hoverDetails: {
        title: 'Customer Satisfaction Excellence',
        description:
          'Awarded for maintaining the highest standards of customer service and support in the industry.',
      
        image1: '/images/awards/award4.jpg',
      },
    },
    {
      logo: '/images/awards/award5.jpg',
      hoverDetails: {
        title: 'Industry Impact Award',
        description:
          'Recognized for making significant contributions to advancing data analytics across multiple industries.',
      
        image1: '/images/awards/award5.jpg',
      },
    },
    {
      logo: '/images/awards/award6.jpg',
      hoverDetails: {
        title: 'Digital Transformation Partner',
        description:
          'Awarded for helping organizations successfully navigate their digital transformation journey.',
       
        image1: '/images/awards/award6.jpg',
      },
    },
    {
      logo: '/images/awards/award8.jpg',
      hoverDetails: {
        title: 'Best Enterprise Solution',
        description:
          'Recognized for providing comprehensive enterprise-level solutions that deliver measurable business value.',
      
        image1: '/images/awards/award8.jpg',
      },
    },
  ];

  return (
    <section className="py-16 mt-20 bg-white text-black" data-aos="fade-up">
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
                        <h2 className="text-xl md:text-2xl font-bold">{item.hoverDetails.title}</h2>
                      </div>
                      <p className="mt-2 text-xs md:text-sm leading-relaxed">{item.hoverDetails.description}</p>
  
                    
                    </div>
                  </div>
                )
            )}
          </div>
        )}

        {/* Marquee Section */}
        <div className="w-full overflow-hidden bg-white py-4" data-aos="fade-up">
          <div className="flex animate-marquee whitespace-nowrap gap-4 sm:gap-6 md:gap-8">
            {/* Logos repeated to create seamless loop */}
            {marqueeItems.concat(marqueeItems).map((item, index) => (
              <div
                key={`${item.logo}-${index}`}
                className="relative flex-shrink-0 w-[260px] h-[170px] sm:w-[300px] sm:h-[190px] md:w-[340px] md:h-[220px] lg:w-[380px] lg:h-[250px] cursor-pointer bg-white shadow-sm rounded-md hover:shadow-md transition-shadow duration-300"
                onMouseEnter={() => setHoveredItem(item.logo)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.logo}
                    alt={item.hoverDetails.title}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 380px"
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
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

          .animate-marquee {
            animation: marquee 12s linear infinite;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }

          .bottom-full {
            bottom: 100%;
          }

          @media (max-width: 768px) {
            .animate-marquee {
              animation: marquee 15s linear infinite;
            }
          }

          @media (max-width: 640px) {
            .animate-marquee {
              animation: marquee 10s linear infinite;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default RecognitionSection;