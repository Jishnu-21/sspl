'use client'
import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  // Animation variants for the main container
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for background circles
  const circleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      y: 50
    },
    visible: { 
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for text elements
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Letter animation variants
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  // Function to split text into letters
  const splitText = (text: string) => {
    return text.split('').map((char: string, index: number) => (
      <motion.span
        key={index}
        variants={letterVariants}
        className="inline-block"
        style={{ transformOrigin: 'center bottom' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <section className="py-24 pb-32 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24 max-w-[1920px]">
        <motion.div 
          className="bg-[#0f2756] rounded-lg overflow-hidden relative py-28 px-8 text-center text-white h-[400px] flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background circles with enhanced animations */}
          <motion.div 
            variants={{ ...circleVariants, visible: { ...circleVariants.visible, opacity: 0.2 } }}
            className="absolute top-[-15%] left-[5%] w-40 h-40 rounded-full bg-blue-200/20 backdrop-blur-xl"
          ></motion.div>
          
          <motion.div 
            variants={{ ...circleVariants, visible: { ...circleVariants.visible, opacity: 0.3 } }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-[-20%] right-[5%] w-72 h-72 rounded-full bg-blue-200/20 backdrop-blur-xl"
          ></motion.div>
          
          <motion.div 
            variants={{ ...circleVariants, visible: { ...circleVariants.visible, opacity: 0.5 } }}
            transition={{ delay: 0.4 }}
            className="absolute top-[40%] right-[25%] w-12 h-12 rounded-full bg-blue-200/20 backdrop-blur-xl"
          ></motion.div>
          
          <motion.div 
            variants={{ ...circleVariants, visible: { ...circleVariants.visible, opacity: 0.6 } }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-[25%] left-[20%] w-6 h-6 rounded-full bg-blue-200/20 backdrop-blur-xl"
          ></motion.div>
          
          {/* Content with staggered animations */}
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Main heading with letter-by-letter animation */}
            <motion.h2 
              className="text-xl md:text-4xl lg:text-5xl font-bold mb-6"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.03, delayChildren: 0.2 }}
                className="inline-block"
              >
                {splitText("Transform Your Data,")}
              </motion.span>
              <br />
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.03, delayChildren: 0.3 }}
                className="inline-block"
              >
                {splitText("Transform Your Business")}
              </motion.span>
            </motion.h2>
            
            {/* Subtitle with letter-by-letter animation */}
            <motion.p 
              className="text-lg md:text-xl mb-8 opacity-90"
              variants={textVariants}
            >
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.02, delayChildren: 0.8 }}
                className="inline-block"
              >
                {splitText("Get AI-driven insights for smarter decisions. Contact us today!")}
              </motion.span>
            </motion.p>
            
            {/* CTA Button with enhanced animation */}
            <motion.a 
              href="/contact"
              className="inline-block px-8 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-[#0f2756] transition-colors duration-300"
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.05, delayChildren: 1.4 }}
                className="inline-block"
              >
                {splitText("Get Started")}
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;