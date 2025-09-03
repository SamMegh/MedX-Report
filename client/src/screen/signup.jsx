import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import Loginnavbar from "../components/loginnavbar";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const { signup } = useAuthStore();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required.");
      return;
    }
    setError("");
    signup(form);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-teal-50 text-gray-900">
      <Loginnavbar />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
            Create Account
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-2 bg-gray-50 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="doctor@medxlabs.com"
                className="w-full mt-1 px-4 py-2 bg-gray-50 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter a secure password"
                className="w-full mt-1 px-4 py-2 bg-gray-50 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:scale-[1.05] transition-transform"
            >
              Sign Up
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">Already have an account?</p>
            <Link to="/login" replace>
              <button className="mt-3 w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:scale-[1.05] transition-transform">
                Back to Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
