'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EnInvoiceComponent = () => {

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl text-center font-semibold text-[#366A00] mb-4">EnInvoice</h2>
        <div className="h-[1px] bg-gray-300 w-full mb-4"></div>
        <p className="text-gray-800 mb-6">
          EnInvoice is a comprehensive invoicing solution designed to streamline your billing processes. Our platform offers automated invoice generation and delivery, seamless integration with accounting systems, and detailed reporting and analytics for financial oversight.
        </p>
      </div>
      {/* Regulatory Invoicing Essentials */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-center text-[#366A00] mb-2">Regulatory Invoicing Essentials</h3>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          Rapidly evolving electronic invoicing requirements pose constant challenges to the enterprises and other businesses, in comprehensively addressing compliance automation.
        </p>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-[#366A00] p-6 rounded-md shadow-sm cursor-pointer"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full">AUTOMATED DATA COLLECTION</span>
            </div>
            <p className="text-white text-sm text-center">
              Standardize data collection and flow with 2-way integrations with automated transformations, merging and segregation of data.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#366A00] p-6 rounded-md shadow-sm cursor-pointer"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full">EFFICIENT DATA PREPARATION</span>
            </div>
            <p className="text-white text-sm text-center">
              Unified data preparation processes for Efficient Data standardization with data coming from multiple sources.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#366A00] p-6 rounded-md shadow-sm cursor-pointer"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full">ADVANCED DATA QUALIFICATION</span>
            </div>
            <p className="text-white text-sm text-center">
              Qualify data with validation rules, tolerance rules, conditional rules, computational rules and against reference data / 3rd party APIs.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#366A00] p-6 rounded-md shadow-sm cursor-pointer"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full">IMPROVED & AUTOMATED PROCESSES</span>
            </div>
            <p className="text-white text-sm text-center">
              Implement tailored processes cutting across data preparers, reviewers and approvers cutting across departments and roles.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#366A00] p-6 rounded-md shadow-sm cursor-pointer"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full">INTELLIGENT DASHBOARDING</span>
            </div>
            <p className="text-white text-sm text-center">
              Deliver regulatory einvoicing status cutting across Org and various Sub-Orgs with actionable insights from regulatory data.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#366A00] p-6 rounded-md shadow-sm cursor-pointer"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center mb-3">
              <span className="bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full">CHANGE READY AND REPORTING BY TIME</span>
            </div>
            <p className="text-white text-sm text-center">
              Keep up with ever-changing rules and reporting formats with innate ability to effortlessly update processing Applications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* QR Code Requirements Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-center text-[#366A00] mb-2">QR Code Requirements</h3>
        <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
          The QR code must be provided within the printed Simplified (all phases) and Standard e-Invoices (from integration phase). They are used by customers for verifying their invoices and ensuring that they are compliant with ZATCA/GAZT requirements.
        </p>

        {/* QR Code Requirements Details */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-8 items-stretch">
            {/* Left Column: Invoice Image + Text Blocks + Larger QR Code */}
            <div className="flex flex-col space-y-6">
              {/* Invoice Image */}
              <div className="w-full flex-grow flex items-center justify-center">
                <Image 
                  src="/images/products/envoice/qr1.jpg" 
                  alt="Simplified Tax Invoice" 
                  width={400}
                  height={500}
                  className="max-h-full w-auto object-contain"
                />
              </div>

              {/* Combined Text Block and Larger QR Code with Buttons */}
              <div className="bg-white p-4 rounded-md shadow-sm w-full flex flex-col items-center justify-center space-y-4 flex-grow">
                {/* Text Block for Seller/VAT/Time/Amt */}
                <div className="text-sm text-gray-700 w-full">
                  <p className="font-bold mb-1">Seller:Farthing Purchasing Consortia</p>
                  <p>VAT Num:34344444444447</p>
                  <p>Time:2005-06-21T11:30:00</p>
                  <p>VAT Amt:15.0</p>
                  <p>Invoice Amt:115.0</p>
                </div>
                {/* Larger QR Code */}
                <div className="w-full h-[150px] flex items-center justify-center">
                  <Image 
                    src="/images/products/envoice/qr2.jpg" 
                    alt="Larger QR Code" 
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                {/* Buttons */}
                <div className="mt-4 flex space-x-4 justify-center">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Copy</button>
                  <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition">Close</button>
                </div>
              </div>
            </div>

            {/* Right Column: Requirements List */}
            <div className="bg-gray-200 p-8 rounded-md shadow-md h-full flex flex-col">
              <h4 className="text-xl font-medium mb-6 text-gray-800">The generated QR codes should contain the following details :</h4>
              
              <ul className="space-y-4 flex-1">
                <li className="flex items-start">
                  <span className="text-[#366A00] mr-3 font-bold text-lg">»</span>
                  <span className="text-gray-700 text-sm sm:text-base">The Seller Name and their VAT registration Number</span>
                </li>
                
                <li className="flex items-start">
                  <span className="text-[#366A00] mr-3 font-bold text-lg">»</span>
                  <span className="text-gray-700 text-sm sm:text-base">Time stamp of the Electronic Invoice or Credit/Debit Note (date and time)</span>
                </li>
                
                <li className="flex items-start">
                  <span className="text-[#366A00] mr-3 font-bold text-lg">»</span>
                  <span className="text-gray-700 text-sm sm:text-base">Electronic Invoice or Credit/Debit note amount (with VAT) & VAT amount</span>
                </li>
                
                <li className="flex items-start">
                  <span className="text-[#366A00] mr-3 font-bold text-lg">»</span>
                  <span className="text-gray-700 text-sm sm:text-base">Hash of XML Electronic Invoice or Credit/Debit Note</span>
                </li>
                
                <li className="flex items-start">
                  <span className="text-[#366A00] mr-3 font-bold text-lg">»</span>
                  <span className="text-gray-700 text-sm sm:text-base">Cryptographic stamp</span>
                </li>
                <ul className="ml-8 mt-3 space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#366A00] mr-3 font-bold">»</span>
                    <span className="text-gray-700 text-sm">For Simplified Tax Invoices and their associated notes, the stamp is generated by the E-Invoice Generating Solution</span>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="text-[#366A00] mr-3 font-bold">»</span>
                    <span className="text-gray-700 text-sm">For Tax Invoices and their associated notes that are integrated with ZATCA's platform, the stamp is generated by ZATCA's platform</span>
                  </li>
                </ul>
                
                <li className="flex items-start">
                  <span className="text-[#366A00] mr-3 font-bold text-lg">»</span>
                  <span className="text-gray-700 text-sm sm:text-base">The public key used to generate the Cryptographic stamp</span>
                </li>
                <ul className="ml-8 mt-3 space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#366A00] mr-3 font-bold">»</span>
                    <span className="text-gray-700 text-sm">For Simplified Tax Invoices and their associated notes, this is the public key of the E-Invoice Generating Solution</span>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="text-[#366A00] mr-3 font-bold">»</span>
                    <span className="text-gray-700 text-sm">For Tax Invoices and their associated notes that are integrated with ZATCA's platform, this field is optional and is the public key of ZATCA's platform</span>
                  </li>
                </ul>
                
                <li className="flex items-start">
                  <span className="text-[#366A00] mr-3 font-bold text-lg">»</span>
                  <span className="text-gray-700 text-sm sm:text-base">In the case of Simplified Tax Invoices and their associated notes, the Authority's Portal Cryptographic stamp of the public key of the E-Invoice Solution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Included Services and Outcomes Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-center text-[#366A00] mb-2">Included Services and Outcomes</h3>
        <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
          Our comprehensive solution provides specialized dashboards for different teams in your organization.
        </p>

        {/* AR & Finance Team Section */}
        <div className="mb-10">
          <h4 className="text-lg font-medium text-center text-[#366A00] mb-6">Your AR & Finance team Gets</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white border border-gray-200 p-6 rounded-md shadow-sm cursor-pointer"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-3 border-b pb-2">
                <span className="text-gray-400 text-xs">01</span>
                <h5 className="text-gray-800 font-medium">Seamless Integrations</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li>Pre-built ERP specific connectors</li>
                <li>REST APIs, SFTP, File Share / Upload</li>
                <li>Source friendly templates / payloads</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 p-6 rounded-md shadow-sm cursor-pointer"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-3 border-b pb-2">
                <span className="text-gray-400 text-xs">02</span>
                <h5 className="text-gray-800 font-medium">Process by Dept / Location / Company</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li>Upload data by location or Business Unit</li>
                <li>Process eInvoice AR activity at any level</li>
                <li>Consolidate or Segregate at will.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 p-6 rounded-md shadow-sm cursor-pointer"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-3 border-b pb-2">
                <span className="text-gray-400 text-xs">03</span>
                <h5 className="text-gray-800 font-medium">Accurate Documents</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li>Tax IDs validated</li>
                <li>VAT Chapter Codes validated</li>
                <li>Tax determination performed</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Tax & Compliance Team Section */}
        <div>
          <h4 className="text-lg font-medium text-center text-[#366A00] mb-6">Your Tax & Compliance team Gets</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white border border-gray-200 p-6 rounded-md shadow-sm cursor-pointer"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-3 border-b pb-2">
                <span className="text-gray-400 text-xs">04</span>
                <h5 className="text-gray-800 font-medium">End-to-End Compliance</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li>Comprehensive Audit Trail</li>
                <li>Precision Reporting</li>
                <li>Versioning By-Time</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 p-6 rounded-md shadow-sm cursor-pointer"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-3 border-b pb-2">
                <span className="text-gray-400 text-xs">05</span>
                <h5 className="text-gray-800 font-medium">Automated VAT Reporting</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li>Automated transfer of Sales data for VAT Reporting</li>
                <li>Compute, Prepare and Process VAT Reports.</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 p-6 rounded-md shadow-sm cursor-pointer"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-3 border-b pb-2">
                <span className="text-gray-400 text-xs">06</span>
                <h5 className="text-gray-800 font-medium">Enable Reconciliations with</h5>
              </div>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li>ERP / Source Systems</li>
                <li>B2B Partners</li>
                <li>Intra-Company</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnInvoiceComponent;