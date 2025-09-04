import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import NavBar from "../components/navbar";
import { ClipboardList, ShieldCheck, Users } from "lucide-react"; // icons

import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const { check } = useAuthStore();
  const navigate = useNavigate();


  useEffect(() => {
    check();
  }, [check]);

  const [people, setPeople] = useState([
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
      id: "RPT002",
      name: "Jane Smith",
      type: "X-Ray Report",
      description: "Chest X-ray showing clear lungs.",
    },
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
      id: "RPT002",
      name: "Jane Smith",
      type: "X-Ray Report",
      description: "Chest X-ray showing clear lungs.",
    },
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
      id: "RPT002",
      name: "Jane Smith",
      type: "X-Ray Report",
      description: "Chest X-ray showing clear lungs.",
    },
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
      id: "RPT002",
      name: "Jane Smith",
      type: "X-Ray Report",
      description: "Chest X-ray showing clear lungs.",
    },
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
      id: "RPT002",
      name: "Jane Smith",
      type: "X-Ray Report",
      description: "Chest X-ray showing clear lungs.",
    },
  ]);

  const [search, setSearch] = useState("");

  // Filtered data
  const filteredPeople = people.filter((p) =>
    Object.values(p).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleDelete = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  };


  const reports = [
    "HIV Report",
    "Blood Report",
    "X-Ray Report",
    "Urine Report",
    "X-Ray Report",
    "CT Scan Report",
    "Lipid Profile",
    "Liver Function Test",
    "Kidney Function Test",
    "Thyroid Panel",
    "Allergy Test",
    "Vitamin D Test",
    "COVID Test",
    "MRI Report",
    "COVID Test"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <header className="flex-1 min-h-auto py-32 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-100 to-teal-100 ">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-10">
          Welcome to <span className="text-teal-600">MedX Lab :</span> Current <span className="text-teal-600">Details</span>
        </h1>
        <div className="max-w-2xl text-lg text-gray-700 mb-10 mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3 flex flex-col md:flex-row items-center justify-center">
          {/* View All Reports */}
          <button
            onClick={() => navigate("/report")}
            className="px-8 py-3 bg-gradient-to-r cursor-pointer from-blue-600 to-teal-600 text-white text-lg rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
          >
            View All Reports
          </button>

          {/* Create New Report */}
          <button
            onClick={() => navigate("/CreateReport")}
            className="px-8 py-3 bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 text-white text-lg rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Create New Report
          </button>
        </div>
      </header>


      <div className="bg-gradient-to-r from-blue-100 to-teal-100 py-10">
        <div className="grid gap-6 md:grid-cols-3 w-7xl m-auto lg:grid-cols-5">

          {reports.map((report, index) => (
            <button
              key={index}
              onClick={() => navigate("/CreateReport")}
              className="bg-gradient-to-r from-blue-400 to-teal-400 text-white px-6 py-3 rounded-tl-2xl rounded-br-2xl 
                     hover:from-teal-400 hover:to-blue-400 transition-all shadow-md"
            >
              {report}
            </button>
          ))}

        </div>
      </div>









      {/* Data Table Section */}
      <div className="min-h-screen bg-gradient-to-r from-blue-200 to-teal-200  text-gray-900">
        <div className="px-6 py-10 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-center font-bold text-blue-900 mb-10">
            Patient <span className="text-teal-600">Details</span>
          </h1>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="🔍 Search by name, email, city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-6 px-5 py-2 rounded-full bg-white focus:ring-0 appearance-none outline-none border-none  focus:shadow-lg shadow-gray-400 sh transition"
          />

          {/* Reports Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPeople.length > 0 ? (
              filteredPeople.map((p) => (
                <div
                  key={p.id}
                  className="bg-gradient-to-r to-blue-100 from-teal-100 relative rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-4">

                    <h2 className="text-xl font-semibold mb-2 text-blue-800">
                      {p.name}
                    </h2>

                    <span onClick={() => {
                      window.open("https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf", "_blank");
                    }} className=" absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-tr-2xl  rounded-bl-2xl ">{p.type}</span>
                  </div>
                  <p className="text-gray-700 mb-9">{p.description}</p>

                  <span className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-tr-2xl  rounded-bl-2xl">ID: {p.id}</span>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="absolute bottom-0 right-0 bg-gradient-to-r from-blue-300 to-teal-300 text-black px-6 py-3 rounded-tl-2xl  rounded-br-2xl hover:bg-gradient-to-tl"
                  >
                    Delete
                  </button>

                </div>
              ))
            ) : (
              <tr>
                <td
                  colSpan="9"
                  className="py-6 text-center text-gray-500 italic"
                >
                  No matching records found.
                </td>
              </tr>
            )}
          </div>

        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-100 to-teal-100">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Dashboard Highlights
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {/* Report Card */}
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <ClipboardList className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Generate Reports
            </h3>
            <p className="text-gray-600">
              Create accurate lab test reports instantly with automated
              formatting and secure cloud access.
            </p>
          </div>

          {/* Security Card */}
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <ShieldCheck className="h-12 w-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Data Security
            </h3>
            <p className="text-gray-600">
              Protect sensitive medical data with HIPAA-compliant encryption
              and automated backups.
            </p>
          </div>

          {/* User Friendly Card */}
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Easy for Everyone
            </h3>
            <p className="text-gray-600">
              Simple, intuitive interface designed for doctors, technicians,
              and patients alike.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" bg-gradient-to-r from-blue-600 to-teal-600 py-6 text-center text-white border-t border-gray-200">
        © {new Date().getFullYear()} MedX Labs. All rights reserved.
      </footer>
    </div>
  );
}
