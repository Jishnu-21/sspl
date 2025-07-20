"use client";
import { BASE_URL } from '../../config/endpoint';
import React, { useEffect, useState, useMemo } from "react";

interface Contact {
  _id: string;
  name: string;
  email: string;
  city?: string;
  country?: string;
  organisation?: string;
  message: string;
  createdAt: string;
}

const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Date filter states
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    const fetchContacts = async () => {
      try {
        const res = await fetch(`http://${BASE_URL}/api/contacts`);
        if (!res.ok) throw new Error("Failed to fetch contacts");
        const data = await res.json();
        setContacts(data);
      } catch (err: any) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  // Filtered contacts by date
  const filteredContacts = useMemo(() => {
    return contacts.filter((c) => {
      let match = true;
      if (startDate) {
        const contactDate = new Date(c.createdAt);
        const start = new Date(startDate);
        if (contactDate < start) match = false;
      }
      if (endDate) {
        const contactDate = new Date(c.createdAt);
        const end = new Date(endDate);
        end.setHours(23,59,59,999);
        if (contactDate > end) match = false;
      }
      return match;
    });
  }, [contacts, startDate, endDate]);

  const downloadContactsCSV = () => {
    if (!filteredContacts.length) return;
    const headers = [
      "Name",
      "Email",
      "City",
      "Country",
      "Organisation",
      "Message",
      "Submitted At",
    ];
    const rows = filteredContacts.map((c) => [
      c.name,
      c.email,
      c.city || "-",
      c.country || "-",
      c.organisation || "-",
      c.message.replace(/\n/g, " ").replace(/\r/g, " "),
      new Date(c.createdAt).toLocaleString(),
    ]);
    const csvContent = [headers, ...rows]
      .map((row) => row.map((field) => `"${String(field).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `contact_submissions_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <main className="flex-1 max-w-7xl w-full p-2 sm:p-4 md:p-10">
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact Submissions</h1>
          <button
            onClick={downloadContactsCSV}
            className="bg-[#366A00] cursor-pointer hover:bg-[#285000] text-white px-4 py-2 rounded-xl shadow text-sm font-medium transition w-full sm:w-auto"
            disabled={filteredContacts.length === 0}
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
        ) : filteredContacts.length === 0 ? (
          <div className="text-gray-500">No submissions found.</div>
        ) : (
          <div className="overflow-x-auto rounded shadow bg-white">
            <table className="min-w-[700px] w-full text-sm text-left border-separate border-spacing-y-1">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-2 sm:px-4 py-3 rounded-tl-lg text-xs sm:text-sm">Name</th>
                  <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Email</th>
                  <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">City</th>
                  <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Country</th>
                  <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Organisation</th>
                  <th className="px-2 sm:px-4 py-3 text-xs sm:text-sm">Message</th>
                  <th className="px-2 sm:px-4 py-3 rounded-tr-lg text-xs sm:text-sm">Submitted At</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((c) => (
                  <tr key={c._id} className="bg-white border-b border-gray-100 hover:bg-green-50 transition">
                    <td className="px-2 sm:px-4 py-2 font-medium text-gray-900 break-words max-w-[120px] sm:max-w-none">{c.name}</td>
                    <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[140px] sm:max-w-none">{c.email}</td>
                    <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[100px] sm:max-w-none">{c.city || "-"}</td>
                    <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[100px] sm:max-w-none">{c.country || "-"}</td>
                    <td className="px-2 sm:px-4 py-2 text-gray-700 break-words max-w-[120px] sm:max-w-none">{c.organisation || "-"}</td>
                    <td className="px-2 sm:px-4 py-2 max-w-[160px] sm:max-w-xs truncate text-gray-700" title={c.message}>{c.message}</td>
                    <td className="px-2 sm:px-4 py-2 text-xs text-gray-500 whitespace-nowrap">{new Date(c.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
};

export default ContactsPage; 