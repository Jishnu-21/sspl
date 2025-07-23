'use client'
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AnimatedCardProps {
  imageSrc: string;
  title: string;
  bgColor?: string;
  hoverBgColor?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ imageSrc, title, bgColor, hoverBgColor }) => {
  return (
    <motion.div 
      className={`p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[140px] cursor-pointer ${bgColor ? '' : 'bg-gray-100'}`}
      style={bgColor ? { backgroundColor: bgColor } : {}}
      whileHover={bgColor && hoverBgColor ? {
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        backgroundColor: hoverBgColor
      } : {
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#f5f5f5"
      }}
      transition={{ type: "spring", stiffness: 300 }}
      data-aos="fade-up"
    >
      <div className="mb-3 h-[60px] flex items-center justify-center">
        <img 
          src={imageSrc} 
          alt={title} 
          className="h-[50px] w-auto object-contain"
        />
      </div>
      <p className={`text-sm font-medium ${bgColor ? 'text-white' : 'text-black'}`}>{title}</p>
    </motion.div>
  );
};

const AssureBIComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);



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
             <h2 className="text-4xl text-center font-semibold text-[#366A00] mb-4">assureBi</h2>
             <h3 className="text-lg text-center font-medium text-[#1B3D69] mb-2">Advanced BI for Audit, Risk, and Compliance Teams Seeking Instant Insights from Complex Data</h3>
             <div className="h-[1px] bg-gray-300 w-full mb-4"></div>
      <p className="text-gray-800 mb-4 text-justify" data-aos="fade-up">
        <span className="font-bold ">assureBI</span> is a management control and monitoring platform that is designed to help your company be more responsive and efficient. assureBI gives your company powerful tools that can help you to quickly identify and control the exceptions, before they could create losses to your business and boost your profitability. It helps the users to analyze data directly from the source or from the extracted form with business intelligence precision.
      </p>
      <p className="text-gray-800 mb-4" data-aos="fade-up">
        Blazing fast Business Intelligence service and application to analyze Large Databases, create awesome reports and share real-time dashboards.
      </p>
      <p className="text-gray-800 mb-6" data-aos="fade-up">
        assureBI runs on the cloud as well as on your enterprise servers.
      </p>
      
  
      {/* Why assureBI makes more sense section */}
      <div className="mt-8 mb-12 w-full" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-center text-[#366A00] mb-4">Why assureBI makes more sense to business users and for analytics.</h3>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        {/* Mobile Carousel */}
        <div className="flex flex-nowrap overflow-x-auto snap-x sm:hidden gap-4 w-full pb-2">
          <div className="flex gap-4">
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/Web Interface.png" title="Real-time Monitoring" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/Analysis and Reporting.png" title="Powerful Analytics" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/Dashboards.png" title="Interactive Dashboards" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/CCM.png" title="Intelligent Alerts" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/Custom Reports.png" title="Custom Reports" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/Cloud Ready.png" title="Cloud Ready with Mobile App to monitor dashboards" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
          </div>
        </div>
        {/* Grid for larger screens */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          <AnimatedCard imageSrc="/images/products/assurebi/Web Interface.png" title="Real-time Monitoring" bgColor="#1B3D69" hoverBgColor="#366A00" />
          <AnimatedCard imageSrc="/images/products/assurebi/Analysis and Reporting.png" title="Powerful Analytics" bgColor="#1B3D69" hoverBgColor="#366A00" />
          <AnimatedCard imageSrc="/images/products/assurebi/Dashboards.png" title="Interactive Dashboards" bgColor="#1B3D69" hoverBgColor="#366A00" />
          <AnimatedCard imageSrc="/images/products/assurebi/CCM.png" title="Intelligent Alerts" bgColor="#1B3D69" hoverBgColor="#366A00" />
          <AnimatedCard imageSrc="/images/products/assurebi/Custom Reports.png" title="Custom Reports" bgColor="#1B3D69" hoverBgColor="#366A00" />
          <AnimatedCard imageSrc="/images/products/assurebi/Cloud Ready.png" title="Cloud Ready with Mobile App to monitor dashboards" bgColor="#1B3D69" hoverBgColor="#366A00" />
        </div>
      </div>
      
      {/* Industries section */}
      <div className="mb-8 w-full" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-center text-[#366A00] mb-4">Industries</h3>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        {/* Mobile Carousel */}
        <div className="flex flex-nowrap overflow-x-auto snap-x sm:hidden gap-4 w-full pb-2">
          <div className="flex gap-4">
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/banking-finance.png" title="Banking and Finance" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/Retail.png" title="Retail" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/Manufacturing.png" title="Manufacturing" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/Telecom.png" title="Telecom" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/Insurance.png" title="Insurance" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
            <div className="snap-center flex-shrink-0"><AnimatedCard imageSrc="/images/products/assurebi/logistics.png" title="Logistics and Hospitality" bgColor="#1B3D69" hoverBgColor="#366A00" /></div>
          </div>
        </div>
        {/* Grid for larger screens */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          <AnimatedCard imageSrc="/images/products/assurebi/banking-finance.png" title="Banking and Finance" bgColor="#1B3D69" hoverBgColor="#366A00" />
          <AnimatedCard imageSrc="/images/products/assurebi/Retail.png" title="Retail" bgColor="#1B3D69" hoverBgColor="#366A00" />
          <AnimatedCard imageSrc="/images/products/assurebi/Manufacturing.png" title="Manufacturing" bgColor="#1B3D69" hoverBgColor="#366A00" />
          <AnimatedCard imageSrc="/images/products/assurebi/Telecom.png" title="Telecom" bgColor="#1B3D69" hoverBgColor="#366A00" />
          <AnimatedCard imageSrc="/images/products/assurebi/Insurance.png" title="Insurance" bgColor="#1B3D69" hoverBgColor="#366A00" />
          <AnimatedCard imageSrc="/images/products/assurebi/logistics.png" title="Logistics and Hospitality" bgColor="#1B3D69" hoverBgColor="#366A00" />
        </div>
      </div>
    </div>
  );
};

export default AssureBIComponent;
