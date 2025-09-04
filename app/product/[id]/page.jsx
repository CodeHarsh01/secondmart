"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaCalendarAlt,
  FaTachometerAlt,
  FaCogs,
  FaGasPump,
  FaPhoneAlt,
  FaLocationArrow
} from "react-icons/fa";
import { useParams } from "next/navigation";
import { databases } from "@/app/appwriteconfig";
import Loader from "@/app/components/Loader";

export default function Page() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  // fetch vehicle 
  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const res = await databases.getDocument(
          "68b723f00006765dc8bd", // databaseId
          "listings",             // collectionId
          id                      // documentId
        );
        setVehicle(res); // ✅ this was missing
      } catch (err) {
        console.error("Error fetching vehicle:", err);
      }
    };

    if (id) fetchVehicle();
  }, [id]);

  if (!vehicle) {
    return (
      <div className="h-screen flex items-center justify-center">
        <video
        src="/car.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-56"
      />
      </div>
    );
  }
  else{
    return (
      <div>
        <Navbar />
  
        <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{vehicle.title}</h1>
              <p className="text-gray-600">
                {vehicle.engine}cc | {vehicle.transmission}
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-blue-600">₹{vehicle.price}</h2>
              <button className="text-sm text-gray-600">Make an Offer</button>
            </div>
          </div>
  
          {/* ✅ Icon Info Section */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <FaCalendarAlt /> {vehicle.year}
            </div>
            <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <FaTachometerAlt /> {vehicle.kilometers} km
            </div>
            <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <FaGasPump /> {vehicle.fuel}
            </div>
            <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <FaCogs /> {vehicle.transmission}
            </div>
            <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <FaLocationArrow /> {vehicle.city}
            </div>
          </div>
  
          {/* Gallery */}
          {vehicle.images?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-3">
                <img
                  src={vehicle.images[0]}
                  alt="Main vehicle"
                  className="rounded-xl w-full h-80 object-cover"
                />
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-2">
                {vehicle.images.slice(1).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="rounded-xl h-40 object-cover"
                    alt={`vehicle-${i}`}
                  />
                ))}
              </div>
            </div>
          )}
  
          {/* Overview + Dealer Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Overview */}
            <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-4">Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
                <p><span className="font-semibold">Fuel:</span> {vehicle.fuel}</p>
                <p><span className="font-semibold">Year:</span> {vehicle.year}</p>
                <p><span className="font-semibold">Kilometers:</span> {vehicle.kilometers} km</p>
                <p><span className="font-semibold">Engine:</span> {vehicle.engine}cc</p>
                <p><span className="font-semibold">Color:</span> {vehicle.color}</p>
                <p><span className="font-semibold">VIN:</span> {vehicle.vin}</p>
                <p><span className="font-semibold">Owners:</span> {vehicle.owners} Owner</p>
                <p><span className="font-semibold">Registration:</span> {vehicle.registration}</p>
                <p><span className="font-semibold">Insurance:</span> {vehicle.insurance}</p>
              </div>
  
              {/* Description */}
              <h3 className="text-lg font-semibold mt-6 mb-2">Description</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {vehicle.description}
              </p>
  
              {/* ✅ Features */}
              {vehicle.features?.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold mt-6 mb-2">Features</h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="bg-gray-100 px-3 py-2 rounded-lg">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
  
            {/* Seller Info */}
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="mb-4">
                <h4 className="font-semibold">{vehicle.sellerName}</h4>
                <p className="text-sm text-gray-500">{vehicle.sellerLocation}</p>
              </div>
              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
                  <FaPhoneAlt /> Call Seller
                </button>
                <button className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow">
                  <FaWhatsapp /> Chat on WhatsApp
                </button>
                <div className="mt-5 h-62 md:h-100 lg:h-62">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(vehicle?.city || "Delhi")}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <Footer />
      </div>
    );
  }

  
}
