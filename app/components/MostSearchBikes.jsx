"use client";
import { useRouter } from "next/navigation";
import Card from "./Card";
import { useEffect, useState } from "react";
import { databases } from "../appwriteconfig";

export default function MostSearchedBikes() {
  const router = useRouter();
  const [vehicles, setVehicles] = useState([]);

  // fetch listings 
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await databases.listDocuments(
          "68b723f00006765dc8bd", 
          "listings"             
        );
        const filter = res.documents.filter(v => v.featured === true);
        setVehicles(filter);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
      }
    };
    fetchVehicles();
  }, []);
  console.log(vehicles)
  return (
    <section className="w-full py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
        The Most Searched Vehicles
      </h2>

      {/* Vehicles Grid */}
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 ">
        {vehicles.map((v) => (
          <Card
            key={v.$id}
            image={v.image} 
            fav={v.featured}
            price={v.price}
            title={v.title}
            desc={v.description}
            tag={v.category}
            driven={`${v.kilometers} km`}
            fuel={v.fuel}
            onClick={() => router.push(`/product/${v.$id}`)}
          />
        ))}
      </div>
    </section>
  );
}
