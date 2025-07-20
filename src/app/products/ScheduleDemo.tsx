'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const ScheduleDemo = () => {

   const router = useRouter()

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
    <>
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
          </div>
        </div>
      </section>
      {/* CTA Button below the section */}
      <div className="w-full flex justify-center py-8" style={{ backgroundColor: '#0F1A42' }}>
        <button 
          className="px-10 py-3 rounded-lg cursor-pointer border border-white text-white font-bold text-lg shadow-lg transition-all duration-300 bg-[#2D3A62] hover:bg-[#366A00] hover:text-white"
          onClick={() => router.push('/contact')}
        >
          Get in Touch
        </button>
      </div>
    </>
  );
};

export default ScheduleDemo;
