export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  included: string[];
  contextNote: string;
  iconName: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "masonry-restoration",
    slug: "masonry-restoration",
    title: "Masonry Restoration",
    shortDesc: "Comprehensive restoration of deteriorated masonry to original strength and appearance.",
    fullDesc:
      "From crumbling facades to structurally compromised walls, Dustin brings decades of hands-on masonry experience to every restoration project. We assess the root cause — not just the symptom — and restore your masonry to last another generation.",
    included: [
      "Full structural assessment before work begins",
      "Matching mortar mix to original composition",
      "Spalling brick replacement and repointing",
      "Waterproof sealant application",
      "Final inspection and warranty documentation",
    ],
    contextNote:
      "Minnesota's freeze-thaw cycles accelerate masonry deterioration faster than most climates — early restoration prevents costly replacement.",
    iconName: "masonry",
    image: "/images/468325849_886926883615568_3787408909199281843_n.jpg",
  },
  {
    id: "foundation-block",
    slug: "foundation-block-repair",
    title: "Foundation & Block Repair",
    shortDesc: "Structural foundation and cement block repairs — including the jobs others won't take.",
    fullDesc:
      "Settling footings, bowing block walls, and deteriorated basement exteriors are Dustin's specialty. He's the contractor other contractors call when the job is too complex. We stabilize, patch, and restore foundation integrity without unnecessary demolition.",
    included: [
      "Foundation crack assessment and diagnosis",
      "Cement block replacement and patching",
      "Footing repair and stabilization",
      "Waterproofing membrane application",
      "Drainage recommendations",
    ],
    contextNote:
      "Settling soils and frost heave in Sherburne County cause significant foundation movement. Most block repairs can be done without full excavation.",
    iconName: "foundation",
    image: "/images/487455756_980368307612877_8305458863800172011_n.jpg",
  },
  {
    id: "chimney-repair",
    slug: "chimney-repair",
    title: "Chimney Repair",
    shortDesc: "Crown, flashing, and mortar repairs that keep your chimney safe and weathertight.",
    fullDesc:
      "A leaking or deteriorated chimney is a fire and water hazard. Dustin diagnoses and repairs chimney crowns, damaged flashing, spalling brick, and failed mortar joints — returning your chimney to code-compliant, weathertight condition.",
    included: [
      "Chimney crown repair and rebuilding",
      "Tuck pointing and mortar joint replacement",
      "Flashing repair and replacement",
      "Spalling brick replacement",
      "Chimney cap installation",
    ],
    contextNote:
      "Central Minnesota's severe winters create dramatic thermal cycling in chimney masonry — cracked crowns and failed flashing are the #1 source of interior water damage.",
    iconName: "chimney",
    image: "/images/488249778_980368314279543_7690558026773507627_n.jpg",
  },
  {
    id: "tuck-pointing",
    slug: "tuck-pointing",
    title: "Tuck Pointing",
    shortDesc: "Precision mortar joint removal and replacement to restore structural integrity.",
    fullDesc:
      "Tuck pointing is the art of removing deteriorated mortar and filling joints with fresh, color-matched compound. Done right, it dramatically extends the life of any masonry structure and protects against water infiltration for years to come.",
    included: [
      "1\" minimum joint removal with angle grinder",
      "Custom mortar color-matching",
      "Proper joint profile tooling",
      "Cleanup and joint sealing",
      "Seasonal scheduling for proper cure",
    ],
    contextNote:
      "Joints typically need tuck pointing every 25–30 years in Minnesota's climate. Addressing it early prevents full-wall reconstruction.",
    iconName: "tuckpointing",
    image: "/images/202200480_115495617425369_2477125422258954507_n.jpg",
  },
  {
    id: "mortar-repair",
    slug: "mortar-repair",
    title: "Mortar Repair",
    shortDesc: "Targeted mortar repairs for cracked joints, efflorescence, and failing pointing.",
    fullDesc:
      "Whether it's isolated cracks from settling or widespread joint failure from age, Dustin's mortar repairs are matched to the original lime or Portland composition of your structure — ensuring compatibility and longevity.",
    included: [
      "Mortar composition testing",
      "Crack routing and preparation",
      "Color-matched mortar application",
      "Surface sealing against moisture",
      "3-year workmanship warranty",
    ],
    contextNote:
      "Using the wrong mortar type in a repair is one of the most common — and costly — mistakes. Harder mortars can crack surrounding brick.",
    iconName: "mortar",
    image: "/images/468410269_886926886948901_8711408629530297008_n.jpg",
  },
  {
    id: "thru-wall-flashing",
    slug: "thru-wall-flashing",
    title: "Thru-Wall Flashing",
    shortDesc: "Waterproof flashing installation at critical wall transitions to stop moisture intrusion.",
    fullDesc:
      "Thru-wall flashing is the hidden armor that keeps water from migrating through masonry walls into your building. Dustin installs and repairs flashing at window sills, lintels, copings, and parapets — the spots most likely to fail and least likely to be inspected.",
    included: [
      "Full wall cavity inspection",
      "Stainless or copper flashing installation",
      "Weep hole clearing and installation",
      "Mortar dam removal",
      "Waterproof membrane integration",
    ],
    contextNote:
      "Failed thru-wall flashing is responsible for the majority of masonry water infiltration claims in commercial buildings in Central MN.",
    iconName: "flashing",
    image: "/images/202770669_115495480758716_2827539873317298717_n.jpg",
  },
  {
    id: "real-stone",
    slug: "real-stone-installation",
    title: "Real Stone Installation",
    shortDesc: "Natural stone installation for walls, facades, fireplaces, and landscape features.",
    fullDesc:
      "Natural stone brings irreplaceable permanence and beauty to any structure. Dustin sources and installs fieldstone, limestone, and granite for both structural and decorative applications — laid with the same craft traditions that have built lasting structures for centuries.",
    included: [
      "Stone selection and sourcing consultation",
      "Substrate preparation and waterproofing",
      "Custom mortar mix for stone type",
      "Jointing and tooling to spec",
      "Sealing and finishing",
    ],
    contextNote:
      "Natural stone is a lifetime investment. Proper installation with correct mortar and drainage is critical to longevity in Minnesota's climate.",
    iconName: "stone",
    image: "/images/203382862_115495654092032_6024570810460858068_n.jpg",
  },
  {
    id: "cultured-stone",
    slug: "cultured-stone-installation",
    title: "Cultured Stone Installation",
    shortDesc: "Manufactured stone veneer for premium aesthetics at a more accessible investment.",
    fullDesc:
      "Cultured stone veneers deliver the rich, textured look of natural stone with greater consistency and lighter weight. Dustin installs leading veneer systems with the same attention to substrate prep, waterproofing, and jointing that defines his natural stone work.",
    included: [
      "Manufacturer-approved substrate system",
      "Scratch coat and lath installation",
      "Pattern layout and design planning",
      "Grouted or dry-stack installation",
      "Exterior-grade sealing",
    ],
    contextNote:
      "Cultured stone is frequently used to update aging concrete block or EIFS exteriors on Central Minnesota commercial buildings.",
    iconName: "culturedstone",
    image: "/images/441154321_758148796501497_8291900822432693272_n.jpg",
  },
  {
    id: "exterior-repair",
    slug: "exterior-building-repair",
    title: "Exterior Building Repair",
    shortDesc: "Comprehensive exterior masonry repairs for residential and commercial buildings.",
    fullDesc:
      "From deteriorated sills and lintels to crumbling parapet walls and damaged facades, Dustin handles the full scope of exterior masonry repairs that protect your building envelope, prevent water intrusion, and restore curb appeal.",
    included: [
      "Full exterior assessment and report",
      "Lintel and sill repair or replacement",
      "Parapet wall rebuilding",
      "Efflorescence treatment",
      "Masonry cleaning and sealing",
    ],
    contextNote:
      "Commercial property owners in the St. Cloud corridor often face deferred maintenance on 1960s–1980s concrete block buildings — Dustin specializes in these.",
    iconName: "exterior",
    image: "/images/438118138_758148753168168_3754698127576438807_n.jpg",
  },
];
