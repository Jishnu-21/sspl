import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <>
      {/* Fixed Banner Background */}
      <div className="fixed inset-0 w-full h-screen -z-10">
        <Image 
          src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070&auto=format&fit=crop" 
          alt="SSPL Banner" 
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          className="z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Banner Content Section */}
      <section className="relative min-h-[500px] sm:min-h-[550px] lg:min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
          {/* Banner content can go here */}
        </div>
      </section>
    </>
  );
};

export default Banner;
