"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    id: 1,
    before: "/images/468410269_886926886948901_8711408629530297008_n.jpg",
    after: "/images/468325849_886926883615568_3787408909199281843_n.jpg",
    location: "Chimney rebuild · Central MN",
    story: "Full chimney teardown and rebuild from the roofline up. Fresh brick, new crown — built to outlast the house.",
  },
  {
    id: 2,
    before: "/images/474039031_923667479941508_8980495129841467906_n.jpg",
    after: "/images/488249778_980368314279543_7690558026773507627_n.jpg",
    location: "Chimney repair · Becker, MN",
    story: "Badly deteriorated flashing and spalling crown causing interior water damage. Rebuilt and sealed — dry ever since.",
  },
  {
    id: 3,
    before: "/images/487204558_980368377612870_7570318823214839805_n.jpg",
    after: "/images/441154321_758148796501497_8291900822432693272_n.jpg",
    location: "Cultured stone veneer · Central MN",
    story: "Transformed a plain block exterior with a full cultured stone veneer installation — curb appeal that lasts.",
  },
];

export function BeforeAfterShowcase() {
  return (
    <section className="section-padding bg-[#e7e0d6]" aria-label="Project showcase">
      <div className="container-content">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <SectionEyebrow text="OUR WORK" center className="mb-5" />
          <motion.h2
            className="font-display text-h2 font-bold text-[#22242a] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            See the difference.
          </motion.h2>
          <motion.p
            className="font-body text-[#5a5e64]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Drag the handle to compare before & after. Real projects, real transformations.
          </motion.p>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <BeforeAfterSlider
                beforeSrc={project.before}
                afterSrc={project.after}
                beforeAlt={`Before: ${project.location}`}
                afterAlt={`After: ${project.location}`}
              />
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-[#b01e24]">
                  <MapPin size={13} />
                  <span className="font-heraldic text-xs font-semibold tracking-wider text-[#b01e24]">
                    {project.location}
                  </span>
                </div>
                <p className="font-body text-sm text-[#5a5e64]">{project.story}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button href="/projects" variant="secondary" size="md">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
