"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const termsData = [
  {
    title: "1. Introduction",
    updated: "Last updated 02/09/2023",
    content: `Our aim is to keep this Agreement as readable as possible, but in some cases for legal reasons, some of the language is required "legalese".`,
  },
  {
    title: "2. Your Acceptance of this Agreement",
    updated: "",
    content: `These terms of service are entered into by and between You and Our Company ("Company," "we," "our," or "us"). 
The following terms and conditions govern your access to and use of our services, including any content, functionality, and services offered.

By using the Website, you accept and agree to be bound and abide by these Terms of Service and our Privacy Policy. 
If you do not want to agree to these Terms of Service, you must not access or use the Website.

**BY ACCESSING AND USING THIS WEBSITE, YOU:**
- Accept and agree to be bound and comply with these Terms of Service.
- Represent and warrant that you are the legal age of majority.
- Agree that if you access the Website from a jurisdiction where it is not permitted, you do so at your own risk.`,
  },
  {
    title: "3. User Responsibilities",
    updated: "",
    content: `You agree not to misuse the platform, upload harmful content, or attempt unauthorized access.`,
  },
  {
    title: "4. Limitation of Liability",
    updated: "",
    content: `We are not responsible for damages arising from the use or inability to use our services.`,
  },
  {
    title: "5. Changes to Terms",
    updated: "",
    content: `We may update these terms at any time. Continued use of the platform means you accept the revised terms.`,
  },
];

function AccordionItem({ title, updated, content, isOpen, onClick }) {
  return (
    <div className="border rounded-lg">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900 hover:bg-gray-50"
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {updated && <p className="px-4 text-sm text-gray-500">{updated}</p>}
      {isOpen && (
        <div className="px-4 pb-4 text-gray-700 whitespace-pre-line">{content}</div>
      )}
    </div>
  );
}

export default function TermsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Terms of Service</h1>

        <div className="space-y-4">
          {termsData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              updated={item.updated}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
