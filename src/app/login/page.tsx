'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaGithub, FaLinkedin, FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'sonner';
import { BASE_URL } from '../config/endpoint';
import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        router.replace('/dashboard');
      }
    }
  }, [router]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      localStorage.setItem('token', data.token);
      toast.success('Login successful!');
      router.push('/dashboard');
    } catch (err: any) {
   
      toast.error(err.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "appearance-none relative block w-full px-3 py-2 border border-[#CCCCCC] bg-[#FFFFFF] text-[#222222] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#366a00] focus:border-[#366a00] transition-colors sm:text-sm";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Logo in top left */}
      <Link href="/" className="absolute top-4 left-4 z-20 flex items-center">
      <Image src="/images/logos/logo.png" alt="SSPL Logo" layout="intrinsic" width={130} height={40} className="py-1 md:w-auto lg:w-auto max-h-[100px]" />
      </Link>
      <div className="max-w-md w-full space-y-8 shadow-lg rounded-xl bg-white p-8 border border-[#F0F0F0]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#366a00]">
           Dashboard 
          </h2>
          <p className="mt-2 text-center text-sm text-[#666666]">
            Sign in to sspl dashboard
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#366a00] mb-1">
                Username
              </label>
              <input
                id="username"
                name="name"
                required
                className={`${inputClasses} rounded-md`}
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#366a00] mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className={`${inputClasses} rounded-md pr-10`}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute inset-y-0 right-2 flex items-center text-[#888888] hover:text-[#366a00] focus:outline-none"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group cursor-pointer relative w-full flex justify-center py-2.5 px-4 border border-[#366a00] text-sm font-medium rounded-md text-[#FFFFFF] bg-[#366a00] hover:bg-[#285000] hover:text-[#FFFFFF] hover:border-[#285000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#366a00] disabled:opacity-50 transition-all"
            >
              {isLoading ? 'Loading...' : 'Sign in'}
            </button>
          </div>
        </form>
        {error && (
          <div className="text-red-500 text-center mt-2">{error}</div>
        )}
      </div>
    </div>
  );
}