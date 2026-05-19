import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const footerLinks = {
  Explore: [
    { label: "Home", to: "/" },
    { label: "Blogs", to: "/blogs" },
    { label: "Creators", to: "/creators" },
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
  ],
};

const socials = [
  { icon: <FaGithub size={18} />, href: "#" },
  { icon: <BsYoutube size={18} />, href: "#" },
  { icon: <FaLinkedin size={18} />, href: "#" },
  { icon: <FaTwitter size={18} />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-14 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-3">
              Cilli<span className="text-indigo-400">Blog</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-sm">
              A place to discover stories, ideas, and perspectives from creators
              around the world. Read, write, and connect.
            </p>
            <div className="flex gap-4 mt-5">
              {socials.map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm hover:text-indigo-400 transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p>&copy; {new Date().getFullYear()} CilliBlog. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
