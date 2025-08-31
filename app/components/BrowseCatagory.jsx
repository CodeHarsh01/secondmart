"use client";

import { useRouter } from "next/navigation";
import {
  FaMotorcycle,
  FaCarSide,
  FaRoad,
  FaMountain,
  FaGlobeAmericas,
  FaCar,
  FaTruckPickup,
  FaBolt,
  FaBus
} from "react-icons/fa";


const Category = [
  // Bikes
  { name: "Sports", icon: <FaMotorcycle className="text-3xl text-blue-600" />, gradient: "from-blue-100 to-blue-200" },
  { name: "Cruiser", icon: <FaCarSide className="text-3xl text-pink-600" />, gradient: "from-pink-100 to-pink-200" },
  { name: "Commuter", icon: <FaRoad className="text-3xl text-orange-500" />, gradient: "from-orange-100 to-orange-200" },
  { name: "Off-Road", icon: <FaMountain className="text-3xl text-purple-600" />, gradient: "from-purple-100 to-purple-200" },

  // Cars
  { name: "Sedan", icon: <FaCar className="text-3xl text-yellow-600" />, gradient: "from-yellow-100 to-yellow-200" },
  { name: "SUV", icon: <FaTruckPickup className="text-3xl text-indigo-600" />, gradient: "from-indigo-100 to-indigo-200" },
  { name: "Hatchback", icon: <FaCarSide className="text-3xl text-teal-600" />, gradient: "from-teal-100 to-teal-200" },
  { name: "Electric", icon: <FaBolt className="text-3xl text-gray-700" />, gradient: "from-gray-100 to-gray-200" },
  { name: "Luxury", icon: <FaBus className="text-3xl text-cyan-600" />, gradient: "from-cyan-100 to-cyan-200" },
];

export default function BrowseCategory() {
  const Router = useRouter()
  return (
    <section className="w-full py-10 mt-10">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 text-gray-900">
        Browse by Category
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-8">
        {Category.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => Router.push(`/shop?category=${encodeURIComponent(cat.name)}`)}
            className="flex flex-col items-center justify-center w-32 h-32 bg-white border rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className={`p-3 rounded-full bg-gradient-to-tr ${cat.gradient}`}>
              {cat.icon}
            </div>
            <span className="mt-3 text-sm font-semibold text-gray-800">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
