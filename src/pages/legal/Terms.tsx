import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Sylonow</title>
        <meta name="description" content="Read our Terms and Conditions to understand your rights and obligations when using Sylonow's services." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="max-w-4xl mx-auto px-4 py-12 bg-white shadow-sm my-8 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: April 06, 2025</p>
          
          <div className="prose prose-pink max-w-none">
            <p className="text-gray-600 mb-6">Please read these terms and conditions carefully before using Our Service.</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Interpretation and Definitions</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Interpretation</h3>
            <p className="text-gray-600 mb-4">
              The words of which the initial letter is capitalized have meanings defined under the
              following conditions. The following definitions shall have the same meaning regardless of
              whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Definitions</h3>
            <p className="text-gray-600 mb-2">For the purposes of these Terms and Conditions:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
              <li>
                <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control
                with a party, where "control" means ownership of 50% or more of the shares, equity
                interest or other securities entitled to vote for election of directors or other
                managing authority.
              </li>
              <li><strong>Country</strong> refers to: Karnataka, India</li>
              <li>
                <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this
                Agreement) refers to sylonow vision pvt ltd, jp nagar 7th phase 560078.
              </li>
              <li>
                <strong>Device</strong> means any device that can access the Service such as a computer, a
                cellphone or a digital tablet.
              </li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li>
                <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and
                Conditions that form the entire agreement between You and the Company regarding
                the use of the Service.
              </li>
              <li>
                <strong>Third-party Social Media Service</strong> means any services or content (including data,
                information, products or services) provided by a third-party that may be displayed,
                included or made available by the Service.
              </li>
              <li>
                <strong>Website</strong> refers to sylonow, accessible from sylonow.com
              </li>
              <li>
                <strong>You</strong> means the individual accessing or using the Service, or the company, or other
                legal entity on behalf of which such individual is accessing or using the Service, as
                applicable.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acknowledgment</h2>
            <p className="text-gray-600 mb-4">
              These are the Terms and Conditions governing the use of this Service and the agreement
              that operates between You and the Company. These Terms and Conditions set out the rights
              and obligations of all users regarding the use of the Service.
            </p>
            <p className="text-gray-600 mb-4">
              Your access to and use of the Service is conditioned on Your acceptance of and compliance
              with these Terms and Conditions. These Terms and Conditions apply to all visitors, users
              and others who access or use the Service.
            </p>
            <p className="text-gray-600 mb-4">
              By accessing or using the Service You agree to be bound by these Terms and Conditions. If
              You disagree with any part of these Terms and Conditions then You may not access the
              Service.
            </p>
            <p className="text-gray-600 mb-4">
              You represent that you are over the age of 18. The Company does not permit those under 18
              to use the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Links to Other Websites</h2>
            <p className="text-gray-600 mb-4">
              Our Service may contain links to third-party web sites or services that are not owned or
              controlled by the Company.
            </p>
            <p className="text-gray-600 mb-4">
              The Company has no control over, and assumes no responsibility for, the content, privacy
              policies, or practices of any third party web sites or services. You further acknowledge and
              agree that the Company shall not be responsible or liable, directly or indirectly, for any
              damage or loss caused or alleged to be caused by or in connection with the use of or
              reliance on any such content, goods or services available on or through any such web sites
              or services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Termination</h2>
            <p className="text-gray-600 mb-4">
              We may terminate or suspend Your access immediately, without prior notice or liability, for
              any reason whatsoever, including without limitation if You breach these Terms and
              Conditions.
            </p>
            <p className="text-gray-600 mb-4">
              Upon termination, Your right to use the Service will cease immediately.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Notwithstanding any damages that You might incur, the entire liability of the Company and
              any of its suppliers under any provision of this Terms and Your exclusive remedy for all of
              the foregoing shall be limited to the amount actually paid by You through the Service or 100
              USD if You haven't purchased anything through the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects
              without warranty of any kind.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-4">
              The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and
              Your use of the Service. Your use of the Application may also be subject to other local, state,
              national, or international laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Content</h2>
            <p className="text-gray-600 mb-4">
              Users may be allowed to upload content to the platform, including but not limited to
              reviews, images, preferences, and other text or media. By uploading such content, you grant
              Sylonow a non-exclusive, royalty-free, worldwide license to use, reproduce, and distribute
              this content for service-related purposes. Content must not be unlawful, harmful, or violate
              intellectual property rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content provided on the Sylonow platform, including logos, visual designs, graphics,
              trademarks, and any original material, is the sole property of Sylonow Vision Pvt Ltd. You
              may not use or reproduce any part of our content without prior written permission.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-2">For any questions regarding these Terms & Conditions, you may contact us through the following methods:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
              <li>By Email: <a href="mailto:info@sylonow.com" className="text-pink-600 hover:text-pink-700">info@sylonow.com</a></li>
              <li>By visiting our website: <a href="https://sylonow.com" className="text-pink-600 hover:text-pink-700">https://sylonow.com</a></li>
              <li>By postal mail: 5th main Gourav Nagar JP Nagar 7th Phase Bengaluru 560078</li>
            </ul>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Terms; 