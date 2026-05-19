import React from "react";
import Hero from "../Home/Hero";
import Trending from "../Home/Trending";
import Devotional from "../Home/Devotional";
import Creator from "../Home/Creator";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <span className="inline-block bg-white/10 text-indigo-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            Welcome to CilliBlog
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            Stories That <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">Inspire</span>
          </h1>
          <p className="text-indigo-200 text-lg max-w-xl mx-auto mb-8">
            Discover handpicked articles on technology, lifestyle, spirituality, and more — written by passionate creators.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/blogs" className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-full hover:bg-indigo-50 transition-colors duration-200 shadow-lg">
              Explore Blogs
            </Link>
            <Link to="/creators" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200">
              Meet Creators
            </Link>
          </div>
        </div>
      </div>

      <Hero />
      <Trending />
      <Devotional />
      <Creator />
    </div>
  );
}

export default Home;
