"use client"

import PageBanner from '@/app/components/PageBanner'
import Footer from '@/app/Footer'
import Header from '@/app/Header'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaExclamationTriangle, FaUniversity, FaUserTie, FaSearch, FaMoneyCheckAlt, FaFileInvoiceDollar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import DownloadBrochureButton from '@/app/components/DownloadBrochureButton'
import ScheduleDemo from '@/app/products/ScheduleDemo'

const FraudManagement = () => {
  // Helper function to extract YouTube video ID from URL
  const extractYoutubeId = (url: string) => {
    if (!url) return '';
    
    // Handle different YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : '';
  };

  // Sample videos for the video gallery
  const fraudVideos = [
    {
      id: 1,
      title: "Panel Discussion on Corporate Framework to Manage Frauds by Mr. Burzin Dubash.",
      youtubeId: "https://youtu.be/2hZpOLwHYHI"
    },
    {
      id: 2,
      title: "Why Current Fraud Management Framework Fails by Mr. V. Swaminathan and Mr. Burzin Dubash",
      youtubeId: "https://youtu.be/dyTiiRq8vA8"
    },
    {
      id: 3,
      title: " Panel Discussion on Cyber Criminology and Forensic by Mr. Alok Gupta",
      youtubeId: "https://youtu.be/PpL3adU0YaM"
    }
  ];
  
  // State for video modal
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  // Functions to handle video modal
  const openVideo = (youtubeId: string) => {
    const videoId = extractYoutubeId(youtubeId);
    setSelectedVideo(videoId);
    document.body.style.overflow = 'hidden';
  };
  
  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  // Define fraud management areas for the PartnersScroll component
  
  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header/>
        <PageBanner
          backgroundImage="/images/services/banners/fmd.png"
          title="Fraud Management & Detection"
          bannerKey='fraud-management'
        />
        
        <motion.section
          className="py-4 px-4 md:px-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-2">
            <div className="max-w-6xl mx-auto text-center mb-2">
              <h2 className="text-2xl font-semibold text-[#366A00] mb-6 whitespace-nowrap">Data Analytics for FCPA Compliance</h2>
              <p className="text-gray-700 text-justify leading-relaxed">
              The Foreign Corrupt Practices Act (FCPA) should not be taken lightly. But compliance can be tricky. The global business environment includes many international, centralized and decentralized companies. Individuals often operate in countries where bribes and payoffs have historically been a routine part of doing business. When languages and business cultures vary to a large degree, it can be extremely difficult to keep tabs on the operations.      
             </p>
              <p className="text-gray-700 text-justify leading-relaxed mb-6">
              A key tool for avoiding FCPA difficulties is Data Analysis. The truth is held in the data, because that's where a company's conduct is recorded. The rows and columns of data often speak volumes about what is truly going on inside the business.             </p>
            </div>
            <DownloadBrochureButton pdfPath="/pdfs/assureBI_fraud-detection.pdf" />
          </div>
        </motion.section>
        
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        
        {/* Key Fraud Management Capabilities */}
        <motion.section
          className="py-4 px-4 md:px-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-0">
            <h2 className="text-2xl font-semibold text-[#366A00] mb-6">Using Analytics to Protect Yourself</h2>
          </div>
          
          <div className="max-w-6xl mx-auto mb-0">
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
              <p className="text-gray-700 text-justify leading-relaxed mb-6">
              Departments such as internal audit and compliance can play a critical role in FCPA compliance by implementing effective monitoring techniques. This shines a light on potential violations and helps develop a culture in which employees know their activities will be reviewed for possible ethical breaches. 
             </p>
              
              <p className="text-gray-700 text-justify leading-relaxed mb-6">
              One way to monitor for FCPA violations is through use of data analytics, which allow for complete, comprehensive testing of all corporate transactions. Companies can meet FCPA accounting provisions by employing assureBI to repeatedly test the effectiveness of internal controls and highlight specific transactions that appear suspicious.              
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed mb-4">
              Departments such as internal audit and compliance can play a critical role in FCPA compliance by implementing effective monitoring techniques. This shines a light on potential violations and helps develop a culture in which employees know their activities will be reviewed for possible ethical breaches.
              One way to monitor for FCPA violations is through use of data analytics, which allow for complete, comprehensive testing of all corporate transactions. Companies can meet FCPA accounting provisions by employing assureBI to repeatedly test the effectiveness of internal controls and highlight specific transactions that appear suspicious.
              When it comes to bribery provisions, data analysis solutions can quickly and easily identify red flags and provide an invaluable early warning system. Software programs can uncover the following key elements:
              </p>
              
              {/* Fraud Detection Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mb-0 pt-0 sm:pt-6">
                {/* Item 1 */}
                <div className="bg-[#1B3D69] p-4 sm:p-8 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#366A00] group" data-aos="zoom-in">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                      <FaExclamationTriangle className="text-[#1B3D69] text-3xl transition-colors duration-300 group-hover:text-[#366A00]" />
                    </div>
                  </div>
                  <p className="text-white text-center  group-hover:text-white transition-colors duration-300">
                    Payments to risky vendors, including government contractors and parties on government watch lists
                  </p>
                </div>
                {/* Item 2 */}
                <div className="bg-[#1B3D69] p-4 sm:p-8 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#366A00] group" data-aos="zoom-in" data-aos-delay="100">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                      <FaUniversity className="text-[#1B3D69] text-3xl transition-colors duration-300 group-hover:text-[#366A00]" />
                    </div>
                  </div>
                  <p className="text-white text-center  group-hover:text-white transition-colors duration-300">
                    Payments made from foreign bank accounts
                  </p>
                </div>
                {/* Item 3 */}
                <div className="bg-[#1B3D69] p-4 sm:p-8 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#366A00] group" data-aos="zoom-in" data-aos-delay="200">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                      <FaUserTie className="text-[#1B3D69] text-3xl transition-colors duration-300 group-hover:text-[#366A00]" />
                    </div>
                  </div>
                  <p className="text-white  text-center group-hover:text-white transition-colors duration-300">
                    Use of new attorneys, accountants, consultants or people from other professions with no prior relationship to the company
                  </p>
                </div>
                {/* Item 4 */}
                <div className="bg-[#1B3D69] p-4 sm:p-8 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#366A00] group" data-aos="zoom-in" data-aos-delay="300">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                      <FaSearch className="text-[#1B3D69] text-3xl transition-colors duration-300 group-hover:text-[#366A00]" />
                    </div>
                  </div>
                  <p className="text-white text-center group-hover:text-white transition-colors duration-300">
                    Missing descriptions or suspicious payment keywords, such as "for services rendered," "gifts," or "facilitation"
                  </p>
                </div>
                {/* Item 5 */}
                <div className="bg-[#1B3D69] p-4 sm:p-8 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#366A00] group" data-aos="zoom-in" data-aos-delay="400">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                      <FaMoneyCheckAlt className="text-[#1B3D69] text-3xl transition-colors duration-300 group-hover:text-[#366A00]" />
                    </div>
                  </div>
                  <p className="text-white  text-center group-hover:text-white transition-colors duration-300">
                    Checks made out to "cash"
                  </p>
                </div>
                {/* Item 6 */}
                <div className="bg-[#1B3D69] p-4 sm:p-8 rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#366A00] group" data-aos="zoom-in" data-aos-delay="500">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                      <FaFileInvoiceDollar className="text-[#1B3D69] text-3xl transition-colors duration-300 group-hover:text-[#366A00]" />
                    </div>
                  </div>
                  <p className="text-white text-center group-hover:text-white transition-colors duration-300">
                    Payments classified as government expenses, made in cash, or written to an individual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Video Resources */}
        <section
          className="px-4 lg:mt-4  md:px-8 max-w-7xl mx-auto  pt-0"
        >
          <h2 className="text-2xl font-semibold text-[#366A00] lg:mb-4 text-center">Video Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {fraudVideos.map((video) => {
              const videoId = extractYoutubeId(video.youtubeId);
              return (
                <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video cursor-pointer group" onClick={() => openVideo(video.youtubeId)}>
                    <Image 
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        // Fallback to medium quality thumbnail if high quality is not available
                        const target = e.target as HTMLImageElement;
                        target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                      }}
                    />
                    
                    {/* YouTube play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                      <div className="w-16 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.5 7.5V16.5L16.5 12L9.5 7.5Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-2">{video.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeVideo}>
            <div className="relative w-full max-w-4xl aspect-video">
              <button 
                className="absolute -top-10 cursor-pointer right-0 text-white text-xl font-bold p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  closeVideo();
                }}
              >
                Close ×
              </button>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        <ScheduleDemo/>
        <Footer/>   
      </main>
    </>
  )
}

export default FraudManagement