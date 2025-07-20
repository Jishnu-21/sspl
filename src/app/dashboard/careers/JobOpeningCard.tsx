import React from 'react';

interface JobOpening {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  requirements?: string[];
  contactEmail?: string;
  contactPhone?: string;
  benefits?: string[];
  whoWeAre?: string;
  createdAt: string;
}

export default function JobOpeningCard({ job, onClick }: { job: JobOpening; onClick: () => void }) {
  return (
    <div
      className="bg-white/90 rounded-2xl shadow-md p-5 mb-4 cursor-pointer border border-gray-100 hover:shadow-lg hover:border-green-400 transition group"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${job.title}`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition">{job.title}</h3>
        <span className="text-xs text-gray-900">{job.location || '-'}</span>
      </div>
      <p className="text-gray-900 text-sm line-clamp-2 mb-1">{job.description || 'No description.'}</p>
      <div className="text-xs text-gray-900">Posted: {new Date(job.createdAt).toLocaleDateString()}</div>
    </div>
  );
} 