'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: 'YDLF training transformed my life and shaped me into the leader I am today. I am now impacting my community with confidence.',
    name: 'Esther N.',
    cohort: 'Alumni, 2022 Cohort',
    initials: 'EN',
  },
  {
    quote: 'The practical leadership skills I gained at YDLF gave me the tools to start a community outreach program that now serves over 200 families.',
    name: 'James A.',
    cohort: 'Alumni, 2019 Cohort',
    initials: 'JA',
  },
  {
    quote: 'What sets YDLF apart is the holistic approach — they develop your character, your mind, and your spirit. I left as a completely different person.',
    name: 'Grace M.',
    cohort: 'Alumni, 2016 Cohort',
    initials: 'GM',
  },
  {
    quote: 'The mentorship I received through YDLF shaped my entire career. Every challenge I face today, I approach with the leadership principles they instilled in me.',
    name: 'Daniel T.',
    cohort: 'Alumni, 2010 Cohort',
    initials: 'DT',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      {/* Large decorative quote */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 text-[300px] font-bold leading-none opacity-[0.03] text-[#0D1B3E] pointer-events-none select-none"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        "
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-label justify-center mb-6">Testimonials</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0D1B3E]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Voices of <span className="gradient-text">Transformation</span>
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="reveal reveal-delay-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                active === i
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute pointer-events-none'
              }`}
              style={{ position: active === i ? 'relative' : 'absolute', top: 0, left: 0, right: 0 }}
            >
              <div
                className="bg-[#0D1B3E] p-10 md:p-16 relative overflow-hidden"
              >
                {/* Gold corner */}
                <div
                  className="absolute top-0 left-0 w-2 h-full"
                  style={{ background: 'var(--gold)' }}
                />

                {/* Dots pattern */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 opacity-5"
                  style={{
                    backgroundImage: 'radial-gradient(circle, var(--gold) 1px, transparent 1px)',
                    backgroundSize: '12px 12px',
                  }}
                />

                {/* Quote mark */}
                <div
                  className="text-6xl font-bold text-[#C99A2E] leading-none mb-6"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  "
                </div>

                <p
                  className="text-white text-xl md:text-2xl leading-relaxed mb-10 font-light"
                  style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: 'var(--gold)', fontFamily: 'var(--font-playfair)' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className="text-white font-bold"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-[#C99A2E] text-sm"
                      style={{ fontFamily: 'var(--font-dm-mono)' }}
                    >
                      {t.cohort}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all ${
                  active === i ? 'w-8 h-2 bg-[#C99A2E]' : 'w-2 h-2 bg-gray-300 hover:bg-[#C99A2E]/50'
                } rounded-full`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
