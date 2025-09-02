import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate=useNavigate();
  return (
    <div>
      <nav className="w-full bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png" // 👉 replace with your logo path
            alt="Company Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold">MyCompany</span>
        </div>

        <div className="flex gap-6">
          <button
            onClick={() => navigate("/home")}
            className="hover:text-blue-400 transition"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/report")}
            className="hover:text-blue-400 transition"
          >
            Reports
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="hover:text-blue-400 transition"
          >
            Profile
          </button>
          <button className="hover:text-red-400 transition">Logout</button>
        </div>
      </nav>
    </div>
  );
}
