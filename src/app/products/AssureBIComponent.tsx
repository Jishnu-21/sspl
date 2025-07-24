'use client'
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LogoMarquee from './LogoMarquee';

interface AnimatedCardProps {
  imageSrc: string;
  title: string;
  bgColor?: string;
  hoverBgColor?: string;
  index?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ imageSrc, title, bgColor, hoverBgColor, index = 0 }) => {
  return (
    <motion.div 
      className={`p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[140px] cursor-pointer ${bgColor ? '' : 'bg-gray-100'}`}
      style={bgColor ? { backgroundColor: bgColor } : {}}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={bgColor && hoverBgColor ? {
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        backgroundColor: hoverBgColor
      } : {
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#f5f5f5"
      }}
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

  const logos = [
    { name: 'Godrej', logo: '/images/logos/Asset-7.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-8.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-9.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-10.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-11.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-12.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-13.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-14.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-15.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-16.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-17.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-18.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-19.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-20.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-21.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-22.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-23.svg' },
    { name: 'Godrej', logo: '/images/logos/Asset-24.svg' },
  ];

  const featureCards = [
    { imageSrc: "/images/products/assurebi/Web Interface.png", title: "Real-time Monitoring" },
    { imageSrc: "/images/products/assurebi/Analysis and Reporting.png", title: "Powerful Analytics" },
    { imageSrc: "/images/products/assurebi/Dashboards.png", title: "Interactive Dashboards" },
    { imageSrc: "/images/products/assurebi/CCM.png", title: "Intelligent Alerts" },
    { imageSrc: "/images/products/assurebi/Custom Reports.png", title: "Custom Reports" },
    { imageSrc: "/images/products/assurebi/Cloud Ready.png", title: "Cloud Ready with Mobile App to monitor dashboards" }
  ];

  const industryCards = [
    { imageSrc: "/images/products/assurebi/banking-finance.png", title: "Banking and Finance" },
    { imageSrc: "/images/products/assurebi/Retail.png", title: "Retail" },
    { imageSrc: "/images/products/assurebi/Manufacturing.png", title: "Manufacturing" },
    { imageSrc: "/images/products/assurebi/Telecom.png", title: "Telecom" },
    { imageSrc: "/images/products/assurebi/Insurance.png", title: "Insurance" },
    { imageSrc: "/images/products/assurebi/logistics.png", title: "Logistics and Hospitality" }
  ];

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold text-[#366A00] mb-4">assureBi</h2>
      <h3 className="text-lg text-center font-medium text-[#1B3D69] mb-2">Where Data Gets to Work – from Operations to Finance, Across Every Industry.</h3>
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
      <motion.div 
        className="mt-8 mb-12 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-semibold text-center text-[#366A00] mb-4">Why assureBI makes more sense to business users and for analytics.</h3>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        
        {/* Mobile Carousel */}
        <div className="flex flex-nowrap overflow-x-auto snap-x sm:hidden gap-4 w-full pb-2">
          <div className="flex gap-4">
            {featureCards.map((card, index) => (
              <div key={index} className="snap-center flex-shrink-0">
                <AnimatedCard 
                  imageSrc={card.imageSrc} 
                  title={card.title} 
                  bgColor="#1B3D69" 
                  hoverBgColor="#366A00"
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Grid for larger screens */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {featureCards.map((card, index) => (
            <AnimatedCard 
              key={index}
              imageSrc={card.imageSrc} 
              title={card.title} 
              bgColor="#1B3D69" 
              hoverBgColor="#366A00"
              index={index}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Industries section */}
      <motion.div 
        className="mb-8 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-3xl font-semibold text-center text-[#366A00] mb-4">Industries</h3>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        
        {/* Mobile Carousel */}
        <div className="flex flex-nowrap overflow-x-auto snap-x sm:hidden gap-4 w-full pb-2">
          <div className="flex gap-4">
            {industryCards.map((card, index) => (
              <div key={index} className="snap-center flex-shrink-0">
                <AnimatedCard 
                  imageSrc={card.imageSrc} 
                  title={card.title} 
                  bgColor="#1B3D69" 
                  hoverBgColor="#366A00"
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Grid for larger screens */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {industryCards.map((card, index) => (
            <AnimatedCard 
              key={index}
              imageSrc={card.imageSrc} 
              title={card.title} 
              bgColor="#1B3D69" 
              hoverBgColor="#366A00"
              index={index}
            />
          ))}
        </div>
      </motion.div>
      
      <h3 className="text-2xl font-semibold text-center text-[#366A00] ">Trusted by over 1000 organizations across industries </h3>
      <motion.div 
        className="pt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <LogoMarquee clients={logos} />
      </motion.div>
    </div>
  );
};

export default AssureBIComponent;