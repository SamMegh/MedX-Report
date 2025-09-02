import React from "react";
import NavBar from "../components/navbar";

// Example data (you can replace with real API data later)
const reports = [
  {
    id: "RPT001",
    name: "John Doe",
    type: "Blood Report",
    description: "Routine blood checkup showing normal levels.",
  },
  {
    id: "RPT002",
    name: "Jane Smith",
    type: "X-Ray Report",
    description: "Chest X-ray showing clear lungs.",
  },
  {
    id: "RPT003",
    name: "Michael Brown",
    type: "Urine Report",
    description: "Urine analysis indicating minor infection.",
  },
  {
    id: "RPT004",
    name: "Alice Johnson",
    type: "Blood Report",
    description: "Vitamin levels slightly low, follow up recommended.",
  },
];

export default function ReportPage() {
  return (
    <div className="main">
         {/* Navbar */}
      <NavBar />
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
     
      <h1 className="text-3xl font-bold mb-8 text-center">Patient Reports</h1>

      {/* Reports Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{report.name}</h2>
            <p className="text-gray-400 mb-1">
              <span className="font-medium">Report:</span> {report.type}
            </p>
            <p className="text-gray-400 mb-2">
              <span className="font-medium">ID:</span> {report.id}
            </p>
            <p className="text-gray-300">{report.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
