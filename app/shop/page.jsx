"use client";

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Page() {
  const vehicles = [
    // --- Bikes ---
    {
      id: 1,
      type: "Bike",
      image: "/images/bike1.jpg",
      price: 85000,
      title: "Hero Splendor Plus",
      desc: "A reliable commuter bike with excellent mileage and low maintenance.",
      tag: "Commuter",
      fav: true,
      driven: 18000,
      fuel: "Petrol",
      brand: "Hero",
      year: 2019,
      owner: "1st Owner",
      transmission: "Manual",
      location: "Delhi",
    },
    {
      id: 2,
      type: "Bike",
      image: "/images/bike2.jpg",
      price: 125000,
      title: "Honda CB Shine",
      desc: "Stylish design with smooth performance, ideal for daily city rides.",
      tag: "Commuter",
      driven: 12500,
      fuel: "Petrol",
      brand: "Honda",
      year: 2020,
      owner: "1st Owner",
      transmission: "Manual",
      location: "Mumbai",
    },
    {
      id: 3,
      type: "Bike",
      image: "/images/bike3.jpg",
      price: 210000,
      title: "Bajaj Pulsar 220F",
      desc: "A powerful sports commuter with aggressive looks and performance.",
      tag: "Sports",
      driven: 25000,
      fuel: "Petrol",
      brand: "Bajaj",
      year: 2018,
      owner: "2nd Owner",
      transmission: "Manual",
      location: "Bangalore",
    },
    {
      id: 4,
      type: "Bike",
      image: "/images/bike4.jpg",
      price: 345000,
      title: "Royal Enfield Classic 350",
      desc: "A retro-styled cruiser with strong build quality and comfort.",
      tag: "Cruiser",
      driven: 15000,
      fuel: "Petrol",
      brand: "Royal Enfield",
      year: 2021,
      owner: "1st Owner",
      transmission: "Manual",
      location: "Delhi",
    },

    // --- Cars ---
    {
      id: 101,
      type: "Car",
      image: "/images/car1.jpg",
      price: 550000,
      title: "Maruti Suzuki Swift",
      desc: "A compact hatchback with sporty looks and reliable performance.",
      tag: "Hatchback",
      fav: true,
      driven: 35000,
      fuel: "Petrol",
      brand: "Maruti",
      year: 2020,
      owner: "1st Owner",
      transmission: "Manual",
      location: "Mumbai",
    },
    {
      id: 102,
      type: "Car",
      image: "/images/car2.jpg",
      price: 1200000,
      title: "Hyundai Creta",
      desc: "A stylish SUV with modern features and great comfort.",
      tag: "SUV",
      driven: 28000,
      fuel: "Diesel",
      brand: "Hyundai",
      year: 2021,
      owner: "1st Owner",
      transmission: "Automatic",
      location: "Delhi",
    },
    {
      id: 103,
      type: "Car",
      image: "/images/car3.jpg",
      price: 850000,
      title: "Honda City",
      desc: "A premium sedan with excellent comfort and strong engine performance.",
      tag: "Sedan",
      driven: 45000,
      fuel: "Petrol",
      brand: "Honda",
      year: 2019,
      owner: "2nd Owner",
      transmission: "Manual",
      location: "Chennai",
    },
  ];

  // Renamed filter to categoryOrTag for clarity
  const [categoryOrTag, setCategoryOrTag] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [brand, setBrand] = useState("All");
  const [kmDriven, setKmDriven] = useState(200000); // Max km driven for range filter
  const [year, setYear] = useState("All");
  const [owner, setOwner] = useState("All");
  const [location, setLocation] = useState("All");
  // Added fuelFilter state
  const [fuelFilter, setFuelFilter] = useState("All");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const c = searchParams.get("category");
    const ct = searchParams.get("city");
    const b = searchParams.get("brand");
    const f = searchParams.get("fuel");
    const p = searchParams.get("price");
    const y = searchParams.get("year");
    const km = searchParams.get("kilometers");
    const o = searchParams.get("owner");

    // Check for each search parameter and update the corresponding state
    if (c) setCategoryOrTag(c);
    if (ct) setLocation(ct); // Correctly sets location
    if (b) setBrand(b);
    if (f) setFuelFilter(f); // Correctly sets fuel filter
    if (y) setYear(y);
    if (km) setKmDriven(parseInt(km, 10));
    if (o) setOwner(o);

    // Parse price range string like "₹0 - ₹5,00,000"
    if (p) {
      const nums = p.match(/\d+/g);
      if (nums) {
        const min = parseInt(nums[0] + (nums[1] || ""), 10) || 0;
        const max = parseInt(nums[2] + (nums[3] || ""), 10) || 2000000;
        setPriceRange([min, max]);
      }
    }
  }, [searchParams]);

  // Updated Filtering logic to include all filters
  const filteredVehicles = vehicles.filter((v) => {
    const matchesCategoryOrTag =
      categoryOrTag === "All" ||
      v.type.toLowerCase() === categoryOrTag.toLowerCase() ||
      v.tag.toLowerCase() === categoryOrTag.toLowerCase();

    const matchesPrice = v.price >= priceRange[0] && v.price <= priceRange[1];
    const matchesBrand = brand === "All" || v.brand === brand;
    const matchesKmDriven = v.driven <= kmDriven;
    const matchesYear = year === "All" || v.year === parseInt(year, 10);
    const matchesOwner = owner === "All" || v.owner === owner;
    const matchesLocation = location === "All" || v.location === location;
    const matchesFuel = fuelFilter === "All" || v.fuel === fuelFilter;

    return (
      matchesCategoryOrTag &&
      matchesPrice &&
      matchesBrand &&
      matchesKmDriven &&
      matchesYear &&
      matchesOwner &&
      matchesLocation &&
      matchesFuel
    );
  });

  return (
    <div>
      <Navbar />

      {/* Filters section */}
      <div className="p-6 items-center flex flex-wrap justify-center gap-6">
        {/* Category + Fuel + Type */}
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
              // Updated onClick to use the new categoryOrTag state
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
          <label>Price: </label>
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
          <label>Kms Driven: </label>
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
            setKmDriven(200000); // Updated to match max value
            setYear("All");
            setOwner("All");
            setLocation("All");
            setFuelFilter("All");
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Clear All
        </button>
      </div>

      {/* Corrected Conditional Rendering Logic */}
      {filteredVehicles.length > 0 ? (
        <div className="p-4 md:p-8 flex flex-wrap justify-center gap-20 shrink-0">
          {filteredVehicles.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              desc={item.desc}
              tag={item.tag}
              fav={item.fav}
              driven={`${item.driven} km`}
              fuel={item.fuel}
              onClick={() => router.push(`/product/${item.id}`)}
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
