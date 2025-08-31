"use client";
import { useRouter } from "next/navigation";
import Card from "./Card";


const bikes = [
  {
    id: 1,
    image: "/images/bike1.jpg",
    price: 85000,
    title: "Hero Splendor Plus",
    desc: "A reliable commuter bike with excellent mileage and low maintenance.",
    tag: "Commuter",
    fav:true,
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
]

export default function MostSearchedBikes() {
  const router = useRouter()
  return (
    <section className="w-full py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
        The Most Searched vehicles
      </h2>

      {/* Bikes Grid */}
      <div className="py-10 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 ">
      {bikes.filter((v)=>v.fav).map((bike) => (
          <Card
            key={bike.id}
            image={bike.image}
            fav={bike.fav}
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
