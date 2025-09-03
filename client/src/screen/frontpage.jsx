import Loginnavbar from "../components/loginnavbar";
import { Link } from "react-router-dom";
export default function FrontPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      
      <Loginnavbar/>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-10"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to MyCompany
        </h1>
        <p className="text-gray-300 max-w-xl mb-6">
          We make creating reports and managing data effortless, secure, and
          professional.
        </p>
        <Link to="/signup" className="highlight">
        <button
          className="px-6 py-3 bg-blue-600 text-lg rounded-xl hover:bg-blue-700 transition"
        >
          Get Started
        </button>
          </Link>{" "}
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 px-6 py-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-center md:text-left">
          {/* Why This Software */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Why This Software?</h2>
            <p className="text-gray-400">
              Our platform helps doctors and testers generate reports quickly,
              securely store them in the cloud, and easily share results with
              patients.
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Reviews</h2>
            <p className="text-gray-400 italic">
              "This software saved me hours of manual work. The reports look
              professional and are easy to share!" – Dr. Smith
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-10">
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
