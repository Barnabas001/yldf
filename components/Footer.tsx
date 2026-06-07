"use client";

import { useState } from "react";

const footerLinks = {
  "Quick Links": ["Home", "About Us", "Trainings", "Alumni", "Gallery"],
  Programs: [
    "Leadership Training",
    "Mentorship",
    "Alumni Network",
    "Annual Summit",
  ],
  Support: ["Contact Us", "FAQ", "Donate"],
};

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="var(--navy-dark)"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer style={{ background: "var(--navy-dark)" }}>
      {/* Newsletter banner */}
      <div
        className="border-b border-white/10"
        style={{ background: "var(--navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="section-label mb-4">Stay Connected</div>
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Join Our Community
              </h3>
              <p
                className="text-white/50 text-sm"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Get the latest news, trainings, and impact stories delivered to
                your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 px-5 py-3 text-sm focus:outline-none focus:border-[#C99A2E] transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
              <button type="submit" className="btn-gold flex-shrink-0">
                <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 bg-[#C99A2E] rounded-full flex items-center justify-center font-bold text-white text-sm"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                YDLF
              </div>
              <div>
                <div
                  className="text-white font-bold leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Youth Development
                </div>
                <div
                  className="text-[#C99A2E] font-semibold leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Leadership Foundation
                </div>
              </div>
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Empowering Young Leaders. Transforming Communities. Est. 2003 —
              for Excellence &amp; All Round Development.
            </p>

            {/* Socials */}
            <div>
              <div
                className="text-white/40 text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Follow Us
              </div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-[#C99A2E] border border-white/10 hover:border-[#C99A2E] transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white font-semibold text-sm uppercase tracking-widest mb-6"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-[#C99A2E] text-sm transition-colors flex items-center gap-2 group"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      <span className="w-0 h-px bg-[#C99A2E] group-hover:w-3 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            © {new Date().getFullYear()} YDLF. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
