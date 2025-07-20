"use client"

import React, { useState, useEffect } from 'react'

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed border border-black bottom-6 right-6 z-50 p-3 bg-[#366A00] text-white cursor-pointer rounded-full shadow-lg hover:bg-white hover:text-black  transition-all duration-500 focus:outline-none transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-75 pointer-events-none'
      }`}
      aria-label="Go to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 15l7-7 7 7" 
        />
      </svg>
    </button>
  )
}

export default GoToTop
