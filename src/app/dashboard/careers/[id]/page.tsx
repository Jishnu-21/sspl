"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import JobOpeningForm from "../JobOpeningForm";

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

const JobOpeningDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [job, setJob] = useState<JobOpening | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError("");
    fetch(`/api/job-openings/${id}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Job not found");
        const data = await res.json();
        setJob(data);
        setForm({
          title: data.title || "",
          description: data.description || "",
          location: data.location || "",
          requirements: (data.requirements || []).join(", "),
          contactEmail: data.contactEmail || "",
          contactPhone: data.contactPhone || "",
          benefits: (data.benefits || []).join(", "),
          whoWeAre: data.whoWeAre || "",
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormSuccess("");
    setFormError("");
    try {
      const res = await fetch(`/api/job-openings/${id}`, {
        method: "PUT",
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
      if (!res.ok) throw new Error("Failed to update job opening");
      setFormSuccess("Job opening updated!");
    } catch (err: any) {
      setFormError(err.message || "Error updating job opening");
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this job opening? This action cannot be undone.")) return;
    setDeleteLoading(true);
    setDeleteError("");
    try {
      const res = await fetch(`/api/job-openings/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete job opening");
      router.push("/dashboard/careers");
    } catch (err: any) {
      setDeleteError(err.message || "Error deleting job opening");
    } finally {
      setDeleteLoading(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-green-50"><span className="text-lg text-gray-600">Loading...</span></div>;
  }
  if (error || !job) {
    return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-green-50"><span className="text-lg text-red-500">{error || "Job not found."}</span></div>;
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-green-50">
      <main className="flex-1 max-w-2xl mx-auto w-full p-4 md:p-10 flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Edit Job Opening</h2>
        <JobOpeningForm
          form={form}
          onChange={handleFormChange}
          onSubmit={handleFormSubmit}
          loading={formLoading}
          success={formSuccess}
          error={formError}
        />
        <div className="flex flex-col items-center mt-8 w-full">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl shadow font-semibold text-base transition disabled:opacity-60 mb-2"
            onClick={handleDelete}
            disabled={deleteLoading}
          >
            {deleteLoading ? "Deleting..." : "Delete Job Opening"}
          </button>
          {deleteError && <div className="text-red-600 text-sm mt-1">{deleteError}</div>}
          <button
            className="mt-4 text-green-700 hover:underline text-sm"
            onClick={() => router.back()}
          >
            &larr; Back to Dashboard
          </button>
        </div>
      </main>
    </div>
  );
};

export default JobOpeningDetailPage; 