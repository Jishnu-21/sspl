import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UpArrowProps {
  className?: string;
  delay?: number;
}

const UpArrow: React.FC<UpArrowProps> = ({ className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  const handleMouseEnter = () => {
    setIsVisible(false);
    
    // Show the arrow again after a delay
    setTimeout(() => {
      setIsVisible(true);
    }, 300); // 300ms delay before reappearing
  };
  
  return (
    <motion.div
      className={`${className} relative cursor-pointer w-8 h-8 flex items-center justify-center`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay }}
      onMouseEnter={handleMouseEnter}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0, rotate: 90 }}
            transition={{ 
              duration: 0.2, 
              ease: [0.68, -0.55, 0.27, 1.55] // Custom spring-like easing
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 17V7H7" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UpArrow;
