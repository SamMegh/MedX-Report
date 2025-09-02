import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

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
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Create Account
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">Already have an account?</p>
          <Link to="/login" replace className="highlight">
            <button
              onClick={() => alert("Redirect to Login Page")}
              className="mt-2 w-full py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Back to Login
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
