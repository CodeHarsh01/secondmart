"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const filterOptions = {
  city: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai"],
  brand: ["Hero", "Honda", "Bajaj", "Royal Enfield", "Yamaha", "TVS"],
  price: ["₹0 - ₹1,00,000", "₹1,00,000 - ₹2,00,000", "₹2,00,000+"],
  fuel: ["Petrol", "Electric"],
};

export default function Searchbar() {
  const [filters, setFilters] = useState({ city: "", brand: "", price: "", fuel: "" });

  // Update filters
  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };


  return (
    <div>
      {/* ✅ Desktop Filters */}
      <div className="hidden lg:flex py-2 px-4 text-black bg-white mt-5 rounded-full">
        <div className="h-full flex gap-6 items-center">
          {Object.keys(filterOptions).map((key) => (
            <select
              key={key}
              name={key}
              value={filters[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="h-full pr-8 outline-none"
            >
              <option value="">{`Select ${key.charAt(0).toUpperCase() + key.slice(1)}`}</option>
              {filterOptions[key].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ))}

          {/* Search button */}
          <div
            onClick={()=>console.log(filters)}
            className="text-xl font-bold bg-black p-3 cursor-pointer rounded-full text-white"
          >
            <FiSearch />
          </div>
        </div>
      </div>

      {/* ✅ Mobile Filters */}
      <div className="flex w-70 opacity-90 lg:hidden py-4 px-4 text-black bg-white mt-5 rounded-sm">
        <div className="h-full flex w-full flex-col gap-8">
          {Object.keys(filterOptions).map((key) => (
            <select
              key={key}
              name={key}
              value={filters[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="h-full pr-8 outline-none"
            >
              <option value="">{`Select ${key.charAt(0).toUpperCase() + key.slice(1)}`}</option>
              {filterOptions[key].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ))}

          <div
            onClick={()=>console.log(filters)}
            className="text-xl mx-auto font-bold bg-black p-3 rounded-full text-white"
          >
            <FiSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
