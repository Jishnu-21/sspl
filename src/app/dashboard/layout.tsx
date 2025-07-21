'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && router) {
      const token = localStorage.getItem('token');
      console.log('DashboardLayout token:', token);
      // Only redirect if not already on /login
      if (!token && window.location.pathname !== '/login') {
        router.replace('/login');
      } else {
        setCheckingAuth(false);
      }
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      router.push('/login');
    }
  };

  if (checkingAuth) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <div className="text-2xl font-bold tracking-wide text-gray-900">Dashboard</div>
        <button
          className="text-gray-700 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Open sidebar"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Sidebar (desktop) & Drawer (mobile) */}
      <div className="flex flex-1">
        {/* Overlay for mobile drawer */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <aside
          className={`fixed z-40 md:static md:translate-x-0 top-0 left-0 h-full md:h-auto w-full md:w-64 bg-white border-r border-gray-200 flex flex-col p-6 shadow-sm min-h-screen transition-transform duration-200 transform
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 md:flex md:relative`}
          style={{ maxWidth: sidebarOpen ? '100vw' : undefined }}
        >
          {/* Close button for mobile */}
          {sidebarOpen && (
            <button
              className="absolute top-4 right-4 md:hidden text-gray-700 hover:text-gray-900 text-2xl focus:outline-none"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <div className="text-2xl font-bold mb-8 tracking-wide text-gray-900 hidden md:block">Dashboard</div>
          <nav className="flex flex-col gap-2">
            <Link href="/dashboard/contacts" className="hover:bg-gray-100 rounded px-3 py-2 text-gray-700 transition">Contact Submissions</Link>
            <Link href="/dashboard/careers" className="hover:bg-gray-100 rounded px-3 py-2 text-gray-700 transition">Career Admin</Link>
            <Link href="/dashboard/banners" className="hover:bg-gray-100 rounded px-3 py-2 text-gray-700 transition">Banner Images</Link>
            <Link href="/dashboard/blog" className="hover:bg-gray-100 rounded px-3 py-2 text-gray-700 transition">Blogs</Link>
            <Link href="/dashboard/partner" className="hover:bg-gray-100 rounded px-3 py-2 text-gray-700 transition">Partner Forms</Link>
            <Link href="/dashboard/webinars" className="hover:bg-gray-100 rounded px-3 py-2 text-gray-700 transition">Webinars Forms</Link>
          </nav>
          <button
            onClick={handleLogout}
            className="mt-auto bg-[#366A00] cursor-pointer hover:bg-[#285000] text-white font-semibold rounded px-3 py-2 transition shadow"
          >
            Logout
          </button>
        </aside>
        {/* Main content */}
        <main className="flex-1 p-4 md:p-8 w-full max-w-full overflow-x-auto">{children}</main>
      </div>
    </div>
  );
} 