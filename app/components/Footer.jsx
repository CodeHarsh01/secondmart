import { FaFacebook, FaFacebookF, FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">Secondmart</h2>
            <p className="mt-3 text-sm">
              Your trusted destination for second-hand bikes. Buy and sell with ease and confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Buy Bikes</a></li>
              <li><a href="#" className="hover:text-blue-400">Sell Your Bike</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <p className="mt-3 text-sm">Devli</p>
            <p className="mt-1 text-sm">Phone: +91 98765 43210</p>
            <p className="mt-1 text-sm">Email: support@secondmart.com</p>

            {/* Social Links */}
            <div className="flex mt-6 text-xl space-x-4">
              <a href="#" className="hover:text-blue-400"><FaFacebookSquare/></a>
              <a href="#" className="hover:text-blue-400"><FaInstagramSquare/></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter/></a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Secondmart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
