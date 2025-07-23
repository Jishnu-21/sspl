'use client'

import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Header from '@/app/Header'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaUmbrella, FaBroadcastTower, FaWind } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import DownloadBrochureButton from '@/app/components/DownloadBrochureButton'
import ServiceInquiryModal from '@/app/components/ServiceInquiryModal'
import ScheduleDemo from '@/app/products/ScheduleDemo'

const predictiveanalysis= () => {
  const [modal, setModal] = React.useState<string | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header/>
        <PageBanner
          backgroundImage="/images/services/banners/pred.jpg"
          title="Predictive and Big Data Analytics"
          bannerKey='predictive'
        />
        
        <section className="py-3 sm:py-6 px-2 sm:px-4 md:px-8 max-w-7xl mx-auto" data-aos="fade-up">
          <div className="mb-1 sm:mb-2">
            <div className="max-w-6xl mx-auto text-left mb-1 sm:mb-2">
              <h2 className="text-2xl font-semibold text-[#366A00] mb-4 sm:mb-6 text-center">Access meaningful data to deliver key insights with powerful analytics tools</h2>
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-justify">
                In a fast-paced demanding world, there has been a phenomenal growth seen in structured and unstructured data, 
                data systems acquired from multiple sources which cater to the requirements of the businesses so as to derive 
                insights faster & keep up with the momentum.
              </p>
            </div>
            <DownloadBrochureButton pdfPath="/pdfs/Predictive_Modeling_Insurance.pdf" />
          </div>
        </section>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-4 sm:mb-6"></div>

        {/* Handling Large Data Sets Section */}
        <section className=" px-2 sm:px-4 md:px-8 max-w-7xl mx-auto " data-aos="fade-up">
          <div className="text-left mb-4 sm:mb-8">
            <h2 className="text-2xl font-semibold text-[#366A00] mb-4 sm:mb-6 text-center">Handling Large Data Sets</h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-stretch">
              {/* Image */}
              <div className="md:w-1/2" data-aos="fade-right">
                <div className="relative aspect-[5/3]">
                  <Image 
                    src="/images/services/pred1.jpg" 
                    alt="Data Analytics Charts" 
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
              
              {/* Text content */}
              <div className="md:w-1/2 text-left flex flex-col justify-center" data-aos="fade-left">
                <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-justify">
                  Big data analytics is the process of examining large data sets to uncover hidden patterns, unknown correlations, 
                  market trends, customer preferences and other useful business information. The analytical findings can lead to 
                  more effective marketing strategies, building new revenue opportunities, rendering better customer service, 
                  improved operational efficiency so as to secure competitive advantages over rival organizations and add into 
                  other business benefits.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-justify">
                  Predictive Analytics is the next major development to Big Data Analytics wherein, technologies that are capable of 
                  handling large data sets can generate business interest trigger points, take into the calculations used for 
                  predicting any future decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applied Areas Section - Carousel */}
        <section className="px-2 mt-8 sm:px-4 md:px-8 " data-aos="fade-up">
          <div className="text-left mb-4">
            <h2 className="text-2xl font-semibold text-[#366A00] text-center">Applications of Predictive Analytics by Sector</h2>
          </div>
          <PredictiveAreasCarousel />
        </section>
        
        <ServiceInquiryModal open={!!modal} onClose={() => setModal(null)} title={modal || ''} />
        <ScheduleDemo/>
        <Footer/>
      </main>
    </>
  )
}

export default predictiveanalysis;

const predictiveAreas = [
  // Original custom cards
  {
    sector: 'Insurance',
    application: 'Predictive analytics for risk assessment, fraud detection, and personalized policy recommendations.',
    icon: <FaUmbrella className="text-[#1B3D69] text-3xl" />, 
    color: '#1B3D69',
  },
  {
    sector: 'Telecom',
    application: 'Network optimization, customer churn prediction, and targeted service offerings based on usage patterns.',
    icon: <FaBroadcastTower className="text-[#1B3D69] text-3xl" />, 
    color: '#1B3D69',
  },
  {
    sector: 'Wind-Mill',
    application: 'Energy output forecasting, maintenance scheduling, and efficiency optimization for renewable energy sources.',
    icon: <FaWind className="text-[#1B3D69] text-3xl" />, 
    color: '#1B3D69',
  },
  // Table-based cards
  {
    sector: 'Banking & Financial Services',
    application: 'Predict loan defaults, detect fraudulent transactions, and forecast customer churn and investment behavior.',
    icon: <FaUmbrella className="text-[#1B3D69] text-3xl" />,
    color: '#1B3D69',
  },
  {
    sector: 'Retail & E-commerce',
    application: 'Recommend products, forecast demand, manage inventory, and apply dynamic pricing based on customer behavior.',
    icon: <FaBroadcastTower className="text-[#1B3D69] text-3xl" />,
    color: '#1B3D69',
  },
  {
    sector: 'Healthcare',
    application: 'Forecast disease risk, hospital readmissions, treatment outcomes, and optimize resource allocation.',
    icon: <FaWind className="text-[#1B3D69] text-3xl" />,
    color: '#1B3D69',
  },
  {
    sector: 'Manufacturing',
    application: 'Predict machine failures, identify quality issues, and streamline production and supply chain operations.',
    icon: <FaUmbrella className="text-[#1B3D69] text-3xl" />,
    color: '#1B3D69',
  },
  {
    sector: 'Transportation & Logistics',
    application: 'Forecast demand, optimize delivery routes, and improve arrival time estimates and fleet management.',
    icon: <FaBroadcastTower className="text-[#1B3D69] text-3xl" />,
    color: '#1B3D69',
  },
  {
    sector: 'Energy & Utilities',
    application: 'Predict energy demand, prevent outages, and analyze usage patterns for operational efficiency and customer insight.',
    icon: <FaWind className="text-[#1B3D69] text-3xl" />,
    color: '#1B3D69',
  },
  {
    sector: 'Sports & Entertainment',
    application: 'Forecast match outcomes, personalize fan experiences, and optimize ticket sales and event marketing.',
    icon: <FaUmbrella className="text-[#1B3D69] text-3xl" />,
    color: '#1B3D69',
  },
  {
    sector: 'Government & Public Services',
    application: 'Predict crime trends, manage disaster responses, and detect tax fraud or benefit misuse.',
    icon: <FaBroadcastTower className="text-[#1B3D69] text-3xl" />,
    color: '#1B3D69',
  },
];

function PredictiveAreasCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="w-full overflow-x-auto pb-6  pt-6 hide-scrollbar relative">
      <div
        ref={scrollRef}
        className="flex gap-6 sm:gap-10 px-2 md:px-8 min-w-max cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {predictiveAreas.map((item, idx) => (
          <div
            key={item.sector}
            className="bg-[#1B3D69] p-4 sm:p-8 rounded-md shadow-md flex flex-col items-center justify-center min-w-[280px] max-w-[340px] w-[80vw] sm:w-[320px] md:w-[340px] transition-all duration-300 group cursor-pointer hover:bg-[#366A00] hover:scale-105"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="mb-4 sm:mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <h3 className="text-xl font-medium text-white mb-2 text-center">{item.sector}</h3>
            <p className="text-white text-center">{item.application}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .group:hover {
          background: #366A00 !important;
          transform: scale(1.05);
        }
        @keyframes bounce-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        .animate-bounce-right {
          animation: bounce-right 1.2s infinite;
        }
      `}</style>
    </div>
  );
}