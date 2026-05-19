import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const contactInfo = [
  { icon: <FaPhone className="text-indigo-500" />, text: "+91 9876543210" },
  { icon: <FaEnvelope className="text-indigo-500" />, text: "help@learncoding.com" },
  { icon: <FaMapMarkerAlt className="text-indigo-500" />, text: "Delhi, NCR, India" },
];

function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://api.web3forms.com/submit", {
        access_key: "c660c9ce-c6f9-41f7-aa0f-8a24ea887b94",
        name: data.username,
        email: data.email,
        message: data.message,
      });
      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-14 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
        <p className="text-indigo-100 text-lg">We'd love to hear from you</p>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Form */}
            <div className="p-8 md:p-10">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                      errors.username ? "border-red-400" : "border-gray-200"
                    }`}
                    {...register("username", { required: true })}
                  />
                  {errors.username && <p className="text-xs text-red-500 mt-1">Name is required</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    }`}
                    {...register("email", { required: true })}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">Email is required</p>}
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none ${
                      errors.message ? "border-red-400" : "border-gray-200"
                    }`}
                    {...register("message", { required: true })}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">Message is required</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white mb-6">Contact Information</h3>
              <ul className="space-y-5">
                {contactInfo.map(({ icon, text }, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                      {React.cloneElement(icon, { className: "text-white" })}
                    </div>
                    <span className="text-indigo-100 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <p className="text-indigo-200 text-xs leading-relaxed">
                  We typically respond within 24 hours. Feel free to reach out for collaborations,
                  feedback, or just to say hello!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
