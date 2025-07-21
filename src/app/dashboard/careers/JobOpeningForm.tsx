import React from 'react';

interface JobOpeningFormProps {
  form: {
    title: string;
    description: string;
    location: string;
    requirements: string;
    contactEmail: string;
    contactPhone: string;
    benefits: string;
    whoWeAre: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  success: string;
  error: string;
}

export default function JobOpeningForm({ form, onChange, onSubmit, loading, success, error }: JobOpeningFormProps) {
  return (
    <>
      <h2 className="text-2xl md:text-2xl font-bold text-black mb-6 text-center">Post new Job</h2>
      <form onSubmit={onSubmit} className="bg-white/90 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-5 border border-gray-100 w-full max-w-3xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input name="title" value={form.title} onChange={onChange} required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-green-400 focus:border-green-400 transition" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <input name="location" value={form.location} onChange={onChange} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-green-400 focus:border-green-400 transition" />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea name="description" value={form.description} onChange={onChange} rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-green-400 focus:border-green-400 transition resize-none" />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Requirements <span className="text-xs text-gray-400">(comma separated)</span></label>
            <input name="requirements" value={form.requirements} onChange={onChange} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-green-400 focus:border-green-400 transition" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Benefits <span className="text-xs text-gray-400">(comma separated)</span></label>
            <input name="benefits" value={form.benefits} onChange={onChange} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-green-400 focus:border-green-400 transition" />
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Contact Email</label>
            <input name="contactEmail" value={form.contactEmail} onChange={onChange} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-green-400 focus:border-green-400 transition" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Contact Phone</label>
            <input name="contactPhone" value={form.contactPhone} onChange={onChange} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-green-400 focus:border-green-400 transition" />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Who We Are <span className="text-xs text-gray-400">(short about company)</span></label>
          <textarea name="whoWeAre" value={form.whoWeAre} onChange={onChange} rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-black focus:ring-2 focus:ring-green-400 focus:border-green-400 transition resize-none" />
        </div>
        <button type="submit" disabled={loading} className="w-full bg-[#366A00] hover:bg-[#285000] text-white px-6 py-2.5 rounded-xl shadow font-semibold text-base transition mt-2 disabled:opacity-60">
          {loading ? "Posting..." : "Submit"}
        </button>
        {success && <div className="text-green-600 text-sm mt-2">{success}</div>}
        {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
      </form>
    </>
  );
} 