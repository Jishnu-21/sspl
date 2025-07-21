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
        <section className="py-3 sm:py-6 px-2 sm:px-4 md:px-8 max-w-7xl mx-auto mb-6 sm:mb-12" data-aos="fade-up">
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

        {/* Applied Areas Section */}
        <section className="px-2 sm:px-4 md:px-8 max-w-7xl mx-auto mb-8 sm:mb-16" data-aos="fade-up">
          <div className="text-left mb-6 sm:mb-10">
            <h2 className="text-2xl font-semibold text-[#366A00] mb-4 sm:mb-6 text-center">Some of the applied areas of the Predictive Analytics are:</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 w-full pt-4 sm:pt-6 pb-2 sm:pb-4" >
            {/* Insurance Card */}
            <div
              className="bg-[#1B3D69] p-4 sm:p-8 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#366A00] group"
              data-aos="zoom-in"
              onClick={() => setModal('Insurance')}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                  <FaUmbrella className="text-[#1B3D69] text-3xl transition-colors duration-300 group-hover:text-[#366A00]" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-white transition-colors duration-300 text-center">Insurance</h3>
              <p className="text-white  group-hover:text-white transition-colors duration-300">
                Predictive analytics for risk assessment, fraud detection, and personalized policy recommendations.
              </p>
            </div>
            
            {/* Telecom Card */}
            <div
              className="bg-[#1B3D69] p-4 sm:p-8 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#366A00] group"
              data-aos="zoom-in"
              data-aos-delay="100"
              onClick={() => setModal('Telecom')}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                  <FaBroadcastTower className="text-[#1B3D69] text-3xl transition-colors duration-300 group-hover:text-[#366A00]" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-white transition-colors duration-300 text-center">Telecom</h3>
              <p className="text-white group-hover:text-white  text-justify justify-center transition-colors duration-300">
                Network optimization, customer churn prediction, and targeted service offerings based on usage patterns.
              </p>
            </div>
            
            {/* Wind-Mill Card */}
            <div
              className="bg-[#1B3D69] p-4 sm:p-8 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#366A00] group"
              data-aos="zoom-in"
              data-aos-delay="200"
              onClick={() => setModal('Wind-Mill')}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                  <FaWind className="text-[#1B3D69] text-3xl transition-colors duration-300 group-hover:text-[#366A00]" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-white transition-colors duration-300 text-center">Wind-Mill</h3>
              <p className="text-white  group-hover:text-white transition-colors duration-300">
                Energy output forecasting, maintenance scheduling, and efficiency optimization for renewable energy sources.
              </p>
            </div>
          </div>
        </section>
        
        <ServiceInquiryModal open={!!modal} onClose={() => setModal(null)} title={modal || ''} />
        
        <Footer/>
      </main>
    </>
  )
}

export default predictiveanalysis;