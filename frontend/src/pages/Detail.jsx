import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import API_BASE from "../config";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `${API_BASE}/api/blogs/single-blog/${id}`,
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        setBlog(data);
      } catch (error) {
        if (error.response?.status === 401) {
          toast.error("Please login to view this blog");
          navigate("/login");
        } else {
          toast.error("Failed to load blog");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        <p className="text-lg">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Category */}
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
          {blog.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-8">
          <img
            src={blog.adminPhoto}
            alt={blog.adminName}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-indigo-200"
          />
          <p className="text-sm font-semibold text-gray-700">{blog.adminName}</p>
        </div>

        {/* Blog Image */}
        {blog.blogImage?.url && (
          <img
            src={blog.blogImage.url}
            alt={blog.title}
            className="w-full h-72 md:h-[480px] object-cover rounded-2xl shadow-lg mb-8"
          />
        )}

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
          <p className="text-gray-700 text-lg leading-relaxed">{blog.about}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
