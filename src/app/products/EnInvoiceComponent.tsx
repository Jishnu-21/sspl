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
          {dashboards.map((dashboard) => (
            <div 
              key={dashboard.id} 
              className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-center aspect-square"
            >
              <p className="text-gray-600 text-sm font-medium">Dashboards</p>
            </div>
          ))}
        </div>
      </div>

      {/* QR Code Requirements Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-center text-[#366A00] mb-2">QR Code Requirements</h3>
        <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
          The QR code must be provided within the printed Simplified (all phases) and Standard e-Invoices (from integration phase). They are used by customers for verifying their invoices and ensuring that they are compliant with ZATCA/GAZT requirements.
        </p>

        {/* QR Code Examples */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-center aspect-video">
              {/* Main QR code example */}
              <p className="text-gray-600 text-sm font-medium">QR Code Example</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-center aspect-square">
              {/* Smaller QR code example 1 */}
              <p className="text-gray-600 text-sm font-medium">QR Code Sample</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-center aspect-square">
              {/* Smaller QR code example 2 */}
              <p className="text-gray-600 text-sm font-medium">QR Code Sample</p>
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
          <h4 className="text-lg font-medium text-center text-gray-800 mb-6">Your AR & Finance team Gets</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-center aspect-square">
              <p className="text-gray-600 text-sm font-medium">Dashboards</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-center aspect-square">
              <p className="text-gray-600 text-sm font-medium">Dashboards</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-center aspect-square">
              <p className="text-gray-600 text-sm font-medium">Dashboards</p>
            </div>
          </div>
        </div>

        {/* Tax & Compliance Team Section */}
        <div>
          <h4 className="text-lg font-medium text-center text-gray-800 mb-6">Your Tax & Compliance team Gets</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-center aspect-square">
              <p className="text-gray-600 text-sm font-medium">Dashboards</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-center aspect-square">
              <p className="text-gray-600 text-sm font-medium">Dashboards</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-center aspect-square">
              <p className="text-gray-600 text-sm font-medium">Dashboards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnInvoiceComponent;
