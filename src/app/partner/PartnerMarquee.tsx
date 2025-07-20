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

  const marqueeItems: MarqueeItem[] = [
    {
      logo: '/images/partners/arbutus.png',
      hoverDetails: {
        title: 'Arbutus',
        description:
          'From self service desktop and team-based analytics to fully automated solutions, Arbutus technology empowers you to use ALL of your data to gain better business insights at speeds you never thought possible',
        image1: '/images/partners/arbutus.png',
      },
    },
    {
      logo: '/images/partners/barnowl.png',
      hoverDetails: {
        title: 'BarnOwl',
        description:
          'BarnOwl is a fully integrated governance, risk management, compliance and audit software solution used by over 200 organisations in Africa, Europe and the UK. BarnOwl supports best practice risk management, compliance and audit frameworks (e.g. COSO, ISO31000, Generally Accepted Compliance Practice Framework (GACP), International Professional Practice Framework (IPPF)), whilst offering a highly flexible and configurable parameter-driven system allowing you to configure BarnOwl to meet your specific requirements.',
        image1: '/images/partners/barnowl.png',
      },
    },
    {
      logo: '/images/partners/paramount.png',
      hoverDetails: {
        title: 'Paramount',
        description:
          'Paramount, GCCs reliable cyber security partner garners strength from its largest network of security talent, vendors and customers. Our acknowledged expertise to Consult, Design, Build, Operate & Transfer plays a pivotal role in addressing the mission critical cybersecurity aspects in the regions high-growth industry sectors.',
        image1: '/images/partners/paramount.png',
      },
    },
    {
      logo: '/images/partners/mohsin.png',
      hoverDetails: {
        title: 'Mohsin Hander Darwish LLC',
        description:
          'MHD has been a strong contributor to the economy of Oman in the last few decades, committed through waves of growth and development. Opportunities are opening up for reliable and efficient transportation, effective communication, dependable infrastructure, better healthcare and living. In all areas, MHD has delivered success and built value over the years.',
      
        image1: '/images/partners/mohsin.png',
      },
    },
    {
      logo: '/images/partners/taxilla.png',
      hoverDetails: {
        title: 'Taxilla',
        description:
          'Taxilla is a global platform for all Reg-tech. It works to provide compliance with the regulatory bodies for tax compliance to its global clients and partners. They also provide customized solutions to their clients and partners to manage their finances better.',
        image1: '/images/partners/taxilla.png',
      },
    },
    {
      logo: '/images/partners/gtech.jpg',
      hoverDetails: {
        title: 'G Tech Valuers Pvt Ltd ',
        description:
          'G Tech Valuers Pvt Ltd is an innovative Valuation Consulting practice built on the strength of our portfolio, our people and over 50 man-years of our professional experience. Recognized for excellence in execution, we provide a wide range of valuation services for all asset categories as stipulated by the Companies Act 2013 including Land & Building; Plant & Machinery and Securities or Financial Assets.',
        image1: '/images/partners/gtech.jpg',
      },
    },
    {
      logo: '/images/partners/knight.jpg',
      hoverDetails: {
        title: 'Knight FinTech',
        description:
          'Knight FinTech has deep expertise in developing quantitative systems for financial institutions and hedge funds.It has a mission to provide a robust and seamless technology based platforms to Banks, FIs, Corporates and SMEs.',
        image1: '/images/partners/knight.jpg',
      },
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-8 mt-10 bg-white text-black" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-8">
      </div>

      <h2 className="text-4xl text-center font-semibold text-[#366A00] mb-8">SSPL Partners</h2>

      <div className="relative w-full">
        {/* Hover Section - Appears above the marquee on hover */}
        {hoveredItem && (
          <div className="absolute bottom-full left-0 w-full z-20 bg-[#1B3D69] bg-opacity-95 flex items-start p-2 md:p-3 transition-opacity duration-300 min-h-[180px] md:min-h-[240px]">
            {marqueeItems.map(
              (item) =>
                item.logo === hoveredItem && (
                  <div key={item.logo} className="flex  flex-col md:flex-row w-full gap-2 md:gap-4 min-h-[180px] md:min-h-[240px] items-center">
                    {/* Left Image Section */}
                    <div className="w-full md:w-1/5 bg-white  flex flex-col gap-2 justify-center">
                      <div className="relative w-full h-24 md:h-32">
                        <Image
                          src={item.hoverDetails.image1}
                          alt={`${item.hoverDetails.title} Image`}
                          fill
                          className="object-contain rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                    {/* Right Text Section */}
                    <div className="w-full md:w-4/5 text-white flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg md:text-2xl font-bold">{item.hoverDetails.title}</h2>
                      </div>
                      <p className="mt-2 text-sm md:text-base leading-relaxed">{item.hoverDetails.description}</p>
                    </div>
                  </div>
                )
            )}
          </div>
        )}

        {/* Marquee Section */}
        <div className="w-full overflow-hidden bg-white py-2">
          <div className="flex animate-marquee whitespace-nowrap gap-2 sm:gap-3 md:gap-4">
            {/* Logos repeated to create seamless loop */}
            {marqueeItems.concat(marqueeItems).map((item, index) => (
              <div
                key={`${item.logo}-${index}`}
                className="relative flex-shrink-0 w-[120px] h-[60px] sm:w-[150px] sm:h-[70px] md:w-[180px] md:h-[80px] lg:w-[200px] lg:h-[90px] cursor-pointer bg-white shadow-sm rounded-md hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
                onMouseEnter={() => setHoveredItem(item.logo)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.logo}
                    alt={item.hoverDetails.title}
                    fill
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 180px, 200px"
                    className="object-contain p-1"
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