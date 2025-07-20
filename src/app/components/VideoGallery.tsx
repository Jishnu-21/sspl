"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface VideoItem {
  thumbnailSrc: string;
  videoUrl: string;
  title?: string;
  description?: string;
}

interface VideoGalleryProps {
  title?: string;
  videos: VideoItem[];
  columns?: 1 | 2 | 3 | 4;
}

const VideoGallery = ({ 
  title = "Video Resources", 
  videos,
  columns = 3
}: VideoGalleryProps) => {
  
  const getGridClass = () => {
    switch(columns) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-1 md:grid-cols-2";
      case 3: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
      default: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };
  
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-2xl font-semibold text-[#366A00] mb-10 text-center">{title}</h2>
        )}
        
        <div className={`grid ${getGridClass()} gap-8`}>
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-video bg-gray-100 mb-4 rounded-md overflow-hidden group">
                <Image 
                  src={video.thumbnailSrc}
                  alt={video.title || `Video thumbnail ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
                
                {/* YouTube play button overlay */}
                <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 7.5V16.5L16.5 12L9.5 7.5Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
              
              {video.title && (
                <h3 className="font-medium text-gray-800 mb-1">{video.title}</h3>
              )}
              
              {video.description && (
                <p className="text-sm text-gray-600">{video.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoGallery
