"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useOutsideClick } from "../hooks/use-outside-click";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    // Only add the outside click handler when the menu is open
    if (mobileMenuOpen && mobileMenuRef.current) {
      const handleOutsideClick = (event: MouseEvent) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
          setMobileMenuOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
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
      
      // Only change state if needed
      if (isScrollingUp !== visible) {
        setVisible(isScrollingUp);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <header className="fixed top-0 w-full z-50 border-t-[3px] border-[#222] bg-white box-border font-poppins transition-transform duration-300" 
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}>
      {/* Top Bar */}
      <div 
        className={`flex items-center bg-[#e6e6e6] text-[14px] text-[#222] transition-all duration-300 overflow-hidden ${topBarVisible ? 'h-[30px] md:h-[30px] opacity-100' : 'h-0 opacity-0'}`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16 flex flex-wrap justify-center md:justify-start">
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
      <div className="bg-white h-[60px] border-b border-[#eee] shadow-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16 h-full flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="SSPL Logo" width={140} height={48} className="py-1" />
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex justify-center flex-1">
            <div className="flex gap-9 justify-center">
              <a href="#" className="group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]">
                Home
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
              <a href="#" className="group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]">
                About us
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
              <a href="#" className="group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]">
                Products
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
              <a href="#" className="group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]">
                Services
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
              <a href="#" className="group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]">
                Resources
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
              <a href="#" className="group relative text-[#222] no-underline text-[15px] font-medium transition-colors duration-200 hover:text-[#000000]">
                Contact us
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#000000] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
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
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <div className="hidden md:block w-[140px]"></div> {/* Empty div to balance the layout - hidden on mobile */}
        </div>
      </div>
      
      {/* Mobile Menu - Slides in from the right */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-[90px] right-0 w-[250px] h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col py-6 px-4">
          <a href="#" className="py-3 px-4 text-[#222] border-b border-gray-100 hover:bg-gray-50 text-[15px] font-medium">Home</a>
          <a href="#" className="py-3 px-4 text-[#222] border-b border-gray-100 hover:bg-gray-50 text-[15px] font-medium">About us</a>
          <a href="#" className="py-3 px-4 text-[#222] border-b border-gray-100 hover:bg-gray-50 text-[15px] font-medium">Products</a>
          <a href="#" className="py-3 px-4 text-[#222] border-b border-gray-100 hover:bg-gray-50 text-[15px] font-medium">Services</a>
          <a href="#" className="py-3 px-4 text-[#222] border-b border-gray-100 hover:bg-gray-50 text-[15px] font-medium">Resources</a>
          <a href="#" className="py-3 px-4 text-[#222] hover:bg-gray-50 text-[15px] font-medium">Contact us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
