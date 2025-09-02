import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const {login} = useAuthStore();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    await login(form)
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Sign Up Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">Don’t have an account?</p>
          <button
            onClick={() => alert("Redirect to Sign Up Page")}
            className="mt-2 w-full py-2 px-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            <Link to="/signup" className="highlight">
                Create New Account
              </Link>{" "}
            
          </button>
        </div>
      </div>
    </div>
  );
}
