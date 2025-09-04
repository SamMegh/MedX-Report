import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";

export default function CreateReport() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        patientName: "",
        reportType: "",
        description: "",
        urgent: false,
        notify: true,
        reportResult: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.patientName || !form.reportType || !form.description || !form.reportResult) {
            setError("Please fill all required fields.");
            return;
        }
        setError("");
        console.log("Report Created:", form);
        navigate("/report");
    };

    const reportTypes = ["Blood Report", "X-Ray Report", "Urine Report", "MRI Report", "Other"];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
            <NavBar />

            <div className="max-w-3xl mx-auto p-8">

                <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">
                    Create New Report
                </h1>

                {error && <p className="text-red-500 text-center mb-4 font-medium">{error}</p>}

                <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6" onSubmit={handleSubmit}>

                    {/* Patient Name */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Patient Name</label>
                        <input
                            type="text"
                            name="patientName"
                            value={form.patientName}
                            onChange={handleChange}
                            placeholder="Enter patient name"
                            className="w-full px-4 py-2 rounded-xl bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Report Type */}
                    <div>

                        <label className="block mb-2 font-medium text-gray-700">Report Type</label>

                        <input
                            list="report-types"
                            name="reportType"
                            value={form.reportType}
                            onChange={handleChange}
                            placeholder="Type or select report type"
                            className="w-full px-4 py-2 rounded-xl bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <datalist id="report-types">
                            {reportTypes.map((type, idx) => (
                                <option key={idx} value={type} />
                            ))}
                        </datalist>

                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Enter report details"
                            className="w-full px-4 py-2 rounded-xl bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            rows={5}
                        />
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-2 m-auto items-center align-middle md:gap-6">

                        {/* Urgent */}
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="urgent"
                                checked={form.urgent}
                                onChange={handleChange}
                                className="w-5 h-5 accent-red-500"
                            />
                            <span className="text-gray-700">Mark as Urgent</span>
                        </label>

                        {/* Report Result */}
                        <div className="mt-2 md:mt-0 justify-center text-center flex flex-row items-center gap-4 ">
                            <span className="block  font-medium text-gray-700">Report Result</span>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="reportResult"
                                        value="Yes"
                                        checked={form.reportResult === "Yes"}
                                        onChange={handleChange}
                                        className="accent-blue-500"
                                        required
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="reportResult"
                                        value="No"
                                        checked={form.reportResult === "No"}
                                        onChange={handleChange}
                                        className="accent-red-500"
                                        required
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-4">

                        <button
                            type="submit"
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-lg rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
                        >
                            Create Report
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/report")}
                            className="px-8 py-3 bg-gray-400 text-white text-lg rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
                        >
                            Cancel
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}
