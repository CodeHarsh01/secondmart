"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const termsData = [
  {
    title: "TERMS & CONDITIONS – USED VEHICLE TRANSFER (MEDIATOR ROLE)",
    updated: "",
    content: `1. **Introduction**
These Terms & Conditions (“Terms”) govern the services provided by [Your Company Name] (“the Mediator”, “we”, “our”, or “us”) in connection with introducing sellers of used vehicles to potential buyers, dealers, or third parties. By using our services, you (“Seller” or “Client”) agree to these Terms.

2. **Scope of Service**
We act only as an intermediary between the seller and the buyer/dealer. Our role is limited to connecting both parties for the purpose of sale or purchase of used vehicles. We do not:
- Buy or sell vehicles in our own name.
- Guarantee the sale price or timeline.
- Handle or verify ownership transfers.
- Manage vehicle registration or government documentation.

3. **No Legal Responsibility**
Once we have connected the Seller with a Dealer/Buyer:
- All documentation, RC transfer, and legal formalities must be directly discussed and completed between the Seller and the Dealer/Buyer.
- We will not be responsible for delays, disputes, fraud, or incomplete paperwork.
- The Seller must ensure the vehicle is transferred legally to avoid future liabilities such as challans, accidents, or misuse.

4. **Documentation**
For the legal transfer of a vehicle in India, Forms 29 & 30, a valid “Sell Letter” from the dealer, and any other RTO-mandated documents must be completed. The Dealer/Buyer is solely responsible for completing these forms and submitting them to the relevant RTO.

5. **No Warranty or Guarantee**
We do not guarantee:
- That the dealer will purchase the vehicle.
- Any specific sale value.
- That the dealer will complete documentation within a certain time frame.

6. **Limitation of Liability**
Under no circumstances will we be liable for:
- Financial loss, damages, or legal issues arising after the handover of the vehicle.
- Any misuse of the vehicle after sale.
- Any pending challans, taxes, or liabilities before or after the transaction.

7. **Seller’s Responsibility**
The Seller must:
- Provide accurate details about the vehicle.
- Ensure the vehicle is free from major disputes or legal restrictions.
- Follow up with the Dealer/Buyer until RC transfer is confirmed.

8. **Governing Law**
These Terms are governed by the laws of India. Any disputes will fall under the jurisdiction of the courts in [Your City/State].

9. **Acknowledgement**
By using our services, you acknowledge that our role is strictly limited to introduction/connection and that full responsibility for legal transfer, payment, and compliance lies with the Dealer/Buyer and Seller.`,
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
      <Navbar />
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
      <Footer />
    </>
  );
}
