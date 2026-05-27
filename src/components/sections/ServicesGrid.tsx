"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";

export function ServicesGrid() {
  return (
    <section className="section-padding bg-[#faf7f2]" aria-label="Our services">
      <div className="container-content">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <SectionEyebrow text="WHAT WE RESTORE" center className="mb-5" />
          <motion.h2
            className="font-display text-h2 font-bold text-[#22242a] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Built to outlast the weather.
          </motion.h2>
          <motion.p
            className="font-body text-[#5a5e64]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            From deteriorated foundations to failing chimneys, we handle the full scope of masonry restoration — residential and commercial, simple and complex.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              slug={service.slug}
              title={service.title}
              shortDesc={service.shortDesc}
              iconName={service.iconName}
              index={i}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button href="/services" variant="secondary" size="md">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
