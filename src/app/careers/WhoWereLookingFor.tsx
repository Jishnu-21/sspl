"use client";

import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChartBar, FaDatabase, FaUserShield, FaCode, FaHeadset, FaBullhorn } from "react-icons/fa";
import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    position: string;
    message: string;
    experience?: string;
    portfolios?: string;
    projects?: string;
  }
  
const roles = [
  {
    title: "Data Analysts & Scientists",
    icon: <FaDatabase className="text-white text-4xl" />,
  },
  {
    title: "Business Intelligence Developers",
    icon: <FaChartBar className="text-white text-4xl" />,
  },
  {
    title: "Audit & Risk Analytics Professionals",
    icon: <FaUserShield className="text-white text-4xl" />,
  },
  {
    title: "Software Developers with a passion for analytics",
    icon: <FaCode className="text-white text-4xl" />,
  },
  {
    title: "Client Support & Solution Implementation Specialists",
    icon: <FaHeadset className="text-white text-4xl" />,
  },
  {
    title: "Sales & Marketing Professionals",
    icon: <FaBullhorn className="text-white text-4xl" />,
  },
];

const WhoWereLookingFor = () => {
  React.useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    experience: '',
    portfolios: '',
    projects: ''
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMsg, setSubmitMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    formData.append('experience', form.experience || '');
    formData.append('portfolios', form.portfolios || '');
    formData.append('projects', form.projects || '');
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
        setForm({ name: '', email: '', phone: '', position: '', message: '', experience: '', portfolios: '', projects: '' });
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
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#366A00] mb-2">Who We’re Looking For? We’re always on the lookout for:</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="rounded-xl bg-[#1b3d69] hover:bg-[#366A00] transition-colors duration-300 border border-[#e5e7eb] shadow-sm hover:shadow-lg p-7 flex flex-col items-center text-center group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 120}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(54,106,0,0.15)" }}
            >
              <div className="mb-4">{role.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">{role.title}</h3>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-gray-700 text-base text-left">
  If you have a curious mind, a strong analytical approach, and a desire to make a difference through technology,<br />
  <span className="font-bold">SSPL is the place for you.</span>
</p>
<p className="text-gray-600 mb-0">Ready to grow with us? <button className="text-[#366A00] cursor-pointer font-semibold hover:underline" onClick={() => setShowPopup(true)}>Drop your CV.</button></p>
 

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
                className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
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
                className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900 w-full" 
                required 
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleInputChange} 
                  placeholder="Email ID" 
                  className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900 w-full" 
                  required 
                />
                <input 
                  type="text" 
                  name="phone" 
                  value={form.phone} 
                  onChange={handleInputChange} 
                  placeholder="Contact No." 
                  className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900 w-full" 
                />
              </div>
              <label className="block w-full">
                <span className="text-gray-700 text-sm">Domain</span>
                <select
                  name="position"
                  value={form.position}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900"
                >
                  <option value="" disabled>Select Domain</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Information Technology & Computer Science">Information Technology & Computer Science</option>
                  <option value="Sales & Marketing">Sales & Marketing</option>
                </select>
              </label>
              <input
                type="number"
                name="experience"
                value={form.experience}
                onChange={handleInputChange}
                placeholder="Experience (In years)"
                min="0"
                className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900 w-full"
                required
              />
              <input
                type="text"
                name="portfolios"
                value={form.portfolios}
                onChange={handleInputChange}
                placeholder="Portfolios (Links, optional)"
                className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900 w-full"
              />
              <input
                type="text"
                name="projects"
                value={form.projects}
                onChange={handleInputChange}
                placeholder="Projects (optional)"
                className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900 w-full"
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

export default WhoWereLookingFor; 