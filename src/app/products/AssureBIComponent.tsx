'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  icon: React.ReactNode;
  title: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ icon, title }) => {
  return (
    <motion.div 
      className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[140px] cursor-pointer"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#f5f5f5"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-black text-3xl mb-3">
        {icon}
      </div>
      <p className="text-sm font-medium text-black">{title}</p>
    </motion.div>
  );
};

const AssureBIComponent = () => {
  const brochures = [
    {
      id: 1,
      name: 'assureBI',
      icon: '📊',
      file: '/brochures/assurebi-brochure.pdf'
    },
    {
      id: 2,
      name: 'CM Dashboard',
      icon: '📊',
      file: '/brochures/cm-dashboard-brochure.pdf'
    },
    {
      id: 3,
      name: 'Crime Dashboard',
      icon: '📊',
      file: '/brochures/crime-dashboard-brochure.pdf'
    }
  ];

  const handleDownload = (file: string, name: string) => {
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = file;
    link.download = `${name.toLowerCase().replace(' ', '-')}-brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <p className="text-gray-800 mb-4">
        <span className="font-bold">assureBI</span> is a management control and monitoring platform that is designed to help your company be more responsive and efficient. assureBI gives your company powerful tools that can help you to quickly identify and control the exceptions, before they could create losses to your business and boost your profitability. It helps the users to analyze data directly from the source or from the extracted form with business intelligence precision.
      </p>
      <p className="text-gray-800 mb-4">
        Blazing fast Business Intelligence service and application to analyze Large Databases, create awesome reports and share real-time dashboards.
      </p>
      <p className="text-gray-800 mb-6">
        assureBI runs on the cloud as well as on your enterprise servers.
      </p>
      
      {/* Download Brochure section */}
      <div className="mt-8 mb-12 w-full">
        <h3 className="text-2xl font-semibold text-[#366A00] mb-4">Download Brochure</h3>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        
        <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-10">
          {brochures.map((brochure) => (
            <motion.div
              key={brochure.id}
              className="relative group cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleDownload(brochure.file, brochure.name)}
            >
              <div className="bg-white rounded-sm shadow-lg p-4 flex items-center w-[180px] h-[60px] relative overflow-hidden">
                {/* Shadow effect at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[15px] bg-gradient-to-t from-gray-200 to-transparent"></div>
                
                <div className="flex items-center">
                  <div className="text-red-500 text-xl mr-2">
                    {brochure.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-800">{brochure.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Why assureBI makes more sense section */}
      <div className="mt-8 mb-12 w-full">
        <h3 className="text-2xl font-semibold text-[#366A00] mb-4">Why assureBI makes more sense to business users and for analytics.</h3>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            } 
            title="Web Interface" 
          />
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
                <path d="M6 8h.01M6 12h.01M6 16h.01M10 8h8M10 12h8M10 16h8"></path>
              </svg>
            } 
            title="Dashboards" 
          />
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
            } 
            title="Analysis and Reporting" 
          />
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
              </svg>
            } 
            title="Continuous Control Monitoring (CCM)" 
          />
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            } 
            title="Custom Reports" 
          />
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
                <path d="M8 6h8M8 10h8"></path>
              </svg>
            } 
            title="Cloud Ready with Mobile App to monitor dashboards" 
          />
        </div>
      </div>
      
      {/* Industries section */}
      <div className="mb-8 w-full">
        <h3 className="text-2xl font-semibold text-[#366A00] mb-4">Industries</h3>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect>
                <path d="M7 8V6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2"></path>
                <line x1="12" y1="16" x2="12" y2="16.01"></line>
              </svg>
            } 
            title="Banking and Finance" 
          />
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            } 
            title="Retail" 
          />
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            } 
            title="Manufacturing" 
          />
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20M7 12a5 5 0 0 1 5-5M12 17a5 5 0 0 0 5-5"></path>
              </svg>
            } 
            title="Telecom" 
          />
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            } 
            title="Insurance" 
          />
          <AnimatedCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            } 
            title="Logistics and Hospitality" 
          />
        </div>
      </div>
    </div>
  );
};

export default AssureBIComponent;
