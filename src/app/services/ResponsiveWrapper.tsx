"use client"

import React, { useEffect } from 'react'

const ResponsiveWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Create style element
    const style = document.createElement('style')
    style.setAttribute('id', 'responsive-service-styles')
    
    // Add responsive styles
    style.textContent = `
      /* Fix for PageBanner positioning */
      #page-banner, .page-banner {
        margin-top: 105px !important;
        z-index: 1;
      }
      
      /* Base responsive adjustments - exclude page banner elements */
      @media (max-width: 768px) {
        h1:not(#page-banner h1):not(.page-banner h1) {
          font-size: 2rem !important;
          line-height: 1.2 !important;
          word-wrap: break-word;
          white-space: normal !important;
        }
        
        h2 {
          font-size: 1.5rem !important;
          word-wrap: break-word;
          white-space: normal !important;
        }
        
        p:not(#page-banner p):not(.page-banner p) {
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .max-w-4xl {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }

      /* Extra small devices */
      @media (max-width: 480px) {
        h1:not(#page-banner h1):not(.page-banner h1) {
          font-size: 1.75rem !important;
          margin-bottom: 1rem !important;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
        
        h2 {
          font-size: 1.35rem !important;
          margin-bottom: 1rem !important;
        }
        
        section:not(#page-banner):not(.page-banner) {
          padding-top: 2rem !important;
          padding-bottom: 2rem !important;
        }
        
        .py-16 {
          padding-top: 2.5rem !important;
          padding-bottom: 2.5rem !important;
        }
        
        .mb-8 {
          margin-bottom: 1.5rem !important;
        }
        
        .mb-6 {
          margin-bottom: 1rem !important;
        }
      }

      /* Ensure images are responsive */
      img, video {
        max-width: 100%;
        height: auto;
      }

      /* Prevent text overflow */
      .text-center, .text-left, .text-right {
        overflow-wrap: break-word;
        word-wrap: break-word;
      }

      /* Ensure content doesn't overflow on small screens */
      .overflow-x-auto {
        -webkit-overflow-scrolling: touch;
      }

      /* Fix for potential horizontal overflow */
      .max-w-7xl {
        max-width: 100%;
        overflow-x: hidden;
      }

      /* Ensure proper spacing in nested flex containers */
      @media (max-width: 640px) {
        .flex-col > * + * {
          margin-top: 1rem;
        }
      }
    `
    
    // Append style to head
    document.head.appendChild(style)
    
    // Clean up on unmount
    return () => {
      const existingStyle = document.getElementById('responsive-service-styles')
      if (existingStyle) {
        existingStyle.remove()
      }
    }
  }, [])
  
  return <>{children}</>
}

export default ResponsiveWrapper
