'use client';

import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ShortPageBanner from '../components/ShortPageBanner';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Helper function to extract YouTube video ID from URL
const extractYoutubeId = (url: string) => {
  if (!url) return '';
  
  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[2].length === 11) ? match[2] : '';
};

// Sample video data
const videoData = [
  {
    id: 1,
    title: 'Approach to Advance Analytics Nishith Seth',
    youtubeId: 'https://www.youtube.com/watch?v=Wd5mTDaRe0Y'
  },
  {
    id: 2,
    title: 'HR Analytics by Mr.Nishith Seth',
    youtubeId: 'https://youtu.be/aoanfoqAXaw'
  },
  {
    id: 3,
    title: 'Cybersecurity and Continuous Audit Analytics Nishith Seth',
    description: 'An in-depth look at how Continuous Audit Analytics can transform your cybersecurity posture and ensure regulatory compliance.',
    youtubeId: 'https://youtu.be/pk1JJbMAG7g'
  },
  {
    id: 4,
    title: 'ASSOCHAM International Conference 7 May 2021 Presentation by Mr. Nishith Seth',
    youtubeId: 'https://youtu.be/tmKpWjcs9PM'
  },
  {
    id: 5,
    title: 'Panel Discussion on moving from traditional to tech based practice by Mr. Nishith Seth',
    description: 'This is a Panel Discussion on transformation of Traditional Practice to Technology driven, using Advance Analytics, thoughts exchanged by Mr. Nishith Seth, MD, SSPL.',
    youtubeId: 'https://youtu.be/wcpDVJvpKeU'
  },
  {
    id: 6,
    title: 'Simplify Your Fuzzy Duplicates Testing',
    description: 'Using advance analytics capabilities of Analyzer Tool of Arbutus Software, in a simplest form to manage a complex analytics issue of Fuzzy Duplicate. You shall hear and see the demo from the best in the Analytics Industry, Mr. Michael Kano.',
    youtubeId: 'https://youtu.be/Q7xP7vE3MsY'
  },
  {
    id: 7,
    title: 'SSPL Arabic ChatBOT Solution',
    description: 'SSPL has developed a Arabic Language ChatBOT, its a demo of the same.',
    youtubeId: 'https://youtu.be/plVs10a35b8'
  },
  {
    id: 8,
    title: 'SSPL Document RPA Solution',
    description: 'SSPL has launched it\'s Document RPA to generate the output with required information from the documents for the user to analyze the document much easily and going through the details is not required, its a demo of the same',
    youtubeId: 'https://youtu.be/2kt8U339f3A'
  },
  {
    id: 9,
    title: 'What SSPL Does',
    description: 'This videos introduces to the various Industrial Sectors served by SSPL Solutions and Services.',
    youtubeId: 'https://youtu.be/XFoWnIpHLbI'
  },
  {
    id: 10,
    title: 'Fraud Ethics & Morals, Mr P R Ramesh, Chairman, Deloitte, India',
    description: 'Mr. P. R. Ramesh, has shared a very practical approach to the sensitive topic of Fraud and Ethics. With his vast exposure, its a worth listening presentation, which shall enrich you on the said subject matter.',
    youtubeId: 'https://youtu.be/1sxhbXn92Q8'
  },
  {
    id: 11,
    title: 'Confused & Repetition not fit for Fraud Detection by Uday Khanna, President, BCCI',
    description: 'Presentation by Mr. Uday Khanna, President of Bombay Chamber of Commerce & Industry, on Confused & Repetition & doesnt seem an appropriate fit for the fraud detection. His contents are from his vast experience from the Industry.',
    youtubeId: 'https://youtu.be/e0SnUF6X-ts'
  },
  {
    id: 12,
    title: 'Soft Fraud in Life Insurance by Dr. P. Nandagopal, Managing Director, India First Life Insurance',
    description: 'Practical issues faced by the Insurance Sector in managing Fraud. Its worth listening as it has lots of practical exposure and information.',
    youtubeId: 'https://youtu.be/_XyWrpZQgKg'
  },
  {
    id: 13,
    title: 'SSPL: Analyzer Demo by Nishith Seth',
    description: 'This is a Introductory Level Demo of the Analyzer Tool by Mr. Nishith Seth. It explains the most commonly used features and important capabilities of the Tool.',
    youtubeId: 'https://youtu.be/tTYacqLVZFw'
  },
  {
    id: 14,
    title: 'Computer Forensic & Cyber Crimes by Mr. Nandkumar Saravade.',
    youtubeId: 'https://youtu.be/UR8K1WCGMjU'
  },
  {
    id: 15,
    title: 'Introductory Demo of Analyzer Tool by Nishith Seth',
    description: 'The video demonstrates the basic features and unique technical enhancements of Analyzer Tool by Nishith Seth.',
    youtubeId: 'https://youtu.be/9H2nSz7492w'
  },
  {
    id: 16,
    title: 'Managing Risk & Fraud from IA Perspective by Mr. Kallol Kundu',
    description: 'The video explains the Fraud Management from the perspective of an Internal Auditor. Its being explained with examples by Mr. Kallol Kundu, Group Internal Auditor, EIH Limited.',
    youtubeId: 'https://youtu.be/NHOn1QRYOZo'
  },
  {
    id: 17,
    title: 'Risk & Fraud Management by Mr. Amit Bansal, Partner, Deloitte',
    youtubeId: 'https://youtu.be/prqBqiPAtqQ'
  },
  {
    id: 18,
    title: 'Why Current Fraud Management Framework Fails by Mr. V. Swaminathan and Mr. Burzin Dubash',
    description: 'Panel Discussion to understand the reasons why current systems, framework is failing to control and alert frauds in timely manner.',
    youtubeId: 'https://youtu.be/dyTiiRq8vA8'
  },
  {
    id: 19,
    title: 'Panel Discussion on Predictive Analytics by Mr. V. Swaminathan.',
    description: 'Panel Discussion on the importance of Predictive Analytics to manage, improve and govern business better.',
    youtubeId: 'https://youtu.be/W-h1MXOjAr4'
  },
  {
    id: 20,
    title: 'Panel Discussion on Corporate Framework to Manage Frauds by Mr. Burzin Dubash.',
    description: 'Panel Discussion on Corporate Frameworks to Manage Frauds, they trends and Corporate response.',
    youtubeId: 'https://youtu.be/2hZpOLwHYHI'
  },
  {
    id: 21,
    title: 'Panel Discussion on Financial Cyber Crimes by Mr. V. Swaminathan.',
    description: 'Panel Discussion on how can Technology help to manage, control and monitor prospective financial cyber crimes. Mr. Swaminathan shared his case study.',
    youtubeId: 'https://youtu.be/ujvBBV5m3tk'
  },
  {
    id: 22,
    title: 'Panel Discussion on Cyber Criminology and Forensic by Mr. Alok Gupta',
    description: 'Panel Discussion on the latest trends on Cyber Crime and Forensic challenges faced by the Corporate and Public at large.',
    youtubeId: 'https://youtu.be/PpL3adU0YaM'
  },
  {
    id: 23,
    title: 'Training on Big Data Analytics by Mr. Nishith Seth.',
    youtubeId: 'https://youtu.be/MHNC4LXcdCM'
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  const openVideo = (youtubeId: string) => {
    const videoId = extractYoutubeId(youtubeId);
    setSelectedVideo(videoId);
    document.body.style.overflow = 'hidden';
  };
  
  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <>
      <main className="flex flex-col bg-white min-h-screen">
        <Header/>
        <ShortPageBanner 
          backgroundImage="/images/video gallery.png"
          title="Video Gallery"
        />
        
        <section className="py-10 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-5 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8" data-aos="fade-up">
              {videoData.map((video, idx) => {
                const videoId = extractYoutubeId(video.youtubeId);
                return (
                  <div
                    key={video.id}
                    className="bg-[#1B3D69] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-[#366a00] transform hover:scale-105 transition-transform"
                    data-aos="fade-up"
                    data-aos-delay={idx * 60}
                  >
                    <div className="relative aspect-video cursor-pointer group shadow-sm hover:shadow-md transition-shadow duration-300" onClick={() => openVideo(video.youtubeId)}>
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
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 line-clamp-2">{video.title}</h3>
                      <p className="text-xs sm:text-sm text-white line-clamp-2 sm:line-clamp-3">{video.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        <Footer/>
      </main>
      
      {/* Video Modal */}
      {selectedVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2 sm:p-4" 
          onClick={closeVideo}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            className="relative w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-8 sm:-top-10 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default VideoGallery;