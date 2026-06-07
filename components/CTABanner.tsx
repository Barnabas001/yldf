'use client'

export default function CTABanner() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'var(--gold)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Diagonal overlays */}
      <div
        className="absolute top-0 left-0 w-64 h-full opacity-20"
        style={{ background: 'linear-gradient(135deg, var(--navy) 0%, transparent 50%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-full opacity-20"
        style={{ background: 'linear-gradient(315deg, var(--navy) 0%, transparent 50%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
        <div
          className="text-white/60 text-xs uppercase tracking-widest mb-6"
          style={{ fontFamily: 'var(--font-dm-mono)' }}
        >
          ✦ Join the Movement ✦
        </div>

        <h2
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Ready to Become a
          <br />
          <span style={{ color: 'var(--navy)' }}>Transformational Leader?</span>
        </h2>

        <p
          className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          Join hundreds of young leaders who have discovered their purpose, built their character,
          and are now impacting communities across Nigeria and beyond.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#0D1B3E] text-white px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#162548] transition-colors"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            <span>Register for Training</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-3 bg-transparent text-white border-2 border-white px-8 py-4 font-semibold text-sm tracking-wide hover:bg-white hover:text-[#0D1B3E] transition-all"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            <span>Learn About YDLF</span>
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-10 mt-14 pt-10 border-t border-white/20">
          {[
            { val: '500+', lbl: 'Alumni Trained' },
            { val: '20', lbl: 'Cohorts' },
            { val: '21+', lbl: 'Years Active' },
            { val: '100%', lbl: 'Commitment' },
          ].map((s) => (
            <div key={s.lbl} className="text-center">
              <div
                className="text-2xl font-bold text-[#0D1B3E]"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {s.val}
              </div>
              <div
                className="text-white/70 text-xs uppercase tracking-widest mt-1"
                style={{ fontFamily: 'var(--font-dm-mono)' }}
              >
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
