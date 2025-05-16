"use client"

import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Header from '@/app/Header'
import Image from 'next/image'
import React from 'react'
import VideoGallery, { VideoItem } from '@/app/components/VideoGallery'
import PartnersScroll, { PartnerItem } from '@/app/components/PartnersScroll'
import DashboardGrid from '@/app/components/DashboardGrid'
import { FaExclamationTriangle, FaUniversity, FaUserTie, FaSearch, FaMoneyCheckAlt, FaFileInvoiceDollar } from 'react-icons/fa'

const fraudManagement = () => {
  // Sample videos for the video gallery
  const fraudVideos: VideoItem[] = [
    {
      thumbnailSrc: "/images/services/fraud-video-1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      title: "Fraud Detection Systems",
      description: "Learn about modern fraud detection systems and how they protect businesses."
    },
    {
      thumbnailSrc: "/images/services/fraud-video-2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      title: "AI in Fraud Prevention",
      description: "How artificial intelligence is revolutionizing fraud prevention strategies."
    },
    {
      thumbnailSrc: "/images/services/fraud-video-3.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      title: "Real-time Fraud Monitoring",
      description: "Discover the benefits of real-time monitoring for fraud detection."
    }
  ];

  // Define fraud management areas for the PartnersScroll component
  const fraudAreas: PartnerItem[] = [
    {
      imageSrc: "/images/partners/baystate-health.png",
      imageAlt: "Baystate Health",
      caption: "Transaction Monitoring"
    },
    {
      imageSrc: "/images/partners/baystate-health.png",
      imageAlt: "Baystate Health",
      caption: "Identity Verification"
    },
    {
      imageSrc: "/images/partners/baystate-health.png",
      imageAlt: "Baystate Health",
      caption: "Anomaly Detection"
    },
    {
      imageSrc: "/images/partners/baystate-health.png",
      imageAlt: "Baystate Health",
      caption: "Behavioral Analytics"
    },
    {
      imageSrc: "/images/partners/baystate-health.png",
      imageAlt: "Baystate Health",
      caption: "Risk Scoring"
    }
  ];

  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header/>
        <PageBanner
          backgroundImage="/images/about/banner.png"
          title="Fraud Management & Detection"
          subtitle="Using Analytics to Protect Yourself"
        />
        
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-2">
            <div className="max-w-4xl mx-auto text-center mb-2">
              <h2 className="text-2xl font-semibold text-[#366A00] mb-6 whitespace-nowrap">Data Analytics for FCPA Compliance</h2>
              <p className="text-gray-700 leading-relaxed">
              The Foreign Corrupt Practices Act (FCPA) should not be taken lightly. But compliance can be tricky. The global business environment includes many international, centralized and decentralized companies. Individuals often operate in countries where bribes and payoffs have historically been a routine part of doing business. When languages and business cultures vary to a large degree, it can be extremely difficult to keep tabs on the operations.      
             </p>
              <p className="text-gray-700 leading-relaxed">
              A key tool for avoiding FCPA difficulties is Data Analysis. The truth is held in the data, because that’s where a company’s conduct is recorded. The rows and columns of data often speak volumes about what is truly going on inside the business.             </p>
            </div>
          </div>
        </section>
        
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        
        {/* Key Fraud Management Capabilities */}
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Using Analytics to Protect Yourself</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Image */}
            <div className="mb-8 flex justify-center">
              <Image 
                src="/images/services/fraud1.jpg" 
                alt="Fraud Analytics Dashboard" 
                width={600} 
                height={350}
                className="rounded-md"
              />
            </div>
            
            {/* Text content */}
            <div className="text-center">
              <p className="text-gray-700 leading-relaxed mb-6">
              Departments such as internal audit and compliance can play a critical role in FCPA compliance by implementing effective monitoring techniques. This shines a light on potential violations and helps develop a culture in which employees know their activities will be reviewed for possible ethical breaches. 
             </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
              One way to monitor for FCPA violations is through use of data analytics, which allow for complete, comprehensive testing of all corporate transactions. Companies can meet FCPA accounting provisions by employing assureBI to repeatedly test the effectiveness of internal controls and highlight specific transactions that appear suspicious.              
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
              Departments such as internal audit and compliance can play a critical role in FCPA compliance by implementing effective monitoring techniques. This shines a light on potential violations and helps develop a culture in which employees know their activities will be reviewed for possible ethical breaches.
              One way to monitor for FCPA violations is through use of data analytics, which allow for complete, comprehensive testing of all corporate transactions. Companies can meet FCPA accounting provisions by employing assureBI to repeatedly test the effectiveness of internal controls and highlight specific transactions that appear suspicious.
              When it comes to bribery provisions, data analysis solutions can quickly and easily identify red flags and provide an invaluable early warning system. Software programs can uncover the following key elements:
              </p>
              
              {/* Fraud Detection Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Item 1 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaExclamationTriangle className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Payments to risky vendors, including government contractors and parties on government watch lists
                  </p>
                </div>
                
                {/* Item 2 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaUniversity className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Payments made from foreign bank accounts
                  </p>
                </div>
                
                {/* Item 3 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaUserTie className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Use of new attorneys, accountants, consultants or people from other professions with no prior relationship to the company
                  </p>
                </div>
                
                {/* Item 4 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaSearch className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Missing descriptions or suspicious payment keywords, such as "for services rendered," "gifts," or "facilitation"
                  </p>
                </div>
                
                {/* Item 5 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaMoneyCheckAlt className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Checks made out to "cash"
                  </p>
                </div>
                
                {/* Item 6 */}
                <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
                  <div className="mb-4 w-20 h-20 rounded-full bg-[#a4ce4e] flex items-center justify-center">
                    <FaFileInvoiceDollar className="text-white text-3xl" />
                  </div>
                  <p className="text-center text-gray-700">
                    Payments classified as government expenses, made in cash, or written to an individual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DashboardGrid/>

        {/* Video Resources */}
        <VideoGallery 
          videos={fraudVideos}
        />
        
        <Footer/>   
      </main>
    </>
  )
}

export default fraudManagement