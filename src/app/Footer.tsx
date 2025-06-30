'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram, IconBrandYoutube, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';

interface FooterProps {
  className?: string;
}

interface OfficeInfo {
  name: string;
  address: string;
  email: string;
  phone: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const [currentOfficeIndex, setCurrentOfficeIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const offices: OfficeInfo[] = [
    {
      name: "India Office",
      address: "M-91, 1st Floor, Connaught Circus, New Delhi",
      email: "info@sspl.net.in",
      phone: "+91-11-23765368"
    },
    {
      name: "Middle East Office",
      address: "Bahrain Financial Harbour, East Tower, 3420, 34th Floor, Building 1398, Road No.4626, Block No. 346, Bahrain",
      email: "info@ssplme.com",
      phone: "+973-13622552"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentOfficeIndex((prevIndex) => (prevIndex + 1) % offices.length);
        setIsTransitioning(false);
      }, 300); // Half of the transition duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentOffice = offices[currentOfficeIndex];
  
  return (
    <footer className={`bg-white border-t border-gray-200 ${className}`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px] py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 md:gap-10 lg:gap-12">
          
          {/* Column 1 - Logo and company info */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div>
              <p className="text-gray-600 text-sm sm:text-base md:text-base lg:text-base leading-relaxed">
                No matter what questions you have, we're here to work with you on your terms.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="https://www.linkedin.com/company/ssplindia/" 
                className="text-gray-400 hover:text-indigo-600 transition-colors duration-200 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin size={22} />
              </Link>
              <Link 
                href="https://www.youtube.com/@sspladvanceanalyticsgrc2906" 
                className="text-gray-400 hover:text-red-600 transition-colors duration-200 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandYoutube size={22} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-lg">Product</h3>
            <ul className="space-y-3 sm:space-y-3 md:space-y-4">
              <li>
                <Link 
                  href="/products" 
                  className="text-gray-600 hover:text-indigo-600 text-sm sm:text-base md:text-base transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/training" 
                  className="text-gray-600 hover:text-indigo-600 text-sm sm:text-base md:text-base transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link 
                  href="/partner" 
                  className="text-gray-600 hover:text-indigo-600 text-sm sm:text-base md:text-base transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link 
                  href="/events" 
                  className="text-gray-600 hover:text-indigo-600 text-sm sm:text-base md:text-base transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-lg">Company</h3>
            <ul className="space-y-3 sm:space-y-3 md:space-y-4">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-indigo-600 text-sm sm:text-base md:text-base transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 hover:text-indigo-600 text-sm sm:text-base md:text-base transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link 
                  href="/testimonials" 
                  className="text-gray-600 hover:text-indigo-600 text-sm sm:text-base md:text-base transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  href="/webinar" 
                  className="text-gray-600 hover:text-indigo-600 text-sm sm:text-base md:text-base transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Information */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 sm:col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-lg">Contact Us</h3>
            
            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              {/* Rotating Office Display */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <IconMapPin size={18} className="text-indigo-600 mr-2 flex-shrink-0" />
                  <h4 className={`text-sm sm:text-base md:text-base font-semibold text-gray-800 transition-all duration-600 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
                    {currentOffice.name}
                  </h4>
                </div>
                <div className="ml-6 space-y-3">
                  <p className={`text-gray-600 text-sm sm:text-sm md:text-base leading-relaxed transition-all duration-600 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
                    {currentOffice.address}
                  </p>
                  <div className="space-y-2 sm:space-y-2 md:space-y-3">
                    <div className="flex items-center">
                      <IconMail size={16} className="text-gray-400 mr-2 flex-shrink-0" />
                      <a 
                        href={`mailto:${currentOffice.email}`}
                        className={`text-gray-600 hover:text-indigo-600 text-sm sm:text-sm md:text-base transition-all duration-600 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}
                      >
                        {currentOffice.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <IconPhone size={16} className="text-gray-400 mr-2 flex-shrink-0" />
                      <a 
                        href={`tel:${currentOffice.phone}`}
                        className={`text-gray-600 hover:text-indigo-600 text-sm sm:text-sm md:text-base transition-all duration-600 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}
                      >
                        {currentOffice.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-gray-200 mt-10 sm:mt-12 md:mt-14 lg:mt-16 pt-6 sm:pt-7 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm sm:text-base md:text-base text-center sm:text-left">
              Copyright © {currentYear} SSPL. All Rights Reserved
            </p>
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;