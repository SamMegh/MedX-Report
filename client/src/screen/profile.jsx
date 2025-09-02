import React from "react";

export default function LabProfile() {
  // Example lab data (replace with API later)
  const lab = {
    logo: "/logo.png", // replace with your lab logo
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
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gray-800 rounded-2xl p-8 shadow-md">
        <img
          src={lab.logo}
          alt="Lab Logo"
          className="w-24 h-24 rounded-full border-2 border-blue-500"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{lab.name}</h1>
          <p className="text-gray-400">Lab ID: {lab.labId}</p>
          <div className="mt-4 flex flex-col md:flex-row md:gap-6 text-gray-300">
            <p>Email: {lab.email}</p>
            <p>Phone: {lab.phone}</p>
            <p>Address: {lab.address}</p>
          </div>
          <button
            onClick={() => console.log("Edit Lab Profile clicked")}
            className="mt-4 px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <h2 className="text-2xl font-bold">{lab.stats.totalReports}</h2>
          <p className="text-gray-400 mt-1">Total Reports</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <h2 className="text-2xl font-bold">{lab.stats.activePatients}</h2>
          <p className="text-gray-400 mt-1">Active Patients</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <h2 className="text-2xl font-bold">{lab.stats.completedTests}</h2>
          <p className="text-gray-400 mt-1">Completed Tests</p>
        </div>
      </div>
    </div>
  );
}
