"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blogs/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Blog not found");
        return res.json();
      })
      .then(setBlog)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        {error}
      </div>
    );

  if (!blog) return null;

  return (
    <>
      <main className="bg-[#F3F6FA] min-h-screen flex items-center justify-center ">
        <div className="w-full bg-white rounded-2xl shadow-xl px-6 sm:px-10 py-80">
          <div
            className="prose prose-lg max-w-none text-gray-900 prose-headings:text-[#1B3D69] prose-a:text-green-700 prose-img:rounded-lg prose-img:shadow prose-blockquote:border-green-200 prose-blockquote:bg-green-50 prose-blockquote:font-medium prose-blockquote:p-4 prose-blockquote:rounded-lg prose-blockquote:my-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </main>
    </>
  );
}
