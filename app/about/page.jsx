"use client"
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  const [Loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 500);
  if(Loading) {
    return <div className='h-screen flex items-center justify-center'>
      <video
        src="car.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-56"
      />
    </div>
  }
  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-t from-blue-600 to-blue-300 text-white py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us – Second Mart</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Welcome to <span className="font-semibold">Second Mart</span>, your trusted destination 
              for buying and selling quality used vehicles. We connect vehicle owners and buyers across India, 
              making the process simple, transparent, and hassle-free.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg leading-relaxed mb-4">
                At <span className="font-semibold text-blue-600">Second Mart</span>, we believe every 
                vehicle has a second journey waiting to begin. Whether you’re looking to sell your car 
                or bike at the best price, or buy a reliable pre-owned vehicle that suits your budget, 
                we’ve got you covered.
              </p>
              <p className="text-lg leading-relaxed">
                Our platform is built on trust, convenience, and customer satisfaction. From detailed 
                vehicle listings to price transparency and smooth coordination between owners and 
                dealers, we ensure both buyers and sellers enjoy a seamless experience.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Second Mart?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-xl mb-2">Buy & Sell Easily</h3>
                <p className="text-gray-600 text-sm">Cars, bikes, and more — all in one platform.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-xl mb-2">Fair Pricing</h3>
                <p className="text-gray-600 text-sm">Verified listings & competitive offers.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-xl mb-2">Hassle-Free Process</h3>
                <p className="text-gray-600 text-sm">From inspection to delivery, we guide you.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-xl mb-2">Trust & Transparency</h3>
                <p className="text-gray-600 text-sm">Verified dealers & authentic vehicle details.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gray-50 py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To make buying and selling pre-owned vehicles simple, fair, and transparent while 
                delivering customer satisfaction at every step.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To become India’s most trusted and customer-friendly vehicle marketplace, 
                known for reliability and convenience.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-300 text-white py-16 px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            At Second Mart, your journey to a better deal begins here
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Explore our wide range of pre-owned vehicles and enjoy a smooth, hassle-free experience.
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Browse Vehicles
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
}
