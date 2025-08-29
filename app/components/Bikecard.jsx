// components/BikeCard.tsx
import { FaRoad, FaBolt } from "react-icons/fa";

export default function Bikecard({Id,image,price,title,desc,tag,driven,fuel,onClick}) {
  return (
    <div
      onClick={onClick}
     className="bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition overflow-hidden w-2xs">
      {/* Image + Tag + Wishlist */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {/* Tag */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-white">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm">{desc}</p>

        {/* Specs */}
        <div className="flex justify-between text-gray-600 text-sm mt-4">
          <div className="flex flex-col items-center">
            <FaRoad className="text-lg" />
            <span>{driven}</span>
          </div>
          <div className="flex flex-col items-center">
            <FaBolt className="text-lg" />
            <span>{fuel}</span>
          </div>
        </div>

        {/* Price + Details */}
        <div className="flex items-center justify-between mt-4">
          <h3 className="text-xl font-bold">₹{price}</h3>
          <p
            className="text-blue-600 font-medium hover:underline flex items-center"
          >
            View Details ↗
          </p>
        </div>
      </div>
    </div>
  );
}
