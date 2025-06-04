'use client'

import React, { useEffect, useState, useRef } from 'react';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Banner Section with Video Background */}
      <section className="relative mt-[110px] md:min-h-[calc(100vh-110px)] min-h-[56.25vw] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {isMobile ? (
            <div className="w-full h-full relative" style={{ aspectRatio: '16/9' }}>
              <video 
                ref={videoRef}
                src="/videos/home-banner.webm" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute top-0 left-0 w-full h-full"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ) : (
            <video 
              src="/videos/home-banner.webm" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute top-0 left-0 w-full h-full"
              style={{ objectFit: 'fill' }}
            />
          )}
          {/* Overlay */}
          <div className="absolute inset-0"></div>
        </div>
        
        {/* Banner Content */}
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
          {/* Banner content can go here */}
        </div>
      </section>
    </>
  );
};

export default Banner;
