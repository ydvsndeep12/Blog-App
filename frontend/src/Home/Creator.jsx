import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE from "../config";

function Creator() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/users/admins`, { withCredentials: true })
      .then(({ data }) => setAdmins(data.admins))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Creators Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-widest uppercase">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Meet Our Creators
            </h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm">
              Passionate writers and storytellers who bring you the best content every day.
            </p>
          </div>

          {/* Creator Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading
              ? [...Array(4)].map((_, i) => (
                  <div key={i} className="bg-gray-50 rounded-3xl p-6 animate-pulse">
                    <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4" />
                    <div className="h-3 w-24 bg-gray-200 rounded mx-auto mb-2" />
                    <div className="h-2 w-16 bg-gray-100 rounded mx-auto" />
                  </div>
                ))
              : admins.slice(0, 4).map((admin, i) => {
                  const gradients = [
                    "from-indigo-400 to-purple-500",
                    "from-pink-400 to-rose-500",
                    "from-amber-400 to-orange-500",
                    "from-teal-400 to-cyan-500",
                  ];
                  return (
                    <div
                      key={admin._id}
                      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      {/* Top gradient strip */}
                      <div className={`h-20 bg-gradient-to-r ${gradients[i % gradients.length]}`} />

                      <div className="flex flex-col items-center -mt-10 pb-6 px-4">
                        <div className="relative">
                          <img
                            src={admin.photo.url}
                            alt={admin.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                          />
                          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                        </div>
                        <h3 className="mt-3 text-base font-bold text-gray-800">{admin.name}</h3>
                        <span className={`text-xs font-semibold capitalize bg-gradient-to-r ${gradients[i % gradients.length]} bg-clip-text text-transparent mt-1`}>
                          {admin.role}
                        </span>
                        <p className="text-xs text-gray-400 mt-2 text-center truncate w-full px-2">
                          {admin.email}
                        </p>
                      </div>
                    </div>
                  );
                })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/creators"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              View All Creators →
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter / CTA Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Never Miss a Story
          </h2>
          <p className="text-indigo-200 mb-8 max-w-md mx-auto">
            Explore hundreds of blogs across technology, lifestyle, spirituality, and more.
          </p>
          <Link
            to="/blogs"
            className="inline-block px-8 py-3.5 bg-white text-indigo-700 font-bold rounded-full hover:bg-indigo-50 transition-colors duration-200 shadow-xl"
          >
            Start Reading
          </Link>
        </div>
      </div>
    </>
  );
}

export default Creator;
