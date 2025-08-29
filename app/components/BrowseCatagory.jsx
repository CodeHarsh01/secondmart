"use client";

import { 
  FaMotorcycle, 
  FaBiking, 
  FaCarSide, 
  FaRoad, 
  FaMountain, 
  FaGlobeAmericas 
} from "react-icons/fa";

export default function BrowseCategory() {
  return (
    <section className="w-full py-20 mt-10">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 text-gray-900">
        Browse by Bike Type
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
        
        {/* Sports */}
        <div className="flex flex-col items-center justify-center w-32 h-32 bg-white border rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="p-3 rounded-full bg-gradient-to-tr from-blue-100 to-blue-200">
            <FaMotorcycle className="text-3xl text-blue-600" />
          </div>
          <span className="mt-3 text-sm font-semibold text-gray-800">Sports</span>
        </div>

        {/* Cruiser */}
        <div className="flex flex-col items-center justify-center w-32 h-32 bg-white border rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="p-3 rounded-full bg-gradient-to-tr from-pink-100 to-pink-200">
            <FaCarSide className="text-3xl text-pink-600" />
          </div>
          <span className="mt-3 text-sm font-semibold text-gray-800">Cruiser</span>
        </div>

        {/* Scooter */}
        <div className="flex flex-col items-center justify-center w-32 h-32 bg-white border rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="p-3 rounded-full bg-gradient-to-tr from-green-100 to-green-200">
            <FaBiking className="text-3xl text-green-600" />
          </div>
          <span className="mt-3 text-sm font-semibold text-gray-800">Scooter</span>
        </div>

        {/* Commuter */}
        <div className="flex flex-col items-center justify-center w-32 h-32 bg-white border rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="p-3 rounded-full bg-gradient-to-tr from-orange-100 to-orange-200">
            <FaRoad className="text-3xl text-orange-500" />
          </div>
          <span className="mt-3 text-sm font-semibold text-gray-800">Commuter</span>
        </div>

        {/* Off-Road */}
        <div className="flex flex-col items-center justify-center w-32 h-32 bg-white border rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="p-3 rounded-full bg-gradient-to-tr from-purple-100 to-purple-200">
            <FaMountain className="text-3xl text-purple-600" />
          </div>
          <span className="mt-3 text-sm font-semibold text-gray-800">Off-Road</span>
        </div>

        {/* Touring */}
        <div className="flex flex-col items-center justify-center w-32 h-32 bg-white border rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="p-3 rounded-full bg-gradient-to-tr from-red-100 to-red-200">
            <FaGlobeAmericas className="text-3xl text-red-600" />
          </div>
          <span className="mt-3 text-sm font-semibold text-gray-800">Touring</span>
        </div>

      </div>
    </section>
  );
}
