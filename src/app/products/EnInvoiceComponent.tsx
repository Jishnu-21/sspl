'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EnInvoiceComponent = () => {
  // Dashboard images for the grid
  const dashboards = [
    { id: 1, image: '/images/products/dashboard-placeholder.jpg' },
    { id: 2, image: '/images/products/dashboard-placeholder.jpg' },
    { id: 3, image: '/images/products/dashboard-placeholder.jpg' },
    { id: 4, image: '/images/products/dashboard-placeholder.jpg' },
    { id: 5, image: '/images/products/dashboard-placeholder.jpg' },
    { id: 6, image: '/images/products/dashboard-placeholder.jpg' },
  ];

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
        <div className="max-w-4xl mx-auto bg-gray-200 p-8 rounded-md shadow-md">
          <h4 className="text-xl font-medium mb-6 text-gray-800">The generated QR codes should contain the following details–</h4>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-[#366A00] mr-3 font-bold">»</span>
              <span className="text-gray-700">The Seller Name and their VAT registration Number</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-[#366A00] mr-3 font-bold">»</span>
              <span className="text-gray-700">Time stamp of the Electronic Invoice or Credit/Debit Note (date and time)</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-[#366A00] mr-3 font-bold">»</span>
              <span className="text-gray-700">Electronic Invoice or Credit/Debit note amount (with VAT) & VAT amount</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-[#366A00] mr-3 font-bold">»</span>
              <span className="text-gray-700">Hash of XML Electronic Invoice or Credit/Debit Note</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-[#366A00] mr-3 font-bold">»</span>
              <span className="text-gray-700">Cryptographic stamp</span>
              <ul className="ml-8 mt-3 space-y-4">
                <li className="flex items-start">
                  <span className="text-[#366A00] mr-3 font-bold">»</span>
                  <span className="text-gray-700">For Simplified Tax Invoices and their associated notes, the stamp is generated by the E-Invoice Generating Solution</span>
                </li>
                
                <li className="flex items-start">
                  <span className="text-[#366A00] mr-3 font-bold">»</span>
                  <span className="text-gray-700">For Tax Invoices and their associated notes that are integrated with ZATCA's platform, the stamp is generated by ZATCA's platform</span>
                </li>
              </ul>
            </li>
            
            <li className="flex items-start">
              <span className="text-[#366A00] mr-3 font-bold">»</span>
              <span className="text-gray-700">The public key used to generate the Cryptographic stamp</span>
              <ul className="ml-8 mt-3 space-y-4">
                <li className="flex items-start">
                  <span className="text-[#366A00] mr-3 font-bold">»</span>
                  <span className="text-gray-700">For Simplified Tax Invoices and their associated notes, this is the public key of the E-Invoice Generating Solution</span>
                </li>
                
                <li className="flex items-start">
                  <span className="text-[#366A00] mr-3 font-bold">»</span>
                  <span className="text-gray-700">For Tax Invoices and their associated notes that are integrated with ZATCA's platform, this field is optional and is the public key of ZATCA's platform</span>
                </li>
              </ul>
            </li>
            
            <li className="flex items-start">
              <span className="text-[#366A00] mr-3 font-bold">»</span>
              <span className="text-gray-700">In the case of Simplified Tax Invoices and their associated notes, the Authority's Portal Cryptographic stamp of the public key of the E-Invoice Solution</span>
            </li>
          </ul>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-white border border-gray-300 p-4 rounded-md shadow-sm flex items-center justify-center aspect-square">
              <img 
                src="/images/products/qr-code-sample-1.png" 
                alt="QR Code Sample 1" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white border border-gray-300 p-4 rounded-md shadow-sm flex items-center justify-center aspect-square">
              <img 
                src="/images/products/qr-code-sample-2.png" 
                alt="QR Code Sample 2" 
                className="max-w-full max-h-full object-contain"
              />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
