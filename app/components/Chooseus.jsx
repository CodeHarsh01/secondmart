"use client";
import { FaTags, FaHandshake, FaBalanceScale, FaTools } from "react-icons/fa";

const features = [
  {
    title: "Special Financing Offers",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
    icon: <FaTags size={32} className="text-indigo-500" />,
  },
  {
    title: "Trusted Car Dealership",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
    icon: <FaHandshake size={32} className="text-pink-500" />,
  },
  {
    title: "Transparent Pricing",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
    icon: <FaBalanceScale size={32} className="text-blue-500" />,
  },
];

export default function Chooseus() {
  return (
    <section className="w-full px-6 py-12 mt-10 bg-gray-50 rounded-2xl">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
