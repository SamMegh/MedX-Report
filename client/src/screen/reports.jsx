import React from "react";
import NavBar from "../components/navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReportPage() {

  const navigate = useNavigate();

  // Example data (replace with real API later)
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
      id: "RPT004",
      name: "Alice Johnson",
      type: "Blood Report",
      description: "Vitamin levels slightly low, follow up recommended.",
    },]
  );

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

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-teal-100  text-gray-900">
      <NavBar />
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-900">
          Patient Reports
        </h1>
        {/* Create New Report */}
        <div className="max-w-2xl text-lg text-gray-700 mb-10 mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3 flex flex-col md:flex-row items-center justify-center">
          {/* Create New Report */}
          <button
            onClick={() => navigate("/CreateReport")}
            className="px-8 py-3 bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 text-white text-lg rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Create New Report
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search by name, email, city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 px-5 py-2 rounded-full bg-gray-600 text-white placeholder:text-amber-50 focus:ring-0 appearance-none outline-none border-none  focus:shadow-lg shadow-gray-400 sh transition"
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
  );
}
