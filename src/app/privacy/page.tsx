import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Thiel Masonry Restoration.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-[#faf7f2] pt-32">
      <div className="container-content max-w-2xl">
        <h1 className="font-display text-h2 font-bold text-[#22242a] mb-2">Privacy Policy</h1>
        <p className="font-body text-sm text-[#8a8d91] mb-10">Last updated: May 2026</p>

        <div className="prose prose-sm max-w-none font-body text-[#5a5e64] leading-relaxed flex flex-col gap-8">
          <section>
            <h2 className="font-subhead font-semibold text-[#22242a] text-lg mb-3">Information We Collect</h2>
            <p>
              When you use our contact form, we collect the information you voluntarily provide: your name, phone number, email address (optional), and a description of your project. We do not collect any other personal information without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="font-subhead font-semibold text-[#22242a] text-lg mb-3">How We Use Your Information</h2>
            <p>
              We use the information you provide solely to respond to your quote request and to communicate with you about your masonry project. We do not sell, share, or distribute your personal information to any third parties.
            </p>
          </section>

          <section>
            <h2 className="font-subhead font-semibold text-[#22242a] text-lg mb-3">Data Retention</h2>
            <p>
              We retain your contact information only as long as necessary to complete your project or for a reasonable follow-up period. You may request deletion of your information at any time by emailing us at thielmasonry@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="font-subhead font-semibold text-[#22242a] text-lg mb-3">Cookies</h2>
            <p>
              This website does not use tracking cookies or third-party analytics tools that collect personal data. We may use basic session storage to maintain your form state during a single visit.
            </p>
          </section>

          <section>
            <h2 className="font-subhead font-semibold text-[#22242a] text-lg mb-3">Third-Party Services</h2>
            <p>
              We use Unsplash for stock photography. Images served by Unsplash may be subject to Unsplash's own privacy policy. We do not use any advertising, remarketing, or behavioral tracking services.
            </p>
          </section>

          <section>
            <h2 className="font-subhead font-semibold text-[#22242a] text-lg mb-3">Contact</h2>
            <p>
              If you have any questions about this privacy policy or how we handle your information, please contact us at:{" "}
              <a href="mailto:thielmasonry@gmail.com" className="text-[#b01e24] hover:text-[#7e1419] transition-colors">
                thielmasonry@gmail.com
              </a>{" "}
              or by calling{" "}
              <a href="tel:7636881248" className="text-[#b01e24] hover:text-[#7e1419] transition-colors">
                (763) 688-1248
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="font-body text-sm text-[#b01e24] hover:text-[#7e1419] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
