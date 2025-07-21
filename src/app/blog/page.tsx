
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../components/PageBanner';

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(setBlogs);
  }, []);
  return (
    <>

      <Head>
        <title>Blog | SSPL</title>
        <meta name="description" content="Read the latest blogs from SSPL." />
      </Head>
      <main className="flex flex-col bg-white min-h-screen">
      <Header />

      <PageBanner
        bannerKey="blog"
        backgroundImage="/images/about/banner.png"
        title="Blogs"
        subtitle="Read the latest insights, news, and stories from SSPL."
      />
      
      <div className="bg-white mx-auto py-6 px-4 md:px-8">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl font-bold mb-2 text-[#1B3D69]">Our Blogs</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl">Explore our latest articles, insights, and updates. Stay informed with SSPL's thought leadership and industry news.</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg py-12">No blog has been written.</div>
          ) : (
            blogs.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`}
                className="group">
                <div className="bg-[#1B3D69] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full group-hover:bg-[#366A00] overflow-hidden transform group-hover:scale-105">
                  {blog.coverImage && <img src={blog.coverImage} alt={blog.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />}
                  <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-white group-hover:text-white transition">{blog.title}</h2>
                  <p className="text-gray-200 mb-3 line-clamp-3">{blog.summary}</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-300">{new Date(blog.createdAt).toLocaleDateString()}</span>
                    {blog.author && <span className="text-xs text-gray-300">By {blog.author}</span>}
                  </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      <Footer />
      </main>
    </>
  );
} 