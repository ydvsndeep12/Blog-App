import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const categoryColors = {
  Technology: "bg-blue-100 text-blue-700",
  Travel: "bg-green-100 text-green-700",
  Food: "bg-orange-100 text-orange-700",
  Lifestyle: "bg-pink-100 text-pink-700",
  default: "bg-purple-100 text-purple-700",
};

function Blogs() {
  const { blogs } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-16 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Explore Our Blogs
        </h1>
        <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
          Discover stories, ideas, and perspectives from writers around the world.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-12">
        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Link
                to={`/blog/${blog._id}`}
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={blog?.blogImage?.url}
                    alt={blog?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Category Badge */}
                  <span
                    className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
                      categoryColors[blog?.category] || categoryColors.default
                    }`}
                  >
                    {blog?.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
                    {blog?.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3 flex-1">
                    {blog?.about}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      {blog?.adminPhoto && (
                        <img
                          src={blog?.adminPhoto}
                          alt={blog?.adminName}
                          className="w-7 h-7 rounded-full object-cover ring-2 ring-indigo-200"
                        />
                      )}
                      <span className="text-xs text-gray-600 font-medium">
                        {blog?.adminName}
                      </span>
                    </div>
                    <span className="text-xs text-indigo-500 font-semibold group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-gray-400">
            <svg className="w-16 h-16 mb-4 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
            </svg>
            <p className="text-lg font-medium">No blogs found yet.</p>
            <p className="text-sm mt-1">Check back soon for new stories!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
