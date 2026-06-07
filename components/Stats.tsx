"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Leaders Trained",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },

  {
    value: 21,
    suffix: "+",
    label: "Years of Impact",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    value: 0,
    suffix: "Global",
    label: "Community Reach",
    isText: true,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

function CountUp({
  target,
  suffix,
  isText,
}: {
  target: number;
  suffix: string;
  isText?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (isText) return;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, isText]);

  if (isText) return <span ref={ref}>{suffix}</span>;
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="relative z-10 -mt-1"
      style={{ background: "var(--navy)" }}
    >
      {/* Top border */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${i + 1} flex items-center gap-5 px-8 py-10 group hover:bg-white/5 transition-colors ${
                i < stats.length - 1 ? "border-r border-white/10" : ""
              }`}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-[#C99A2E] group-hover:scale-110 transition-transform"
                style={{ background: "rgba(201, 154, 46, 0.1)" }}
              >
                {stat.icon}
              </div>
              <div>
                <div
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    isText={stat.isText}
                  />
                </div>
                <div
                  className="text-white/50 text-xs tracking-widest uppercase mt-1"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold), transparent)",
        }}
      />
    </section>
  );
}
