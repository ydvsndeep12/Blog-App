import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

function Trending() {
  const { blogs } = useAuth();

  return (
    <div className="bg-gray-900 py-14">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🔥</span>
              <h2 className="text-3xl font-extrabold text-white">Trending Now</h2>
            </div>
            <p className="text-gray-400 text-sm">Most read stories this week</p>
          </div>
          <Link
            to="/blogs"
            className="text-sm font-semibold text-indigo-400 border border-indigo-400/30 px-4 py-2 rounded-full hover:bg-indigo-400/10 transition-colors duration-200"
          >
            See all →
          </Link>
        </div>

        {blogs && blogs.length > 0 ? (
          <Carousel responsive={responsive} itemClass="px-2">
            {blogs.slice(0, 8).map((element, i) => (
              <Link
                to={`/blog/${element._id}`}
                key={element._id}
                className="group block rounded-2xl overflow-hidden bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={element.blogImage.url}
                    alt={element.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {element.category}
                  </span>
                  <span className="absolute top-3 right-3 bg-black/50 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white truncate group-hover:text-indigo-300 transition-colors duration-200 mb-3">
                    {element.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <img
                      src={element.adminPhoto}
                      alt={element.adminName}
                      className="w-6 h-6 rounded-full object-cover ring-1 ring-indigo-400/50"
                    />
                    <p className="text-xs text-gray-400">{element.adminName}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        ) : (
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-1 bg-gray-800 rounded-2xl h-56 animate-pulse" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Trending;
