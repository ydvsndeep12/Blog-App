import axios from "axios";
import React, { useEffect, useState } from "react";
import API_BASE from "../config";

function Creators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/users/admins`, { withCredentials: true })
      .then(({ data }) => setCreators(data.admins))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-14 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Creators</h1>
        <p className="text-indigo-100 text-lg max-w-xl mx-auto">
          Meet the talented writers and storytellers behind CilliBlog.
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? [...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
                  <div className="h-28 bg-gray-200" />
                  <div className="flex flex-col items-center -mt-10 pb-6 px-4">
                    <div className="w-20 h-20 rounded-full bg-gray-300 border-4 border-white" />
                    <div className="h-3 w-24 bg-gray-200 rounded mt-4" />
                    <div className="h-2 w-16 bg-gray-100 rounded mt-2" />
                  </div>
                </div>
              ))
            : creators.map((creator) => (
                <div
                  key={creator._id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Cover */}
                  <div className="h-28 bg-gradient-to-r from-indigo-400 to-purple-500" />

                  {/* Avatar + Info */}
                  <div className="flex flex-col items-center -mt-10 pb-6 px-4">
                    <img
                      src={creator.photo.url}
                      alt={creator.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md group-hover:ring-4 group-hover:ring-indigo-200 transition-all duration-300"
                    />
                    <h2 className="mt-3 text-lg font-bold text-gray-800">{creator.name}</h2>
                    <span className="text-xs font-semibold text-indigo-500 capitalize bg-indigo-50 px-3 py-1 rounded-full mt-1">
                      {creator.role}
                    </span>
                    <div className="mt-3 space-y-1 text-center">
                      <p className="text-sm text-gray-500">{creator.email}</p>
                      {creator.phone && (
                        <p className="text-sm text-gray-500">{creator.phone}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Creators;
