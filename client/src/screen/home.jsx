import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import NavBar from "../components/navbar";
import { ClipboardList, ShieldCheck, Users } from "lucide-react"; // icons

export default function HomePage() {
  const { check } = useAuthStore();

  useEffect(() => {
    check();
  }, [check]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-50 to-teal-50 border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Welcome to <span className="text-teal-600">MedX Lab</span>
        </h1>
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-lg rounded-xl font-semibold shadow-md hover:scale-105 transition-transform">
          View Latest Reports
        </button>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
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
      <footer className="bg-gray-100 py-6 text-center text-gray-600 border-t border-gray-200">
        © {new Date().getFullYear()} MedX Labs. All rights reserved.
      </footer>
    </div>
  );
}
