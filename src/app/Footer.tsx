'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram, IconBrandYoutube, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and company info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src='/logo.svg'></img>
            </div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
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
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Features</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Pricing</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Case studies</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Reviews</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Updates</Link></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">About</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Contact us</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Careers</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Culture</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Column 4 - Support and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-1">
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Getting started</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Help center</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Server status</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Report a bug</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-indigo-600 text-sm">Chat support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Contact us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <IconMail size={16} className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-500 text-sm">contact@company.com</span>
                </li>
                <li className="flex items-start">
                  <IconPhone size={16} className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-500 text-sm">(414) 687 - 5892</span>
                </li>
                <li className="flex items-start">
                  <IconMapPin size={16} className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-500 text-sm">764 McAllister St<br />San Francisco, 94102</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">Copyright © {currentYear} SSPL. All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-500 hover:text-indigo-600 text-sm">Terms and Conditions</Link>
            <span className="text-gray-300">|</span>
            <Link href="/privacy" className="text-gray-500 hover:text-indigo-600 text-sm">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
