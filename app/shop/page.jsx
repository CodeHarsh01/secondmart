"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bikecard from "../components/Bikecard";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  const bikes = [
    {
      id: 1,
      image: "/images/bike1.jpg",
      price: 85000,
      title: "Hero Splendor Plus",
      desc: "A reliable commuter bike with excellent mileage and low maintenance.",
      tag: "Commuter",
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
    {
      id: 5,
      image: "/images/bike5.jpg",
      price: 195000,
      title: "Yamaha R15 V4",
      desc: "A sporty bike with sharp design and advanced features for enthusiasts.",
      tag: "Sports",
      driven: 10200,
      fuel: "Petrol",
      brand: "Yamaha",
      year: 2022,
      owner: "1st Owner",
      transmission: "Manual",
      location: "Hyderabad",
    },
    {
      id: 6,
      image: "/images/bike6.jpg",
      price: 95000,
      title: "TVS Apache RTR 160",
      desc: "A performance-oriented commuter with a stylish look and reliable engine.",
      tag: "Commuter",
      driven: 20000,
      fuel: "Electric",
      brand: "TVS",
      year: 2021,
      owner: "2nd Owner",
      transmission: "Manual",
      location: "Chennai",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 400000]);
  const [brand, setBrand] = useState("All");
  const [kmDriven, setKmDriven] = useState(50000);
  const [year, setYear] = useState("All");
  const [owner, setOwner] = useState("All");
  const [location, setLocation] = useState("All");

  // ✅ Filter Logic
  const filteredBikes = bikes.filter((bike) => {
    const matchesCategory =
      filter === "All" ||
      bike.tag.toLowerCase() === filter.toLowerCase() ||
      bike.fuel.toLowerCase() === filter.toLowerCase();

    const matchesPrice =
      bike.price >= priceRange[0] && bike.price <= priceRange[1];

    const matchesBrand = brand === "All" || bike.brand === brand;

    const matchesKm = bike.driven <= kmDriven;

    const matchesYear = year === "All" || bike.year.toString() === year;

    const matchesOwner = owner === "All" || bike.owner === owner;

    const matchesLocation =
      location === "All" || bike.location === location;

    return (
      matchesCategory &&
      matchesPrice &&
      matchesBrand &&
      matchesKm &&
      matchesYear &&
      matchesOwner &&
      matchesLocation
    );
  });

  return (
    <div>
      <Navbar />
      {/* ✅ Filters */}
      <div className="p-6 items-center  flex flex-wrap justify-center gap-6">
        {/* Category + Fuel */}
        <div className="flex flex-wrap gap-2">
          {["All", "Commuter", "Sports", "Cruiser", "Petrol", "Electric"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow ${filter === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {category}
              </button>
            )
          )}
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
        </select>

        {/* Price Range */}
        <div className="flex items-center gap-2">
          <label>Price: </label>
          <input
            type="range"
            min="0"
            max="400000"
            step="5000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
          />
          <span className="font-medium">
            Up to ₹{priceRange[1].toLocaleString()}
          </span>
        </div>

        {/* Km Driven */}
        <div className="flex items-center gap-2">
          <label>Kms Driven: </label>
          <input
            type="range"
            min="0"
            max="100000"
            step="5000"
            value={kmDriven}
            onChange={(e) => setKmDriven(parseInt(e.target.value))}
          />
          <span className="font-medium">Up to {kmDriven.toLocaleString()} km</span>
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
        <button
          onClick={() => {
            setFilter("All");
            setPriceRange([0, 400000]);
            setBrand("All");
            setKmDriven(50000);
            setYear("All");
            setOwner("All");
            setLocation("All");
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Clear All
        </button>

      </div>
      <div className="p-4 mt-5 md:p-5 flex flex-wrap justify-center gap-20 shrink-0">
        {filteredBikes.map((bike) => (
          <Bikecard
            key={bike.id}
            image={bike.image}
            price={bike.price}
            title={bike.title}
            desc={bike.desc}
            tag={bike.tag}
            driven={`${bike.driven} km`}
            fuel={bike.fuel}
            onClick={() => router.push(`/product/${bike.id}`)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
