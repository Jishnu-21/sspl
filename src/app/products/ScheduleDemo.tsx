'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';

const ScheduleDemo = () => {
  // Add Toaster component at the top level of the component
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    message: '',
    interestedDemo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    if (!formData.name || !formData.email || !formData.contactNo || !formData.interestedDemo) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    const loadingToast = toast.loading('Submitting your request...');
    
    try {
      const response = await fetch('/api/schedule-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Demo request sent successfully!', { id: loadingToast });
        setSubmitSuccess(true);
        
        // Reset form after success
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            name: '',
            email: '',
            contactNo: '',
            message: '',
            interestedDemo: ''
          });
        }, 3000);
      } else {
        toast.error(data.error || 'Failed to send demo request', { id: loadingToast });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', { id: loadingToast });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-2 sm:py-4 md:py-6 lg:py-8" style={{ backgroundColor: '#0F1A42' }}>
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 lg:gap-16">
          {/* Left side content */}
          <motion.div 
            className="w-full lg:w-1/2 text-white pt-4 sm:pt-6 md:pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Schedule A Demo</h2>
            <p className="text-sm sm:text-base">
              If you want to see a specific product feature or prefer a live 
              demonstration, please fill out the form below and we'll contact you 
              to schedule a live demonstration with one of our platform experts. 
              We'll show you how the products work and how easy they are to 
              set up and use.
            </p>
          </motion.div>

          {/* Right side form */}
          <motion.div 
            className="w-full lg:w-1/2 mt-6 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-[#2D3A62]/70 p-5 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-xl border border-white/10 relative overflow-hidden">
              {/* Glassmorphic highlights */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4 sm:gap-5">
                  {/* Left column - input fields */}
                  <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 flex flex-col">
                    <input 
                      type="text" 
                      name="interestedDemo" 
                      placeholder="Interested Demo" 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded bg-white text-gray-800 focus:outline-none text-sm sm:text-base"
                      value={formData.interestedDemo}
                      onChange={handleChange}
                      required
                    />
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name" 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded bg-white text-gray-800 focus:outline-none text-sm sm:text-base"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input 
                      type="tel" 
                      name="contactNo" 
                      placeholder="Contact No." 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded bg-white text-gray-800 focus:outline-none text-sm sm:text-base"
                      value={formData.contactNo}
                      onChange={handleChange}
                      required
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded bg-white text-gray-800 focus:outline-none text-sm sm:text-base"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Right column - message textarea */}
                  <div className="w-full md:w-1/2 flex flex-col mt-4 md:mt-0">
                    <textarea 
                      name="message" 
                      placeholder="Message" 
                      className="w-full flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded bg-white text-gray-800 focus:outline-none resize-none text-sm sm:text-base"
                      style={{ height: 'calc(100% - 1px)' }} /* Ensures exact height match */
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="flex justify-center mt-5 sm:mt-6">
                  <button 
                    type="submit" 
                    className={`px-8 sm:px-12 py-2 sm:py-2.5 rounded cursor-pointer border border-white text-white font-medium transition-all duration-300 w-full sm:w-auto ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white hover:text-[#2D3A62]'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : submitSuccess ? 'Submitted!' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleDemo;
