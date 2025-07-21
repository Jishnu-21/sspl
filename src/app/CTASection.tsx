'use client'
import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  const containerAnimation = {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { 
      opacity: 0,
      x: -60
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const slideInRight = {
    hidden: { 
      opacity: 0,
      x: 60
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const fadeIn = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px]">
        <motion.div 
          className="bg-[#0f2756] rounded-lg overflow-hidden relative py-16 sm:py-20 md:py-28 px-6 sm:px-8 text-center text-white min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          <motion.div 
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-[-15%] left-[5%] w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-blue-200/20 blur-xl" />
            <div className="absolute bottom-[-20%] right-[5%] w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-purple-200/20 blur-xl" />
            <div className="absolute top-[40%] right-[25%] w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-200/20 blur-xl" />
            <div className="absolute bottom-[25%] left-[20%] w-6 h-6 rounded-full bg-purple-200/20 blur-xl" />
          </motion.div>
          
          {/* Content with new animations */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div variants={slideInLeft}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Transform Your Data,
              </h2>
            </motion.div>
            
            <motion.div variants={slideInRight}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Transform Your Business
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90"
              variants={fadeIn}
            >
              Get AI-driven insights for smarter decisions. Contact us today!
            </motion.p>
            
            <motion.a 
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-[#366A00] hover:text-white transition-all duration-300"
              variants={fadeIn}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(255,255,255,0.2)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;