import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Phone, Star } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { FinalCTABand } from "@/components/sections/FinalCTABand";

export const metadata: Metadata = {
  title: "About Dustin",
  description:
    "Meet Dustin Thiel — owner-operator of Thiel Masonry Restoration in Becker, MN. 5.0★ rated master mason who takes on the jobs others won't.",
};

const traits = [
  "Owner-operated — Dustin personally does the work, not a crew you've never met",
  "Fast, personal callbacks — he picks up the phone",
  "Honest quotes — no padding, no pressure",
  "Seasonally-correct scheduling for proper cure",
  "Serves residential & commercial clients",
  "Based in Becker, MN — serves all of Central Minnesota",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#22242a] pt-32 pb-20">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-[20px] overflow-hidden">
                <Image
                  src="/images/474051187_923667549941501_8752436248307950729_n.jpg"
                  alt="Thiel Masonry Restoration crew rebuilding a chimney on a residential roof"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
                {/* Rating badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-[12px] px-5 py-3 shadow-[0_4px_12px_rgba(34,36,42,0.20)] flex items-center gap-3 whitespace-nowrap">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#c8a06a] text-[#c8a06a]" />
                    ))}
                  </div>
                  <div>
                    <p className="font-heraldic text-sm font-bold text-[#22242a]">5.0 Stars</p>
                    <p className="font-body text-xs text-[#8a8d91]">7 Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <SectionEyebrow text="MEET THE MASON" />
              <h1 className="font-display text-display-l font-bold text-[#faf7f2]">
                Meet Dustin.
              </h1>
              <p className="font-body text-body-l text-[#d8d0c4] leading-relaxed">
                Dustin Thiel is the owner and mason behind every project at Thiel Masonry Restoration. Based in Becker, Minnesota, he has built his reputation on one thing other contractors avoid: saying yes to the hard jobs.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact" size="md">Get a Free Quote</Button>
                <a
                  href="tel:7636881248"
                  className="inline-flex items-center gap-2 text-sm font-body font-medium text-[#c8a06a] hover:text-[#faf7f2] transition-colors"
                >
                  <Phone size={15} />
                  (763) 688-1248
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story sections */}
      <section className="section-padding bg-[#faf7f2]">
        <div className="container-content">
          <div className="max-w-3xl mx-auto flex flex-col gap-16">

            {/* Craft philosophy */}
            <div className="flex flex-col gap-5">
              <SectionEyebrow text="THE CRAFT" />
              <h2 className="font-display text-h2 font-bold text-[#22242a]">
                Restoration over replacement.
              </h2>
              <div className="flex flex-col gap-4 font-body text-[#5a5e64] leading-relaxed">
                <p>
                  Dustin chose masonry restoration — not new construction — because he believes in the permanence of what's already been built. A deteriorated foundation isn't a demolition job. It's a puzzle that, solved correctly, will outlast anything new you'd pour in its place.
                </p>
                <p>
                  That philosophy shows in the work. Every repair starts with a root-cause assessment — not just patching the symptom. The right mortar mix for the existing masonry. The right weather for the work to cure. The right techniques, often learned the old way.
                </p>
              </div>
            </div>

            {/* The "says yes" story */}
            <div className="flex flex-col gap-5">
              <SectionEyebrow text="THE REPUTATION" />
              <h2 className="font-display text-h2 font-bold text-[#22242a]">
                The contractor who says yes.
              </h2>
              <div className="flex flex-col gap-4 font-body text-[#5a5e64] leading-relaxed">
                <p>
                  The pattern in every review is consistent: "other contractors wouldn't touch it." Badly deteriorated cement block. Tilting brick walls. Basements nobody wanted to get into. Dustin drives out, takes a look, and gives an honest assessment — then takes the job.
                </p>
                <p>
                  This isn't recklessness — it's experience. Dustin has worked enough complex masonry problems to know what can be fixed, what it takes, and what it costs. Most of the "can't be done" jobs just require more patience and skill than the average contractor is willing to bring.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-[#c8a06a] pl-5 my-2">
                <p className="font-subhead italic text-[#3a3d42]" style={{ fontSize: "1.1875rem", lineHeight: "1.5" }}>
                  "He was the only contractor I could find that was willing to do the work... The repair work looks fantastic!"
                </p>
                <footer className="font-body text-sm text-[#8a8d91] mt-2">— RJ, Annandale, MN</footer>
              </blockquote>
            </div>

            {/* Seasonal expertise */}
            <div className="flex flex-col gap-5">
              <SectionEyebrow text="MINNESOTA EXPERTISE" />
              <h2 className="font-display text-h2 font-bold text-[#22242a]">
                Scheduling for proper cure.
              </h2>
              <div className="flex flex-col gap-4 font-body text-[#5a5e64] leading-relaxed">
                <p>
                  If you've ever had a contractor rush a mortar job in cold weather and watched it fail by spring — you know why this matters. Dustin schedules masonry work for the right ambient temperatures, because mortar that doesn't cure correctly doesn't last.
                </p>
                <p>
                  In Central Minnesota's climate, that discipline is a professional responsibility. It means some jobs get scheduled for a few weeks out, waiting for the weather. Customers who care about the long-term outcome understand — and appreciate it.
                </p>
              </div>
            </div>

            {/* Trust callouts */}
            <div className="flex flex-col gap-5">
              <SectionEyebrow text="WHY HOMEOWNERS TRUST US" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {traits.map((trait) => (
                  <div key={trait} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#b01e24] flex-shrink-0 mt-0.5" />
                    <p className="font-body text-sm text-[#3a3d42] leading-relaxed">{trait}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About image band */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/203382862_115495654092032_6024570810460858068_n.jpg"
          alt="Hand-laid natural stone wall by Thiel Masonry Restoration"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#22242a]/70 flex items-center justify-center">
          <div className="text-center">
            <p className="font-heraldic text-[#c8a06a] text-sm tracking-widest uppercase mb-3">Based in Becker, MN</p>
            <p className="font-display text-white font-bold" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              Serving Central Minnesota since day one.
            </p>
          </div>
        </div>
      </section>

      <FinalCTABand />
    </>
  );
}
