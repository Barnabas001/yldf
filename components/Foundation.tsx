'use client'

import { useState } from 'react'

const pillars = [
  {
    id: 'vision',
    label: 'Vision',
    number: '01',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    headline: 'A Clear Vision',
    body: 'Transformed young leaders serving with excellence and leading others to do the same — building communities where integrity, service, and excellence are the standard.',
  },
  {
    id: 'mission',
    label: 'Mission',
    number: '02',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    headline: 'Purposeful Mission',
    body: 'Equipping young leaders for excellence, integrity and service for global impact. We provide practical tools, mentorship, and a transformative community to develop the next generation.',
  },
  {
    id: 'values',
    label: 'Core Values',
    number: '03',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    headline: 'Strong Core Values',
    body: 'YDLF upholds Excellence, Integrity, Service, Community, Spiritual Growth, and Transformational Leadership as the bedrock of everything we do and every leader we raise.',
  },
]

export default function Foundation() {
  const [active, setActive] = useState('vision')

  return (
    <section
      className="py-28 relative overflow-hidden noise-overlay"
      style={{ background: 'var(--navy-dark)' }}
    >
      {/* Gold accent */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
      />

      {/* Background text */}
      <div
        className="absolute -top-10 right-0 text-[200px] font-bold opacity-[0.02] text-white leading-none pointer-events-none"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        YDLF
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-label justify-center mb-6">Our Foundation</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Built on Strong{' '}
            <span className="gradient-text">Foundations</span>
          </h2>
          <p
            className="text-white/50 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Every great leader needs a solid foundation. Ours is built on vision, mission, and values that have stood for over two decades.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center gap-0 mb-16 reveal reveal-delay-2">
          {pillars.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all border-b-2 ${
                active === p.id
                  ? 'text-[#C99A2E] border-[#C99A2E]'
                  : 'text-white/40 border-transparent hover:text-white/70'
              }`}
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Active content */}
        {pillars.map((p) => (
          <div
            key={p.id}
            className={`transition-all duration-500 ${
              active === p.id ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div
                  className="text-8xl font-bold text-[#C99A2E]/10 leading-none mb-4"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {p.number}
                </div>
                <div className="text-[#C99A2E] mb-4">{p.icon}</div>
                <h3
                  className="text-3xl font-bold text-white mb-6"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {p.headline}
                </h3>
                <p
                  className="text-white/60 text-lg leading-relaxed mb-8"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {p.body}
                </p>
                <a href="#about" className="btn-white inline-flex">
                  <span>Discover More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              {/* Right visual */}
              <div className="relative flex items-center justify-center">
                <div
                  className="w-72 h-72 rounded-full flex items-center justify-center"
                  style={{ border: '1px solid rgba(201,154,46,0.2)', background: 'rgba(201,154,46,0.03)' }}
                >
                  <div
                    className="w-52 h-52 rounded-full flex items-center justify-center"
                    style={{ border: '1px solid rgba(201,154,46,0.3)', background: 'rgba(201,154,46,0.06)' }}
                  >
                    <div
                      className="w-36 h-36 rounded-full flex flex-col items-center justify-center text-center"
                      style={{ background: 'var(--gold)', boxShadow: '0 0 60px rgba(201,154,46,0.3)' }}
                    >
                      <div className="text-white mb-1">{p.icon}</div>
                      <div
                        className="text-white text-xs uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-dm-mono)' }}
                      >
                        {p.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner stats */}
                {[
                  { pos: 'top-0 right-0', val: '500+', lbl: 'Leaders' },
                  { pos: 'bottom-0 left-0', val: '21+', lbl: 'Years' },
                  { pos: 'top-1/2 -translate-y-1/2 -right-4', val: '20+', lbl: 'Projects' },
                ].map((s) => (
                  <div
                    key={s.lbl}
                    className={`absolute ${s.pos} bg-[#162548] border border-[#C99A2E]/20 px-4 py-3 text-center`}
                  >
                    <div
                      className="text-[#C99A2E] text-xl font-bold"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {s.val}
                    </div>
                    <div
                      className="text-white/50 text-xs uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-dm-mono)' }}
                    >
                      {s.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
      />
    </section>
  )
}
