import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import NavBar from "../components/navbar";
import { ClipboardList, ShieldCheck, Users } from "lucide-react"; // icons

export default function HomePage() {
  const { check } = useAuthStore();

  useEffect(() => {
    check();
  }, [check]);

  const [people, setPeople] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      terms: true,
      country: "USA",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      address: "456 Oak Avenue",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      terms: false,
      country: "USA",
    },
    {
      id: 3,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      address: "78 MG Road",
      city: "Mumbai",
      state: "MH",
      zip: "400001",
      terms: true,
      country: "India",
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <header className="flex-1 min-h-auto py-32 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-100 to-teal-100 ">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Welcome to <span className="text-teal-600">MedX Lab</span>
        </h1>
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-lg rounded-xl font-semibold shadow-md hover:scale-105 transition-transform">
          View Latest Reports
        </button>
      </header>

      {/* Data Table Section */}
      <div className=" bg-gradient-to-r from-blue-100 to-teal-100  flex items-center justify-center px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-7xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Address Details - Multiple People
          </h2>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by name, email, city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Address</th>
                  <th className="py-3 px-4 text-left">City</th>
                  <th className="py-3 px-4 text-left">State</th>
                  <th className="py-3 px-4 text-left">Zip</th>
                  <th className="py-3 px-4 text-center">Terms</th>
                  <th className="py-3 px-4 text-left">Country</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPeople.length > 0 ? (
                  filteredPeople.map((p) => (
                    <tr
                      key={p.id}
                      className="border-b hover:bg-gray-100 transition"
                    >
                      <td className="py-3 px-4">{p.name}</td>
                      <td className="py-3 px-4">{p.email}</td>
                      <td className="py-3 px-4">{p.address}</td>
                      <td className="py-3 px-4">{p.city}</td>
                      <td className="py-3 px-4">{p.state}</td>
                      <td className="py-3 px-4">{p.zip}</td>
                      <td className="py-3 px-4 text-center">
                        {p.terms ? "✅" : "❌"}
                      </td>
                      <td className="py-3 px-4">{p.country}</td>
                      <td className="py-3 px-4 text-center space-x-2">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(p.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className=" bg-gradient-to-r from-blue-100 to-teal-100  text-gray-900">
        <div className="px-6 py-10 max-w-7xl mx-auto">

          {/* Reports Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-gradient-to-r to-blue-100 from-teal-100 relative rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">

                  <h2 className="text-xl font-semibold mb-2 text-blue-800">
                    {report.name}
                  </h2>

                  <span className=" absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-tr-2xl  rounded-bl-2xl ">{report.type}</span>
                </div>

                <p className="text-gray-700 mb-9">{report.description}</p>

                <span className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-tr-2xl  rounded-bl-2xl">ID: {report.id}</span>

              </div>
            ))}
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
