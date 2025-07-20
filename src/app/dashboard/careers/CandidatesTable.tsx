import React, { useMemo, useState } from 'react';

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

function downloadCandidatesCSV(candidates: Candidate[]) {
  if (!candidates.length) return;
  const headers = [
    "Name",
    "Email",
    "Phone",
    "Position",
    "Resume URL",
    "Message",
    "Submitted At",
  ];
  const rows = candidates.map((c) => [
    c.name,
    c.email,
    c.phone || "-",
    c.position || "-",
    c.resumeUrl || "-",
    c.message ? c.message.replace(/\n/g, " ").replace(/\r/g, " ") : "-",
    new Date(c.createdAt).toLocaleString(),
  ]);
  const csvContent = [headers, ...rows]
    .map((row) => row.map((field) => `"${String(field).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `career_candidates_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function CandidatesTable({ candidates }: { candidates: Candidate[] }) {
  // Filter states
  const [selectedPosition, setSelectedPosition] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  // Get unique positions from candidates
  const positions = useMemo(() => {
    const posSet = new Set<string>();
    candidates.forEach((c) => {
      if (c.position) posSet.add(c.position);
    });
    return Array.from(posSet);
  }, [candidates]);

  // Filter candidates
  const filteredCandidates = useMemo(() => {
    return candidates.filter((c) => {
      let match = true;
      if (selectedPosition && c.position !== selectedPosition) match = false;
      if (startDate) {
        const candidateDate = new Date(c.createdAt);
        const start = new Date(startDate);
        if (candidateDate < start) match = false;
      }
      if (endDate) {
        const candidateDate = new Date(c.createdAt);
        // Add 1 day to endDate to make it inclusive
        const end = new Date(endDate);
        end.setHours(23,59,59,999);
        if (candidateDate > end) match = false;
      }
      return match;
    });
  }, [candidates, selectedPosition, startDate, endDate]);

  // Pagination state
  const [page, setPage] = useState(1);
  const pageSize = 8;
  const totalPages = Math.ceil(filteredCandidates.length / pageSize);

  // Paginated candidates
  const paginatedCandidates = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredCandidates.slice(start, start + pageSize);
  }, [filteredCandidates, page]);

  // Reset to first page when filters change
  React.useEffect(() => {
    setPage(1);
  }, [selectedPosition, startDate, endDate, candidates]);

  return (
    <div className="bg-white/90 rounded-2xl shadow-md p-4 mt-6">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 items-end mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Position</label>
          <select
            className="border rounded px-2 py-1 text-sm text-black" // ensure text is black
            value={selectedPosition}
            onChange={e => setSelectedPosition(e.target.value)}
          >
            <option value="">All</option>
            {positions.map((pos) => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Start Date</label>
          <input
            type="date"
            className="border rounded px-2 py-1 text-sm text-black" // ensure text is black
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">End Date</label>
          <input
            type="date"
            className="border rounded px-2 py-1 text-sm text-black" // ensure text is black
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </div>
        <div>
          <button
            className="ml-2 px-3 py-1 rounded text-sm font-medium bg-[#366A00] text-white hover:bg-[#285000] transition shadow"
            onClick={() => { setSelectedPosition(''); setStartDate(''); setEndDate(''); }}
            type="button"
          >
            Clear Filters
          </button>
        </div>
      </div>
      {/* Table and Download */}
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-lg font-semibold text-gray-900">Submitted Candidates</h4>
        {filteredCandidates.length > 0 && (
          <button
            onClick={() => downloadCandidatesCSV(filteredCandidates)}
            className="bg-[#366A00] cursor-pointer hover:bg-[#285000] text-white px-4 py-2 rounded-xl shadow text-sm font-medium transition"
          >
            Download CSV
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-separate border-spacing-y-1">
          <thead className="bg-green-50 text-green-900">
            <tr>
              <th className="px-4 py-3 rounded-tl-xl">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Position</th>
              <th className="px-4 py-3">Resume</th>
              <th className="px-4 py-3">Message</th>
              <th className="px-4 py-3 rounded-tr-xl">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCandidates.map((c) => (
              <tr key={c._id} className="bg-white border-b border-gray-100 hover:bg-green-50 transition">
                <td className="px-4 py-2 font-medium text-gray-900">{c.name}</td>
                <td className="px-4 py-2 text-gray-700">{c.email}</td>
                <td className="px-4 py-2 text-gray-700">{c.phone || '-'}</td>
                <td className="px-4 py-2 text-gray-700">{c.position || '-'}</td>
                <td className="px-4 py-2 max-w-xs truncate" title={c.resumeUrl}>
                  {c.resumeUrl ? (
                    <a
                      href={c.resumeUrl.startsWith('/uploads') ? `http://localhost:5000${c.resumeUrl}` : c.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1 rounded bg-[#366A00] text-white text-xs font-medium hover:bg-[#285000] transition shadow"
                      style={{ textDecoration: 'none' }}
                    >
                      View
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-4 py-2 max-w-xs truncate text-gray-700" title={c.message}>{c.message}</td>
                <td className="px-4 py-2 text-xs text-gray-500">{new Date(c.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <button
            className="px-2 py-1 mx-1 rounded bg-gray-200 text-gray-700 text-xs font-medium disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-3 py-1 mx-1 rounded text-xs font-medium ${page === i + 1 ? 'bg-[#366A00] text-white' : 'bg-gray-100 text-gray-700'} hover:bg-[#285000] hover:text-white transition`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-2 py-1 mx-1 rounded bg-gray-200 text-gray-700 text-xs font-medium disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
} 