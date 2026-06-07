"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// import Logo from "../images/yldfLogo.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Trainings", href: "#trainings" },
  { label: "Alumni", href: "#alumni" },
  // { label: 'Projects', href: '#projects' },
  { label: "Gallery", href: "#gallery" },
  // { label: 'News', href: '#news' },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D1B3E] shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/images/yldfLogo.jpg"
              alt="YDLF Logo"
              width={55}
              height={55}
              className="rounded-full object-cover"
              priority
            />

            <div>
              <div
                className="text-white font-bold leading-tight"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "0.95rem",
                }}
              >
                Youth Development
              </div>

              <div
                className="text-[#C99A2E] font-semibold leading-tight"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "0.95rem",
                }}
              >
                Leadership Foundation
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  activeLink === link.label
                    ? "text-[#C99A2E]"
                    : "text-white/80 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#trainings"
              className="btn-gold text-sm flex items-center gap-2"
            >
              <span>Register for Training</span>

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "#0D1B3E" }}
        >
          <div className="px-6 py-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label);
                  setMobileOpen(false);
                }}
                className="block py-3 text-white/80 hover:text-[#C99A2E] border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4">
              <a
                href="#trainings"
                className="btn-gold w-full flex justify-center"
              >
                Register for Training
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
