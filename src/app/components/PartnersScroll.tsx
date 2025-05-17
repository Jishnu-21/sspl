"use client"

import React from 'react'
import Image from 'next/image'
import { IconType } from 'react-icons'

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
  return (
    <section className={`py-16 mb-16 w-full overflow-hidden`} style={{ backgroundColor }}>
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#366A00]">{title}</h2>
        </div>
      )}
      <div className="relative w-full">
        {/* Left shadow indicator */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F8F8F8] to-transparent z-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, ${backgroundColor}, transparent)` }}></div>
        
        {/* Scrollable container */}
        <div className="overflow-x-auto pb-6 hide-scrollbar">
          <div className="flex gap-12 min-w-max px-8 md:px-16 py-4">
            {items.map((item, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col items-center">
                <div className="bg-white p-4 rounded-md shadow-sm w-[280px] h-[160px] flex items-center justify-center mb-4">
                  <div className="text-center">
                    {item.useIcon && item.icon ? (
                      <div className="w-24 h-24 rounded-full bg-[#a4ce4e] flex items-center justify-center mx-auto">
                        {React.createElement(item.icon, { className: "text-white text-4xl" })}
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
                <p className="text-base font-semibold text-[#1B3D69] text-center">{item.caption}</p>
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
