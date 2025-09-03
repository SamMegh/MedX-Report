import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import Loginnavbar from "../components/loginnavbar";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuthStore();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    await login(form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex flex-col">
      {/* Navbar */}
      <Loginnavbar />

      {/* Login Box */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Doctor Lab Login
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 bg-gray-50 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="doctor@medxlabs.com"
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
                className="w-full mt-1 px-4 py-2 bg-gray-50 text-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-lg rounded-xl font-semibold hover:scale-[1.02] transition-transform shadow-md"
            >
              Login
            </button>
          </form>

          {/* Sign Up Section */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">Don’t have an account?</p>
            <Link to="/signup" replace>
              <button className="mt-3 w-full py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-lg rounded-xl font-semibold hover:scale-[1.02] transition-transform shadow-md">
                Create New Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
