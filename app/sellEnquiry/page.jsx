"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SellVehicleForm() {
  const [formData, setFormData] = useState({
    vehicleType: "Bike",
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
            <h2 className="text-3xl font-semibold mb-4">
              Sell Your {formData.vehicleType}
            </h2>
            <p className="text-gray-600 mb-6">
              Ready to sell your {formData.vehicleType.toLowerCase()}? Fill out the
              form with your {formData.vehicleType.toLowerCase()} details and we’ll
              connect you with interested buyers quickly.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Provide accurate {formData.vehicleType.toLowerCase()} details.</li>
              <li>✔ Mention the expected selling price.</li>
              <li>✔ Add valid contact info to get quick responses.</li>
            </ul>
          </div>

          {/* Right Form Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">
              {formData.vehicleType} Details
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Vehicle Type */}
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {["Bike", "Car"].map((type) => (
                    <label
                      key={type}
                      className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition ${
                        formData.vehicleType === type
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="vehicleType"
                        value={type}
                        checked={formData.vehicleType === type}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="font-medium">{type}</span>
                    </label>
                  ))}
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

              {/* Vehicle Info */}
              <input
                type="text"
                name="brand"
                placeholder={`${formData.vehicleType} Brand`}
                value={formData.brand}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 outline-none"
                required
              />
              <input
                type="text"
                name="model"
                placeholder={`${formData.vehicleType} Model`}
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
