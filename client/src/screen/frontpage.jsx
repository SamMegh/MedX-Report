import Loginnavbar from "../components/loginnavbar";
import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-teal-50 text-gray-900">
      
      <Loginnavbar/>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 -z-10"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-900">
          Welcome to <span className="text-teal-600">MedX Labs</span>
        </h1>
        <p className="text-gray-700 max-w-xl mb-6 leading-relaxed">
          We help doctors and lab technicians generate reports quickly, securely store data, and share results with patients seamlessly.
        </p>
        <Link to="/signup">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-lg rounded-xl font-semibold shadow-lg hover:scale-[1.05] transition-transform">
            Get Started
          </button>
        </Link>
      </main>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-200 px-6 py-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-center md:text-left">
          {/* Why This Software */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-blue-900">Why MedX Labs?</h2>
            <p className="text-gray-600">
              Our platform helps doctors and lab technicians generate reports quickly, securely store them in the cloud, and easily share results with patients.
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-teal-600">Reviews</h2>
            <p className="text-gray-600 italic">
              "This software saved me hours of manual work. The reports look professional and are easy to share!" – Dr. Smith
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-10">
          © {new Date().getFullYear()} MedX Labs. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
