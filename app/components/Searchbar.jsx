"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

const filterOptions = {
  category: ["Bike", "Car"],
  city: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai"],
  brand: {
    Bike: ["Hero", "Honda", "Bajaj", "Royal Enfield", "Yamaha", "TVS"],
    Car: ["Maruti", "Hyundai", "Honda", "Tata", "Mahindra", "Toyota"],
  },
  price: {
    Bike: ["₹0 - ₹1,00,000", "₹1,00,000 - ₹2,00,000", "₹2,00,000+"],
    Car: ["₹0 - ₹5,00,000", "₹5,00,000 - ₹10,00,000", "₹10,00,000+"],
  },
  fuel: ["Petrol", "Diesel", "Electric", "CNG"],
};

export default function Searchbar() {
  const router = useRouter();

  const [filters, setFilters] = useState({
    category: "Bike", // default to bike
    city: "",
    brand: "",
    price: "",
    fuel: "",
  });

  // Update filters
  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // When category changes, reset brand & price
  const handleCategoryChange = (value) => {
    setFilters({ category: value, city: "", brand: "", price: "", fuel: "" });
  };

  // Filter options for brand & price based on category
  const availableBrands = filterOptions.brand[filters.category] || [];
  const availablePrices = filterOptions.price[filters.category] || [];

  // 🔹 Build query string and navigate
  const handleSearch = () => {
    const query = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) query.append(key, value);
    });

    router.push(`/shop?${query.toString()}`);
  };

  return (
    <div>
      {/* ✅ Desktop Filters */}
      <div className="hidden lg:flex py-2 px-4 text-black bg-white mt-5 rounded-full shadow-md">
        <div className="h-full flex gap-6 items-center">
          {/* Category */}
          <select
            value={filters.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="h-full pr-8 outline-none"
          >
            {filterOptions.category.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* City */}
          <select
            value={filters.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="h-full pr-8 outline-none"
          >
            <option value="">Select City</option>
            {filterOptions.city.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Brand */}
          <select
            value={filters.brand}
            onChange={(e) => handleChange("brand", e.target.value)}
            className="h-full pr-8 outline-none"
          >
            <option value="">Select Brand</option>
            {availableBrands.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Price */}
          <select
            value={filters.price}
            onChange={(e) => handleChange("price", e.target.value)}
            className="h-full pr-6 outline-none"
          >
            <option value="">Select Price</option>
            {availablePrices.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Fuel */}
          <select
            value={filters.fuel}
            onChange={(e) => handleChange("fuel", e.target.value)}
            className="h-full pr-8 outline-none"
          >
            <option value="">Select Fuel</option>
            {filterOptions.fuel.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Search button */}
          <div
            onClick={handleSearch}
            className="text-xl font-bold bg-black p-3 cursor-pointer rounded-full text-white"
          >
            <FiSearch />
          </div>
        </div>
      </div>

      {/* ✅ Mobile Filters */}
      <div className="flex w-full opacity-90 lg:hidden py-4 px-4 text-black bg-white mt-5 rounded-md shadow-md">
        <div className="h-full flex w-full flex-col gap-6">
          {/* Category */}
          <select
            value={filters.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="h-full pr-8 outline-none"
          >
            {filterOptions.category.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* City */}
          <select
            value={filters.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="h-full pr-8 outline-none"
          >
            <option value="">Select City</option>
            {filterOptions.city.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Brand */}
          <select
            value={filters.brand}
            onChange={(e) => handleChange("brand", e.target.value)}
            className="h-full pr-8 outline-none"
          >
            <option value="">Select Brand</option>
            {availableBrands.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Price */}
          <select
            value={filters.price}
            onChange={(e) => handleChange("price", e.target.value)}
            className="h-full pr-8 outline-none"
          >
            <option value="">Select Price</option>
            {availablePrices.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Fuel */}
          <select
            value={filters.fuel}
            onChange={(e) => handleChange("fuel", e.target.value)}
            className="h-full pr-8 outline-none"
          >
            <option value="">Select Fuel</option>
            {filterOptions.fuel.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Search button */}
          <div
            onClick={handleSearch}
            className="text-xl mx-auto font-bold bg-black p-3 rounded-full text-white cursor-pointer"
          >
            <FiSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
