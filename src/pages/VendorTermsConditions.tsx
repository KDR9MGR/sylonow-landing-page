import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VendorTermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Sylonow Vendor App</h2>
          
          <div className="text-gray-600 mb-6 space-y-1">
            <p><strong>Effective Date:</strong> 25 MAY 2025</p>
            <p><strong>Applicable Jurisdiction:</strong> India</p>
            <p><strong>Company:</strong> Sylonow Vision Private Limited</p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By registering and using the Sylonow Vendor App ("App"), you ("Vendor") agree to comply with and be bound by these Terms and Conditions, the Privacy Policy, and the Cookies Policy. If you disagree with any part of the terms, you may not use the platform.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Definitions</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Sylonow:</strong> The celebration and surprise event platform operated by Sylonow Vision Private Limited.</li>
              <li><strong>Vendor:</strong> A service provider who accepts and fulfills orders placed by customers via the Sylonow platform.</li>
              <li><strong>Customer:</strong> A person or entity who books decoration or surprise services.</li>
              <li><strong>App:</strong> The official Sylonow Vendor Application available for Android and iOS.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Vendor Responsibilities</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 1: New Order Notification</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Vendors receive real-time alerts for new bookings.</li>
                  <li>Vendor must accept/reject within 15 minutes.</li>
                  <li>If rejected or unaccepted, the booking is:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Reassigned to another vendor, OR</li>
                      <li>Listed in an open marketplace for others to accept.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 2: Order Acceptance & Execution</h3>
                <p className="text-gray-700 mb-2">Upon acceptance:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Full event details are visible.</li>
                  <li>Vendor must arrive before the scheduled slot.</li>
                  <li>Google Maps navigation is recommended.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 3: Security Check via QR Code</h3>
                <p className="text-gray-700 mb-2">On arrival:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Vendor must scan the customer's QR code for validation.</li>
                  <li>Customer will scan vendor's QR code for cross-verification.</li>
                  <li>No service shall begin without mutual QR verification.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 4: Decoration Setup & Completion</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Perform setup as per booking.</li>
                  <li>Upload Before & After pictures via the app.</li>
                  <li>Mark job status as "Completed" after verification.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Step 5: Payment & Rating</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Earnings are transferred to the Vendor Wallet upon task completion.</li>
                  <li>Payouts can be withdrawn anytime (subject to wallet balance).</li>
                  <li>Customer provides ratings/reviews, influencing future job opportunities.</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Structure</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Payment percentages (e.g., customer pays 60% upfront) are not the vendor's responsibility unless explicitly mentioned.</li>
              <li>Vendors are paid only upon task completion and confirmation.</li>
              <li>No offline or direct payments to vendors are allowed.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cancellation & Compensation</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>If customer cancels less than 5 hours before the scheduled time:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>No compensation to vendor unless vendor was already at the location with evidence.</li>
                </ul>
              </li>
              <li>If vendor cancels after accepting:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>May result in temporary suspension or permanent ban based on history and severity.</li>
                </ul>
              </li>
              <li>Vendors must not cancel accepted orders without valid reasons.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Use of App & Account</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Vendors must maintain accurate business profiles.</li>
              <li>Must not share login credentials or impersonate others.</li>
              <li>Misuse of the platform, fraudulent claims, or tampering with app functionalities will lead to termination without payment.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Liability & Indemnification</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 mb-2"><strong>Sylonow is not liable for:</strong></p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Damage/loss to vendor equipment.</li>
                  <li>Any criminal acts or negligence committed by the vendor.</li>
                </ul>
              </div>
              
              <div>
                <p className="text-gray-700 mb-2"><strong>Vendor agrees to:</strong></p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Conduct themselves professionally.</li>
                  <li>Be solely responsible for actions during service execution.</li>
                </ul>
              </div>
              
              <p className="text-gray-700">
                In case of legal disputes or claims, the vendor shall indemnify Sylonow against any damage, cost, or legal fees incurred.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Sharing & Privacy</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Vendor's location, rating, and task history may be shared with customers for transparency.</li>
              <li>Personal data is handled as per our Privacy Policy.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>All branding, UI/UX, and process flows belong to Sylonow Vision Private Limited.</li>
              <li>Vendors must not replicate or use proprietary content elsewhere.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Compliance & Conduct</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 mb-2"><strong>Vendors must comply with:</strong></p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Indian Contract Act, 1872</li>
                  <li>Indian IT Act, 2000</li>
                  <li>Labour laws where applicable.</li>
                </ul>
              </div>
              
              <div>
                <p className="text-gray-700 mb-2"><strong>Misconduct such as:</strong></p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Harassment,</li>
                  <li>Abuse,</li>
                  <li>Theft, or</li>
                  <li>Disrespect toward customers</li>
                </ul>
                <p className="text-gray-700 mt-2">— will result in a lifetime ban and legal consequences.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-700 mb-2"><strong>Sylonow may terminate vendor accounts:</strong></p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Upon repeated customer complaints.</li>
              <li>For breach of these Terms.</li>
              <li>For system misuse or fraud.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>These Terms are governed by the laws of India.</li>
              <li>All disputes shall be subject to exclusive jurisdiction of Bengaluru courts.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Dispute Resolution</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Disputes shall first be resolved through internal grievance redressal.</li>
              <li>If unresolved, parties may proceed to binding arbitration in Bengaluru, per the Arbitration and Conciliation Act, 1996.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 mb-4">For legal notices or complaints:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:info@sylonow.com" className="text-purple-600 hover:underline">info@sylonow.com</a></p>
              <p className="text-gray-700"><strong>Registered Office:</strong> JP Nagar Bengaluru 560078</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VendorTermsConditions;