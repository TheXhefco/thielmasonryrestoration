import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";

export const metadata: Metadata = {
  title: {
    default: "Thiel Masonry Restoration | Central Minnesota Masonry Repair",
    template: "%s | Thiel Masonry Restoration",
  },
  description:
    "Expert masonry restoration in Central Minnesota — foundation repair, chimney repair, tuck pointing, and more. 5.0★ rating. The contractor who says yes when others won't. Call (763) 688-1248.",
  keywords: [
    "masonry restoration",
    "foundation repair Minnesota",
    "chimney repair Becker MN",
    "tuck pointing central Minnesota",
    "block wall repair",
    "mortar repair",
    "Thiel Masonry Restoration",
  ],
  authors: [{ name: "Thiel Masonry Restoration" }],
  creator: "Thiel Masonry Restoration",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Thiel Masonry Restoration",
    title: "Thiel Masonry Restoration | Central Minnesota Masonry Repair",
    description:
      "5.0★ masonry restoration contractor in Becker, MN. Foundation, chimney & block repair — done right, the first time.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
