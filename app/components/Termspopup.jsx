// app/terms/page.tsx (Next.js 13+ with App Router)

export default function TermsPage({closePopup}) {
    return (
      <div className=" flex justify-center">
        <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
  
          <div className="space-y-6 text-gray-700 leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
              <p>
                Welcome to our platform. By accessing or using our services, you agree to be bound by these terms. 
                Please read them carefully before proceeding.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
              <p>
                You must be at least 18 years old to use our services. By agreeing to these terms, 
                you represent that you are of legal age.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
              <p>
                You agree not to misuse the platform, upload harmful content, or attempt unauthorized 
                access to the system.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
              <p>
                We are not responsible for damages arising from the use or inability to use our services. 
                Your use is at your own risk.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
              <p>
                We may update these terms at any time. Continued use of the platform after changes 
                means you accept the revised terms.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at 
                <span className="font-medium text-blue-600"> support@example.com</span>.
              </p>
            </section>
          </div>
  
          <div className="mt-8 flex justify-end">
            <button onClick={closePopup} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Accept
            </button>
          </div>
        </div>
      </div>
    );
  }
  