'use client';
import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import PageBanner from '../../../components/PageBanner';
import '../../../contact/contact-form.css';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../../config/endpoint';

const CareerOpeningDetailPage = () => {
  const { slug } = useParams();
  const [jobData, setJobData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Add state for form fields and submission status
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null as File | null,
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMsg, setSubmitMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleApply = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setSubmitMsg('');
    if (!form.resume) {
      setSubmitStatus('error');
      setSubmitMsg('Please upload your resume.');
      return;
    }
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    formData.append('message', form.message);
    formData.append('position', jobData.title); // Pass job title as position
    formData.append('resume', form.resume);
    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Failed to submit application');
      setSubmitStatus('success');
      setSubmitMsg('Application submitted successfully!');
      setForm({ name: '', email: '', phone: '', message: '', resume: null });
    } catch (err: any) {
      setSubmitStatus('error');
      setSubmitMsg(err.message || 'Submission failed');
    }
  };

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError('');
    fetch(`/api/job-openings/slug/${slug}`)
      .then(async (res) => {
        if (!res.ok) throw new Error('Job not found');
        const data = await res.json();
        setJobData(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <span className="text-lg text-gray-600">Loading...</span>
      </div>
    );
  }

  if (error || !jobData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <span className="text-lg text-red-500">{error || 'Job not found.'}</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <PageBanner
        backgroundImage={'/images/about/banner.png'}
        title={jobData.title}
        subtitle={`${jobData.location}`}
      >
        <div className="flex flex-wrap gap-12 text-white text-sm mt-4">
          <div>
            <div className="font-semibold text-blue-200">CREATED AT</div>
            <div>{jobData.createdAt ? new Date(jobData.createdAt).toLocaleDateString() : ''}</div>
          </div>
        </div>
      </PageBanner>
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Job Details */}
          <div className="space-y-8">
            {/* Who We Are */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B3D69]">Who We Are</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                SSPL is a leading technology company specializing in data analytics, fraud management, and business intelligence solutions. 
                We are committed to innovation, excellence, and creating meaningful impact for our clients across various industries.
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B3D69]">Job Description</h2>
              <p className="text-gray-700 text-base leading-relaxed">{jobData.description}</p>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B3D69]">Requirements</h2>
              <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
                {(jobData.requirements || []).map((req: string, i: number) => (
                  <li key={i} className="leading-relaxed">{req}</li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B3D69]">Benefits</h2>
              <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
                <li className="leading-relaxed">Competitive salary package with performance-based incentives</li>
                <li className="leading-relaxed">Comprehensive health insurance coverage</li>
                <li className="leading-relaxed">Professional development and training opportunities</li>
                <li className="leading-relaxed">Flexible work arrangements and remote work options</li>
                <li className="leading-relaxed">Modern office environment with latest technology</li>
                <li className="leading-relaxed">Employee wellness programs and team building activities</li>
                <li className="leading-relaxed">Career growth opportunities within the organization</li>
                <li className="leading-relaxed">Work-life balance with paid time off and holidays</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1B3D69]">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-700 min-w-[80px]">Phone:</span>
                  <span className="text-gray-700">{jobData.contactPhone || "—"}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-700 min-w-[80px]">Email:</span>
                  <span className="text-gray-700">{jobData.contactEmail || "—"}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Apply Form */}
          <div className="bg-white rounded-lg p-8 shadow-md flex flex-col border border-gray-200 max-w-lg mx-auto md:mx-0 md:self-start mt-8 md:mt-0">
            <h2 className="text-2xl font-bold text-center mb-6 text-[#1B3D69]">Apply Now</h2>
            <form className="flex flex-col gap-4" onSubmit={handleApply} encType="multipart/form-data">
              <input type="text" name="name" value={form.name} onChange={handleInputChange} placeholder="Name" className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900" required />
              <input type="email" name="email" value={form.email} onChange={handleInputChange} placeholder="Email ID" className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900" required />
              <input type="text" name="phone" value={form.phone} onChange={handleInputChange} placeholder="Contact No." className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900" />
              <textarea name="message" value={form.message} onChange={handleInputChange} placeholder="Message" rows={4} className="p-3 rounded border border-gray-300 focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] bg-white text-gray-900" />
              <label className="block">
                <span className="text-gray-700 text-sm">Upload Your Resume</span>
                <input name="resume" type="file" onChange={handleFileChange} required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#1B3D69] file:text-white hover:file:bg-[#366A00]" />
              </label>
              <button type="submit" className="mt-2 px-6 py-2 rounded border border-[#366A00] bg-[#366A00] cursor-pointer text-white font-semibold shadow-sm hover:bg-[#f6fff0] hover:text-[#285000] transition">Submit</button>
              {submitStatus === 'success' && <div className="text-green-600 text-center mt-2">{submitMsg}</div>}
              {submitStatus === 'error' && <div className="text-red-600 text-center mt-2">{submitMsg}</div>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareerOpeningDetailPage; 