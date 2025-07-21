'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import './contact-form.css'; // Import custom CSS for placeholder styling
import { BASE_URL } from '../config/endpoint';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    country: '',
    organisation: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    india: '',
    middleEast: ''
  });

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      const indiaTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      });
      const bahrainTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Bahrain'
      });
      setCurrentTime({
        india: indiaTime,
        middleEast: bahrainTime
      });
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields (Name, Email, Message)');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Submitting your message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!', { id: loadingToast });
        // Reset form
        setFormData({
          name: '',
          email: '',
          city: '',
          country: '',
          organisation: '',
          message: ''
        });
      } else {
        toast.error(data.error || 'Failed to send message', { id: loadingToast });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', { id: loadingToast });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      country: 'INDIA',
      company: 'Substratal Solutions Private Limited',
      address: 'M-91, 1st. Floor, Connaught Circus, New Delhi - 110001, India',
      tel: '+91-11-2376 5368',
      mobile: '+91-98101 02927',
      email: 'info@sspl.net.in',
      cin: 'U72300DL2008PTC182090'
    },
    {
      country: 'BAHRAIN',
      company: 'Substratal Solutions Middle East WLL',
      address: 'BCCI, 2145, 2nd. Floor, Building 934, Road No.1015, Block No. 410, Kingdom of Bahrain',
      mobile: '+973-3889 2927',
      email: 'info@ssplme.com',
      cr: '185894-1'
    }
  ];

  return (
    <div className="bg-white py-6">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Side - Office Locations */}
          <motion.div 
            className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Offices
            </h2>
            <div className="w-full h-[1px] bg-gray-200 mb-6 sm:mb-8"></div>
            {/* Show current time for India and Middle East */}
         
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {offices.map((office, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex flex-col space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{office.country}</h3>
                      {/* Show time for this location */}
                      <span className="text-xs sm:text-sm text-[#366A00] font-mono font-semibold bg-gray-100 px-2 py-1 rounded">
                        {office.country === 'INDIA' ? (currentTime.india || '--:-- --') : (currentTime.middleEast || '--:-- --')}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-2">
                      {office.company && <p className="font-bold text-base sm:text-lg">{office.company}</p>}
                      <p className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#366A00] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="break-words">{office.address}</span>
                      </p>
                      {office.tel && (
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#366A00] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {office.tel}
                        </p>
                      )}
                      {office.mobile && (
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#366A00] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          {office.mobile}
                        </p>
                      )}
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#366A00] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        <a href={`mailto:${office.email}`} className="text-[#366A00] hover:underline break-all">{office.email}</a>
                        </p>
                      {office.cin && (
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#366A00] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {office.cin}
                        </p>
                      )}
                      {office.cr && (
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#366A00] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {office.cr}
                        </p>
                      )}
          </div>
        </div>
                </motion.div>
              ))}
        </div>
          </motion.div>
        
          {/* Right Side - Contact Form */}
          <motion.div 
            className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              GET IN TOUCH WITH US
            </h2>
            <div className="w-full h-[1px] bg-gray-200 mb-6 sm:mb-8"></div>
            <p className="text-gray-500 text-sm md:text-base mb-6 sm:mb-8">
              Get in touch with us by filling the form given below. We will get back to you at the earliest.
            </p>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
                  required
                />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
                  required
                />
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
                />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
                />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Organisation"
                  className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm placeholder-gray-400 text-gray-900 transition-all duration-300"
              />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                  rows={6}
                  className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] shadow-sm resize-none placeholder-gray-400 text-gray-900 transition-all duration-300 md:min-h-[180px]"
                required
              />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="mt-6 sm:mt-8"
              >
              <button
                type="submit"
                disabled={isSubmitting}
                  className={`w-full bg-[#366A00] text-white cursor-pointer text-sm font-medium py-3 px-6 rounded-lg border border-[#366A00] hover:bg-[#2d5500] hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit Message'}
              </button>
              </motion.div>
              <Toaster position="top-right" />
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;