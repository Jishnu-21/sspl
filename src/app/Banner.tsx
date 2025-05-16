'use client'

import React from 'react';

const Banner = () => {
  return (
    <>
      {/* Banner Section with Video Background */}
      <section className="relative mt-[110px] min-h-[calc(100vh-110px)] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            src="/videos/home-banner.webm" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute top-0 left-0 w-full h-full"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'fill' 
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
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
