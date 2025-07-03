"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useOutsideClick } from "../hooks/use-outside-click";
import { FaLinkedin, FaYoutube } from 'react-icons/fa';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const eventsDropdownRef = useRef<HTMLDivElement>(null);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      document.body.style.overflow = 'hidden';
      
      const handleOutsideClick = (event: MouseEvent) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
          setMobileMenuOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      if (currentScrollPos > 50) {
        setTopBarVisible(false);
      } else {
        setTopBarVisible(true);
      }
      
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      setPrevScrollPos(currentScrollPos);
      
      if (currentScrollPos < 50) {
        setVisible(true);
      } else if (isScrollingUp !== visible) {
        setVisible(isScrollingUp);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  useOutsideClick(servicesDropdownRef as React.RefObject<HTMLDivElement>, () => {
    if (servicesDropdownOpen) setServicesDropdownOpen(false);
  });
  
  useOutsideClick(eventsDropdownRef as React.RefObject<HTMLDivElement>, () => {
    if (eventsDropdownOpen) setEventsDropdownOpen(false);
  });

  return (
    <header className="fixed top-0 w-full z-50  bg-white box-border font-poppins transition-transform duration-300" 
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}>
      {/* Top Bar */}
      <div 
        className={`flex items-center bg-[#1B3D69] text-[14px] text-[#222] transition-all duration-300 overflow-hidden ${topBarVisible ? 'h-[38px] md:h-[38px] opacity-100' : 'h-0 opacity-0'}`}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px] flex flex-wrap justify-between">
          {/* Left: Analytics GRC Robotics with round green dot separators */}
          <div className="flex items-center gap-2 text-xs text-white md:text-sm">
            <span>Analytics</span>
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#366A00' }}></span>
            <span>GRC</span>
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#366A00' }}></span>
            <span>Robotics</span>
          </div>
          {/* Right: Social Icons */}
          <div className="flex items-center gap-2 ml-auto">
            <a
              href="https://www.linkedin.com/company/ssplindia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-300 text-lg"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@sspladvanceanalyticsgrc2906"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white hover:text-red-400 text-lg"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className="bg-white h-[75px] md:h-[70px] lg:h-[75px] border-b border-[#eee] shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px] h-full flex items-center justify-between">
        <div className="flex items-center">
        <Link href="/" className="flex items-center mt-2">
              <Image src="/images/logos/logo.png" alt="SSPL Logo" layout="intrinsic" width={130} height={40} className="py-1 md:w-auto lg:w-auto max-h-[100px]" />
            </Link>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex justify-center flex-1">
            <div className="flex justify-center md:gap-5 lg:gap-9">
              <Link href="/" className="group relative text-[#222] no-underline text-[16px] md:text-[15px] lg:text-[17px] font-medium transition-colors duration-200 hover:text-[#000000]">
                Home
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="group relative text-[#222] no-underline text-[16px] md:text-[15px] lg:text-[17px] font-medium transition-colors duration-200 hover:text-[#000000]">
                About
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
              <Link href="/products" className="group relative text-[#222] no-underline text-[16px] md:text-[15px] lg:text-[17px] font-medium transition-colors duration-200 hover:text-[#000000]">
                Products
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
              
              {/* Services with dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button 
                  className="flex items-center group relative text-[#222] no-underline text-[16px] md:text-[15px] lg:text-[17px] font-medium transition-colors duration-200 hover:text-[#000000]"
                >
                  Services
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </button>
                
                {/* Services Dropdown */}
                <div 
                  className={`absolute left-0 mt-2 w-60 md:w-56 lg:w-64 bg-white border border-gray-200 shadow-lg rounded-sm z-50 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  ref={servicesDropdownRef}
                >
                  <div className="py-2">
                    <Link 
                      href="/services/predictive-analysis" 
                      className="block px-4 py-2 text-[14px] md:text-[12px] lg:text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Predictive & Big Data Analytics
                    </Link>
                    <Link 
                      href="/services/grc-solutions-services" 
                      className="block px-4 py-2 text-[14px] md:text-[12px] lg:text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      GRC Solutions & Services
                    </Link>
                    <Link 
                      href="/services/media-analytics" 
                      className="block px-4 py-2 text-[14px] md:text-[12px] lg:text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Media Analytics
                    </Link>
                    <Link 
                      href="/services/revenue-assurance" 
                      className="block px-4 py-2 text-[14px] md:text-[12px] lg:text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Revenue Assurance
                    </Link>
                    <Link 
                      href="/services/risk-management" 
                      className="block px-4 py-2 text-[14px] md:text-[12px] lg:text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Risk Management Audit Analytics
                    </Link>
                    <Link 
                      href="/services/operations-finance" 
                      className="block px-4 py-2 text-[14px] md:text-[12px] lg:text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Operations & Finance Analytics
                    </Link>
                    <Link 
                      href="/services/fraud-management" 
                      className="block px-4 py-2 text-[14px] md:text-[12px] lg:text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Fraud Management & Detection
                    </Link>
                    <Link 
                      href="/services/data-migration" 
                      className="block px-4 py-2 text-[14px] md:text-[12px] lg:text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Data Migration
                    </Link>
                    <Link 
                      href="/services/algorithm-auditing" 
                      className="block px-4 py-2 text-[14px] md:text-[12px] lg:text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Algorithm Auditing
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Events with dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setEventsDropdownOpen(true)}
                onMouseLeave={() => setEventsDropdownOpen(false)}
              >
                <button 
                  className="flex items-center group relative text-[#222] no-underline text-[16px] md:text-[15px] lg:text-[17px] font-medium transition-colors duration-200 hover:text-[#000000]"
                >
                  Gallery
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </button>
                
                {/* Events Dropdown */}
                <div 
                  className={`absolute left-0 mt-2 w-48 md:w-44 lg:w-48 bg-white border border-gray-200 shadow-lg rounded-sm z-50 transition-all duration-200 ${eventsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  ref={eventsDropdownRef}
                >
                  <div className="py-2">
                    <Link 
                      href="/video-gallery" 
                      className="block px-4 py-2 text-[14px] md:text-[12px] lg:text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Video Gallery
                    </Link>
                    <Link 
                      href="/photo-gallery" 
                      className="block px-4 py-2 text-[14px] md:text-[12px] lg:text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Photo Gallery
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="group relative text-[#222] no-underline text-[16px] md:text-[15px] lg:text-[17px] font-medium transition-colors duration-200 hover:text-[#000000]">
                Contact
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </div>
          </nav>
          
          {/* Mobile Menu Button - Visible only on mobile */}
          <button 
            className="md:hidden flex items-center p-2 text-gray-800 hover:text-black focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="hidden md:block md:w-[100px] lg:w-[140px]"></div>
        </div>
      </div>
      
      {/* Mobile Menu - Slides in from the right */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-full md:w-[300px] h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col py-6 px-4 pt-24">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-800 hover:text-black focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Logo in mobile menu */}
          <div className="flex justify-center mb-6 mt-[-10px]">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/logo.png" alt="SSPL Logo" width={170} height={45} />
            </Link>
          </div>
          
          <Link href="/" className="py-3 px-4 text-[#222] border-b border-gray-100 hover:bg-gray-50 text-[16px] md:text-[15px] lg:text-[17px] font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="py-3 px-4 text-[#222] border-b border-gray-100 hover:bg-gray-50 text-[16px] md:text-[15px] lg:text-[17px] font-medium" onClick={() => setMobileMenuOpen(false)}>About us</Link>
          <Link href="/products" className="py-3 px-4 text-[#222] border-b border-gray-100 hover:bg-gray-50 text-[16px] md:text-[15px] lg:text-[17px] font-medium" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          
          {/* Mobile Services Dropdown */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="w-full flex justify-between items-center py-3 px-4 text-[#222] hover:bg-gray-50 text-[16px] md:text-[15px] lg:text-[17px] font-medium"
            >
              Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? 'transform rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mobile Services Submenu */}
            <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${servicesDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
              <Link 
                href="/services/predictive-analysis" 
                className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Predictive & Big Data Analytics
              </Link>
              <Link 
                href="/services/grc-solutions-services" 
                className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100" 
                onClick={() => setMobileMenuOpen(false)}
              >
                GRC Solutions & Services
              </Link>
              <Link 
                href="/services/media-analytics" 
                className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100" 
                onClick={(event) => {
                  event.stopPropagation();
                  setMobileMenuOpen(false);
                }}
              >
                Media Analytics
              </Link>
              <Link 
                href="/services/revenue-assurance" 
                className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100" 
                onClick={(event) => {
                  event.stopPropagation();
                  setMobileMenuOpen(false);
                }}
              >
                Revenue Assurance
              </Link>
              <Link 
                href="/services/risk-management" 
                className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100" 
                onClick={(event) => {
                  event.stopPropagation();
                  setMobileMenuOpen(false);
                }}
              >
                Risk Management Audit Analytics
              </Link>
              <Link 
                href="/services/operations-finance" 
                className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100" 
                onClick={(event) => {
                  event.stopPropagation();
                  setMobileMenuOpen(false);
                }}
              >
                Operations & Finance Analytics
              </Link>
              <Link 
                href="/services/fraud-management" 
                className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100" 
                onClick={(event) => {
                  event.stopPropagation();
                  setMobileMenuOpen(false);
                }}
              >
                Fraud Management & Detection
              </Link>
              <Link 
                href="/services/data-migration" 
                className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100" 
                onClick={(event) => {
                  event.stopPropagation();
                  setMobileMenuOpen(false);
                }}
              >
                Data Migration
              </Link>
              <Link 
                href="/services/algorithm-auditing" 
                className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100" 
                onClick={(event) => {
                  event.stopPropagation();
                  setMobileMenuOpen(false);
                }}
              >
                Algorithm Auditing
              </Link>
            </div>
          </div>
          
          {/* Mobile Events Dropdown */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
              className="w-full flex justify-between items-center py-3 px-4 text-[#222] hover:bg-gray-50 text-[16px] md:text-[15px] lg:text-[17px] font-medium"
            >
              Gallery
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform ${eventsDropdownOpen ? 'transform rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mobile Events Submenu */}
            <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${eventsDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
              <Link 
                href="/video-gallery" 
                className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100" 
                onClick={(event) => {
                  event.stopPropagation();
                  setMobileMenuOpen(false);
                }}
              >
                Video Gallery
              </Link>
              <Link 
                href="/photo-gallery" 
                className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100" 
                onClick={(event) => {
                  event.stopPropagation();
                  setMobileMenuOpen(false);
                }}
              >
                Image Gallery
              </Link>
            </div>
          </div>
          
          <Link href="/contact" className="py-3 px-4 text-[#222] hover:bg-gray-50 text-[16px] md:text-[15px] lg:text-[17px] font-medium" onClick={() => setMobileMenuOpen(false)}>Contact us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;