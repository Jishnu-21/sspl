"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { IconType } from 'react-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

export interface PartnerItem {
  imageSrc?: string;
  imageAlt?: string;
  caption: string;
  icon?: IconType;
  useIcon?: boolean;
}

interface PartnersScrollProps {
  title?: string;
  items: PartnerItem[];
  backgroundColor?: string;
}

const PartnersScroll = ({ 
  title, 
  items, 
  backgroundColor = "#F8F8F8" 
}: PartnersScrollProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [showDragLabel, setShowDragLabel] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setShowDragLabel(false);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };
  const handleMouseLeave = () => {
    setIsDragging(false);
    setShowDragLabel(false);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // scroll-fast
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  const handleMouseEnter = () => {
    setShowDragLabel(true);
  };

  return (
    <section className={`py-4 mb-4 w-full overflow-hidden`} style={{ backgroundColor }} data-aos="fade-up">
      {title && (
        <div className="text-center mb-8 relative z-20">
          <h2 className="text-2xl font-semibold text-[#366A00] ">{title}</h2>
        </div>
      )}
      <div className="relative w-full">
        {/* Left shadow indicator */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F8F8F8] to-transparent z-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, ${backgroundColor}, transparent)` }}></div>
        
        {/* Scrollable container */}
        <div 
          className={`overflow-x-auto pb-6 hide-scrollbar select-none z-10`}
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
        >
          {/* Drag label */}
          {showDragLabel && !isDragging && (
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-2 z-20 transition-all duration-200 opacity-100">
              <div className="px-6 py-2 rounded-full bg-[#1b3d69] text-white font-bold shadow-lg text-base flex items-center gap-2" style={{minWidth:'90px',justifyContent:'center'}}>
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7 10h6M10 7v6" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                Drag
              </div>
            </div>
          )}
          <div className="flex gap-12 min-w-max px-8 md:px-16 py-4">
            {items.map((item, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col items-center group" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="bg-[#e6f0fa] p-4 rounded-md shadow-sm w-[280px] h-[160px] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#366A00]">
                  <div className="text-center">
                    {item.useIcon && item.icon ? (
                      <div className="w-24 h-24 rounded-full bg-[#1B3D69] flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-white">
                        {React.createElement(item.icon, { className: "text-white text-4xl group-hover:text-[#366A00] transition-all duration-300" })}
                      </div>
                    ) : (
                      <Image 
                        src={item.imageSrc || ""} 
                        alt={item.imageAlt || ""} 
                        width={200} 
                        height={100}
                        className="mx-auto"
                      />
                    )}
                  </div>
                </div>
                <p className="text-base font-semibold text-[#1B3D69] text-center transition-colors duration-300 group-hover:text-[#366A00]">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right shadow indicator */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F8F8F8] to-transparent z-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(to left, ${backgroundColor}, transparent)` }}></div>
      </div>
    </section>
  )
}

export default PartnersScroll