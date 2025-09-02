export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar */}
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
            onClick={() => console.log("Dashboard clicked")}
            className="hover:text-blue-400 transition"
          >
            Dashboard
          </button>
          <button
            onClick={() => console.log("Profile clicked")}
            className="hover:text-blue-400 transition"
          >
            Profile
          </button>
          <button
            onClick={() => console.log("Logout clicked")}
            className="hover:text-red-400 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Hero / Welcome Section */}
      <header className="flex-1 flex flex-col items-center justify-center text-center px-6 relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome Back 👋
        </h1>
        <p className="text-gray-300 max-w-2xl mb-8">
          This is your personalized dashboard. Here you can manage reports,
          check analytics, and explore new features we’ve built for you.
        </p>
        <button
          onClick={() => console.log("Explore Features clicked")}
          className="px-6 py-3 bg-blue-600 text-lg rounded-xl hover:bg-blue-700 transition"
        >
          Explore Features
        </button>
      </header>

      {/* Features Section */}
      <section className="bg-gray-800 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Features You’ll Love
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Generate Reports</h3>
            <p className="text-gray-300">
              Quickly create professional reports with automated formatting and
              cloud storage.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Data Security</h3>
            <p className="text-gray-300">
              Keep sensitive information safe with top-grade encryption and
              backup solutions.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">User Friendly</h3>
            <p className="text-gray-300">
              Intuitive design makes it easy for doctors, testers, and patients
              to use the system.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </footer>
    </div>
  );
}
