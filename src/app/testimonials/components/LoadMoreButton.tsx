'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  return (
    <motion.div 
      className="flex justify-center mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <button
        onClick={onClick}
        className="px-6 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
      >
        Load more
      </button>
    </motion.div>
  );
};

export default LoadMoreButton;
