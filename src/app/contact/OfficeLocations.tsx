import React from 'react';

const OfficeLocations = () => {
  const offices = [
    {
      country: 'INDIA',
      time: '00:06',
      address: 'M-91, Connaught Circus, New Delhi - 110001',
      email: 'info@sspl.net.in',
      tel: '+91-11-23765368',
      mobile: '+91-9818602927',
      fax: '+91-11-43565927'
    },
    {
      country: 'MIDDLE EAST',
      time: '00:06',
      address: 'Flat No.33, Building No.114, Road No.383, Block No.316,\nManama Centre, Manama, Bahrain',
      email: 'admin@sspl.com',
      mobile: '+973-3889 5927 (Nishith Seth), +973-3920 6169 (BVS Prathap)'
    }
  ];

  return (
    <div className="bg-white pt-16">
      <div className="flex font-comfortaa">
        <div className="w-[80px] relative">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200 ml-[480px]"></div>
          <div className="absolute left-0 top-8 w-[3px] h-6 bg-gray-800 ml-8"></div>
          <div className="pl-12 pt-8">
            <button className="text-gray-700 text-sm hover:text-blue-600 transition-colors whitespace-nowrap">
              Our offices
            </button>
          </div>
        </div>
        <div className="flex-1 pl-[500px] pr-16 py-12">
          <div className="max-w-4xl">
            {offices.map((office, index) => (
              <div key={index} className="border-t border-gray-200 mb-6 first:border-t-0 first:pt-0">
                <div className="flex items-center py-6 border-b border-gray-100 w-full">
                  {/* Time */}
                  <div className="flex items-center text-gray-400 w-24">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs">{office.time}</span>
                  </div>
                  
                  {/* Country */}
                  <div className="w-64">
                    <h2 className="text-3xl text-black font-medium">{office.country}</h2>
                  </div>
                  
                  {/* Address and Contact Info */}
                  <div className="flex-1 pl-24 text-left">
                    <div className="text-sm text-gray-600 leading-relaxed">
                      <p>{office.address}</p>
                      <p>Mail ID - <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">{office.email}</a></p>
                      {office.tel && <p>Tel : {office.tel}</p>}
                      {office.mobile && <p>Mobile: {office.mobile}</p>}
                      {office.fax && <p>Fax : {office.fax}</p>}
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
