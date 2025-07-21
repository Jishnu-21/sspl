'use client';
import React, { useEffect, useState, useRef } from 'react';

export default function BlogAdminPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [form, setForm] = useState({
    title: '',
    summary: '',
    content: '',
    coverImage: '',
    author: '',
    tags: '',
    published: false,
  });
  const [coverFile, setCoverFile] = useState<File|null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [editSlug, setEditSlug] = useState<string|null>(null);
  const [editForm, setEditForm] = useState<any>(null);
  const [editCoverFile, setEditCoverFile] = useState<File|null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Pagination state for mobile/tablet
  const [page, setPage] = useState(1);
  const pageSize = 2;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  const fetchBlogs = () => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(setBlogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Responsive: reset to page 1 if blogs change
  useEffect(() => { setPage(1); }, [blogs]);

  // Paginated blogs for mobile/tablet
  const paginatedBlogs = blogs.slice((page-1)*pageSize, page*pageSize);
  const totalPages = Math.ceil(blogs.length / pageSize);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm(f => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key === 'tags') {
          formData.append('tags', (value as string).split(',').map(t => t.trim()).filter(Boolean).join(','));
        } else {
          formData.append(key, value as string);
        }
      });
      if (coverFile) formData.append('coverImage', coverFile);
      const res = await fetch('/api/blogs', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Failed to create blog');
      setSuccess('Blog created!');
      setForm({ title: '', summary: '', content: '', coverImage: '', author: '', tags: '', published: false });
      setCoverFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      fetchBlogs();
    } catch (err: any) {
      setError(err.message || 'Error creating blog');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch(`/api/blogs/${slug}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete blog');
      setSuccess('Blog deleted!');
      fetchBlogs();
    } catch (err: any) {
      setError(err.message || 'Error deleting blog');
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (blog: any) => {
    setEditSlug(blog.slug);
    setEditForm({ ...blog, tags: blog.tags ? blog.tags.join(', ') : '' });
    setEditCoverFile(null);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setEditForm((f: any) => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setEditForm((f: any) => ({ ...f, [name]: value }));
    }
  };

  const handleEditFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEditCoverFile(e.target.files[0]);
    }
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editSlug) return;
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const formData = new FormData();
      Object.entries(editForm).forEach(([key, value]) => {
        if (key === 'tags') {
          formData.append('tags', (value as string).split(',').map(t => t.trim()).filter(Boolean).join(','));
        } else {
          formData.append(key, value as string);
        }
      });
      if (editCoverFile) formData.append('coverImage', editCoverFile);
      const res = await fetch(`/api/blogs/${editSlug}`, {
        method: 'PUT',
        body: formData,
      });
      if (!res.ok) throw new Error('Failed to update blog');
      setSuccess('Blog updated!');
      setEditSlug(null);
      setEditForm(null);
      setEditCoverFile(null);
      fetchBlogs();
    } catch (err: any) {
      setError(err.message || 'Error updating blog');
    } finally {
      setLoading(false);
    }
  };

  const cancelEdit = () => {
    setEditSlug(null);
    setEditForm(null);
    setEditCoverFile(null);
  };

  // Responsive: show paginated on mobile/tablet, grid on desktop
  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 1024 : false;
  const showPagination = !isDesktop && blogs.length > 2;
  const blogsToShow = showPagination ? paginatedBlogs : blogs;

  return (
      <main className="flex-1 max-w-7xl w-full p-4 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Blogs</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-start">
          {/* Left: Create Blog Form */}
          <section className="md:w-1/2 w-full mb-8 md:mb-0 bg-white/90 rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-xl text-black font-bold mb-4">Create New Blog</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black" encType="multipart/form-data">
              <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required className="border border-gray-200 rounded px-3 py-2 text-black placeholder-black" />
              <input name="summary" value={form.summary} onChange={handleChange} placeholder="Summary" className="border border-gray-200 rounded px-3 py-2 text-black placeholder-black" />
              <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content (HTML allowed)" rows={6} className="border border-gray-200 rounded px-3 py-2 text-black placeholder-black" />
              <input name="author" value={form.author} onChange={handleChange} placeholder="Author" className="border border-gray-200 rounded px-3 py-2 text-black placeholder-black" />
              <input name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (comma separated)" className="border border-gray-200 rounded px-3 py-2 text-black placeholder-black" />
              <div>
                <label className="block mb-1 font-medium">Cover Image</label>
                <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} className="block w-full text-black file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#1B3D69] file:text-white hover:file:bg-[#366A00] file:transition-colors" />
              </div>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" name="published" checked={form.published} onChange={handleChange} />
                <span className="text-black">Published</span>
              </label>
              <button type="submit" disabled={loading} className="bg-[#366A00] hover:bg-[#285000] text-white px-6 py-2.5 rounded-xl shadow font-semibold text-base transition mt-2 disabled:opacity-60">
                {loading ? 'Posting...' : 'Post Blog'}
              </button>
              {success && <div className="text-green-600 text-sm mt-2">{success}</div>}
              {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
            </form>
          </section>
          {/* Right: Blog List */}
          <section className="md:w-1/2 w-full">
            <h2 className="text-xl text-black font-bold mb-4">All Blogs</h2>
            {blogs.length === 0 ? (
              <div className="text-gray-500 text-center py-8">No blogs found.</div>
            ) : (
              <>
                <div className={`grid gap-8 ${isDesktop ? '' : 'grid-cols-1'}`}>
                  {blogsToShow.map((blog: any) => (
                    <div key={blog.slug} className="bg-white rounded-xl shadow p-6 relative">
                      {editSlug === blog.slug ? (
                        <form onSubmit={handleEditSubmit} className="flex flex-col gap-3 text-black bg-gray-50 p-4 rounded-xl border border-green-200">
                          <input name="title" value={editForm.title} onChange={handleEditChange} placeholder="Title" required className="border border-gray-200 rounded px-3 py-2 text-black placeholder-black" />
                          <input name="summary" value={editForm.summary} onChange={handleEditChange} placeholder="Summary" className="border border-gray-200 rounded px-3 py-2 text-black placeholder-black" />
                          <textarea name="content" value={editForm.content} onChange={handleEditChange} placeholder="Content (HTML allowed)" rows={4} className="border border-gray-200 rounded px-3 py-2 text-black placeholder-black" />
                          <input name="author" value={editForm.author} onChange={handleEditChange} placeholder="Author" className="border border-gray-200 rounded px-3 py-2 text-black placeholder-black" />
                          <input name="tags" value={editForm.tags} onChange={handleEditChange} placeholder="Tags (comma separated)" className="border border-gray-200 rounded px-3 py-2 text-black placeholder-black" />
                          <div>
                            <label className="block mb-1 font-medium">Cover Image</label>
                            <input type="file" accept="image/*" onChange={handleEditFileChange} className="block w-full text-black file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#1B3D69] file:text-white hover:file:bg-[#366A00] file:transition-colors" />
                            {blog.coverImage && <img src={blog.coverImage} alt="cover" className="w-full h-24 object-cover rounded mt-2" />}
                          </div>
                          <label className="flex items-center gap-2 text-black">
                            <input type="checkbox" name="published" checked={editForm.published} onChange={handleEditChange} />
                            <span className="text-black">Published</span>
                          </label>
                          <div className="flex gap-2 mt-2">
                            <button type="submit" className="bg-[#366A00] hover:bg-[#285000] text-white px-4 py-2 rounded-lg font-semibold">Save</button>
                            <button type="button" onClick={cancelEdit} className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg font-semibold">Cancel</button>
                          </div>
                        </form>
                      ) : (
                        <>
                          {blog.coverImage && <img src={blog.coverImage} alt={blog.title} className="w-full h-32 object-cover rounded mb-4" />}
                          <h3 className="text-2xl text-black font-semibold mb-2">{blog.title}</h3>
                          <p className="text-gray-700 mb-2">{blog.summary}</p>
                          <div className="text-xs text-gray-500 mb-2">{new Date(blog.createdAt).toLocaleDateString()} | {blog.published ? 'Published' : 'Draft'}</div>
                          <div className="text-xs text-gray-500 mb-2">Tags: {blog.tags && blog.tags.length ? blog.tags.join(', ') : '-'}</div>
                          <div className="flex gap-2 mt-2">
                            <button onClick={() => startEdit(blog)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg font-semibold">Edit</button>
                            <button onClick={() => handleDelete(blog.slug)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg font-semibold">Delete</button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                {/* Pagination for mobile/tablet */}
                {showPagination && (
                  <div className="flex justify-center mt-6 gap-2">
                    <button
                      className="px-3 py-1 rounded bg-gray-200 text-gray-700 text-xs font-medium disabled:opacity-50"
                      onClick={() => setPage(page - 1)}
                      disabled={page === 1}
                    >
                      Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i + 1}
                        className={`px-3 py-1 rounded text-xs font-medium ${page === i + 1 ? 'bg-[#366A00] text-white' : 'bg-gray-100 text-gray-700'} hover:bg-[#285000] hover:text-white transition`}
                        onClick={() => setPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      className="px-3 py-1 rounded bg-gray-200 text-gray-700 text-xs font-medium disabled:opacity-50"
                      onClick={() => setPage(page + 1)}
                      disabled={page === totalPages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </main>
  );
} 