'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram, IconBrandYoutube, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`bg-white border-t border-gray-200 ${className}`}>
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-10 lg:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
          {/* Column 1 - Logo and company info */}
          <div className="space-y-3 sm:space-y-4">
         
            <p className="text-gray-500 text-xs sm:text-sm md:text-sm">
            No matter what questions you have, we're here to work with you on your terms.
            </p>
            <div className="flex space-x-3">
            
            
              <Link href="https://www.linkedin.com/company/ssplindia/ " className="text-gray-400 hover:text-indigo-600 transition-colors">
                <IconBrandLinkedin size={20} />
              </Link>
           
              <Link href="https://www.youtube.com/@sspladvanceanalyticsgrc2906 " className="text-gray-400 hover:text-indigo-600 transition-colors">
                <IconBrandYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div className="mt-2 sm:mt-0">
            <h3 className="font-medium text-gray-900 mb-2 sm:mb-3 md:mb-4">Product</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/products" className="text-gray-500 hover:text-indigo-600 text-sm">Products</Link></li>
              <li><Link href="/training" className="text-gray-500 hover:text-indigo-600 text-sm">Training</Link></li>
              <li><Link href="/partner" className="text-gray-500 hover:text-indigo-600 text-sm">Become a Partner</Link></li>
              <li><Link href="/events" className="text-gray-500 hover:text-indigo-600 text-sm">Events</Link></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="mt-2 sm:mt-0">
            <h3 className="font-medium text-gray-900 mb-2 sm:mb-3 md:mb-4">Company</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/about" className="text-gray-500 hover:text-indigo-600 text-sm">About</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-indigo-600 text-sm">Contact us</Link></li>
              <li><Link href="/testimonials" className="text-gray-500 hover:text-indigo-600 text-sm">Testimonials</Link></li>
              <li><Link href="/webinar" className="text-gray-500 hover:text-indigo-600 text-sm">Webinars</Link></li>
            </ul>
          </div>

          {/* Column 4 - Support and Contact */}
            <div className="mt-2 sm:mt-0">
              <h3 className="font-medium text-gray-900 mb-2 sm:mb-3 md:mb-4">Contact us</h3>
              <div className="space-y-4">
                {/* India Office */}
                <div>
                  <div className="flex items-center mb-2">
                    <IconMapPin size={14} className="text-gray-400 mr-1 flex-shrink-0" />
                    <h4 className="text-xs md:text-sm font-medium text-gray-700">India</h4>
                  </div>
                  <ul className="space-y-1 ml-5">
                  <li className="text-gray-500 text-[11px] md:text-xs mb-2 break-words">M-91, 1st Floor, Connaught Circus, New Delhi</li>
                  <li className="flex flex-col lg:flex-row md:items-center space-y-1 lg:space-y-0 lg:space-x-4">
                      <div className="flex items-center">
                        <IconMail size={14} className="text-gray-400 mr-1 flex-shrink-0" />
                        <span className="text-gray-500 text-xs md:text-xs">info@sspl.net.in</span>
                      </div>
                      <div className="flex items-center">
                        <IconPhone size={14} className="text-gray-400 mr-1 flex-shrink-0" />
                        <span className="text-gray-500 text-xs md:text-xs">Tel: ‪+91-11-23765368‬</span>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Middle East Office */}
                <div>
                  <div className="flex items-center mb-2">
                    <IconMapPin size={14} className="text-gray-400 mr-1 flex-shrink-0" />
                    <h4 className="text-xs md:text-sm font-medium text-gray-700">Middle East</h4>
                  </div>
                  <ul className="space-y-1 ml-5">
                  <li className="text-gray-500 text-[11px] md:text-xs mb-2 break-words">Bahrain Financial Harbour, East Tower, 3420, 34th Floor, Building 1398, Road No.4626, Block No. 346, Bahrain</li>
                  <li className="flex flex-col lg:flex-row md:items-center space-y-1 lg:space-y-0 lg:space-x-4">
                      <div className="flex items-center">
                        <IconMail size={14} className="text-gray-400 mr-1 flex-shrink-0" />
                        <span className="text-gray-500 text-xs md:text-xs">info@ssplme.com</span>
                      </div>
                      <div className="flex items-center">
                        <IconPhone size={14} className="text-gray-400 mr-1 flex-shrink-0" />
                        <span className="text-gray-500 text-xs md:text-xs">Tel: ‪+973-13622552‬</span>
                      </div>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-gray-200 mt-6 sm:mt-8 md:mt-10 pt-3 sm:pt-4 md:pt-5 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs sm:text-sm">Copyright {currentYear} SSPL. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;