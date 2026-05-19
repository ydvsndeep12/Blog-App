import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import API_BASE from "../config";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/blogs", label: "Blogs" },
  { to: "/creators", label: "Creators" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [show, setShow] = useState(false);
  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`${API_BASE}/api/users/logout`, {
        withCredentials: true,
      });
      localStorage.removeItem("jwt");
      toast.success(data.message);
      setIsAuthenticated(false);
      navigate("/login");
    } catch {
      toast.error("Failed to logout");
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Cilli<span className="text-indigo-600">Blog</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(to)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated && profile?.user?.role === "admin" && (
            <Link
              to="/dashboard"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
            >
              Dashboard
            </Link>
          )}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              {profile?.user?.photo?.url && (
                <img
                  src={profile.user.photo.url}
                  alt="avatar"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-200"
                />
              )}
              <button
                onClick={handleLogout}
                className="text-sm font-semibold px-4 py-2 rounded-lg border border-red-200 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setShow(!show)}>
          {show ? <IoCloseSharp size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {show && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-2 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setShow(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isActive(to)
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            {isAuthenticated && profile?.user?.role === "admin" && (
              <Link
                to="/dashboard"
                onClick={() => setShow(false)}
                className="block text-center text-sm font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white"
              >
                Dashboard
              </Link>
            )}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-sm font-semibold px-4 py-2 rounded-lg border border-red-200 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setShow(false)}
                className="block text-center text-sm font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
