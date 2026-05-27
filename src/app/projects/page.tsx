"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FilterChip } from "@/components/ui/FilterChip";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { FinalCTABand } from "@/components/sections/FinalCTABand";

const categories = [
  { label: "All", value: "all" },
  { label: "Foundation", value: "foundation" },
  { label: "Block", value: "block" },
  { label: "Chimney", value: "chimney" },
  { label: "Stone", value: "stone" },
  { label: "Tuck Pointing", value: "tuck-pointing" },
];

const projects = [
  {
    id: 1,
    title: "Full Chimney Rebuild",
    location: "Central MN",
    date: "Summer 2024",
    category: "chimney",
    before: "/images/468410269_886926886948901_8711408629530297008_n.jpg",
    after: "/images/468325849_886926883615568_3787408909199281843_n.jpg",
    story: "Complete chimney teardown and rebuild from the roofline. Badly deteriorated mortar, broken brick, failing crown. Dustin rebuilt it course by course with a new cap — built to last.",
  },
  {
    id: 2,
    title: "Cultured Stone Veneer",
    location: "Central MN",
    date: "Summer 2024",
    category: "stone",
    before: "/images/487204558_980368377612870_7570318823214839805_n.jpg",
    after: "/images/441154321_758148796501497_8291900822432693272_n.jpg",
    story: "Plain block exterior transformed with a full cultured stone veneer system. Substrate prep, scratch coat, full install — the homeowner called it 'a completely different house.'",
  },
  {
    id: 3,
    title: "Chimney Flashing & Crown Repair",
    location: "Becker, MN",
    date: "Fall 2023",
    category: "chimney",
    before: "/images/474039031_923667479941508_8980495129841467906_n.jpg",
    after: "/images/488249778_980368314279543_7690558026773507627_n.jpg",
    story: "Badly deteriorated flashing and cracked crown causing interior water damage through multiple winters. Rebuilt the crown, replaced flashing — dry ever since.",
  },
  {
    id: 4,
    title: "Chimney Rebuild with Scaffolding",
    location: "Central MN",
    date: "Spring 2023",
    category: "chimney",
    before: "/images/488309857_980368464279528_2773556340167624503_n.jpg",
    after: "/images/487477762_980368524279522_2511297735243838257_n.jpg",
    story: "Full scaffold setup for a chimney that had deteriorated past repair from the roofline. Rebuilt in natural stone to match the existing exterior aesthetic.",
  },
  {
    id: 5,
    title: "Stone Veneer — Full Exterior",
    location: "Central MN",
    date: "Summer 2023",
    category: "stone",
    before: "/images/487455756_980368307612877_8305458863800172011_n.jpg",
    after: "/images/441184151_758148856501491_3904945449429089023_n.jpg",
    story: "Extensive cultured stone installation on all exterior faces. Block-It moisture barrier, full scratch coat, and custom-layout stone pattern over two weeks on site.",
  },
  {
    id: 6,
    title: "Natural Stone Wall Installation",
    location: "Central MN",
    date: "Fall 2022",
    category: "stone",
    before: "/images/474051187_923667549941501_8752436248307950729_n.jpg",
    after: "/images/203382862_115495654092032_6024570810460858068_n.jpg",
    story: "Hand-laid natural stone wall, sourced and installed by Dustin. Each stone set for drainage and freeze-thaw resilience — a wall built to outlast the property.",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  const openLightbox = (id: number) => {
    const index = filtered.findIndex((p) => p.id === id);
    setLightboxIndex(index);
  };
  const closeLightbox = () => setLightboxIndex(null);
  const prevProject = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextProject = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <>
      {/* Header */}
      <section className="bg-[#22242a] pt-32 pb-16">
        <div className="container-content text-center">
          <SectionEyebrow text="OUR PROJECTS" center className="mb-5" />
          <h1 className="font-display text-display-l font-bold text-[#faf7f2] mb-4">
            Before & After
          </h1>
          <p className="font-body text-[#8a8d91] max-w-xl mx-auto">
            Real projects. Real transformations. Drag the slider to see the work.
          </p>
        </div>
      </section>

      {/* Filter chips */}
      <section className="bg-[#faf7f2] py-8 border-b border-[#d8d0c4]">
        <div className="container-content">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <FilterChip
                key={cat.value}
                label={cat.label}
                active={activeFilter === cat.value}
                onClick={() => setActiveFilter(cat.value)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-[#faf7f2]">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(project.id)}
                >
                  <div className="rounded-[20px] overflow-hidden bg-white border border-[#d8d0c4] shadow-[0_1px_2px_rgba(34,36,42,0.06)] hover:shadow-[0_4px_12px_rgba(34,36,42,0.10)] transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.after}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#22242a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-body text-sm font-medium">
                          Click to view before &amp; after →
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-1.5">
                      <h3 className="font-subhead font-semibold text-[#22242a]" style={{ fontSize: "1rem" }}>
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[#b01e24]">
                        <MapPin size={12} />
                        <span className="font-body text-xs text-[#5a5e64]">{project.location} · {project.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-[#8a8d91]">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#22242a]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-3xl bg-[#faf7f2] rounded-[20px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Project: ${filtered[lightboxIndex]?.title}`}
            >
              <BeforeAfterSlider
                beforeSrc={filtered[lightboxIndex].before}
                afterSrc={filtered[lightboxIndex].after}
                beforeAlt={`Before: ${filtered[lightboxIndex].title}`}
                afterAlt={`After: ${filtered[lightboxIndex].title}`}
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="font-display text-h3 font-bold text-[#22242a]">
                      {filtered[lightboxIndex].title}
                    </h2>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin size={13} className="text-[#b01e24]" />
                      <span className="font-body text-sm text-[#5a5e64]">
                        {filtered[lightboxIndex].location} · {filtered[lightboxIndex].date}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeLightbox}
                    aria-label="Close"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e7e0d6] text-[#3a3d42] hover:bg-[#d8d0c4] transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                <p className="font-body text-sm text-[#5a5e64] leading-relaxed mb-5">
                  {filtered[lightboxIndex].story}
                </p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevProject}
                    aria-label="Previous project"
                    className="flex items-center gap-1.5 text-sm font-body font-medium text-[#5a5e64] hover:text-[#b01e24] transition-colors"
                  >
                    <ChevronLeft size={16} /> Previous
                  </button>
                  <span className="font-body text-xs text-[#8a8d91]">
                    {lightboxIndex + 1} / {filtered.length}
                  </span>
                  <button
                    onClick={nextProject}
                    aria-label="Next project"
                    className="flex items-center gap-1.5 text-sm font-body font-medium text-[#5a5e64] hover:text-[#b01e24] transition-colors"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FinalCTABand />
    </>
  );
}
