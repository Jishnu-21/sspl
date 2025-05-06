'use client'
import React from 'react';
import { motion } from 'framer-motion';

const AssureBIComponent = () => {
  return (
    <div>
      <p className="text-gray-800 mb-4">
        <span className="font-bold">assureBI</span> is a management control and monitoring platform that is designed to help your company be more responsive and efficient. assureBI gives your company powerful tools that can help you to quickly identify and control the exceptions, before they could create losses to your business and boost your profitability. It helps the users to analyze data directly from the source or from the extracted form with business intelligence precision.
      </p>
      <p className="text-gray-800 mb-4">
        Blazing fast Business Intelligence service and application to analyze Large Databases, create awesome reports and share real-time dashboards.
      </p>
      <p className="text-gray-800 mb-6">
        assureBI runs on the cloud as well as on your enterprise servers.
      </p>
      
      {/* Why assureBI makes more sense section */}
      <div className="mt-8 mb-12 w-full">
        <h3 className="text-2xl font-semibold text-[#366A00] mb-4">Why assureBI makes more sense to business users and for analytics.</h3>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Web Interface</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Dashboards</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Analysis & Reporting</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Continuous Control Monitoring (CCM)</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Custom Reports</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Cloud Ready with Mobile App to Monitor dashboards</p>
          </div>
        </div>
      </div>
      
      {/* Industries section */}
      <div className="mb-8 w-full">
        <h3 className="text-2xl font-semibold text-[#366A00] mb-4">Industries</h3>
        <div className="h-[1px] bg-gray-400 w-full border-t border-gray-300 mb-6"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Banking & Finance</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Retail</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Manufacturing</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Telecom</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Insurance</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm flex flex-col items-center justify-center text-center h-[100px]">
            <p className="text-sm font-medium">Logistics and Hospitality</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssureBIComponent;
