'use client'

import React, { useState, useEffect } from 'react';

const OfficeLocations = () => {
  const [currentTime, setCurrentTime] = useState({
    india: '',
    middleEast: ''
  });

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      // India time (UTC+5:30)
      const indiaTime = new Date();
      indiaTime.setHours(indiaTime.getHours());
      indiaTime.setMinutes(indiaTime.getMinutes());
      
      // Bahrain time (UTC+3)
      const bahrainTime = new Date();
      bahrainTime.setHours(bahrainTime.getHours() - 2); // 2.5 hours behind India
      bahrainTime.setMinutes(bahrainTime.getMinutes() - 30);

      setCurrentTime({
        india: indiaTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
        middleEast: bahrainTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
      });
    };

    // Update time immediately and then every minute
    updateTime();
    const intervalId = setInterval(updateTime, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const offices = [
    {
      country: 'INDIA',
      time: currentTime.india,
      address: 'M-91, 1st. Floor, Connaught Circus, New Delhi - 110001',
      email: 'info@sspl.net.in',
      tel: '+91-11-23765368',
      mobile: '+91-98101 02927',
      fax: '+91-11-43565927',
      cin: 'U72300DL2008PTC182090'
    },
    {
      country: 'MIDDLE EAST',
      time: currentTime.middleEast,
      address: 'Bahrain Financial Harbour, East Tower, 3420, 34th Floor, Building 1398, Road No.4626, Block No. 346, Bahrain',
      email: 'info@ssplme.com',
      tel: '+973-13622552',
      mobile: '+973-3889 2927',
      cr: '120861-1'
    }
  ];

  return (
    <div className="bg-white pt-8 sm:pt-10 md:pt-12 lg:pt-16">
      <div className="flex flex-col md:flex-row font-comfortaa">
        {/* Left sidebar - hidden on mobile, visible on md and up */}
        <div className="hidden md:block w-[80px] relative">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200 md:ml-[220px] lg:ml-[480px]"></div>
          <div className="absolute left-0 top-8 w-[3px] h-6 bg-gray-800 ml-8"></div>
          <div className="pl-12 pt-8">
            <button className="text-gray-700 text-sm hover:text-blue-600 transition-colors whitespace-nowrap">
              Our offices
            </button>
          </div>
        </div>
        
        {/* Mobile title - visible only on mobile */}
        <div className="block md:hidden px-6 py-4">
          <h2 className="text-gray-700 text-lg font-medium">Our offices</h2>
          <div className="w-12 h-[2px] bg-gray-800 mt-2"></div>
        </div>
        
        <div className="flex-1 px-6 md:px-0 md:pl-[240px] lg:pl-[500px] md:pr-2 lg:pr-16 py-6 md:py-8 lg:py-12 overflow-x-hidden">
          <div className="max-w-4xl">
            {offices.map((office, index) => (
              <div key={index} className="border-t border-gray-200 mb-6 first:border-t-0 first:pt-0">
                <div className="flex flex-col md:flex-col lg:flex-row md:items-start lg:items-center py-6 border-b border-gray-100 w-full">
                  {/* Time - Hidden on mobile */}
                  <div className="hidden lg:flex items-center text-gray-400 w-36">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs">{office.time || 'Loading...'}</span>
                  </div>
                  
                  {/* Country */}
                  <div className="w-full md:w-full lg:w-64 mb-4 md:mb-4 lg:mb-0">
                    <h2 className="text-2xl md:text-2xl lg:text-3xl text-black font-medium">{office.country}</h2>
                  </div>
                  
                  {/* Address and Contact Info */}
                  <div className="flex-1 md:pl-0 lg:pl-24 text-left">
                    <div className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      <p className="mb-2">{office.address}</p>
                      <p className="mb-2">Mail ID - <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">{office.email}</a></p>
                      {office.tel && <p className="mb-2">Tel : {office.tel}</p>}
                      {office.mobile && <p className="mb-2">Mobile: {office.mobile}</p>}
                      {office.fax && <p className="mb-2">Fax : {office.fax}</p>}
                      {office.cin && <p className="mb-2">CIN: {office.cin}</p>}
                      {office.cr && <p className="mb-2">CR: {office.cr}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;
