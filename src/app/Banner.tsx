import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* Banner Image */}
      <div className="absolute inset-0">
        <Image 
          src="" 
          alt="SSPL Banner" 
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          className="z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>
      
      {/* Content can be added here */}
      <div className="relative z-20 container mx-auto h-full flex items-center px-4 md:px-6 lg:px-8 xl:px-16">
        {/* Banner content can go here */}
      </div>
    </div>
  );
};

export default Banner;
