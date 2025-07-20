import React from 'react';
import JobOpeningCard from './JobOpeningCard';

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

export default function JobOpeningsList({ jobs, onCardClick }: { jobs: JobOpening[]; onCardClick: (id: string) => void }) {
  return (
    <div>
      {jobs.map((job) => (
        <JobOpeningCard key={job._id} job={job} onClick={() => onCardClick(job._id)} />
      ))}
    </div>
  );
} 