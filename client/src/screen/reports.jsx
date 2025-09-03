import React from "react";
import NavBar from "../components/navbar";

// Example data (replace with real API later)
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-teal-50 text-gray-900">
      <NavBar />
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-900">
          Patient Reports
        </h1>

        {/* Reports Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">

              <h2 className="text-xl font-semibold mb-2 text-blue-800">
                {report.name}
              </h2>
              <span className="text-gray-600 mb-1">{report.type}</span>
              </div>

              <p className="text-gray-600 mb-2">
                <span className="font-medium">ID:</span> {report.id}
              </p>

              <p className="text-gray-700">{report.description}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
