'use client';

import React, { useEffect } from 'react';
import { FaChartLine, FaLightbulb, FaAward, FaGlobe, FaUserTie, FaUsers, FaServer, FaFolderOpen } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cards = [
  {
    icon: <FaChartLine size={32} className="text-white text-justify" />,
    text: 'Substratad Solutions Pvt. Ltd. (SSPL) is a leading consulting firm specializing in Big Data Analytics, Data Visualization, Robotic Process Analytics, Business Intelligence, Digital Transformation, Data Migration, and Predictive Analytics. Our expert team has successfully implemented over 200+ projects across industries globally.',
    stats: [
      { icon: <FaUserTie size={24} />, label: '25+', sub: 'Experience' },
      { icon: <FaUsers size={24} />, label: '100+', sub: 'Clients' },
      { icon: <FaServer size={24} />, label: '24/7', sub: 'Global Analytics Hub' },
      { icon: <FaFolderOpen size={24} />, label: '150+', sub: 'Projects' },
    ]
  },
  {
    icon: <FaLightbulb size={32} className="text-white text-justify" />,
    text: "Operating through our Global Analytics Hub, we provide 24/7 services to meet our clients diverse needs. Our commitment to excellence has earned us the Best Big Data Analytics Solution Company Award by WQPC. With a vision to be the leading data analytics and intelligence organization, we are dedicated to continuous customer service and advanced analytics solution development."
  },
  {
    icon: <FaAward size={32} className="text-white text-justify" />,
    text: "Our consultants help organizations leverage data analytics to manage operations across various functions, including operations, risk, and revenue assurance. As strategic thought leaders in Data and Big Data Analytics, we aim to enhance efficient enterprise management. At SSPL, we believe in simplifying complex data to empower businesses, driving informed decisions and fostering growth."
  }
];

const AboutContent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-6 bg-white overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black text-center mb-4 sm:mb-6 md:mb-8 text-comfortaa">
      Who Are We ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left big card */}
          <div
            className="bg-[#23486b] hover:bg-[#366A00] transition-colors duration-300 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 transition-transform p-5 sm:p-7 md:p-8 flex flex-col justify-between min-h-[340px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-[#2e5d8a] rounded-lg mb-4">
                {cards[0].icon}
              </div>
              <p className="text-white text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-2">
                {cards[0].text}
              </p>
            </div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full mt-2">
              {cards[0].stats!.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center w-full"
                >
                  <span className="text-white opacity-90 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl mb-1">
                    {React.cloneElement(stat.icon, { size: 56, className: 'sm:text-7xl md:text-8xl' })}
                  </span>
                  <div className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">{stat.label}</div>
                  <div className="text-white text-base sm:text-lg md:text-xl opacity-80">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right column: two stacked cards */}
          <div className="flex flex-col gap-4 h-full flex-1">
            {[cards[1], cards[2]].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#23486b] hover:bg-[#366A00] transition-colors duration-300 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 transition-transform p-5 sm:p-7 flex flex-col min-h-0 flex-1 justify-start"
                data-aos={idx === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={200 + idx * 100}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#2e5d8a] rounded-lg mb-4">
                  {card.icon}
                </div>
                <p className="text-white text-base sm:text-lg font-normal leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;