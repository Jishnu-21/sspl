'use client';

import React, { useState } from 'react';

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
    partnerType: 'Associated Partner'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      partnerType: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="bg-white shadow-md px-6 pt-5 pb-4 rounded-lg border border-gray-200 w-full" style={{ maxWidth: '450px', minHeight: '320px' }}>
      <h3 className="text-xl font-bold text-left mb-6 text-gray-900 pl-1">Become a Partner</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1 mb-1">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="associated"
              name="partnerType"
              className="w-4 h-4 text-[#366A00] focus:ring-[#366A00] bg-white border-gray-300"
              checked={formData.partnerType === 'Associated Partner'}
              onChange={() => handleRadioChange('Associated Partner')}
            />
            <label htmlFor="associated" className="text-sm text-gray-900">Associated Partner</label>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="reseller"
              name="partnerType"
              className="w-4 h-4 text-[#366A00] focus:ring-[#366A00] bg-white border-gray-300"
              checked={formData.partnerType === 'Reseller'}
              onChange={() => handleRadioChange('Reseller')}
            />
            <label htmlFor="reseller" className="text-sm text-gray-900">Reseller</label>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
              required
            />
          </div>
          
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
              required
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID"
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
              required
            />
          </div>
          
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={2}
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300 resize-none"
              required
            />
          </div>
        </div>
        
        <div className="pt-3">
          <button
            type="submit"
            className="w-full bg-[#366A00] text-white cursor-pointer text-sm font-medium py-3 px-6 rounded-lg border border-[#366A00] hover:bg-[#2d5500] hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] mb-0"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
