import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VendorRevenuePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Sylonow Revenue & Commission Policy (EUL)</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">For Registered Vendors (Decorators, Cafes, Hybrid Providers)</h2>
          
          <div className="text-gray-600 mb-6 space-y-1">
            <p><strong>Effective Date:</strong> 26/05/2025</p>
            <p><strong>Governing Law:</strong> Applicable laws of India</p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              This policy outlines the framework under which vendors using the Sylonow platform (Vendor App) earn revenue, pay commissions, and receive payouts. By registering as a vendor, you ("Vendor") agree to abide by the terms of this policy and other agreements entered into with Sylonow Vision Private Limited ("Sylonow", "we", "our", "us").
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Revenue Distribution</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 Total Order Value (TOV):</h3>
                <p className="text-gray-700">
                  Total Order Value is defined as the complete amount paid by the customer for a particular booking on the Sylonow platform, inclusive of GST but exclusive of convenience/service charges and fast delivery fees.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2 Vendor Share:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  <li>Vendors will receive 95% of the TOV (excluding taxes).</li>
                  <li>Sylonow retains 5% as platform commission.</li>
                  <li>In certain high-demand events or strategic campaigns, Sylonow may apply dynamic commissions up to 8% with prior intimation via written communication or in-app notification.</li>
                </ul>
                
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-gray-800 font-semibold">VENDOR EARNINGS: 95% of Total Order Value</p>
                  <p className="text-gray-800 font-semibold">Platform Commission: 5%</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Additional Charges (Non-Shareable)</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">3.1 Fast Service Fee:</h3>
                <p className="text-gray-700 mb-2">
                  If the customer opts for a service that must be executed within 2 hours, a Fast Service Fee is charged.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>This fee is non-commissionable and retained 100% by Sylonow.</li>
                  <li>The vendor is compensated only based on the TOV.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">3.2 Convenience/Platform Fee:</h3>
                <p className="text-gray-700 mb-2">
                  Any service, platform, or convenience fee applied to the customer invoice is exclusively for system maintenance and customer support.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>These are not part of Vendor earnings.</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Vendor Wallet & Payment Schedule</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">4.1 Earnings Update:</h3>
                <p className="text-gray-700">
                  Once the task is marked completed by the customer or auto-confirmed after 3 hours, the vendor's wallet is credited.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">4.2 Withdrawal Timeline:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Vendors may raise a withdrawal request any time.</li>
                  <li>Payouts are processed within 3–5 working days through IMPS/NEFT/UPI.</li>
                  <li>Sylonow is not liable for delays caused by incorrect bank details, public holidays, or third-party payment gateways.</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Taxation & Compliance</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">5.1 GST Compliance:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Vendors must provide a valid GSTIN if applicable.</li>
                  <li>Sylonow shall generate monthly GST-compliant invoices reflecting commission deducted.</li>
                  <li>Vendors are responsible for filing their GST returns based on their income.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">5.2 TDS (Tax Deducted at Source):</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Sylonow may deduct TDS as per Section 194H or other applicable sections of the Income Tax Act.</li>
                  <li>TDS certificates will be issued quarterly as per law.</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Deductions & Penalties</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Violation</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Deduction</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Late Arrival (&gt;10 min)</td>
                    <td className="border border-gray-300 px-4 py-2">₹50</td>
                    <td className="border border-gray-300 px-4 py-2">Per 10-minute block</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">No-show or Unjustified Cancellation</td>
                    <td className="border border-gray-300 px-4 py-2">₹100–₹500</td>
                    <td className="border border-gray-300 px-4 py-2">Based on damage severity</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Incomplete Service Execution</td>
                    <td className="border border-gray-300 px-4 py-2">Up to 50% of payout withheld</td>
                    <td className="border border-gray-300 px-4 py-2">Post investigation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Misrepresentation or Fraud</td>
                    <td className="border border-gray-300 px-4 py-2">Termination & legal action</td>
                    <td className="border border-gray-300 px-4 py-2">FIR may be filed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Low Rating (&lt;2 stars repeatedly)</td>
                    <td className="border border-gray-300 px-4 py-2">Visibility reduced</td>
                    <td className="border border-gray-300 px-4 py-2">Reviewed quarterly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Order Cancellations</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">7.1 Customer-Initiated:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>If the customer cancels more than 5 hours before the event, the vendor receives no payment or penalty.</li>
                  <li>If within 5 hours, vendor receives 60% of the agreed payout, and customer forfeits advance.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">7.2 Vendor-Initiated:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Cancellations must happen at least 6 hours before event.</li>
                  <li>For any cancellation within 3 hours, ₹100–₹500 is deducted from vendor wallet.</li>
                  <li>Repeated cancellations may lead to blacklisting or permanent removal.</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Refund Policy Impact on Vendors</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Refunds initiated to the customer (e.g., due to vendor's fault) will result in proportionate deduction from vendor wallet.</li>
              <li>If wallet has insufficient balance, future payouts will be adjusted.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Fraud & Security Breaches</h2>
            <p className="text-gray-700 mb-4">
              Vendors found engaging in any of the following will face immediate termination and potential legal action:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Sharing confidential booking data</li>
              <li>Accepting direct payments from customers outside the platform</li>
              <li>Misuse of QR codes or impersonation</li>
              <li>Theft or damage to property</li>
            </ul>
            <p className="text-gray-700">
              Sylonow will cooperate with police authorities and may file FIRs under the Indian Penal Code (IPC), if necessary.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Dispute Resolution</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Any disputes regarding payment or commissions must be raised within 7 days of the event.</li>
              <li>Disputes will be resolved within 5 business days.</li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:info@sylonow.com" className="text-purple-600 hover:underline">info@sylonow.com</a></p>
              <p className="text-gray-700"><strong>Call:</strong> +91-9480709432</p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Legal Protections & Limitation of Liability</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Sylonow is not liable for vendor behavior, on-ground execution errors, or theft, and shall not be sued for damages caused by third-party vendors.</li>
              <li>Vendors agree not to take legal action against Sylonow for delays, cancellations, customer complaints, or payment delays caused by third-party systems.</li>
              <li>All earnings are subject to verification, audit, and cancellation in case of fraud.</li>
              <li>The vendor relationship is on a principal-to-principal basis. No employer-employee relationship is implied.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law & Jurisdiction</h2>
            <p className="text-gray-700">
              This Policy shall be governed by the laws of India. Any dispute arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VendorRevenuePolicy;