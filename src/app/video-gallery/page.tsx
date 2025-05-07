'use client';

import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PageBanner from '../components/PageBanner';
import Image from 'next/image';

// Sample video data
const videoData = [
  {
    id: 1,
    title: 'Approach to Advance Analytics by Manish Seth',
    description: 'This video covers the insights and case studies on using Advance Analytics for Managing Cyber Security and Compliance Challenges in the Telecom Industry.',
    thumbnail: '/images/videos/thumbnail1.jpg',
    youtubeId: 'example1'
  },
  {
    id: 2,
    title: 'Cybersecurity and Continuous Audit Analytics by Mr. Manish Seth',
    description: 'This video shares the insights and case studies on using Cybersecurity and Continuous Audit Analytics for Managing Cyber Security and Compliance Challenges.',
    thumbnail: '/images/videos/thumbnail2.jpg',
    youtubeId: 'example2'
  },
  {
    id: 3,
    title: 'Cybersecurity and Continuous Audit Analytics by Mr. Manish Seth',
    description: 'An in-depth look at how Continuous Audit Analytics can transform your cybersecurity posture and ensure regulatory compliance.',
    thumbnail: '/images/videos/thumbnail3.jpg',
    youtubeId: 'example3'
  },
  {
    id: 4,
    title: 'Approach to Advance Analytics by Manish Seth',
    description: 'This video covers the insights and case studies on using Advance Analytics for Managing Cyber Security and Compliance Challenges in the Telecom Industry.',
    thumbnail: '/images/videos/thumbnail4.jpg',
    youtubeId: 'example4'
  },
  {
    id: 5,
    title: 'Cybersecurity and Continuous Audit Analytics by Mr. Manish Seth',
    description: 'This video shares the insights and case studies on using Cybersecurity and Continuous Audit Analytics for Managing Cyber Security and Compliance Challenges.',
    thumbnail: '/images/videos/thumbnail5.jpg',
    youtubeId: 'example5'
  },
  {
    id: 6,
    title: 'Cybersecurity and Continuous Audit Analytics by Mr. Manish Seth',
    description: 'An in-depth look at how Continuous Audit Analytics can transform your cybersecurity posture and ensure regulatory compliance.',
    thumbnail: '/images/videos/thumbnail6.jpg',
    youtubeId: 'example6'
  },
  {
    id: 7,
    title: 'Approach to Advance Analytics by Manish Seth',
    description: 'This video covers the insights and case studies on using Advance Analytics for Managing Cyber Security and Compliance Challenges in the Telecom Industry.',
    thumbnail: '/images/videos/thumbnail7.jpg',
    youtubeId: 'example7'
  },
  {
    id: 8,
    title: 'Cybersecurity and Continuous Audit Analytics by Mr. Manish Seth',
    description: 'This video shares the insights and case studies on using Cybersecurity and Continuous Audit Analytics for Managing Cyber Security and Compliance Challenges.',
    thumbnail: '/images/videos/thumbnail8.jpg',
    youtubeId: 'example8'
  },
  {
    id: 9,
    title: 'Cybersecurity and Continuous Audit Analytics by Mr. Manish Seth',
    description: 'An in-depth look at how Continuous Audit Analytics can transform your cybersecurity posture and ensure regulatory compliance.',
    thumbnail: '/images/videos/thumbnail9.jpg',
    youtubeId: 'example9'
  }
];

const VideoGallery = () => {
  const [visibleVideos, setVisibleVideos] = useState(6);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const loadMoreVideos = () => {
    setVisibleVideos(prev => Math.min(prev + 3, videoData.length));
  };
  
  const openVideo = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
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
        <PageBanner 
          backgroundImage="/images/about/banner.png"
          title="Video Gallery"
        />
        
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {videoData.slice(0, visibleVideos).map((video) => (
                <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video cursor-pointer group" onClick={() => openVideo(video.youtubeId)}>
                    <Image 
                      src={video.thumbnail} 
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {visibleVideos < videoData.length && (
              <div className="flex justify-center mt-12">
                <button 
                  onClick={loadMoreVideos}
                  className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-md hover:scale-105 transition-transform duration-300 font-medium"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>
        
        <Footer/>
      </main>
      
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={closeVideo}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={closeVideo}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGallery;