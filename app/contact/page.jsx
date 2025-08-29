"use client"

import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [formData, setformData] = useState({
    Name: "",
    Email:"",
    Number:"",
    Message:""
  })

  const handlesubmit = (e)=>{
    e.preventDefault()
    const{name,email,number,message} = e.target
    setformData({
      Name:name.value,
      Email:email.value,
      Number:number.value,
      Message:message.value
    })
    console.log(formData);
    
    
  }
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen mt-5 flex flex-col">

      {/* Contact Section */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-4 text-gray-600">
              Have questions about bikes, deals, or services?  
              Fill out the form or reach us directly.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">📍 Address:</span> Devli, Delhi, India
              </li>
              <li>
                <span className="font-semibold">📞 Phone:</span> +91 98765 43210
              </li>
              <li>
                <span className="font-semibold">✉️ Email:</span> support@bikemart.com
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <form onSubmit={handlesubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-red-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-red-500"
                required
              />
              <input
                type="number"
                name="number"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-red-500"
                required
              />
              <textarea
                placeholder="Your Message"
                name="message"
                rows={5}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-red-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
    </div>
  );
}
