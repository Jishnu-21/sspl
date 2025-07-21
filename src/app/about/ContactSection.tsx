'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
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
    const loadingToast = toast.loading('Sending your message...');
    
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
          fullName: '',
          email: '',
          phone: '',
          subject: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-200 via-gray-100 to-white">
      <Toaster position="top-right" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/80 via-transparent to-transparent h-48"></div>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black text-center  text-comfortaa"
        >
          Future-Ready Analytics for Your Business
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-1 gap-8 max-w-6xl mx-auto relative">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl text-black font-medium mb-4">
                Got a question?<br/>
                We would love to hear from you
              </h3>
              <button className="px-6 py-2 border border-[#1B3D69] text-[#1B3D69] bg-transparent hover:bg-white transition-colors duration-300">
                Call us +91-11-23765368
              </button>
            </div>

            <div className="bg-[#1B3D69] backdrop-blur-sm p-4 shadow-lg transition-shadow rounded-md hover:scale-105 hover:bg-[#366A00] hover:shadow-[0_4px_32px_0_#366A00] duration-300">
              <h4 className="text-xl text-white font-semibold mb-3 text-left">INDIA</h4>
              <p className="text-white text-base leading-relaxed text-left">
                <span className="font-bold text-lg md:text-xl lg:text-2xl">Substratal Solutions Private Limited</span><br/>
                M-91, 1st. Floor, Connaught Circus,<br/>
                New Delhi - 110001, India<br/>
                T: ‪+91-11-2376 5368‬<br/>
                M: ‪+91-98101 02927‬<br/>
                E: info@sspl.net.in<br/>
                CIN: U72300DL2008PTC182090
              </p>
            </div>
            <div className="bg-[#1B3D69] backdrop-blur-sm p-4 shadow-lg transition-shadow rounded-md hover:scale-105 hover:bg-[#366A00] hover:shadow-[0_4px_32px_0_#366A00] duration-300">
              <h4 className="text-xl text-white font-semibold mb-3 text-left">BAHRAIN</h4>
              <p className="text-white text-base leading-relaxed text-left">
                <span className="font-bold text-lg md:text-xl lg:text-2xl">Substratal Solutions Middle East WLL</span><br/>
                BCCI, 2145, 2nd. Floor, Building 934,<br/>
                Road No.1015, Block No. 410,<br/>
                Kingdom of Bahrain<br/>
                M: ‪+973-3889 2927‬<br/>
                E: info@ssplme.com<br/>
                CR: 185894-1
              </p>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 shadow-xl transition-shadow min-h-[585px] rounded-xl border-2 border-gray-200 hover:scale-105 hover:shadow-[0_4px_32px_0_#1B3D69] hover:border-[#1B3D69] duration-300">
              <h3 className="text-xl text-gray-900 font-medium mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] outline-none bg-white placeholder-gray-400 text-gray-900 rounded-lg shadow-sm transition-all duration-300"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] outline-none bg-white placeholder-gray-400 text-gray-900 rounded-lg shadow-sm transition-all duration-300"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] outline-none bg-white placeholder-gray-400 text-gray-900 rounded-lg shadow-sm transition-all duration-300"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] outline-none bg-white placeholder-gray-400 text-gray-900 rounded-lg shadow-sm transition-all duration-300"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] outline-none resize-none bg-white placeholder-gray-400 text-gray-900 rounded-lg shadow-sm min-h-[180px] transition-all duration-300"
                  required
                />
                <div className="flex items-start gap-2 mb-2">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-900">
                    I accept the privacy policy
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold max-w-[160px] mt-6 px-8 py-2 border-2 border-[#366A00] bg-[#366A00] text-white hover:bg-[#2d5500] hover:text-white hover:border-[#366A00] transition-colors duration-300 cursor-pointer rounded-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
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

export default ContactSection;
