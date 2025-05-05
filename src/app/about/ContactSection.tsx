'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="pt-20 pb-32 bg-gradient-to-b from-gray-200 via-gray-100 to-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/80 via-transparent to-transparent h-48"></div>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium text-black text-center mb-6"
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
          <button className="px-6 py-2 border border-[#1B3D69] text-[#1B3D69] bg-transparent hover:bg-white transition-colors duration-300">
            Download the Brochure
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
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
                Call us +973-8889 2927
              </button>
            </div>

            <div className="bg-white backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-shadow rounded-sm">
              <h4 className="text-xl text-black font-medium mb-4 text-center">USA</h4>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                Flat No.35, Building No.56, Street No.456, Block No.56, Manhattan Valley, California, 901203
              </p>
            </div>

            <div className="bg-white backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-shadow rounded-sm">
              <h4 className="text-xl text-black font-medium mb-4 text-center">India</h4>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                M-95, Connaught Circus, New Delhi - 110001
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
            <div className="bg-white backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-shadow min-h-[540px] rounded-sm -translate-y-8">
              <h3 className="text-xl text-black font-medium mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none bg-white/80 placeholder-black"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none bg-white/80 placeholder-black"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none bg-white/80 placeholder-black"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none bg-white/80 placeholder-black"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none resize-none bg-white/80 placeholder-black"
                  required
                />
                <div className="flex items-start gap-2 mb-4">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I accept the privacy policy
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-2 border border-[#1B3D69] text-[#1B3D69] bg-transparent hover:bg-white transition-colors duration-300"
                  >
                    Send
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
