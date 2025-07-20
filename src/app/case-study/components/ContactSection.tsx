'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    });
  };

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row">
        {/* Left side - Company Information */}
        <motion.div 
          className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl text-black font-bold mb-6">We're here to help you</h2>
          <p className="text-gray-700 mb-4">
            No matter what questions you have, we're here to work with you on your terms.
          </p>
          
          <div className="mb-8">
            <p className="font-medium text-black mb-2">Mail to a Expert Team</p>
            <a href="mailto:info@sspl.net.in" className="text-black hover:underline">
              info@sspl.net.in
            </a>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-black mb-2">Consult directly with Expert</p>
            <p className="mb-1">
              <a href="tel:+911123765368" className="text-black hover:underline">+91-11-23765368</a>,{' '}
              <a href="tel:43552927" className="text-black hover:underline">43552927</a>
            </p>
            <p>
              <a href="tel:+919810102927" className="text-black hover:underline">+91-9810102927</a>
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl text-black font-bold mb-4">SSPL Middle East</h3>
            <p className="font-medium text-black mb-2">Mail to a Expert Team</p>
            <a href="mailto:admin@ssplme.com" className="text-black hover:underline">
              admin@ssplme.com
            </a>
          </div>
          
          <div>
            <p className="font-medium text-black mb-2">Consult directly with Expert</p>
            <p className="mb-1">
              <a href="tel:+9733892927" className="text-black hover:underline">+973-3892 2927</a> (Nishith Seth),
            </p>
            <p>
              <a href="tel:+9733920 4149" className="text-black hover:underline">+973-3920 4149</a> (BVS Prathap)
            </p>
          </div>
        </motion.div>
        
        {/* Right side - Contact Form */}
        <motion.div 
          className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl text-black font-bold mb-4">Send us details for any Support or Information.</h2>
          <p className="text-gray-600 mb-6">
            Our experienced & professional team will revert back to you with all possible options 
            and the best solution aligned to your needs.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 text-black md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-md bg-gray-50"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-md bg-gray-50"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 text-black md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-md bg-gray-50"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-md bg-gray-50"
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 h-32 mb-4"
              required
            ></textarea>
            
            <button
              type="submit"
              className="w-full py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition-colors"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
