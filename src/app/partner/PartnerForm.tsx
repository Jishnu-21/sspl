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
    <div className="bg-white shadow-sm p-4 w-full max-w-[220px]">
      <h3 className="text-xl text-black font-medium mb-2">Become a Partner</h3>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-1 mb-1">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="associated"
              name="partnerType"
              className="w-4 h-4 text-gray-400"
              checked={formData.partnerType === 'Associated Partner'}
              onChange={() => handleRadioChange('Associated Partner')}
            />
            <label htmlFor="associated" className="text-sm text-gray-600">Associated Partner</label>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="reseller"
              name="partnerType"
              className="w-4 h-4 text-gray-400"
              checked={formData.partnerType === 'Reseller'}
              onChange={() => handleRadioChange('Reseller')}
            />
            <label htmlFor="reseller" className="text-sm text-gray-600">Reseller</label>
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
              className="w-full text-black px-3 py-1.5 border border-gray-300 text-sm"
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
              className="w-full text-black px-3 py-1.5 border border-gray-300 text-sm"
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
              className="w-full text-black px-3 py-1.5 border border-gray-300 text-sm"
              required
            />
          </div>
          
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={3}
              className="w-full text-black px-3 py-1.5 border border-gray-300 text-sm resize-none"
              required
            />
          </div>
        </div>
        
        <div className="pt-1">
          <button
            type="submit"
            className="px-6 py-1.5 border border-gray-300 text-gray-800 text-sm text-black"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
