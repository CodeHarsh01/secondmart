"use client";
import Link from "next/link";
import { FaBiking, FaMoneyCheck } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function ActionCards() {
  return (
    <section className="w-full py-16 grid grid-cols-1 md:grid-cols-2 gap-8 ">
      
      {/* Buy Card */}
      <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Are You Looking For a Bike?
            </h3>
            <p className="text-gray-600 mb-6">
              We are committed to providing our customers with exceptional service.
            </p>
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow hover:from-blue-700 hover:to-blue-600 transition">
            <Link href="/shop" className="flex items-center gap-2">Get Started <FiArrowUpRight className="text-lg" /></Link>
            </button>
          </div>

          {/* Icon Bubble */}
          <div className="flex justify-end mt-8">
            <div className="bg-white p-4 rounded-full shadow-md text-blue-600 text-4xl">
              <FaBiking />
            </div>
          </div>
        </div>
      </div>

      {/* Sell Card */}
      <div className="relative bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Do You Want to Sell a Bike?
            </h3>
            <p className="text-gray-600 mb-6">
              We are committed to providing our customers with exceptional service.
            </p>
            <button className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white px-6 py-3 rounded-xl font-medium shadow hover:from-pink-700 hover:to-pink-600 transition">
              <Link href="/sellEnquiry" className="flex items-center gap-2">Get Started <FiArrowUpRight className="text-lg" /></Link>
            </button>
          </div>

          {/* Icon Bubble */}
          <div className="flex justify-end mt-8">
            <div className="bg-white p-4 rounded-full shadow-md text-pink-600 text-4xl">
              <FaMoneyCheck />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
