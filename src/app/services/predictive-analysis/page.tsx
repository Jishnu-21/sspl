import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Header from '@/app/Header'
import React from 'react'
import Image from 'next/image'
import { FaUmbrella, FaBroadcastTower, FaWind } from 'react-icons/fa'

const predictiveanalysis= () => {
  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header/>
        <PageBanner
          backgroundImage="/images/services/banners/big-data-analytics.png"
          title="Predictive and Big Data Analytics"
          subtitle="Access meaningful data to deliver key insights with powerful analytics tools"
        />
        
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-2">
            <div className="max-w-4xl mx-auto text-center mb-2">
              <h2 className="text-2xl font-semibold text-[#366A00] mb-6 whitespace-nowrap">Access meaningful data to deliver key insights with powerful analytics tools</h2>
              <p className="text-gray-700 leading-relaxed">
                In a fast-paced demanding world, there has been a phenomenal growth seen in structured and unstructured data, 
                data systems acquired from multiple sources which cater to the requirements of the businesses so as to derive 
                insights faster & keep up with the momentum.
              </p>
            </div>
            </div>
        </section>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>

        {/* Handling Large Data Sets Section */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Handling Large Data Sets</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Image */}
            <div className="mb-8 flex justify-center">
              <Image 
                src="/images/services/pred1.jpg" 
                alt="Data Analytics Charts" 
                width={600} 
                height={350}
                className="rounded-md"
              />
            </div>
            
            {/* Text content */}
            <div className="text-center">
              <p className="text-gray-700 leading-relaxed mb-6">
                Big data analytics is the process of examining large data sets to uncover hidden patterns, unknown correlations, 
                market trends, customer preferences and other useful business information. The analytical findings can lead to 
                more effective marketing strategies, building new revenue opportunities, rendering better customer service, 
                improved operational efficiency so as to secure competitive advantages over rival organizations and add into 
                other business benefits.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Predictive Analytics is the next major development to Big Data Analytics wherein, technologies that are capable of 
                handling large data sets can generate business interest trigger points, take into the calculations used for 
                predicting any future decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Applied Areas Section */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Some of the applied areas of the Predictive Analytics are:</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[95%] mx-auto">
            {/* Insurance Card */}
            <div className="bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-[#a4ce4e] rounded-full flex items-center justify-center">
                  <FaUmbrella className="text-white text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Insurance</h3>
              <p className="text-gray-600 text-center">
                Predictive analytics for risk assessment, fraud detection, and personalized policy recommendations.
              </p>
            </div>
            
            {/* Telecom Card */}
            <div className="bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-[#a4ce4e] rounded-full flex items-center justify-center">
                  <FaBroadcastTower className="text-white text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Telecom</h3>
              <p className="text-gray-600 text-center">
                Network optimization, customer churn prediction, and targeted service offerings based on usage patterns.
              </p>
            </div>
            
            {/* Wind-Mill Card */}
            <div className="bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center">
              <div className="mb-6">
                <div className="w-24 h-24 bg-[#a4ce4e] rounded-full flex items-center justify-center">
                  <FaWind className="text-white text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Wind-Mill</h3>
              <p className="text-gray-600 text-center">
                Energy output forecasting, maintenance scheduling, and efficiency optimization for renewable energy sources.
              </p>
            </div>
          </div>
        </section>
        
        <Footer/>
      </main>
    </>
  )
}

export default predictiveanalysis;