import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

function NavLinks({ onClick }) {
  const links = [
    { to: "/home", label: "Home" },
    { to: "/report", label: "Reports" },
    { to: "/profile", label: "Profile" },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onClick}
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold bg-gradient-to-r from-blue-500 to-teal-400 px-3 py-1 rounded-lg shadow-md"
              : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 px-3 py-1 rounded-lg transition-all"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-teal-600 shadow-lg px-6 py-4 flex justify-between items-center text-white">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="w-10 h-10 rounded-full border-2 border-white shadow-md"
        />
        <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-200 to-teal-200 text-transparent bg-clip-text drop-shadow-lg">
          MedX Report
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLinks />
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="px-4 py-1 rounded-lg bg-white text-blue-600 font-semibold hover:scale-105 transition-transform shadow-md"
        >
          Logout
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button aria-label="Open Menu" onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-[100] top-0 right-0 h-full w-64 bg-gradient-to-b from-blue-600 to-teal-600 shadow-2xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button aria-label="Close Menu" onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start gap-6 px-6 text-lg">
          <NavLinks onClick={() => setIsOpen(false)} />
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
              navigate("/login");
            }}
            className="px-4 py-1 rounded-lg bg-white text-blue-600 font-semibold hover:scale-105 transition-transform shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
