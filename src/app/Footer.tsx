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
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and company info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src='/logo.png' alt="SSPL Logo" className="h-10 sm:h-12" />
            </div>
            <p className="text-gray-500 text-sm">
            No matter what questions you have, we're here to work with you on your terms.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <IconBrandFacebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <IconBrandTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <IconBrandLinkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <IconBrandInstagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <IconBrandYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div className="mt-2 sm:mt-0">
            <h3 className="font-medium text-gray-900 mb-3 sm:mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-500 hover:text-indigo-600 text-sm">Services</Link></li>
              <li><Link href="/products" className="text-gray-500 hover:text-indigo-600 text-sm">Products</Link></li>
              <li><Link href="/events" className="text-gray-500 hover:text-indigo-600 text-sm">Events</Link></li>
              <li><Link href="/training" className="text-gray-500 hover:text-indigo-600 text-sm">Training</Link></li>
              <li><Link href="/partner" className="text-gray-500 hover:text-indigo-600 text-sm">Become a Partner</Link></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="mt-2 sm:mt-0">
            <h3 className="font-medium text-gray-900 mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-500 hover:text-indigo-600 text-sm">About</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-indigo-600 text-sm">Contact us</Link></li>
              <li><Link href="/testimonials" className="text-gray-500 hover:text-indigo-600 text-sm">Testimonials</Link></li>
              <li><Link href="/webinar" className="text-gray-500 hover:text-indigo-600 text-sm">Webinars</Link></li>
              <li><Link href="/events" className="text-gray-500 hover:text-indigo-600 text-sm">Events</Link></li>
            </ul>
          </div>

          {/* Column 4 - Support and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 sm:gap-4 lg:gap-8">

            <div className="mt-2 sm:mt-0">
              <h3 className="font-medium text-gray-900 mb-3 sm:mb-4">Contact us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <IconMail size={16} className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-500 text-sm">info@sspl.net.com</span>
                </li>
                <li className="flex items-start">
                  <IconPhone size={16} className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-500 text-sm">(+91) 11-23765968</span>
                </li>
                <li className="flex items-start">
                  <IconMapPin size={16} className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-500 text-sm">M-91 Connaught Circus<br />New Delhi, 110001</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-gray-200 mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs sm:text-sm">Copyright {currentYear} SSPL. All Rights Reserved</p>
          <div className="flex space-x-2 sm:space-x-4 mt-3 sm:mt-0">
            <Link href="/terms" className="text-gray-500 hover:text-indigo-600 text-xs sm:text-sm">Terms and Conditions</Link>
            <span className="text-gray-300">|</span>
            <Link href="/privacy" className="text-gray-500 hover:text-indigo-600 text-xs sm:text-sm">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
