import React from 'react'
import { Link } from "react-router-dom";
export default function Loginnavbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png" // 👉 replace with your logo path
            alt="Company Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold">MedX Report</span>
        </div>

        <div className="flex gap-4">
          <Link to="/login" className="highlight">
            <button
              className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
            >
              Login
            </button>
          </Link>{" "}
          <Link to="/signup" className="highlight">
            <button
              className="px-4 py-2 bg-green-600 rounded-xl hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </Link>{" "}
        </div>
      </nav>
    </div>
  )
}
