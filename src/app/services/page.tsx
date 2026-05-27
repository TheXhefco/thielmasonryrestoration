import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { Button } from "@/components/ui/Button";
import { FinalCTABand } from "@/components/sections/FinalCTABand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Masonry restoration, foundation repair, chimney repair, tuck pointing, mortar repair, stone installation, and more — serving Central Minnesota.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#22242a] pt-32 pb-16">
        <div className="container-content text-center">
          <SectionEyebrow text="OUR SERVICES" center className="mb-5" />
          <h1 className="font-display text-display-l font-bold text-[#faf7f2] mb-4">
            Masonry Restoration Services
          </h1>
          <p className="font-body text-[#8a8d91] max-w-xl mx-auto text-body-l">
            Every service we offer is built on one principle: do it right, so it lasts.
          </p>
        </div>
      </section>

      {/* Sticky desktop anchor nav */}
      <nav
        className="hidden lg:block sticky top-20 z-30 bg-[#faf7f2] border-b border-[#d8d0c4] shadow-[0_1px_4px_rgba(34,36,42,0.06)]"
        aria-label="Service sections"
      >
        <div className="container-content">
          <ul className="flex items-center gap-1 overflow-x-auto py-3 hide-scrollbar">
            {services.map((s) => (
              <li key={s.id} className="flex-shrink-0">
                <Link
                  href={`#${s.slug}`}
                  className="font-body text-sm text-[#5a5e64] hover:text-[#b01e24] px-3 py-1.5 rounded-[6px] hover:bg-[#e7e0d6] transition-colors whitespace-nowrap"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Service rows */}
      <div className="bg-[#faf7f2]">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.slug}
            className={`section-padding scroll-mt-28 ${i % 2 === 1 ? "bg-[#e7e0d6]" : "bg-[#faf7f2]"}`}
          >
            <div className="container-content">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className={`relative rounded-[20px] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={service.image}
                      alt={`${service.title} by Thiel Masonry Restoration`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                    {/* Icon badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-[10px] bg-[#22242a]/80 backdrop-blur-sm flex items-center justify-center text-[#c8a06a]">
                      <ServiceIcon name={service.iconName} size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <ServiceIcon name={service.iconName} size={20} className="text-[#c8a06a]" />
                      <span className="text-eyebrow text-[#c8a06a]">{`0${i + 1}`}</span>
                    </div>
                    <h2 className="font-display text-h3 font-bold text-[#22242a] mb-3">
                      {service.title}
                    </h2>
                    <p className="font-body text-[#5a5e64] leading-relaxed">{service.fullDesc}</p>
                  </div>

                  {/* Checklist */}
                  <div>
                    <p className="font-heraldic text-xs font-semibold text-[#c8a06a] tracking-wider uppercase mb-3">
                      What&apos;s Included
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle size={16} className="text-[#b01e24] flex-shrink-0 mt-0.5" />
                          <span className="font-body text-sm text-[#3a3d42]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Context note */}
                  <div className="bg-[#22242a]/5 rounded-[10px] p-4 border-l-2 border-[#c8a06a]">
                    <p className="font-body text-sm text-[#5a5e64] italic">{service.contextNote}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Button href="/contact" size="sm">
                      Get a Quote
                    </Button>
                    <a
                      href="tel:7636881248"
                      className="inline-flex items-center gap-1.5 text-sm font-body font-medium text-[#b01e24] hover:text-[#7e1419] transition-colors"
                    >
                      <Phone size={14} />
                      (763) 688-1248
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Mid-page CTA */}
      <section className="py-14 bg-[#e7e0d6]">
        <div className="container-content text-center">
          <h2 className="font-display text-h3 font-bold text-[#22242a] mb-4">
            Not sure which service you need?
          </h2>
          <p className="font-body text-[#5a5e64] mb-7 max-w-md mx-auto">
            Describe your problem and Dustin will tell you exactly what it needs — honestly, no upsell.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="md">Get a Free Quote</Button>
            <a
              href="tel:7636881248"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[12px] border-2 border-[#3a3d42] text-[#22242a] font-body font-semibold text-sm hover:bg-[#3a3d42] hover:text-white transition-all"
            >
              <Phone size={15} />
              (763) 688-1248
            </a>
          </div>
        </div>
      </section>

      <FinalCTABand />
    </>
  );
}
