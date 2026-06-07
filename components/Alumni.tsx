'use client'

import { useState } from 'react'

const cohorts = [
  { year: '2003', contact: 'Chingle', phone: '08033514727' },
  { year: '2004', contact: 'Smily', phone: '08039652078' },
  { year: '2005', contact: 'Jola', phone: '08030795649' },
  { year: '2006', contact: 'Nankwat', phone: '08037537980' },
  { year: '2007', contact: 'Jennifer', phone: '08026985635' },
  { year: '2008', contact: 'Ben Josh', phone: '07060983629' },
  { year: '2009', contact: 'Elijah', phone: '08068241066' },
  { year: '2010', contact: 'Abel', phone: '07039161536' },
  { year: '2011', contact: 'Fwangmum', phone: '08137912972' },
  { year: '2012', contact: 'Benjamin', phone: '07060983639' },
  { year: '2013', contact: 'Joyce', phone: '08033854192' },
  { year: '2014', contact: 'Mike', phone: '07038599737' },
  { year: '2015', contact: 'Bewell', phone: '07087564772' },
  { year: '2016', contact: 'Emmanuel', phone: '07032864002' },
  { year: '2017', contact: 'Goshen', phone: '08063166141' },
  { year: '2018', contact: 'Aondona Samuel', phone: '08036745017' },
  { year: '2019', contact: 'Hilda Terfa', phone: '08104405232' },
  { year: '2022A', contact: 'Sunnenna Lar', phone: '09064794542' },
  { year: '2022B', contact: 'Dr. Rasaki', phone: '07035641853' },
  { year: '2023', contact: 'Chisom', phone: '08119430666' },
]

export default function Alumni() {
  const [hoveredYear, setHoveredYear] = useState<string | null>(null)

  return (
    <section id="alumni" className="py-28" style={{ background: 'var(--navy)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div>
            <div className="section-label mb-6">Our Alumni</div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              YDLF Alumni
              <span className="gradient-text block">2003 — 2023</span>
            </h2>
          </div>
          <p
            className="text-white/50 max-w-sm"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            20 cohorts, 500+ transformed leaders now serving and impacting communities across Nigeria and beyond.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 reveal reveal-delay-2">
          {cohorts.map((cohort) => (
            <div
              key={cohort.year}
              className="relative p-6 bg-[#0D1B3E] hover:bg-[#162548] transition-all cursor-pointer group"
              onMouseEnter={() => setHoveredYear(cohort.year)}
              onMouseLeave={() => setHoveredYear(null)}
            >
              {/* Year */}
              <div
                className="text-[#C99A2E] text-2xl font-bold mb-3 group-hover:scale-110 transition-transform origin-left"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {cohort.year}
              </div>

              {/* Divider */}
              <div
                className="w-8 h-0.5 mb-3 transition-all group-hover:w-full"
                style={{ background: 'var(--gold)' }}
              />

              {/* Contact */}
              <div>
                <div
                  className="text-xs text-white/40 uppercase tracking-widest mb-1"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  Contact Person
                </div>
                <div
                  className="text-white text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {cohort.contact}
                </div>
                <div
                  className="text-[#C99A2E]/70 text-xs mt-1"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  {cohort.phone}
                </div>
              </div>

              {/* Hover corner accent */}
              <div
                className="absolute top-0 right-0 w-0 h-0 transition-all duration-300 group-hover:w-8 group-hover:h-8"
                style={{
                  borderStyle: 'solid',
                  borderWidth: '0 32px 32px 0',
                  borderColor: `transparent var(--gold) transparent transparent`,
                  opacity: hoveredYear === cohort.year ? 1 : 0,
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-12 border-t border-white/10 reveal">
          <div>
            <p
              className="text-white/70 text-lg"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Ready to join the next cohort?
            </p>
            <p
              className="text-white/40 text-sm"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Be part of a legacy of excellence and transformation.
            </p>
          </div>
          <a href="#contact" className="btn-gold flex-shrink-0">
            <span>Register for Training</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
