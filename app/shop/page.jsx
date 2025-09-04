"use client";

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { databases } from "../appwriteconfig";

export default function Page() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Filter States
  const [categoryOrTag, setCategoryOrTag] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [brand, setBrand] = useState("All");
  const [kmDriven, setKmDriven] = useState(200000);
  const [year, setYear] = useState("All");
  const [owner, setOwner] = useState("All");
  const [location, setLocation] = useState("All");

  // 🔹 Fetch all listings from Appwrite
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await databases.listDocuments(
          "68b723f00006765dc8bd", // databaseId
          "listings"              // collectionId
        );
        setVehicles(res.documents);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  // 🔹 Apply Filters
  const filteredVehicles = vehicles.filter((v) => {
    const matchesCategoryOrTag =
      categoryOrTag === "All" ||
      v.type?.toLowerCase() === categoryOrTag.toLowerCase() ||
      v.tag?.toLowerCase() === categoryOrTag.toLowerCase();

    const matchesPrice = v.price >= priceRange[0] && v.price <= priceRange[1];
    const matchesBrand = brand === "All" || v.brand === brand;
    const matchesKmDriven = v.kilometers <= kmDriven;
    const matchesYear = year === "All" || v.year === parseInt(year, 10);
    const matchesOwner = owner === "All" || v.owner === owner;
    const matchesLocation = location === "All" || v.location === location;

    return (
      matchesCategoryOrTag &&
      matchesPrice &&
      matchesBrand &&
      matchesKmDriven &&
      matchesYear &&
      matchesOwner &&
      matchesLocation
    );
  });

  return (
    <div>
      <Navbar />

      {/* 🔹 Filters Section */}
      <div className="p-6 items-center flex flex-wrap justify-center gap-6">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            "All",
            "Bike",
            "Car",
            "Commuter",
            "Sports",
            "Cruiser",
            "Hatchback",
            "Sedan",
            "SUV",
            "Off-Road",
            "Petrol",
            "Diesel",
            "Luxury",
            "Electric",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setCategoryOrTag(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow ${
                categoryOrTag === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Brand */}
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow"
        >
          <option value="All">All Brands</option>
          <option value="Hero">Hero</option>
          <option value="Honda">Honda</option>
          <option value="Bajaj">Bajaj</option>
          <option value="Royal Enfield">Royal Enfield</option>
          <option value="Yamaha">Yamaha</option>
          <option value="TVS">TVS</option>
          <option value="Maruti">Maruti</option>
          <option value="Hyundai">Hyundai</option>
        </select>

        {/* Price Range */}
        <div className="flex items-center gap-2 justify-center">
          <label>Price:</label>
          <input
            type="range"
            min="0"
            max="2000000"
            step="50000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value, 10)])}
          />
          <span className="font-medium">
            Up to ₹{priceRange[1].toLocaleString()}
          </span>
        </div>

        {/* Km Driven */}
        <div className="flex items-center gap-2 justify-center">
          <label>Kms Driven:</label>
          <input
            type="range"
            min="0"
            max="200000"
            step="5000"
            value={kmDriven}
            onChange={(e) => setKmDriven(parseInt(e.target.value, 10))}
          />
          <span className="font-medium">
            Up to {kmDriven.toLocaleString()} km
          </span>
        </div>

        {/* Year */}
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow"
        >
          <option value="All">All Years</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>

        {/* Owner */}
        <select
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow"
        >
          <option value="All">Any Owner</option>
          <option value="1st Owner">1st Owner</option>
          <option value="2nd Owner">2nd Owner</option>
        </select>

        {/* Location */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow"
        >
          <option value="All">All Locations</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
        </select>

        {/* Clear All */}
        <button
          onClick={() => {
            setCategoryOrTag("All");
            setPriceRange([0, 2000000]);
            setBrand("All");
            setKmDriven(200000);
            setYear("All");
            setOwner("All");
            setLocation("All");
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Clear All
        </button>
      </div>

      {/* 🔹 Listings Section */}
      {loading ? (
          <div className=" flex items-center justify-center">
          <video
          src="/car.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-56"
        />
        </div>
      ) : filteredVehicles.length > 0 ? (
        <div className="p-4 md:p-8 flex flex-wrap justify-center gap-20 shrink-0">
          {filteredVehicles.map((item) => (
            <Card
              key={item.$id}
              image={item.images}
              price={item.price}
              title={item.title}
              desc={item.desc}
              tag={item.tag}
              fav={item.fav}
              driven={`${item.kilometers} km`}
              fuel={item.fuel}
              onClick={() => {}}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center my-20">
          <div>
            <svg
              className="w-24 h-24 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Listing Not Available
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 max-w-md mb-6">
            Sorry, no listings match your current filters. Please adjust your
            selections.
          </p>

          {/* Call-to-Action */}
          <div className="flex gap-4">
            <a
              href="/"
              className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg shadow hover:bg-red-600 transition"
            >
              Back to Home
            </a>
            <a
              href="/shop"
              className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition"
            >
              Browse All Listings
            </a>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
