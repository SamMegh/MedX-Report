import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore"; // adjust path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/report", label: "Reports" },
    { to: "/profile", label: "Profile" },
  ];

  return (
    <nav className="w-full bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-xl font-bold">MedX Report</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold"
                : "hover:text-blue-400 transition"
            }
          >
            {link.label}
          </NavLink>
        ))}
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="hover:text-red-400 transition"
        >
          Logout
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-[10] top-0 right-0 h-full w-64 bg-gray-900/60 backdrop-blur-[4px] shadow-[4px_4px_8px_5px_rgba(255,255,255,1)] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start gap-6 px-6 text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)} // close after click
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-bold"
                  : "hover:text-blue-400 transition"
              }
            >
              {link.label}
            </NavLink>
          ))}

          <button
            onClick={() => {
              logout();
              setIsOpen(false);
              navigate("/");
            }}
            className="hover:text-red-400 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
