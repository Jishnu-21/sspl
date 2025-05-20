"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useOutsideClick } from "../hooks/use-outside-click";

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
    // Handle scroll locking and outside click
    if (mobileMenuOpen && mobileMenuRef.current) {
      // Lock scroll
      document.body.style.overflow = 'hidden';
      
      const handleOutsideClick = (event: MouseEvent) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
          setMobileMenuOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        // Unlock scroll when menu closes
        document.body.style.overflow = '';
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Always hide top bar after scrolling down a bit
      if (currentScrollPos > 50) {
        setTopBarVisible(false);
      } else {
        setTopBarVisible(true);
      }
      
      // Show/hide main header based on scroll direction
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      setPrevScrollPos(currentScrollPos);
      
      // Only show header when at top or scrolling up
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

  // Close services dropdown when clicking outside
  useOutsideClick(servicesDropdownRef as React.RefObject<HTMLDivElement>, () => {
    if (servicesDropdownOpen) setServicesDropdownOpen(false);
  });
  
  // Close events dropdown when clicking outside
  useOutsideClick(eventsDropdownRef as React.RefObject<HTMLDivElement>, () => {
    if (eventsDropdownOpen) setEventsDropdownOpen(false);
  });

  return (
    <header className="fixed top-0 w-full z-50 border-t-[3px] border-[#222] bg-white box-border font-poppins transition-transform duration-300" 
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}>
      {/* Top Bar */}
      <div 
        className={`flex items-center bg-[#e6e6e6] text-[14px] text-[#222] transition-all duration-300 overflow-hidden ${topBarVisible ? 'h-[35px] md:h-[35px] opacity-100' : 'h-0 opacity-0'}`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16 flex flex-wrap justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center text-[#222]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
            </span>
            <span className="text-xs md:text-sm">info@sspl.net.in</span>
          </div>
          <div className="flex items-center gap-2 ml-4 md:ml-8">
            <span className="flex items-center text-[#222]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
            </span>
            <span className="text-xs md:text-sm">+91-11-23765368</span>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className="bg-white h-[70px] border-b border-[#eee] shadow-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16 h-full flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
            <Image src="/images/logos/logo2.jpg" alt="SSPL Logo" width={160} height={55} className="py-1" />
            </Link>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex justify-center flex-1">
            <div className="flex gap-9 justify-center">
              <Link href="/" className="group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]">
                Home
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]">
                About us
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
              <Link href="/products" className="group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]">
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
                  className="flex items-center group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]"
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
                  className={`absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-sm z-50 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  ref={servicesDropdownRef}
                >
                  <div className="py-2">
                    <Link 
                      href="/services/predictive-analysis" 
                      className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Predictive & Big Data Analytics
                    </Link>
                    <Link 
                      href="/services/grc-solutions-services" 
                      className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      GRC Solutions & Services
                    </Link>
                    <Link 
                      href="/services/media-analytics" 
                      className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Media Analytics
                    </Link>
                    <Link 
                      href="/services/revenue-assurance" 
                      className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Revenue Assurance
                    </Link>
                    <Link 
                      href="/services/risk-management" 
                      className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Risk Management Audit Analytics
                    </Link>
                    <Link 
                      href="/services/operations-finance" 
                      className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Operations & Finance Analytics
                    </Link>
                    <Link 
                      href="/services/fraud-management" 
                      className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Fraud Management & Detection
                    </Link>
                    <Link 
                      href="/services/data-migration" 
                      className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Data Migration
                    </Link>
                    <Link 
                      href="/services/algorithm-auditing" 
                      className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
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
                  className="flex items-center group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]"
                >
                  Events
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
                  className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-sm z-50 transition-all duration-200 ${eventsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  ref={eventsDropdownRef}
                >
                  <div className="py-2">
                    <Link 
                      href="/video-gallery" 
                      className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Video Gallery
                    </Link>
                    <Link 
                      href="/photo-gallery" 
                      className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-[#f5f5f5] hover:text-[#366A00] border-l-2 border-transparent hover:border-[#366A00]"
                    >
                      Image Gallery
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]">
                Contact us
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
          
          <div className="hidden md:block w-[140px]"></div> {/* Empty div to balance the layout - hidden on mobile */}
        </div>
      </div>
      
      {/* Mobile Menu - Slides in from the right */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-full md:w-[300px] h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col py-6 px-4 pt-20">
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
              <Image src="/logo.png" alt="SSPL Logo" width={160} height={55} />
            </Link>
          </div>
          
          <Link href="/" className="py-3 px-4 text-[#222] border-b border-gray-100 hover:bg-gray-50 text-[15px] font-medium">Home</Link>
          <Link href="/about" className="py-3 px-4 text-[#222] border-b border-gray-100 hover:bg-gray-50 text-[15px] font-medium">About us</Link>
          <Link href="/products" className="py-3 px-4 text-[#222] border-b border-gray-100 hover:bg-gray-50 text-[15px] font-medium">Products</Link>
          
          {/* Mobile Services Dropdown */}
          <div className="border-b border-gray-100">
            <button 
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              className="w-full flex justify-between items-center py-3 px-4 text-[#222] hover:bg-gray-50 text-[15px] font-medium"
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
              <Link href="/services/predictive-analysis" className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100">
                Predictive & Big Data Analytics
              </Link>
              <Link href="/services/media-analytics" className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100">
                Media Analytics
              </Link>
              <Link href="/services/revenue-assurance" className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100">
                Revenue Assurance
              </Link>
              <Link href="/services/risk-management" className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100">
                Risk Management Audit Analytics
              </Link>
              <Link href="/services/operations-finance" className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100">
                Operations & Finance Analytics
              </Link>
              <Link href="/services/fraud-management" className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100">
                Fraud Management & Detection
              </Link>
              <Link href="/services/data-migration" className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100">
                Data Migration
              </Link>
              <Link href="/services/algorithm-auditing" className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100">
                Algorithm Auditing
              </Link>
            </div>
          </div>
          
          {/* Mobile Events Dropdown */}
          <div className="border-b border-gray-100">
            <button 
              onMouseEnter={() => setEventsDropdownOpen(true)}
              onMouseLeave={() => setEventsDropdownOpen(false)}
              className="w-full flex justify-between items-center py-3 px-4 text-[#222] hover:bg-gray-50 text-[15px] font-medium"
            >
              Events
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
              <Link href="/video-gallery" className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100">
                Video Gallery
              </Link>
              <Link href="/photo-gallery" className="block py-2 px-8 text-[14px] text-gray-700 hover:bg-gray-100">
                Image Gallery
              </Link>
            </div>
          </div>
          
          <Link href="/contact" className="py-3 px-4 text-[#222] hover:bg-gray-50 text-[15px] font-medium">Contact us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;