'use client'
import React from 'react';
import { motion } from 'framer-motion';

const BarnOwlComponent = () => {
  return (
    <div>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl font-semibold text-[#366A00] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          BARNOWL
        </motion.h2>
        <div className="h-[1px] bg-gray-300 w-full mb-4"></div>
        <motion.p 
          className="text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          BarnOwl is a fully integrated governance, risk management, compliance and audit software solution which can be implemented in a modular fashion:
        </motion.p>

        <motion.ul 
          className="list-disc pl-8 space-y-3 text-gray-700 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.li 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            BarnOwl Governance provides a well structured and systematic approach to risk management giving you an up to date view of your risk universe
          </motion.li>
          <motion.li 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            BarnOwl Compliance facilitates and simplifies regulatory compliance allowing you to identify, monitor and report on compliance to acts, regulations and provisions at every level of the organisation
          </motion.li>
          <motion.li 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            BarnOwl Audit supports the full audit life-cycle enabling you to streamline and standardise your internal audit processes
          </motion.li>
        </motion.ul>
      </motion.div>

      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3 
          className="text-3xl font-semibold text-[#366A00] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          BarnOwl Software:
        </motion.h3>
        <motion.ul 
          className="list-disc pl-8 space-y-2 text-gray-700 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {[
            "Enables effective strategic and operational planning",
            "Facilitates good corporate governance and regulatory compliance",
            "Drives combined assurance and integrated reporting",
            "Embeds accountability and ownership for risk management",
            "Provides an integrated strategic early warning system"
          ].map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div 
        className=""
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3 
          className="text-3xl font-semibold text-[#366A00] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Why BarnOwl:
        </motion.h3>
        <motion.ul 
          className="list-disc pl-8 space-y-2 text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {[
            "Fully integrated risk, compliance and audit software that supports best practice frameworks such as KING IV, COSO, ISO31000, National Treasury Framework, GACP, IPPF",
            "Established GRC solution with extensive functionality and 20 year track record",
            "User friendly with a Windows desktop and device independent web app",
            "Configurable and parameter driven including flexible rating models, audit programs, and user defined fields",
            "Supports a common risk and audit taxonomy having libraries for transversal risks, processes, and audit programs",
            "Extensive reporting capability with drill-down business intelligence dashboards, heat maps, bar charts, pie charts, line charts (trends), compliance survey analysis, and final audit reports in Word",
            "Cost effective bundled modules",
            "Tried and tested guaranteeing success",
            "Leading edge technology which supports working online and offline",
            "Developed and supported in South Africa",
            "Total peace of mind"
          ].map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default BarnOwlComponent;
