import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import React from "react";
import { 
  FaWhatsapp, 
  FaCalendarAlt, 
  FaTachometerAlt, 
  FaCogs, 
  FaGasPump, 
  FaPhoneAlt 
} from "react-icons/fa";

// ✅ Vehicle Data Object
const vehicleData = {
  title: "Yamaha R15 V4 – Used",
  subtitle: "155cc, Liquid-Cooled, 6-Speed, BS6",
  price: "₹1,85,000",
  year: "2022",
  kms: "18,000 km",
  fuel: "Petrol",
  transmission: "Automatic",
  images: ["/images/bike1.jpg", "/images/bike2.jpg", "/images/bike3.jpg", "/images/bike4.jpg", "/images/bike5.jpg"],
  overview: {
    Body: "Sports",
    "Kilometers Driven": "18,000 km",
    Fuel: "Petrol",
    Year: "2022",
    Engine: "155cc",
    Transmission: "6-Speed",
    Color: "Racing Blue",
    VIN: "YMH12345",
    Owners: "1st Owner",
    Registration: "DL-05-XXXX",
    Insurance: "Valid till Dec 2024"
  },
  description: `The Yamaha R15 V4 is a premium sports bike designed for enthusiasts. 
  With its aggressive design, liquid-cooled engine, and racing ergonomics, 
  it delivers thrilling performance while being fuel-efficient. Perfect for 
  both city commutes and long rides.`,
  features: [
    "ABS Braking",
    "LED Headlights",
    "Digital Console",
    "Alloy Wheels",
    "Slipper Clutch",
    "Side Stand Engine Cut-off"
  ],
  dealer: {
    name: "Ravi Kumar",
    location: "Delhi, India",
  }
};

export default function Page() {
  return (
    <div>
      <Navbar />

      <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{vehicleData.title}</h1>
            <p className="text-gray-600">{vehicleData.subtitle}</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-blue-600">{vehicleData.price}</h2>
            <button className="text-sm text-gray-600 underline">Make an Offer</button>
          </div>
        </div>

        {/* ✅ Icon Info Section */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <FaCalendarAlt /> {vehicleData.year}
          </div>
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <FaTachometerAlt /> {vehicleData.kms}
          </div>
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <FaGasPump /> {vehicleData.fuel}
          </div>
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <FaCogs /> {vehicleData.transmission}
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3">
            <img
              src={vehicleData.images[0]}
              alt="Main vehicle"
              className="rounded-xl w-full h-80 object-cover"
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-2">
            {vehicleData.images.slice(1).map((img, i) => (
              <img key={i} src={img} className="rounded-xl h-40 object-cover" alt={`vehicle-${i}`} />
            ))}
          </div>
        </div>

        {/* Overview + Dealer Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Overview */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
              {Object.entries(vehicleData.overview).map(([key, value]) => (
                <p key={key}>
                  <span className="font-semibold">{key}:</span> {value}
                </p>
              ))}
            </div>

            {/* Description */}
            <h3 className="text-lg font-semibold mt-6 mb-2">Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {vehicleData.description}
            </p>

            {/* ✅ Features */}
            <h3 className="text-lg font-semibold mt-6 mb-2">Features</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
              {vehicleData.features.map((feature, i) => (
                <li key={i} className="bg-gray-100 px-3 py-2 rounded-lg">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Dealer Info */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <h4 className="font-semibold">{vehicleData.dealer.name}</h4>
                <p className="text-sm text-gray-500">{vehicleData.dealer.location}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
                <FaPhoneAlt /> Call us
              </button>
              <button className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow">
                <FaWhatsapp /> Chat on WhatsApp
              </button>
            </div>
            <div className="mt-5 h-62 md:h-100 lg:h-62">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
