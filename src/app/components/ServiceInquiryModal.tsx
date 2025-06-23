'use client';
import React, { useEffect } from 'react';

interface ServiceInquiryModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

const ServiceInquiryModal: React.FC<ServiceInquiryModalProps> = ({ open, onClose, title }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 min-h-screen">
      <div className="bg-[#f3f3f3] rounded-lg shadow-lg w-full max-w-lg mx-4 relative">
        <div className="bg-[#23416a] rounded-t-lg py-4 px-6 text-center relative">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button
            className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-red-300 transition-colors"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          <p className="mb-4 text-gray-900 font-medium">Please Fill the Below Details :-</p>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input className="w-1/2 p-2 border rounded bg-white text-black focus:border-[#23416a] focus:outline-none" placeholder="Name" />
              <input className="w-1/2 p-2 border rounded bg-white text-black focus:border-[#23416a] focus:outline-none" placeholder="Email" />
            </div>
            <div className="flex gap-4">
              <input className="w-1/2 p-2 border rounded bg-white text-black focus:border-[#23416a] focus:outline-none" placeholder="Contact No." />
              <input className="w-1/2 p-2 border rounded bg-white text-black focus:border-[#23416a] focus:outline-none" placeholder="Company Name" />
            </div>
            <textarea className="w-full p-2 border rounded bg-white text-black focus:border-[#23416a] focus:outline-none" rows={4} placeholder="Message" />
            <button
              type="submit"
              className="bg-[#23416a] text-white px-6 py-2 rounded-full font-semibold mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceInquiryModal; 