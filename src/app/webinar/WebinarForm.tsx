'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WebinarForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    job: '',
    companyName: '',
    city: '',
    country: '',
    workEmail: '',
    phoneNo: '',
    annualRevenue: '',
    employees: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form or show success message
    alert('Thank you for registering for the webcast!');
  };

  return (
    <div className="flex flex-col md:flex-row md:items-stretch gap-10 max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Left side - Webinar details */}
      <motion.div 
        className="flex-1 md:h-full flex flex-col"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-green-800 mb-6">Recorded Webinar</h2>
        <div className="space-y-4 text-gray-800 flex-grow">
          <p className="font-medium">Training on Big Data Analytics</p>
          <p>by Mr. Nishith Seth, Managing Director, SSPL</p>
          
          <p className="font-medium mt-6">Computer Forensic & Cyber Crimes</p>
          <p>by Mr. Nandkumar Saravade</p>
          
          <p className="font-medium mt-6">Managing Risk & Fraud from IA Perspective</p>
          <p>by Mr. Kajal Kundu, Chief Internal Auditor, EIM Limited</p>
          
          <p className="font-medium mt-6">Risk & Fraud Management</p>
          <p>by Mr. Amit Bansal, Partner, Deloitte</p>
          
          <p className="font-medium mt-6">Why Current Fraud Management Framework Fails</p>
          
          <p className="font-medium mt-6">by Mr. V. Swaminathan, Chief Internal Auditor, Godrej Industries Limited</p>
          <p>and Mr. Surajit Dalbash, Partner, Deloitte</p>
          
          <p className="font-medium mt-6">Panel Discussion on Predictive Analytics</p>
          <p>by Mr. V. Swaminathan, Chief Internal Auditor, Godrej Industries Limited</p>
          
          <p className="font-medium mt-6">Fraud Ethics & Morals,</p>
          <p>Mr. P R Ramesh, Chairman, Deloitte, India</p>
          
          <p className="font-medium mt-6">Confused & Repetition not fit for Fraud Detection</p>
          <p>by Uday Khanna, President, BCCI</p>
          
          <p className="font-medium mt-6">Soft Fraud Governance</p>
          <p>by Dr. P. Nandagopal, Managing Director, India First Life Insurance</p>
          
          <p className="font-medium mt-6">SSPL Analyzer Demo</p>
          <p>by Mr. Nishith Seth, Managing Director, SSPL</p>
          
          <p className="font-medium mt-6">SSPL Introductory Demo of Analyzer Tool</p>
          <p>by Mr. Nishith Seth, Managing Director, SSPL</p>
        </div>
      </motion.div>
      
      {/* Right side - Registration form */}
      <motion.div 
        className="flex-1 bg-white px-6 pt-6 pb-5 rounded-lg shadow-md mx-auto md:mx-0 border border-gray-200 md:h-full flex flex-col"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ maxWidth: '450px', minHeight: '580px' }}
      >
        <h3 className="text-base font-semibold text-left mb-4 text-green-800 pl-1">Complete the form below to access<br/>the webcast</h3>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:border-green-600 text-gray-600 bg-white text-sm"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <input
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              placeholder="Job"
              className="p-2.5 border border-gray-200 rounded focus:outline-none focus:border-green-600 text-gray-600 bg-gray-50 text-sm w-full"
            />
            
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="p-2.5 border border-gray-200 rounded focus:outline-none focus:border-green-600 text-gray-600 bg-gray-50 text-sm w-full"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="p-2.5 border border-gray-200 rounded focus:outline-none focus:border-green-600 text-gray-600 bg-gray-50 text-sm w-full"
            />
            
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="p-2.5 border border-gray-200 rounded focus:outline-none focus:border-green-600 text-gray-600 bg-gray-50 text-sm w-full"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <input
              type="email"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              placeholder="Work Email ID"
              className="p-2.5 border border-gray-200 rounded focus:outline-none focus:border-green-600 text-gray-600 bg-gray-50 text-sm w-full"
              required
            />
            
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Phone no."
              className="p-2.5 border border-gray-200 rounded focus:outline-none focus:border-green-600 text-gray-600 bg-gray-50 text-sm w-full"
            />
          </div>
          
          <div>
            <select
              name="annualRevenue"
              value={formData.annualRevenue}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-200 rounded focus:outline-none focus:border-green-600 text-gray-500 bg-gray-50 appearance-none text-sm"
              style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
            >
              <option value="" disabled selected>What is annual revenue of your company?</option>
              <option value="less than 1M">Less than $1M</option>
              <option value="1M-10M">$1M - $10M</option>
              <option value="10M-50M">$10M - $50M</option>
              <option value="50M-100M">$50M - $100M</option>
              <option value="more than 100M">More than $100M</option>
            </select>
          </div>
          
          <div>
            <select
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-200 rounded focus:outline-none focus:border-green-600 text-gray-500 bg-gray-50 appearance-none text-sm"
              style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
            >
              <option value="" disabled selected>No. of employee</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="501-1000">501-1000</option>
              <option value="1000+">1000+</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 rounded border border-gray-300 transition-all duration-200 mt-3 mb-0 text-sm"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default WebinarForm;
