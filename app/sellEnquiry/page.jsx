"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SellBikeForm() {
    const [formData, setFormData] = useState({
        sellerType: "Owner", // default value
        name: "",
        email: "",
        phone: "",
        brand: "",
        model: "",
        year: "",
        kilometers: "",
        price: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", formData);
    };

    return (
        <>
            <Navbar />
            <section className="w-full py-12">
                <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8">
                    {/* Left Info Section */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Sell Your Bike</h2>
                        <p className="text-gray-600 mb-6">
                            Ready to sell your bike? Fill out the form with your bike details and we’ll connect you with interested buyers quickly.
                        </p>

                        <ul className="space-y-4 text-gray-700">
                            <li>✔ Provide accurate bike details.</li>
                            <li>✔ Mention the expected selling price.</li>
                            <li>✔ Add valid contact info to get quick responses.</li>
                        </ul>
                    </div>

                    {/* Right Form Section */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Bike Details</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Seller Type */}
                            <div>
                                <div className="grid grid-cols-2 gap-4">
                                    <label
                                        className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition ${formData.sellerType === "Owner"
                                                ? "border-blue-600 bg-blue-50"
                                                : "border-gray-300 bg-white"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="sellerType"
                                            value="Owner"
                                            checked={formData.sellerType === "Owner"}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="font-medium">Owner</span>
                                    </label>

                                    <label
                                        className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition ${formData.sellerType === "Dealer"
                                                ? "border-blue-600 bg-blue-50"
                                                : "border-gray-300 bg-white"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="sellerType"
                                            value="Dealer"
                                            checked={formData.sellerType === "Dealer"}
                                            onChange={handleChange}
                                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="font-medium">Dealer</span>
                                    </label>
                                </div>
                            </div>
                            {/* Personal Info */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 outline-none"
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 outline-none"
                                required
                            />

                            {/* Bike Info */}
                            <input
                                type="text"
                                name="brand"
                                placeholder="Bike Brand"
                                value={formData.brand}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 outline-none"
                                required
                            />
                            <input
                                type="text"
                                name="model"
                                placeholder="Bike Model"
                                value={formData.model}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 outline-none"
                                required
                            />
                            <input
                                type="number"
                                name="year"
                                placeholder="Manufacture Year"
                                value={formData.year}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 outline-none"
                            />
                            <input
                                type="number"
                                name="kilometers"
                                placeholder="Kilometers Driven"
                                value={formData.kilometers}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 outline-none"
                            />
                            <input
                                type="number"
                                name="price"
                                placeholder="Expected Price (₹)"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 outline-none"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Additional Details"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full border rounded-lg px-4 py-2 outline-none"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
