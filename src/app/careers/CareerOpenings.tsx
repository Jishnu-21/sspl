'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface JobOpening {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  requirements?: string[];
  createdAt: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
}

// Utility to slugify job titles for URLs
function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const CareerOpenings = () => {
  const [openPositions, setOpenPositions] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMsg, setSubmitMsg] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/job-openings');
        if (!res.ok) throw new Error('Failed to fetch job openings');
        const data = await res.json();
        setOpenPositions(data);
      } catch (err: any) {
        setError(err.message || 'Error fetching job openings');
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    formData.append('position', form.position);
    formData.append('message', form.message);
    if (resume) {
      formData.append('resume', resume);
    }

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/general-application', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMsg('Application submitted successfully!');
        // Reset form
        setForm({ name: '', email: '', phone: '', position: '', message: '' });
        setResume(null);
        setTimeout(() => {
          setShowPopup(false);
          setSubmitStatus('idle');
          setSubmitMsg('');
        }, 2000);
      } else {
        setSubmitStatus('error');
        setSubmitMsg('Failed to submit application. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMsg('An error occurred. Please try again.');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSubmitStatus('idle');
    setSubmitMsg('');
  };

  return (
    <>
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b7c0b] mb-2">
              Our all open positions ({openPositions.length.toString().padStart(2, '0')})
            </h2>
          </motion.div>
          {loading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : openPositions.length === 0 ? (
            <div className="text-center text-gray-500">No job openings found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openPositions.map((job, index) => (
                <Link
                  key={job._id}
                  href={`/careers/openings/${slugify(job.title)}`}
                  className="group"
                  passHref
                >
                  <motion.div
                    className="bg-white rounded-lg p-6 border border-transparent shadow-sm group-hover:shadow-lg group-hover:border-[#366A00] transition-all duration-300 cursor-pointer hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#366A00] transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#366A00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm">{job.location || '-'}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#366A00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">Full-Time</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#366A00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-sm">1 Vacancy</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-red-500 text-sm">
                        <span className="font-medium">Posted:</span> {new Date(job.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
          
          {/* Call-to-Action Button */}
          <motion.div 
            className="flex justify-start mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
       <div className="flex items-center justify-start gap-2 flex-wrap">
  <p className="text-gray-600 mb-0">Can't find the job you're looking for?</p>
  <button
    onClick={() => setShowPopup(true)}
    className="text-[#366A00] cursor-pointer font-semibold hover:underline"
  >
    Drop Your Resume Here
  </button>
</div>


          </motion.div>
        </div>
      </section>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/70 flex items-center justify-center z-50 p-4">
        <motion.div
            className="bg-white rounded-lg p-8 shadow-md border border-gray-200 max-w-lg w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1B3D69]">Apply Now</h2>
              <button
                onClick={closePopup}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form className="flex flex-col gap-4" onSubmit={handleApply} encType="multipart/form-data">
              <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleInputChange} 
                placeholder="Name" 
                className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900" 
                required 
              />
              <input 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleInputChange} 
                placeholder="Email ID" 
                className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900" 
                required 
              />
              <input 
                type="text" 
                name="phone" 
                value={form.phone} 
                onChange={handleInputChange} 
                placeholder="Contact No." 
                className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900" 
              />
              <input 
                type="text" 
                name="position" 
                value={form.position} 
                onChange={handleInputChange} 
                placeholder="Position" 
                className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900" 
              />
              <textarea 
                name="message" 
                value={form.message} 
                onChange={handleInputChange} 
                placeholder="Message" 
                rows={4} 
                className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900" 
              />
              <label className="block">
                <span className="text-gray-700 text-sm">Upload Your Resume</span>
                <input 
                  name="resume" 
                  type="file" 
                  onChange={handleFileChange} 
                  required 
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#1B3D69] file:text-white hover:file:bg-[#366A00]" 
                />
              </label>
              <button 
                type="submit" 
                className="mt-2 px-6 py-2 rounded border border-[#366A00] bg-[#366A00] cursor-pointer text-white font-semibold shadow-sm hover:bg-[#f6fff0] hover:text-[#285000] transition"
              >
                Submit
              </button>
              {submitStatus === 'success' && <div className="text-green-600 text-center mt-2">{submitMsg}</div>}
              {submitStatus === 'error' && <div className="text-red-600 text-center mt-2">{submitMsg}</div>}
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CareerOpenings;