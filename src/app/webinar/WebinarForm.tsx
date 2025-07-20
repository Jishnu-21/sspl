'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BASE_URL } from '../config/endpoint';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch(`http://${BASE_URL}/api/webinar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSuccess('Thank you for registering for the webcast!');
      setFormData({
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
    } catch (err: any) {
      setError(err.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-stretch gap-10 max-w-7xl mx-auto px-4 md:px-8 py-4" style={{ minHeight: '400px' }}>
      {/* Left side - Webinar details */}
      <motion.div 
        className="flex-1 md:h-full flex flex-col min-h-[600px]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h2 className="text-2xl font-bold text-green-800 mb-6">Recorded Webinar</h2>
        <div className="overflow-y-auto pr-2" style={{ minHeight: '700px', maxHeight: '700px' }}>
          <div className="grid gap-5 sm:grid-cols-1">
            {/* Webinar cards */}
            {[  
              {
                title: 'Training on Big Data Analytics',
                speaker: 'by Mr. Nishith Seth, Managing Director, SSPL',
              },
              {
                title: 'Computer Forensic & Cyber Crimes',
                speaker: 'by Mr. Nandkumar Saravade',
              },
              {
                title: 'Managing Risk & Fraud from IA Perspective',
                speaker: 'by Mr. Kajal Kundu, Chief Internal Auditor, EIM Limited',
              },
              {
                title: 'Risk & Fraud Management',
                speaker: 'by Mr. Amit Bansal, Partner, Deloitte',
              },
              {
                title: 'Why Current Fraud Management Framework Fails',
                speaker: 'by Mr. V. Swaminathan, Chief Internal Auditor, Godrej Industries Limited',
                speaker2: 'and Mr. Surajit Dalbash, Partner, Deloitte',
              },
              {
                title: 'Panel Discussion on Predictive Analytics',
                speaker: 'by Mr. V. Swaminathan, Chief Internal Auditor, Godrej Industries Limited',
              },
              {
                title: 'Fraud Ethics & Morals',
                speaker: 'Mr. P R Ramesh, Chairman, Deloitte, India',
              },
              {
                title: 'Confused & Repetition not fit for Fraud Detection',
                speaker: 'by Uday Khanna, President, BCCI',
              },
              {
                title: 'Soft Fraud Governance',
                speaker: 'by Dr. P. Nandagopal, Managing Director, India First Life Insurance',
              },
              {
                title: 'SSPL Analyzer Demo',
                speaker: 'by Mr. Nishith Seth, Managing Director, SSPL',
              },
              {
                title: 'SSPL Introductory Demo of Analyzer Tool',
                speaker: 'by Mr. Nishith Seth, Managing Director, SSPL',
              },
            ].map((webinar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-md shadow-md border-b-4 border-[#a4ce4e] flex flex-col min-h-[110px]"
                data-aos="fade-up"
                data-aos-delay={200 + idx * 100}
              >
                <div className="text-lg font-semibold mb-2 text-green-800 leading-snug">{webinar.title}</div>
                <div className="text-gray-800 text-sm">{webinar.speaker}</div>
                {webinar.speaker2 && (
                  <div className="text-gray-800 text-sm">{webinar.speaker2}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Right side - Registration form */}
      <motion.div 
        className="flex-1 bg-white px-6 pt-5 pb-4 rounded-lg shadow-md mx-auto md:mx-0 border border-gray-200 md:h-full flex flex-col min-h-[600px]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ maxWidth: '450px' }}
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h3 className="text-xl font-bold text-left mb-6 text-gray-900 pl-1">Complete the form below to access<br/>the webcast</h3>
        <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
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
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              placeholder="Job"
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
              disabled={loading}
            />
          </div>
          <div>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
              disabled={loading}
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
              disabled={loading}
            />
          </div>
          <div>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
              disabled={loading}
            />
          </div>
          <div>
            <input
              type="email"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              placeholder="Work Email ID"
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
              required
              disabled={loading}
            />
          </div>
          <div>
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Phone no."
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
              disabled={loading}
            />
          </div>
          <div>
            <select
              name="annualRevenue"
              value={formData.annualRevenue}
              onChange={handleChange}
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm text-gray-900 placeholder-gray-400 appearance-none text-sm"
              style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
              disabled={loading}
            >
              <option value="" disabled>What is annual revenue of your company?</option>
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
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm text-gray-900 placeholder-gray-400 appearance-none text-sm"
              style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
              disabled={loading}
            >
              <option value="" disabled>No. of employee</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="501-1000">501-1000</option>
              <option value="1000+">1000+</option>
            </select>
          </div>
          {success && <div className="text-green-600 text-sm pt-1">{success}</div>}
          {error && <div className="text-red-600 text-sm pt-1">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#366A00] text-white cursor-pointer text-sm font-medium py-3 px-6 rounded-lg border border-[#366A00] hover:bg-[#2d5500] hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] mt-4 mb-0 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default WebinarForm;
