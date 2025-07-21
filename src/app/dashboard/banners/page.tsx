'use client'

import { BASE_URL } from '../../config/endpoint';
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const PAGE_KEYS = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'careers', label: 'Careers' },
  { key: 'contact', label: 'Contact' },
  { key: 'services', label: 'Services' },
  { key: 'testimonials', label: 'Testimonials' },
  { key: 'video-gallery', label: 'Video Gallery' },
  { key: 'photo-gallery', label: 'Photo Gallery' },
  { key: 'blog', label: 'Blogs' },
  // Add more as needed
];

const BannerAdminPage = () => {
  const [selectedKey, setSelectedKey] = useState(PAGE_KEYS[0].key);
  const [currentBanner, setCurrentBanner] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  

  // Fetch current banner on key change
  useEffect(() => {
    setCurrentBanner(null);
    setPreview(null);
    setSuccess('');
    setError('');
    setFile(null);
    setLoading(true);
    fetch(`/api/banners/${selectedKey}`)
      .then(async (res) => {
        if (!res.ok) throw new Error('No banner found');
        const data = await res.json();
        setCurrentBanner(data.mediaUrl);
      })
      .catch(() => setCurrentBanner(null))
      .finally(() => setLoading(false));
  }, [selectedKey]);

  // Preview selected file
  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  }, [file]);

  const handleKeyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedKey(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    if (!file) {
      setError('Please select an image to upload.');
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append('key', selectedKey);
    formData.append('image', file);
    try {
      const res = await fetch('/api/banners/upload', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Failed to upload banner');
      const data = await res.json();
      setCurrentBanner(data.mediaUrl);
      setSuccess('Banner updated successfully!');
      setFile(null);
      setPreview(null);
    } catch (err: any) {
      setError(err.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-green-50">
      <main className="flex-1 w-full p-4 md:p-10">
        <div className="bg-white/90 rounded-2xl shadow-lg w-full max-w-5xl border border-gray-100 p-0 overflow-hidden">
          <div className="flex flex-col md:flex-row w-full">
            {/* Left: Current Banner Image */}
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-100 min-h-[340px]">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center md:text-left w-full">Current Banner</h2>
              <div className="w-full h-56 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
                {loading ? (
                  <span className="text-gray-400">Loading...</span>
                ) : currentBanner ? (
                  <img src={currentBanner} alt="Current Banner" className="object-cover w-full h-full" />
                ) : (
                  <span className="text-gray-400">No banner set for this page.</span>
                )}
              </div>
            </div>
            {/* Right: Form */}
            <div className="md:w-1/2 w-full flex flex-col justify-center p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center md:text-left">Page Banners</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Select Page</label>
                  <select
                    value={selectedKey}
                    onChange={handleKeyChange}
                    className="w-full border border-gray-200 rounded px-3 py-2 text-black focus:border-[#366A00] focus:ring-1 focus:ring-[#366A00] transition"
                  >
                    {PAGE_KEYS.map((p) => (
                      <option key={p.key} value={p.key}>{p.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Upload New Banner</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="block w-full text-black file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#1B3D69] file:text-white hover:file:bg-[#366A00] file:transition-colors"
                  />
                  {preview && (
                    <div className="mt-3 w-full h-32 rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center">
                      <img src={preview} alt="Preview" className="object-cover w-full h-full" />
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#366A00] hover:bg-[#285000] text-white px-6 py-2.5 rounded-xl shadow font-semibold text-base transition mt-2 disabled:opacity-60"
                >
                  {loading ? 'Uploading...' : 'Upload/Update Banner'}
                </button>
                {success && <div className="text-green-600 text-sm mt-2 text-center">{success}</div>}
                {error && <div className="text-red-600 text-sm mt-2 text-center">{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BannerAdminPage;