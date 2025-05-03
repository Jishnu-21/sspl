'use client'
import React from 'react';

const WhyChooseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="rounded-lg overflow-hidden shadow-xl" style={{ backgroundColor: '#1B3D69' }}>
          <div className="flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 md:p-16 lg:p-24">
            <div className="w-full md:w-2/5 mb-8 md:mb-0 md:pl-0 lg:pl-6 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white md:whitespace-nowrap leading-tight">Why choose SSPL?</h2>
            </div>
            
            <div className="w-full md:w-1/3 px-4 md:pr-8">
              <div className="bg-[#1B3D64] p-6 sm:p-8 rounded-md shadow-lg md:h-[320px] flex flex-col justify-center">
                <div className="text-white">
                  <div className="flex items-start">
                    <div className="mr-2 font-medium text-lg sm:text-xl font-poppins leading-tight">1.</div>
                    <div className="flex-1">
                      <p className="text-lg sm:text-xl font-medium leading-tight mb-2 font-poppins">
                        Award-Winning Expertise –
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed font-comfortaa">
                        Recognised as the Best Big Data Analytics Solution Company by WQPC, 
                        SSPL has a proven track record of delivering cutting-edge analytics 
                        solutions. Our expertise spans multiple industries, helping 
                        businesses transform raw data into actionable insights for smarter 
                        decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
