import React from "react";
import { Link } from "react-router-dom";

export default function Loginnavbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-teal-600 shadow-lg px-6 py-4 flex justify-between items-center">
      {/* Left - Logo & Brand */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png" // 👉 replace with your hospital/lab logo
          alt="Company Logo"
          className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
        />
        <span className="text-2xl font-bold text-white tracking-wide">
          MedX Report
        </span>
      </div>

      {/* Right - Auth Buttons */}
      <div className="flex gap-3">
        <Link to="/login">
          <button className="px-5 py-2 bg-white text-blue-700 font-medium rounded-xl shadow hover:scale-[1.05] transition-transform">
            Login
          </button>
        </Link>

        <Link to="/signup" replace>
          <button className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-xl shadow hover:scale-[1.05] transition-transform">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}
