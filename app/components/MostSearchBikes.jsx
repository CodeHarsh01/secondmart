"use client";
import { useState } from "react";
import { FaGasPump, FaCogs, FaTachometerAlt } from "react-icons/fa";
import Bikecard from "./Bikecard";
import { useRouter } from "next/navigation";


const bikes = [
  {
    id: 1,
    name: "Yamaha R15 – 2022",
    details: "155cc · Liquid-cooled · 6-Speed",
    mileage: "500 Miles",
    fuel: "Petrol",
    transmission: "Manual",
    price: "$2,500",
    tag: "Great Price",
    tagColor: "bg-green-500",
    image:
      "https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress",
  },
  {
    id: 2,
    name: "Royal Enfield Classic 350 – 2023",
    details: "349cc · Air-cooled · 5-Speed",
    mileage: "300 Miles",
    fuel: "Petrol",
    transmission: "Manual",
    price: "$3,200",
    tag: "Low Mileage",
    tagColor: "bg-blue-500",
    image:
      "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress",
  },
  {
    id: 3,
    name: "Kawasaki Ninja 400 – 2021",
    details: "399cc · Parallel Twin · 6-Speed",
    mileage: "1,000 Miles",
    fuel: "Petrol",
    transmission: "Manual",
    price: "$5,800",
    image:
      "https://images.pexels.com/photos/163392/motorcycles-race-racing-speed-163392.jpeg?auto=compress",
  },
  {
    id: 4,
    name: "Honda Activa 6G – 2022",
    details: "110cc · Fan-cooled · Automatic",
    mileage: "1,500 Miles",
    fuel: "Petrol",
    transmission: "CVT",
    price: "$1,200",
    image:
      "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress",
  },
];

export default function MostSearchedBikes() {
  const router = useRouter()
  return (
    <section className="w-full py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
        The Most Searched Bikes
      </h2>

      {/* Bikes Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 mt-12 place-items-center">
      {bikes.map((bike) => (
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
    </section>
  );
}
