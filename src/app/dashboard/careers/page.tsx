"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import JobOpeningsList from "./JobOpeningsList";
import CandidatesTable from "./CandidatesTable";
import JobOpeningForm from "./JobOpeningForm";

interface Candidate {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  position?: string;
  resumeUrl?: string;
  message?: string;
  createdAt: string;
}

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

const CareersDashboard = () => {
  const router = useRouter();
  // State for job openings
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
  const [jobLoading, setJobLoading] = useState(true);
  const [jobError, setJobError] = useState("");

  // State for candidates
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candLoading, setCandLoading] = useState(true);
  const [candError, setCandError] = useState("");

  // State for new job opening form
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    requirements: "",
    contactEmail: "",
    contactPhone: "",
    benefits: "",
    whoWeAre: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");

  // State for job opening details when editing
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedJobForm, setSelectedJobForm] = useState({
    title: "",
    description: "",
    location: "",
    requirements: "",
    contactEmail: "",
    contactPhone: "",
    benefits: "",
    whoWeAre: "",
  });
  const [selectedJobLoading, setSelectedJobLoading] = useState(false);
  const [selectedJobError, setSelectedJobError] = useState("");
  const [selectedJobFormLoading, setSelectedJobFormLoading] = useState(false);
  const [selectedJobFormSuccess, setSelectedJobFormSuccess] = useState("");
  const [selectedJobFormError, setSelectedJobFormError] = useState("");
  const [selectedJobDeleteLoading, setSelectedJobDeleteLoading] = useState(false);
  const [selectedJobDeleteError, setSelectedJobDeleteError] = useState("");

  // Fetch job openings
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/job-openings');
        if (!res.ok) throw new Error("Failed to fetch job openings");
        const data = await res.json();
        setJobOpenings(data);
      } catch (err: any) {
        setJobError(err.message || "Error fetching jobs");
      } finally {
        setJobLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Fetch candidates
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const res = await fetch('/api/careers');
        if (!res.ok) throw new Error("Failed to fetch candidates");
        const data = await res.json();
        setCandidates(data);
      } catch (err: any) {
        setCandError(err.message || "Error fetching candidates");
      } finally {
        setCandLoading(false);
      }
    };
    fetchCandidates();
  }, []);

  // Handle form input
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormSuccess("");
    setFormError("");
    try {
      const res = await fetch('/api/job-openings', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          requirements: form.requirements
            .split(",")
            .map((r) => r.trim())
            .filter((r) => r),
          benefits: form.benefits
            .split(",")
            .map((b) => b.trim())
            .filter((b) => b),
        }),
      });
      if (!res.ok) throw new Error("Failed to create job opening");
      setForm({ title: "", description: "", location: "", requirements: "", contactEmail: "", contactPhone: "", benefits: "", whoWeAre: "" });
      setFormSuccess("Job opening created!");
      // Refresh job openings
      const jobsRes = await fetch('/api/job-openings');
      setJobOpenings(await jobsRes.json());
    } catch (err: any) {
      setFormError(err.message || "Error creating job opening");
    } finally {
      setFormLoading(false);
    }
  };

  // Handle job card click
  const handleJobCardClick = async (id: string) => {
    setSelectedJobId(id);
    setSelectedJobLoading(true);
    setSelectedJobError("");
    setSelectedJobFormSuccess("");
    setSelectedJobFormError("");
    setSelectedJobDeleteError("");
    try {
      const res = await fetch(`/api/job-openings/${id}`);
      if (!res.ok) throw new Error("Job not found");
      const data = await res.json();
      setSelectedJobForm({
        title: data.title || "",
        description: data.description || "",
        location: data.location || "",
        requirements: (data.requirements || []).join(", "),
        contactEmail: data.contactEmail || "",
        contactPhone: data.contactPhone || "",
        benefits: (data.benefits || []).join(", "),
        whoWeAre: data.whoWeAre || "",
      });
    } catch (err: any) {
      setSelectedJobError(err.message || "Error loading job");
    } finally {
      setSelectedJobLoading(false);
    }
  };

  const handleSelectedJobFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSelectedJobForm({ ...selectedJobForm, [e.target.name]: e.target.value });
  };

  const handleSelectedJobFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJobId) return;
    setSelectedJobFormLoading(true);
    setSelectedJobFormSuccess("");
    setSelectedJobFormError("");
    try {
      const res = await fetch(`/api/job-openings/${selectedJobId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...selectedJobForm,
          requirements: selectedJobForm.requirements
            .split(",")
            .map((r) => r.trim())
            .filter((r) => r),
          benefits: selectedJobForm.benefits
            .split(",")
            .map((b) => b.trim())
            .filter((b) => b),
        }),
      });
      if (!res.ok) throw new Error("Failed to update job opening");
      setSelectedJobFormSuccess("Job opening updated!");
      // Refresh job openings
      const jobsRes = await fetch('/api/job-openings');
      setJobOpenings(await jobsRes.json());
    } catch (err: any) {
      setSelectedJobFormError(err.message || "Error updating job opening");
    } finally {
      setSelectedJobFormLoading(false);
    }
  };

  const handleSelectedJobDelete = async () => {
    if (!selectedJobId) return;
    if (!window.confirm("Are you sure you want to delete this job opening? This action cannot be undone.")) return;
    setSelectedJobDeleteLoading(true);
    setSelectedJobDeleteError("");
    try {
      const res = await fetch(`/api/job-openings/${selectedJobId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete job opening");
      setSelectedJobId(null);
      setSelectedJobForm({
        title: "",
        description: "",
        location: "",
        requirements: "",
        contactEmail: "",
        contactPhone: "",
        benefits: "",
        whoWeAre: "",
      });
      // Refresh job openings
      const jobsRes = await fetch('/api/job-openings');
      setJobOpenings(await jobsRes.json());
    } catch (err: any) {
      setSelectedJobDeleteError(err.message || "Error deleting job opening");
    } finally {
      setSelectedJobDeleteLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-green-50">
      <main className="flex-1 mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 p-4 md:p-10">
        {/* Left: Job Openings and Candidates */}
        <div className="md:col-span-2 flex flex-col gap-8">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Current Job Openings</h2>
            {jobLoading ? (
              <div className="text-gray-500">Loading...</div>
            ) : jobError ? (
              <div className="text-red-600">{jobError}</div>
            ) : jobOpenings.length === 0 ? (
              <div className="text-gray-500">No job openings found.</div>
            ) : (
              <>
                <JobOpeningsList jobs={jobOpenings} onCardClick={handleJobCardClick} />
                {selectedJobId && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Edit Job Opening</h3>
                    {selectedJobLoading ? (
                      <div className="text-gray-500">Loading job details...</div>
                    ) : selectedJobError ? (
                      <div className="text-red-600">{selectedJobError}</div>
                    ) : (
                      <>
                        <JobOpeningForm
                          form={selectedJobForm}
                          onChange={handleSelectedJobFormChange}
                          onSubmit={handleSelectedJobFormSubmit}
                          loading={selectedJobFormLoading}
                          success={selectedJobFormSuccess}
                          error={selectedJobFormError}
                        />
                        <div className="flex flex-col items-center mt-6 w-full">
                          <button
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl shadow font-semibold text-base transition disabled:opacity-60 mb-2"
                            onClick={handleSelectedJobDelete}
                            disabled={selectedJobDeleteLoading}
                          >
                            {selectedJobDeleteLoading ? "Deleting..." : "Delete Job Opening"}
                          </button>
                          {selectedJobDeleteError && <div className="text-red-600 text-sm mt-1">{selectedJobDeleteError}</div>}
                          <button
                            className="mt-4 text-green-700 hover:underline text-sm"
                            onClick={() => setSelectedJobId(null)}
                          >
                            &larr; Back to Job List
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </section>
          <section>
            {candLoading ? (
              <div className="text-gray-500">Loading candidates...</div>
            ) : candError ? (
              <div className="text-red-600">{candError}</div>
            ) : candidates.length === 0 ? (
              <div className="text-gray-500">No candidates found.</div>
            ) : (
              <CandidatesTable candidates={candidates} />
            )}
          </section>
        </div>
        {/* Right: Job Opening Form */}
        <div className="md:col-span-1">
          <JobOpeningForm
            form={form}
            onChange={handleFormChange}
            onSubmit={handleFormSubmit}
            loading={formLoading}
            success={formSuccess}
            error={formError}
          />
        </div>
      </main>
    </div>
  );
};

export default CareersDashboard; 