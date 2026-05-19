import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Devotional() {
  const { blogs } = useAuth();
  const devotionalBlogs = blogs?.filter((blog) => blog.category === "Devotion");

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Warm background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-xl shadow-md">
              🕉️
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Devotional</h2>
              <p className="text-gray-500 text-sm">Spiritual stories & sacred wisdom</p>
            </div>
          </div>
          <Link to="/blogs" className="text-sm text-pink-600 font-semibold hover:underline flex items-center gap-1">
            See all →
          </Link>
        </div>

        <div className="mt-8">
          {devotionalBlogs && devotionalBlogs.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
              {/* Large featured card */}
              {devotionalBlogs[0] && (
                <Link
                  to={`/blog/${devotionalBlogs[0]._id}`}
                  className="group lg:col-span-2 relative rounded-3xl overflow-hidden shadow-xl h-80 block"
                >
                  <img
                    src={devotionalBlogs[0].blogImage?.url}
                    alt={devotionalBlogs[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      Devotion
                    </span>
                    <h3 className="text-white text-xl font-extrabold leading-tight group-hover:text-yellow-300 transition-colors duration-200">
                      {devotionalBlogs[0].title}
                    </h3>
                  </div>
                </Link>
              )}

              {/* Grid of smaller cards */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {devotionalBlogs.slice(1, 5).map((blog, index) => (
                  <Link
                    to={`/blog/${blog._id}`}
                    key={index}
                    className="group relative rounded-2xl overflow-hidden shadow-md h-36 block"
                  >
                    <img
                      src={blog.blogImage?.url}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="text-white text-xs font-bold line-clamp-2 group-hover:text-yellow-300 transition-colors duration-200">
                        {blog.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
              <div className="lg:col-span-2 bg-orange-100 rounded-3xl h-80 animate-pulse" />
              <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-orange-100 rounded-2xl h-36 animate-pulse" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Devotional;
