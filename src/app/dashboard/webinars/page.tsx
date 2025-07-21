"use client";
import React, { useEffect, useState, useMemo } from "react";

interface Webinar {
  _id: string;
  fullName: string;
  job?: string;
  companyName?: string;
  city?: string;
  country?: string;
  workEmail: string;
  phoneNo?: string;
  annualRevenue?: string;
  employees?: string;
  createdAt: string;
}

const WebinarsDashboard = () => {
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    const fetchWebinars = async () => {
      try {
        const res = await fetch('/api/webinars');
        if (!res.ok) throw new Error("Failed to fetch webinars");
        const data = await res.json();
        setWebinars(data);
      } catch (err: any) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchWebinars();
  }, []);

  const filteredWebinars = useMemo(() => {
    return webinars.filter((w) => {
      let match = true;
      if (startDate) {
        const date = new Date(w.createdAt);
        const start = new Date(startDate);
        if (date < start) match = false;
      }
      if (endDate) {
        const date = new Date(w.createdAt);
        const end = new Date(endDate);
        end.setHours(23,59,59,999);
        if (date > end) match = false;
      }
      return match;
    });
  }, [webinars, startDate, endDate]);

  const downloadWebinarsCSV = () => {
    if (!filteredWebinars.length) return;
    const headers = [
      "Full Name",
      "Job",
      "Company Name",
      "City",
      "Country",
      "Work Email",
      "Phone",
      "Annual Revenue",
      "Employees",
      "Submitted At",
    ];
    const rows = filteredWebinars.map((w) => [
      w.fullName,
      w.job || "-",
      w.companyName || "-",
      w.city || "-",
      w.country || "-",
      w.workEmail,
      w.phoneNo || "-",
      w.annualRevenue || "-",
      w.employees || "-",
      new Date(w.createdAt).toLocaleString(),
    ]);
    const csvContent = [headers, ...rows]
      .map((row) => row.map((field) => `"${String(field).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `webinar_registrations_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="flex-1 max-w-7xl w-full p-2 sm:p-4 md:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Webinar Registrations</h1>
        <button
          onClick={downloadWebinarsCSV}
          className="bg-[#366A00] cursor-pointer hover:bg-[#285000] text-white px-4 py-2 rounded-xl shadow text-sm font-medium transition w-full sm:w-auto"
          disabled={filteredWebinars.length === 0}
        >
          Download CSV
        </button>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-end mb-6">
        <div className="flex-1 min-w-[140px]">
          <label className="block text-xs font-medium text-gray-700 mb-1">Start Date</label>
          <input
            type="date"
            className="border rounded px-2 py-2 text-sm text-black w-full"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-xs font-medium text-gray-700 mb-1">End Date</label>
          <input
            type="date"
            className="border rounded px-2 py-2 text-sm text-black w-full"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </div>
        <div className="flex-none">
          <button
            className="w-full sm:w-auto ml-0 sm:ml-2 px-3 py-2 rounded text-sm font-medium bg-[#366A00] text-white hover:bg-[#285000] transition shadow"
            onClick={() => { setStartDate(''); setEndDate(''); }}
            type="button"
          >
            Clear Filters
          </button>
        </div>
      </div>
      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : filteredWebinars.length === 0 ? (
        <div className="text-gray-500">No webinar registrations found.</div>
      ) : (
        <div className="overflow-x-auto rounded shadow bg-white">
          <table className="min-w-[900px] w-full text-sm text-left border-separate border-spacing-y-1">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-2 sm:px-4 py-3 rounded-tl-lg text-xs sm:text-sm">Full Name</th>
                <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Job</th>
                <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Company</th>
                <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">City</th>
                <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Country</th>
                <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Work Email</th>
                <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Phone</th>
                <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Annual Revenue</th>
                <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Employees</th>
                <th className="px-2 sm:px-4 py-3 rounded-tr-lg text-xs sm:text-sm">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {filteredWebinars.map((w) => (
                <tr key={w._id} className="bg-white border-b border-gray-100 hover:bg-green-50 transition">
                  <td className="px-2 sm:px-4 py-2 font-medium text-gray-900 break-words max-w-[120px] sm:max-w-none">{w.fullName}</td>
                  <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[100px] sm:max-w-none">{w.job || '-'}</td>
                  <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[120px] sm:max-w-none">{w.companyName || '-'}</td>
                  <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[100px] sm:max-w-none">{w.city || '-'}</td>
                  <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[100px] sm:max-w-none">{w.country || '-'}</td>
                  <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[140px] sm:max-w-none">{w.workEmail}</td>
                  <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[100px] sm:max-w-none">{w.phoneNo || '-'}</td>
                  <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[120px] sm:max-w-none">{w.annualRevenue || '-'}</td>
                  <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[100px] sm:max-w-none">{w.employees || '-'}</td>
                  <td className="px-2 sm:px-4 py-2 text-xs text-gray-500 whitespace-nowrap">{new Date(w.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default WebinarsDashboard;
