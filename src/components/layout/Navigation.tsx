"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service Area" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const navBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-[#faf7f2] shadow-[0_12px_32px_rgba(34,36,42,0.10)]";

  const logoColor = isHome && !scrolled ? "text-[#faf7f2]" : "text-[#22242a]";
  const linkColor = isHome && !scrolled ? "text-[#faf7f2]" : "text-[#3a3d42]";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-content">
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link href="/" aria-label="Thiel Masonry Restoration — Home" className="flex items-center flex-shrink-0">
              <Image
                src="/logos/logo.png"
                alt="Thiel Masonry Restoration logo"
                width={64}
                height={64}
                className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-md"
                priority
              />
            </Link>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[
                        "relative font-body text-sm font-medium transition-colors duration-200",
                        linkColor,
                        "hover:text-[#b01e24]",
                        active ? "text-[#b01e24]" : "",
                      ].join(" ")}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#c8a06a] rounded-full"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:7636881248"
                className={`flex items-center gap-2 text-sm font-medium font-body ${linkColor} hover:text-[#b01e24] transition-colors duration-200`}
              >
                <Phone size={15} />
                <span>(763) 688-1248</span>
              </a>
              <Link
                href="/contact"
                className="bg-[#b01e24] text-white text-sm font-semibold font-body px-5 py-2.5 rounded-[12px] hover:bg-[#7e1419] transition-all duration-200 shadow-[0_0_0_0_rgba(200,160,106,0)] hover:shadow-[0_0_16px_3px_rgba(200,160,106,0.3)]"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:7636881248"
                aria-label="Call (763) 688-1248"
                className={`flex items-center gap-1.5 text-sm font-medium ${linkColor} hover:text-[#b01e24] transition-colors`}
              >
                <Phone size={16} />
              </a>
              <button
                onClick={() => setDrawerOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={drawerOpen}
                className={`w-11 h-11 flex items-center justify-center rounded-[8px] ${linkColor} hover:text-[#b01e24] transition-colors`}
              >
                <Menu size={22} />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-[#22242a]/60 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[min(320px,90vw)] bg-[#faf7f2] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-[#d8d0c4]">
                <Link href="/" aria-label="Thiel Masonry Restoration — Home" className="flex items-center">
                  <Image
                    src="/logos/logo.png"
                    alt="Thiel Masonry Restoration logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </Link>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 flex items-center justify-center rounded-[8px] text-[#3a3d42] hover:text-[#b01e24] hover:bg-[#e7e0d6] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={[
                            "block px-4 py-3 rounded-[8px] font-body font-medium text-base transition-colors",
                            active
                              ? "bg-[#fdf0ef] text-[#b01e24]"
                              : "text-[#3a3d42] hover:bg-[#e7e0d6]",
                          ].join(" ")}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Pinned CTA */}
              <div className="px-6 py-6 border-t border-[#d8d0c4] flex flex-col gap-3">
                <a
                  href="tel:7636881248"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-[12px] border-2 border-[#3a3d42] text-[#22242a] font-body font-semibold text-sm hover:bg-[#3a3d42] hover:text-white transition-all"
                >
                  <Phone size={16} />
                  (763) 688-1248
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-[12px] bg-[#b01e24] text-white font-body font-semibold text-sm hover:bg-[#7e1419] transition-all"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
