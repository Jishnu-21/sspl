'use client';

import React, { useState } from 'react';
import { BASE_URL } from '../config/endpoint';

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
    partnerType: 'Associated Partner'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch(`http://${BASE_URL}/api/partner`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSuccess('Thank you for your interest! We will contact you soon.');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        message: '',
        partnerType: 'Associated Partner'
      });
    } catch (err: any) {
      setError(err.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>
        </div>
        {success && <div className="text-green-600 text-sm pt-1">{success}</div>}
        {error && <div className="text-red-600 text-sm pt-1">{error}</div>}
        <div className="pt-3">
          <button
            type="submit"
            className="w-full bg-[#366A00] text-white cursor-pointer text-sm font-medium py-3 px-6 rounded-lg border border-[#366A00] hover:bg-[#2d5500] hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] mb-0 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
