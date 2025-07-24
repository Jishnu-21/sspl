'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EnInvoiceComponent = () => {

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-4xl text-center font-semibold text-[#366A00] mb-4">enInvoice</h2>
        <h3 className="text-lg text-center font-medium text-[#1B3D69] mb-2">for Finance, Accounts, Procurement, Compliance, and Operations Teams</h3>
        <div className="h-[1px] bg-gray-300 w-full mb-4"></div>
        <p className="text-gray-800 mb-6">
          EnInvoice is a comprehensive invoicing solution designed to streamline your billing processes. Our platform offers automated invoice generation and delivery, seamless integration with accounting systems, and detailed reporting and analytics for financial oversight.
        </p>
      </div>
      {/* Regulatory Invoicing Essentials */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-semibold text-center text-[#366A00] mb-2">Regulatory Invoicing Essentials</h3>
        <p className="text-gray-700 mb-10">
          Rapidly evolving electronic invoicing requirements pose constant challenges to the enterprises and other businesses, in comprehensively addressing compliance automation.
        </p>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 } 
            }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-[#366A00] text-xs font-medium px-3 py-1 rounded-full">AUTOMATED DATA COLLECTION</span>
            </div>
            <p className="text-white text-sm text-center">
              Standardize data collection and flow with 2-way integrations with automated transformations, merging and segregation of data.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 } 
            }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-[#366A00] text-xs font-medium px-3 py-1 rounded-full">EFFICIENT DATA PREPARATION</span>
            </div>
            <p className="text-white text-sm text-center">
              Unified data preparation processes for Efficient Data standardization with data coming from multiple sources.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 } 
            }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-[#366A00] text-xs font-medium px-3 py-1 rounded-full">ADVANCED DATA QUALIFICATION</span>
            </div>
            <p className="text-white text-sm text-center">
              Qualify data with validation rules, tolerance rules, conditional rules, computational rules and against reference data / 3rd party APIs.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 } 
            }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-[#366A00] text-xs font-medium px-3 py-1 rounded-full">IMPROVED & AUTOMATED PROCESSES</span>
            </div>
            <p className="text-white text-sm text-center">
              Implement tailored processes cutting across data preparers, reviewers and approvers cutting across departments and roles.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 } 
            }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-[#366A00] text-xs font-medium px-3 py-1 rounded-full">INTELLIGENT DASHBOARDING</span>
            </div>
            <p className="text-white text-sm text-center">
              Deliver regulatory einvoicing status cutting across Org and various Sub-Orgs with actionable insights from regulatory data.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 } 
            }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-[#366A00] text-xs font-medium px-3 py-1 rounded-full">CHANGE READY AND REPORTING BY TIME</span>
            </div>
            <p className="text-white text-sm text-center">
              Keep up with ever-changing rules and reporting formats with innate ability to effortlessly update processing Applications.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* QR Code Requirements Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <motion.h3 
          className="text-3xl font-semibold text-center text-[#366A00] mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          QR Code Requirements
        </motion.h3>
        <motion.p 
          className="text-gray-700 mb-8 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The QR code must be provided within the printed Simplified (all phases) and Standard e-Invoices (from integration phase). They are used by customers for verifying their invoices and ensuring that they are compliant with ZATCA/GAZT requirements.
        </motion.p>

        {/* QR Code Requirements Details */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-stretch">
          {/* Left Column: Invoice Image + QR Code */}
          <motion.div 
            className="bg-gray-200 p-8 rounded-md shadow-md flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Invoice Image Container */}
            <motion.div 
              className="flex-1 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full max-w-[300px] h-[300px] flex items-center justify-center">
                <Image 
                  src="/images/products/envoice/qr1.jpg" 
                  alt="Simplified Tax Invoice" 
                  width={300}
                  height={300}
                  className="max-h-full max-w-full object-contain rounded-md"
                />
              </div>
            </motion.div>
         
            {/* QR Code Container */}
            <motion.div 
              className="bg-white p-6 rounded-md shadow-sm flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                <Image 
                  src="/images/products/envoice/qr2.jpg" 
                  alt="QR Code for Invoice Verification" 
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Requirements List */}
          <motion.div 
            className="bg-gray-200 p-8 rounded-md shadow-md flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h4 
              className="text-lg sm:text-xl font-medium mb-6 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The generated QR codes should contain the following details :
            </motion.h4>
            
            <ul className="space-y-4 flex-1">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-[#366A00] mr-3 font-bold text-lg flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">The Seller Name and their VAT registration Number</span>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-[#366A00] mr-3 font-bold text-lg flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Time stamp of the Electronic Invoice or Credit/Debit Note (date and time)</span>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-[#366A00] mr-3 font-bold text-lg flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Electronic Invoice or Credit/Debit note amount (with VAT) & VAT amount</span>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="text-[#366A00] mr-3 font-bold text-lg flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Hash of XML Electronic Invoice or Credit/Debit Note</span>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <span className="text-[#366A00] mr-3 font-bold text-lg flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">Cryptographic stamp</span>
              </motion.li>
              <ul className="ml-8 mt-3 space-y-3">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <span className="text-[#366A00] mr-3 font-bold flex-shrink-0">◦</span>
                  <span className="text-gray-700 text-sm">For Simplified Tax Invoices and their associated notes, the stamp is generated by the E-Invoice Generating Solution</span>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <span className="text-[#366A00] mr-3 font-bold flex-shrink-0">◦</span>
                  <span className="text-gray-700 text-sm">For Tax Invoices and their associated notes that are integrated with ZATCA's platform, the stamp is generated by ZATCA's platform</span>
                </motion.li>
              </ul>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <span className="text-[#366A00] mr-3 font-bold text-lg flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">The public key used to generate the Cryptographic stamp</span>
              </motion.li>
              <ul className="ml-8 mt-3 space-y-3">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <span className="text-[#366A00] mr-3 font-bold flex-shrink-0">◦</span>
                  <span className="text-gray-700 text-sm">For Simplified Tax Invoices and their associated notes, this is the public key of the E-Invoice Generating Solution</span>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <span className="text-[#366A00] mr-3 font-bold flex-shrink-0">◦</span>
                  <span className="text-gray-700 text-sm">For Tax Invoices and their associated notes that are integrated with ZATCA's platform, this field is optional and is the public key of ZATCA's platform</span>
                </motion.li>
              </ul>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <span className="text-[#366A00] mr-3 font-bold text-lg flex-shrink-0">•</span>
                <span className="text-gray-700 text-sm sm:text-base">In the case of Simplified Tax Invoices and their associated notes, the Authority's Portal Cryptographic stamp of the public key of the E-Invoice Solution</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Included Services and Outcomes Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className=""
      >
        <h3 className="text-3xl font-semibold text-center text-[#366A00] mb-2">Included Services and Outcomes</h3>
        <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
          Our comprehensive solution provides specialized dashboards for different teams in your organization.
        </p>

        {/* AR & Finance Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h4 className="text-2xl font-medium text-center text-[#366A00] mb-6">Your AR & Finance team Gets</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 } 
              }}
            >
              <div className="mb-3 border-b pb-2">
                <h5 className="text-white font-medium">Seamless Integrations</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-white space-y-2">
                <li>Pre-built ERP specific connectors</li>
                <li>REST APIs, SFTP, File Share / Upload</li>
                <li>Source friendly templates / payloads</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 } 
              }}
            >
              <div className="mb-3 border-b pb-2">
                <h5 className="text-white font-medium">Process by Dept / Location / Company</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-white space-y-2">
                <li>Upload data by location or Business Unit</li>
                <li>Process eInvoice AR activity at any level</li>
                <li>Consolidate or Segregate at will.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 } 
              }}
            >
              <div className="mb-3 border-b pb-2">
                <h5 className="text-white font-medium">Accurate Documents</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-white space-y-2">
                <li>Tax IDs validated</li>
                <li>VAT Chapter Codes validated</li>
                <li>Tax determination performed</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Tax & Compliance Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h4 className="text-2xl font-medium text-center text-[#366A00] mb-6">Your Tax & Compliance team Gets</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 } 
              }}
            >
              <div className="mb-3 border-b pb-2">
                <h5 className="text-white font-medium">End-to-End Compliance</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-white space-y-2">
                <li>Comprehensive Audit Trail</li>
                <li>Precision Reporting</li>
                <li>Versioning By-Time</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 } 
              }}
            >
              <div className="mb-3 border-b pb-2">
                <h5 className="text-white font-medium">Automated VAT Reporting</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-white space-y-2">
                <li>Automated transfer of Sales data for VAT Reporting</li>
                <li>Compute, Prepare and Process VAT Reports.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-[#1B3D69] p-6 rounded-md shadow-sm cursor-pointer transition-colors duration-300 hover:bg-[#366A00]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 } 
              }}
            >
              <div className="mb-3 border-b pb-2">
                <h5 className="text-white font-medium">Enable Reconciliations with</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-white space-y-2">
                <li>ERP / Source Systems</li>
                <li>B2B Partners</li>
                <li>Intra-Company</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnInvoiceComponent;