"use client";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images collage */}
          <div className="relative reveal">
            {/* Main image */}
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)",
              }}
            >
              <img
                src="/images/general.webp"
                alt="YDLF Community gathering"
                className="w-full h-80 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(13,27,62,0.3) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Secondary image — overlapping */}
            <div
              className="absolute -bottom-10 -right-6 w-52 h-44 overflow-hidden shadow-xl border-4 border-white"
              style={{
                clipPath:
                  "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)",
              }}
            >
              <img
                src="/images/smily.jpg"
                alt="Training session"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Est badge */}
            <div
              className="absolute top-6 -left-6 w-28 h-28 flex flex-col items-center justify-center text-white shadow-xl"
              style={{ background: "var(--gold)" }}
            >
              <div
                className="text-xs uppercase tracking-widest opacity-80 mb-1"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Est.
              </div>
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                2003
              </div>
            </div>

            {/* Quote block */}
            <div className="absolute -bottom-4 left-8 bg-[#0D1B3E] text-white px-6 py-4 max-w-xs shadow-lg">
              <div
                className="text-[#C99A2E] text-3xl font-bold leading-none mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                "
              </div>
              <p
                className="text-sm leading-relaxed text-white/80"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                For Excellence &amp; All Round Development
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal reveal-delay-2 pt-8 lg:pt-0">
            <div className="section-label mb-6">About Us</div>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#0D1B3E]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Who We Are
            </h2>

            <div className="gold-line" />

            <p
              className="text-gray-600 leading-relaxed mb-6 text-base"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              We are a leadership organization committed to raising a new
              generation of transformational leaders. Through our training
              programs, strategic projects, and community initiatives, we
              inspire and equip individuals to lead with impact.
            </p>
            <p
              className="text-gray-600 leading-relaxed mb-10 text-base"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Since 2003, YDLF has been a beacon of excellence, mentoring
              hundreds of young people across communities and equipping them
              with practical leadership skills, spiritual grounding, and the
              confidence to serve.
            </p>

            {/* Value pillars */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Character Building", icon: "✦" },
                { label: "Community Service", icon: "✦" },
                { label: "Spiritual Growth", icon: "✦" },
                { label: "Strategic Leadership", icon: "✦" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 py-3 border-b border-gray-200"
                >
                  <span className="text-[#C99A2E] text-xs">{item.icon}</span>
                  <span
                    className="text-sm font-medium text-[#0D1B3E]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <a href="#trainings" className="btn-gold inline-flex">
              <span>Learn More About Us</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}
