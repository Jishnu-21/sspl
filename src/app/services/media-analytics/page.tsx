"use client";

import Footer from '@/app/Footer'
import Header from '@/app/Header'
import React from 'react'
import PageBanner from '@/app/components/PageBanner'
import Image from 'next/image'

const media = () => {
  return (
    <>
          <main className="flex flex-col bg-white min-h-screen">
    <Header/>
    <PageBanner
          backgroundImage="/images/about/banner.png"
          title="Media Analytics"
          subtitle="Media Analytics Enabling Software Solution"
        />

        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-2">
            <div className="max-w-4xl mx-auto text-center mb-2">
              <p className="text-gray-700 leading-relaxed">
              An unprecedented amount of data is being generated from enormous video traffic that presents an array of opportunities and challenges for the Channel. Media Analytics proposes a solution to manage and take appropriate business decisions, at almost real-time basis. SSPL- with its given track record of over 20 years in the Industry of Data Analytics provides extremely fast, tested and trusted solution to various businesses that detail out Business Intelligent Reports and Trends based on the user defined parameters. The solution and services not only enables Channels to understand their viewers better, but also helps them optimize the airtime with best possible telecast.
              </p>
            </div>
            </div>
        </section>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>

                {/* Handling Large Data Sets Section */}
                <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto mb-12">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Media Analytics Enabling Software Solution</h2>
                  </div>
                  

                  <div className="max-w-4xl mx-auto">
                    {/* Image */}
                    <div className="mb-8 flex justify-center">
                      <Image 
                        src="/images/services/data-analytics-charts.jpg" 
                        alt="Data Analytics Charts" 
                        width={600} 
                        height={350}
                        className="rounded-md"
                      />
                    </div>
                    
                    {/* Text content */}
                    <div className="text-center">
                      <p className="text-gray-700 leading-relaxed mb-6">
                      SSPL’s Media Analytics enabling software solution can be leveraged to build offerings to understand the user behavior. Our solution generates audience engagement measurements and is capable of supporting structured as well as non-structured data from all possible sources in the Industry. The framework enables a user to run descriptive, predictive and prescriptive analytics over the collected data. It helps in generating reports, charts and dashboards that provide insights into customer behavior. The solution also implements a recommendation engine to suggest movies and programs based on user’s viewing history and preferences. It also provides a forecasting engine to estimate revenue generated through customer activity.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Features Section - Full Width with Carousel */}
                <section className="py-12 bg-gray-50 overflow-hidden w-screen relative mb-16" style={{ left: "50%", right: "50%", marginLeft: "-51.2vw", marginRight: "-50vw", maxWidth: "100vw" }}>
                  <div className="max-w-[95%] mx-auto">
                    <div className="text-center mb-10">
                      <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Features</h2>
                      <p className="text-gray-700 max-w-4xl mx-auto mb-10">
                        The key features of our Media Analytics that allow you to get insights into customer behavior are:
                      </p>
                    </div>
                    
                    {/* Features Carousel */}
                    <div className="overflow-hidden">
                      <div 
                        className="flex gap-8"
                        style={{ 
                          width: "fit-content",
                          animation: "feature-carousel 30s linear infinite"
                        }}
                      >
                        {/* Feature Cards - First Set */}
                        <div className="bg-gray-200 p-6 rounded-md min-w-[300px] md:min-w-[350px]">
                          <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">
                              <span className="text-white font-bold">Icon</span>
                            </div>
                          </div>
                          <h3 className="text-center text-lg font-medium text-[#1B3D69] mb-3">Media Analytics</h3>
                          <p className="text-sm text-gray-700">
                            Media analytics platforms can be used to monitor audience engagement with content. The insights can be leveraged to build customer loyalty programs. The solution also provides recommendation engine to suggest movies and programs based on user's viewing history and preferences.
                          </p>
                        </div>
                        
                        <div className="bg-gray-200 p-6 rounded-md min-w-[300px] md:min-w-[350px]">
                          <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">
                              <span className="text-white font-bold">Icon</span>
                            </div>
                          </div>
                          <h3 className="text-center text-lg font-medium text-[#1B3D69] mb-3">Media Analytics</h3>
                          <p className="text-sm text-gray-700">
                            Media analytics platforms can be used to monitor audience engagement with content and understand viewing patterns of the customer. The insights can be leveraged to build customer loyalty programs. The solution also provides recommendation engine for better customer experience.
                          </p>
                        </div>
                        
                        <div className="bg-gray-200 p-6 rounded-md min-w-[300px] md:min-w-[350px]">
                          <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">
                              <span className="text-white font-bold">Icon</span>
                            </div>
                          </div>
                          <h3 className="text-center text-lg font-medium text-[#1B3D69] mb-3">Media Analytics</h3>
                          <p className="text-sm text-gray-700">
                            Media analytics platforms can be used to monitor audience engagement with content and understand viewing patterns of the customer. The insights can be leveraged to build loyalty programs and improve content recommendations.
                          </p>
                        </div>
                        
                        {/* Duplicate cards for continuous carousel */}
                        <div className="bg-gray-200 p-6 rounded-md min-w-[300px] md:min-w-[350px]">
                          <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">
                              <span className="text-white font-bold">Icon</span>
                            </div>
                          </div>
                          <h3 className="text-center text-lg font-medium text-[#1B3D69] mb-3">Media Analytics</h3>
                          <p className="text-sm text-gray-700">
                            Media analytics platforms can be used to monitor audience engagement with content. The insights can be leveraged to build customer loyalty programs. The solution also provides recommendation engine to suggest movies and programs based on user's viewing history and preferences.
                          </p>
                        </div>
                        
                        <div className="bg-gray-200 p-6 rounded-md min-w-[300px] md:min-w-[350px]">
                          <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">
                              <span className="text-white font-bold">Icon</span>
                            </div>
                          </div>
                          <h3 className="text-center text-lg font-medium text-[#1B3D69] mb-3">Media Analytics</h3>
                          <p className="text-sm text-gray-700">
                            Media analytics platforms can be used to monitor audience engagement with content and understand viewing patterns of the customer. The insights can be leveraged to build customer loyalty programs. The solution also provides recommendation engine for better customer experience.
                          </p>
                        </div>
                        
                        <div className="bg-gray-200 p-6 rounded-md min-w-[300px] md:min-w-[350px]">
                          <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-gray-400 flex items-center justify-center">
                              <span className="text-white font-bold">Icon</span>
                            </div>
                          </div>
                          <h3 className="text-center text-lg font-medium text-[#1B3D69] mb-3">Media Analytics</h3>
                          <p className="text-sm text-gray-700">
                            Media analytics platforms can be used to monitor audience engagement with content and understand viewing patterns of the customer. The insights can be leveraged to build loyalty programs and improve content recommendations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        
    <Footer/>
    </main>
    </>
  )
}

// Add CSS for the carousel animation
const carouselStyles = `
  @keyframes feature-carousel {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = carouselStyles;
  document.head.appendChild(styleElement);
}

export default media