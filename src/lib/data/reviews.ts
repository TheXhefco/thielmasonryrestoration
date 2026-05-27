export interface Review {
  id: string;
  name: string;
  credential: string;
  reviewCount: string;
  date: string;
  rating: number;
  text: string;
  tags: string[];
}

export const reviews: Review[] = [
  {
    id: "shawn-cole",
    name: "Shawn Cole",
    credential: "",
    reviewCount: "4 reviews",
    date: "6 months ago",
    rating: 5,
    text: "Dustin was great to work with. He did an excellent job fixing my garage foundation. I highly recommend Thiel masonry restoration to anyone needing work done.",
    tags: ["foundation", "reasonable quote"],
  },
  {
    id: "rj-1",
    name: "RJ",
    credential: "",
    reviewCount: "5 reviews",
    date: "2 years ago",
    rating: 5,
    text: "Dustin repaired a badly deteriorated cement block on my basement exterior wall in Annandale. He was the only contractor I could find that was willing to do the work. He drove to my home, gave me a quick and reasonable quote, and repaired the block a few weeks later when the weather warmed up. The repair work looks fantastic! I highly recommend Dustin!",
    tags: ["cement block repair", "concrete blocks", "reasonable quote", "wall"],
  },
  {
    id: "rj-local-guide",
    name: "RJ",
    credential: "Local Guide",
    reviewCount: "14 reviews · 2 photos",
    date: "2 years ago",
    rating: 5,
    text: "Dustin repaired a badly deteriorated cement block on the exterior foundation wall of my home. No other contractors were willing to do the work. Dustin came over promptly to give me a reasonable quote after I called him. He did the repair when the outside temps were high enough for the patch to set and cure. The patchwork looks fantastic! I highly recommend Dustin!",
    tags: ["cement block repair", "foundation", "concrete blocks", "reasonable quote", "wall"],
  },
  {
    id: "corrine",
    name: "Corrine",
    credential: "",
    reviewCount: "1 review",
    date: "2 years ago",
    rating: 5,
    text: "A friend recommended Dustin to us for repair we needed done on our chimney. I was worried that it would be a stressful process, but Dustin was so easy to work with and put my mind at ease. He was really easy to get ahold of and did a great job. We would recommend him to anyone!",
    tags: ["reasonable quote", "wall"],
  },
  {
    id: "jerrad-palmer",
    name: "Jerrad Palmer",
    credential: "",
    reviewCount: "8 reviews",
    date: "a year ago",
    rating: 5,
    text: "Dustin did a fantastic job! He was responsive and had a very competitive quote. Can't refer him enough :) thanks again!",
    tags: ["reasonable quote"],
  },
  {
    id: "ron-music",
    name: "ron music",
    credential: "",
    reviewCount: "2 reviews",
    date: "a year ago",
    rating: 5,
    text: "Due to some bad footings on my garage wall it let the brick tilt out, I found Thiel Masonry. Dustin was the only one that responded — he came out and gave a reasonable quote, came out 2 weeks later and did an amazing job bringing everything back to level. I highly recommend Thiel Masonry.",
    tags: ["cement block repair", "wall", "reasonable quote"],
  },
  {
    id: "cha-c",
    name: "Cha C",
    credential: "Local Guide",
    reviewCount: "19 reviews",
    date: "a year ago",
    rating: 5,
    text: "Professional and affordable.",
    tags: ["reasonable quote"],
  },
];

export const reviewTags = [
  { label: "All", value: "all" },
  { label: "Cement Block Repair", value: "cement block repair", count: 3 },
  { label: "Reasonable Quote", value: "reasonable quote", count: 4 },
  { label: "Concrete Blocks", value: "concrete blocks", count: 2 },
  { label: "Foundation", value: "foundation", count: 2 },
  { label: "Wall", value: "wall", count: 3 },
];
