'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaPuzzlePiece, FaShieldAlt, FaClipboardCheck, FaSearch } from 'react-icons/fa';
import LogoMarquee from './LogoMarquee';

const BarnOwlComponent = () => {
  const logos = [
    { name: 'Premium', logo: '/images/products/barnowl/1.png' },
    { name: 'Burger', logo: '/images/products/barnowl/2.jpg' },
    { name: 'JSC', logo: '/images/products/barnowl/3.png' },
    { name: 'JSC', logo: '/images/products/barnowl/5.png' },
    { name: 'JSC', logo: '/images/products/barnowl/6.png' },
    { name: 'JSC', logo: '/images/products/barnowl/7.png' },
    { name: 'JSC', logo: '/images/products/barnowl/8.png' },
  ];
  return (
    <div>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl text-center font-semibold text-[#366A00] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          BARNOWL
        </motion.h2>
        <h3 className="text-lg text-center font-medium text-[#1B3D69] mb-2">
        GOVERNANCE, RISK, COMPLIANCE AND AUDIT SOFTWARE
        </h3>
        <div className="h-[1px] bg-gray-300 w-full mb-4"></div>
        <motion.p 
          className="text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
BarnOwl is a fully integrated governance, risk, compliance, and audit software solution. BarnOwl provides a holistic and system-driven approach to GRC and assurance through its comprehensive GRC framework.
</motion.p>
      </motion.div>

      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3 
          className="text-3xl text-center font-semibold text-[#366A00] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          POWERFUL ALONE. BETTER TOGETHER
        </motion.h3>       
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {/* GRC Card */}
        <motion.div
          className="bg-[#1B3D69] p-6 rounded-lg shadow-md text-white text-center flex flex-col items-center min-h-[320px] hover:shadow-xl hover:bg-[#366A00] transition-all duration-300 cursor-pointer transform transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.07 }}
        >
          <div className="flex flex-col items-center" style={{ minHeight: 110 }}>
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#23486b] mb-2">
              <FaPuzzlePiece className="text-4xl text-white" />
            </span>
            <h4 className="text-xl font-bold mt-1 mb-2 text-white" style={{ minHeight: 32 }}>GRC</h4>
          </div>
          <p className="font-medium text-sm leading-relaxed mt-2">
            BarnOwl software provides an integrated, holistic and system-driven approach to GRC and assurance. BarnOwl streamlines your processes on a centralised platform, standardises risk and control taxonomies and offers the flexibility and scalability required for a changing business environment. For every industry, no matter the size of the business, BarnOwl is the ultimate integrated GRC software solution.
          </p>
        </motion.div>
        {/* Risk Management Card */}
        <motion.div
          className="bg-[#1B3D69] p-6 rounded-lg shadow-md text-white text-center flex flex-col items-center min-h-[320px] hover:shadow-xl hover:bg-[#366A00] transition-all duration-300 cursor-pointer transform transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.07 }}
        >
          <div className="flex flex-col items-center" style={{ minHeight: 110 }}>
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#23486b] mb-2">
              <FaShieldAlt className="text-4xl text-white" />
            </span>
            <h4 className="text-xl font-bold mt-1 mb-2 text-white" style={{ minHeight: 32 }}>RISK MANAGEMENT</h4>
          </div>
          <p className="font-medium text-sm leading-relaxed mt-2">
            BarnOwl Risk Management software helps you achieve your strategic objectives and enables a culture of risk planning and control with accountability and ownership throughout your organisation. Continual monitoring of your risk universe gives you comfort and confidence in managing your business.
          </p>
        </motion.div>
        {/* Compliance Card */}
        <motion.div
          className="bg-[#1B3D69] p-6 rounded-lg shadow-md text-white text-center flex flex-col items-center min-h-[320px] hover:shadow-xl hover:bg-[#366A00] transition-all duration-300 cursor-pointer transform transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.07 }}
        >
          <div className="flex flex-col items-center" style={{ minHeight: 110 }}>
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#23486b] mb-2">
              <FaClipboardCheck className="text-4xl text-white" />
            </span>
            <h4 className="text-xl font-bold mt-1 mb-2 text-white" style={{ minHeight: 32 }}>COMPLIANCE</h4>
          </div>
          <p className="font-medium text-sm leading-relaxed mt-2">
            BarnOwl Compliance software allows you to import various acts, legislation, policies and procedures, link these to associated risks and monitor compliance and policy management. This facilitates regulatory compliance and director protection.
          </p>
        </motion.div>
        {/* Audit Card */}
        <motion.div
          className="bg-[#1B3D69] p-6 rounded-lg shadow-md text-white text-center flex flex-col items-center min-h-[320px] hover:shadow-xl hover:bg-[#366A00] transition-all duration-300 cursor-pointer transform transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.07 }}
        >
          <div className="flex flex-col items-center" style={{ minHeight: 110 }}>
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#23486b] mb-2">
              <FaSearch className="text-4xl text-white" />
            </span>
            <h4 className="text-xl font-bold mt-1 mb-2 text-white" style={{ minHeight: 32 }}>AUDIT</h4>
          </div>
          <p className="font-medium text-sm leading-relaxed mt-2">
            BarnOwl Audit software supports any type of audit methodology including risk and control based auditing in support of best practice standards, ensuring that the key risks in your organisation are audited. BarnOwl facilitates all phases of auditing from planning through to reporting with advanced online and offline execution.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="pt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3 
          className="text-3xl text-center font-semibold text-[#366A00] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          BARNOWL PARTNERS
        </motion.h3>     
        <LogoMarquee clients={logos} />
        </motion.div>
    
    </div>
  );
};

export default BarnOwlComponent;
