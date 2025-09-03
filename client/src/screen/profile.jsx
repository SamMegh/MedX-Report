import React from "react";
import NavBar from "../components/navbar";

export default function LabProfile() {
  const lab = {
    logo: "/logo.png",
    name: "Sunrise Diagnostics",
    labId: "LAB12345",
    email: "contact@sunrisediagnostics.com",
    phone: "+91 9876543210",
    address: "123 Main Street, City, State, 123456",
    stats: {
      totalReports: 1245,
      activePatients: 356,
      completedTests: 1120,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-teal-50 text-gray-900">
      <NavBar />

      <div className="px-6 py-10 max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <img
            src={lab.logo}
            alt="Lab Logo"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-blue-900">{lab.name}</h1>
            <p className="text-gray-500 mt-1">Lab ID: {lab.labId}</p>
            <div className="mt-4 flex flex-col md:flex-row md:gap-6 text-gray-600">
              <p>Email: {lab.email}</p>
              <p>Phone: {lab.phone}</p>
              <p>Address: {lab.address}</p>
            </div>
            <button className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold shadow hover:scale-[1.03] transition-transform">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h2 className="text-3xl font-bold text-blue-900">{lab.stats.totalReports}</h2>
            <p className="text-gray-600 mt-1">Total Reports</p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h2 className="text-3xl font-bold text-blue-900">{lab.stats.activePatients}</h2>
            <p className="text-gray-600 mt-1">Active Patients</p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h2 className="text-3xl font-bold text-blue-900">{lab.stats.completedTests}</h2>
            <p className="text-gray-600 mt-1">Completed Tests</p>
          </div>
        </div>
      </div>
    </div>
  );
}
