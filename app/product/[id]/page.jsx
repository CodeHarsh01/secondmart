import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import React from "react";
import { FaWhatsapp, FaCalendarAlt, FaTachometerAlt, FaCogs, FaGasPump, FaPhone, FaPhoneAlt } from "react-icons/fa";

export default function page() {
  return (
    <div>
      <Navbar />

      <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Yamaha R15 V4 – Used</h1>
            <p className="text-gray-600">155cc, Liquid-Cooled, 6-Speed, BS6</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-blue-600">₹1,85,000</h2>
            <button className="text-sm text-gray-600 underline">Make an Offer</button>
          </div>
        </div>

        {/* ✅ Icon Info Section */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <FaCalendarAlt /> 2022
          </div>
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <FaTachometerAlt /> 18,000 km
          </div>
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <FaGasPump /> Petrol
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3">
            <img
              src="/images/bike1.jpg"
              alt="Main bike"
              className="rounded-xl w-full h-80 object-cover"
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-2">
            <img src="/images/bike2.jpg" className="rounded-xl h-40 object-cover" alt="bike" />
            <img src="/images/bike3.jpg" className="rounded-xl h-40 object-cover" alt="bike" />
            <img src="/images/bike4.jpg" className="rounded-xl h-40 object-cover" alt="bike" />
            <img src="/images/bike5.jpg" className="rounded-xl h-40 object-cover" alt="bike" />
          </div>
        </div>

        {/* Overview + Dealer Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Bike Overview */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Bike Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <p><span className="font-semibold">Body:</span> Sports</p>
              <p><span className="font-semibold">Kilometers Driven:</span> 18,000 km</p>
              <p><span className="font-semibold">Fuel:</span> Petrol</p>
              <p><span className="font-semibold">Year:</span> 2022</p>
              <p><span className="font-semibold">Engine:</span> 155cc</p>
              <p><span className="font-semibold">Transmission:</span> 6-Speed</p>
              <p><span className="font-semibold">Color:</span> Racing Blue</p>
              <p><span className="font-semibold">VIN:</span> YMH12345</p>
              <p><span className="font-semibold">Owners:</span> 1st Owner</p>
              <p><span className="font-semibold">Registration:</span> DL-05-XXXX</p>
              <p><span className="font-semibold">Insurance:</span> Valid till Dec 2024</p>
            </div>

            {/* Description */}
            <h3 className="text-lg font-semibold mt-6 mb-2">Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The Yamaha R15 V4 is a premium sports bike designed for enthusiasts. With its aggressive
              design, liquid-cooled engine, and racing ergonomics, it delivers thrilling performance
              while being fuel-efficient. Perfect for both city commutes and long rides.
            </p>

            {/* ✅ Bike Features */}
            <h3 className="text-lg font-semibold mt-6 mb-2">Bike Features</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
              <li className="bg-gray-100 px-3 py-2 rounded-lg">ABS Braking</li>
              <li className="bg-gray-100 px-3 py-2 rounded-lg">LED Headlights</li>
              <li className="bg-gray-100 px-3 py-2 rounded-lg">Digital Console</li>
              <li className="bg-gray-100 px-3 py-2 rounded-lg">Alloy Wheels</li>
              <li className="bg-gray-100 px-3 py-2 rounded-lg">Slipper Clutch</li>
              <li className="bg-gray-100 px-3 py-2 rounded-lg">Side Stand Engine Cut-off</li>
            </ul>
          </div>

          {/* Dealer Info */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <h4 className="font-semibold">Ravi Kumar</h4>
                <p className="text-sm text-gray-500">Delhi, India</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.470215377595!2d77.2367574252844!3d28.51141472573113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce19febbdabf7%3A0x79853eb1e10a0f2c!2sTigri%2C%20Sangam%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e1!3m2!1sen!2sin!4v1756307651579!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
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
