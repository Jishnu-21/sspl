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
    <div className="bg-[#1B3D69] shadow-md px-6 pt-5 pb-4 rounded-lg border border-[#1B3D69] w-full" style={{ maxWidth: '450px', minHeight: '320px' }}>
      <h3 className="text-base font-semibold text-left mb-4 text-white pl-1">Become a Partner</h3>
      
      <form onSubmit={handleSubmit} className="space-y-2.5">
        <div className="space-y-1 mb-1">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="associated"
              name="partnerType"
              className="w-4 h-4 text-[#366A00] focus:ring-[#366A00] bg-[#1B3D69] border-white"
              checked={formData.partnerType === 'Associated Partner'}
              onChange={() => handleRadioChange('Associated Partner')}
            />
            <label htmlFor="associated" className="text-sm text-white">Associated Partner</label>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="reseller"
              name="partnerType"
              className="w-4 h-4 text-[#366A00] focus:ring-[#366A00] bg-[#1B3D69] border-white"
              checked={formData.partnerType === 'Reseller'}
              onChange={() => handleRadioChange('Reseller')}
            />
            <label htmlFor="reseller" className="text-sm text-white">Reseller</label>
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
              className="w-full p-2.5 border border-white rounded focus:outline-none focus:border-[#366A00] text-white bg-[#1B3D69] placeholder-white text-sm"
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
              className="w-full p-2.5 border border-white rounded focus:outline-none focus:border-[#366A00] text-white bg-[#1B3D69] placeholder-white text-sm"
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
              className="w-full p-2.5 border border-white rounded focus:outline-none focus:border-[#366A00] text-white bg-[#1B3D69] placeholder-white text-sm"
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
              className="w-full p-2.5 border border-white rounded focus:outline-none focus:border-[#366A00] text-white bg-[#1B3D69] placeholder-white text-sm resize-none"
              required
            />
          </div>
        </div>
        
        <div className="pt-3">
          <button
            type="submit"
            className="w-full bg-white hover:bg-[#366A00] hover:text-white text-[#1B3D69] font-medium py-2 cursor-pointer rounded border border-white transition-all duration-200  mb-0 text-sm"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
