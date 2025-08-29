import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <>
        <Navbar/>
      <div className="w-full bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-t from-blue-600 to-blue-300 text-white py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Your trusted partner in buying and selling second-hand bikes.  
              We provide reliable, affordable, and high-quality two-wheelers.
            </p>
          </div>
        </section>
  
        {/* Company Story */}
        <section className="py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1615195997000-d31e1e7d0e9b?ixlib=rb-4.0.3&q=80&w=1200"
                alt="Bike Dealer"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg leading-relaxed mb-4">
                At <span className="font-semibold text-blue-600">Second Mart</span>, 
                we are passionate about bikes. With years of experience, 
                we’ve built a trusted platform where customers can buy or sell 
                bikes with confidence.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to make pre-owned bikes more accessible and 
                affordable while ensuring transparency, trust, and top-notch 
                service.
              </p>
            </div>
          </div>
        </section>
  
        {/* Vision & Mission */}
        <section className="bg-white py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To redefine the second-hand bike market by providing 
                affordable, high-quality two-wheelers while ensuring 
                customer satisfaction at every step.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To become the most trusted and customer-friendly bike 
                marketplace in India, known for transparency and 
                reliability.
              </p>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-16 px-6 md:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Rahul Sharma</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Priya Mehta</h3>
                <p className="text-gray-600">Operations Head</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="Team Member"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Aman Verma</h3>
                <p className="text-gray-600">Customer Relations</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-300 text-white py-16 px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Bike?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Explore our wide range of pre-owned bikes and experience 
            hassle-free buying and selling.
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Browse Bikes
          </a>
        </section>
      </div>
        <Footer/>
        </>
    );
  }
  