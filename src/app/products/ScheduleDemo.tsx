'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ScheduleDemo = () => {
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
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
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
    }, 1500);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#0F1A42' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
          {/* Left side content */}
          <motion.div 
            className="w-full lg:w-1/2 text-white pt-8 md:pt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Schedule A Demo</h2>
            <p className="text-sm">
              If you want to see a specific product feature or prefer a live 
              demonstration, please fill out the form below and we'll contact you 
              to schedule a live demonstration with one of our platform experts. 
              We'll show you how the products work and how easy they are to 
              set up and use.
            </p>
          </motion.div>

          {/* Right side form */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#2D3A62] p-8 md:p-10 rounded-lg shadow-xl">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-5">
                  {/* Left column - input fields */}
                  <div className="w-full md:w-1/2 space-y-5">
                    <input 
                      type="text" 
                      name="interestedDemo" 
                      placeholder="Interested Demo" 
                      className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none"
                      value={formData.interestedDemo}
                      onChange={handleChange}
                      required
                    />
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name" 
                      className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input 
                      type="tel" 
                      name="contactNo" 
                      placeholder="Contact No." 
                      className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none"
                      value={formData.contactNo}
                      onChange={handleChange}
                      required
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Right column - message textarea */}
                  <div className="w-full md:w-1/2 h-full">
                    <textarea 
                      name="message" 
                      placeholder="Message" 
                      className="w-full h-full px-4 py-3 rounded bg-white text-gray-800 focus:outline-none resize-none"
                      style={{ minHeight: '250px' }} /* Adjusted to a more balanced height */
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="flex justify-center mt-6">
                  <button 
                    type="submit" 
                    className={`px-12 py-2.5 rounded border border-white text-white font-medium transition-all duration-300 w-full md:w-auto ${
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
