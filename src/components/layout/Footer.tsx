import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

function FacebookIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { services } from "@/lib/data/services";

export function Footer() {
  const serviceLinks = services.slice(0, 5);

  return (
    <footer className="bg-[#22242a] text-[#faf7f2]" role="contentinfo">
      {/* Main grid */}
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 – Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Thiel Masonry Restoration — Home">
              <Image
                src="/logos/logo.png"
                alt="Thiel Masonry Restoration logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain rounded-lg"
              />
            </Link>
            <p className="font-body text-sm text-[#8a8d91] leading-relaxed max-w-[220px]">
              Master masonry restoration in Central Minnesota — the contractor who says yes when others won't.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/ThielMasonryRestoration"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Thiel Masonry Restoration on Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#3a3d42] text-[#8a8d91] hover:bg-[#b01e24] hover:text-white transition-all duration-200"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2 – Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heraldic text-sm font-semibold text-[#c8a06a] tracking-widest uppercase">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="font-body text-sm text-[#8a8d91] hover:text-[#faf7f2] flex items-center gap-1.5 group transition-colors duration-200"
                  >
                    <ArrowRight size={12} className="text-[#c8a06a] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-body text-sm text-[#c8a06a] hover:text-[#faf7f2] flex items-center gap-1 transition-colors duration-200 mt-1"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 – Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heraldic text-sm font-semibold text-[#c8a06a] tracking-widest uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/reviews", label: "Reviews" },
                { href: "/about", label: "About Dustin" },
                { href: "/service-area", label: "Service Area" },
                { href: "/contact", label: "Get a Free Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#8a8d91] hover:text-[#faf7f2] flex items-center gap-1.5 group transition-colors duration-200"
                  >
                    <ArrowRight size={12} className="text-[#c8a06a] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heraldic text-sm font-semibold text-[#c8a06a] tracking-widest uppercase">Contact</h3>
            <address className="not-italic flex flex-col gap-4">
              <a
                href="tel:7636881248"
                className="flex items-start gap-3 group"
                aria-label="Call Thiel Masonry Restoration"
              >
                <div className="w-8 h-8 rounded-full bg-[#b01e24]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#b01e24] transition-colors duration-200">
                  <Phone size={14} className="text-[#b01e24] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-[#faf7f2] group-hover:text-[#c8a06a] transition-colors duration-200">(763) 688-1248</p>
                  <p className="font-body text-xs text-[#8a8d91]">By appointment / always reachable</p>
                </div>
              </a>

              <a
                href="mailto:thielmasonry@gmail.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#3a3d42] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#b01e24] transition-colors duration-200">
                  <Mail size={14} className="text-[#8a8d91] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="font-body text-sm text-[#8a8d91] group-hover:text-[#faf7f2] transition-colors duration-200 break-all">thielmasonry@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3a3d42] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#8a8d91]" />
                </div>
                <div>
                  <p className="font-body text-sm text-[#8a8d91]" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">15441 Oliva St SE</span><br />
                    <span itemProp="addressLocality">Becker</span>,{" "}
                    <span itemProp="addressRegion">MN</span>{" "}
                    <span itemProp="postalCode">55308</span>
                  </p>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3a3d42]">
        <div className="container-content py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[#5a5e64]">
            © {new Date().getFullYear()} Thiel Masonry Restoration · Becker, MN
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="font-body text-xs text-[#5a5e64] hover:text-[#8a8d91] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Thiel Masonry Restoration",
            telephone: "+17636881248",
            email: "thielmasonry@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "15441 Oliva St SE",
              addressLocality: "Becker",
              addressRegion: "MN",
              postalCode: "55308",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 45.390257,
              longitude: -93.84112,
            },
            url: "https://thielmasonry.com",
            image: "https://thielmasonry.com/og-image.jpg",
            priceRange: "$$",
            openingHours: "Mo-Su 00:00-23:59",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "7",
            },
            areaServed: [
              "Becker, MN",
              "Annandale, MN",
              "St. Cloud, MN",
              "Buffalo, MN",
              "Monticello, MN",
              "Big Lake, MN",
              "Elk River, MN",
              "Minneapolis, MN",
              "Sherburne County, MN",
              "Wright County, MN",
            ],
          }),
        }}
      />
    </footer>
  );
}
