import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Hero() {
  const { blogs } = useAuth();

  if (!blogs || blogs.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-gray-100 rounded-3xl h-96 animate-pulse" />
          <div className="flex flex-col gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl h-28 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const [featured, ...rest] = blogs;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-7">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">Latest Posts</h2>
          <p className="text-gray-400 text-sm mt-1">Fresh stories from our creators</p>
        </div>
        <Link to="/blogs" className="text-sm text-indigo-600 font-semibold hover:underline flex items-center gap-1">
          View all <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Featured large card */}
        <Link
          to={`/blog/${featured._id}`}
          className="group lg:col-span-2 relative rounded-3xl overflow-hidden shadow-lg h-96 block"
        >
          <img
            src={featured.blogImage.url}
            alt={featured.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {featured.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white text-2xl font-extrabold leading-tight mb-3 group-hover:text-yellow-300 transition-colors duration-200">
              {featured.title}
            </h3>
            <div className="flex items-center gap-3">
              <img
                src={featured.adminPhoto}
                alt={featured.adminName}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white/50"
              />
              <span className="text-white/80 text-sm font-medium">{featured.adminName}</span>
              <span className="text-white/40 text-xs ml-auto">Featured</span>
            </div>
          </div>
        </Link>

        {/* Side cards */}
        <div className="flex flex-col gap-4">
          {rest.slice(0, 3).map((blog) => (
            <Link
              to={`/blog/${blog._id}`}
              key={blog._id}
              className="group flex gap-4 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-3"
            >
              <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                <img
                  src={blog.blogImage.url}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <span className="text-xs font-semibold text-indigo-500 mb-1">{blog.category}</span>
                <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {blog.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{blog.adminName}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
