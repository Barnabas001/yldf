"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply parallax on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      const bg = el.querySelector(".hero-bg") as HTMLElement;
      if (bg)
        bg.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px) scale(1.05)`;
    };
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center"
      style={{ background: "var(--navy-dark)", overflow: "hidden" }}
    >
      {/* Background image */}
      <div
        className="hero-bg absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url("/images/general.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          filter: "brightness(0.8)",
          width: "100%",
          height: "100%",
        }}
      />

      {/* Gradient overlay — stronger on mobile so text pops */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(105deg, rgba(8,15,34,0.97) 0%, rgba(13,27,62,0.90) 60%, rgba(13,27,62,0.70) 100%)`,
        }}
      />

      {/* Gold accent glow */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, var(--gold) 0%, transparent 65%)`,
        }}
      />

      {/* Bottom gold line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, var(--gold), transparent)",
        }}
      />

      {/* Content — full width on mobile, two-col on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        {/* LEFT: Text */}
        <div className="w-full">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-7"
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            <span
              style={{
                width: 28,
                height: 1,
                background: "var(--gold)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            For Excellence &amp; All Round Development
          </div>

          {/* Headline */}
          <h1
            className="font-bold leading-[1.05] mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              color: "white",
            }}
          >
            Empowering
            <br />
            Young
            <br />
            <span style={{ color: "var(--gold)" }}>Leaders.</span>
          </h1>

          <p
            className="leading-relaxed mb-8"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "480px",
            }}
          >
            YDLF is committed to raising a new generation of transformational
            leaders through training, mentorship, and community impact — since
            2003.
          </p>

          {/* Buttons — full-width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="#trainings"
              className="btn-gold justify-center sm:justify-start"
              style={{
                width: "100%",
                maxWidth: "280px",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              <span>Register for Training</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#about"
              className="btn-white justify-center sm:justify-start"
              style={{
                width: "100%",
                maxWidth: "280px",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              <span>Learn More</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-6 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { value: "500+", label: "Leaders Trained" },
              { value: "20+", label: "Projects Done" },
              { value: "21+", label: "Years of Impact" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.6rem, 4vw, 2rem)",
                    fontWeight: 900,
                    background:
                      "linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.6rem",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Image collage — desktop only */}
        <div className="hidden lg:flex items-center justify-center relative h-[520px]">
          <div
            className="absolute right-0 top-8 w-72 h-96 overflow-hidden shadow-2xl"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 85% 100%, 0 100%)",
              animation: "fadeIn 1s ease 0.8s both",
            }}
          >
            <Image
              src="/images/uncleKc.jpg"
              alt="YDLF Leaders"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "linear-gradient(135deg, var(--gold) 0%, transparent 60%)",
              }}
            />
          </div>

          <div
            className="absolute left-0 bottom-8 w-52 h-64 overflow-hidden shadow-xl"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%)",
            }}
          >
            <Image
              src="/images/smily.jpg"
              alt="YDLF Team"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "linear-gradient(135deg, var(--navy) 0%, transparent 60%)",
              }}
            />
          </div>

          <div className="absolute right-4 bottom-4 bg-[#C99A2E] px-6 py-4 shadow-lg z-10">
            <div
              className="text-white text-2xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Est. 2003
            </div>
            <div className="text-white/80 text-xs tracking-widest uppercase mt-1">
              Transforming Communities
            </div>
          </div>

          <div className="absolute left-16 top-4 bg-[#0D1B3E] border border-[#C99A2E]/30 px-4 py-3 shadow-lg z-10">
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C99A2E"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <div>
                <div className="text-white text-sm font-semibold">
                  Global Reach
                </div>
                <div className="text-[#C99A2E] text-xs">Across Communities</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — hidden on small phones */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-40">
        <div
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.6rem",
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          Scroll
        </div>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }}
        />
      </div>
    </section>
  );
}
