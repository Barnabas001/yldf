'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
      const bg = el.querySelector('.hero-bg') as HTMLElement
      if (bg) {
        bg.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px) scale(1.05)`
      }
    }
    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--navy-dark)' }}
    >
      {/* Background image with parallax */}
      <div
        className="hero-bg absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(105deg, rgba(8,15,34,0.97) 0%, rgba(13,27,62,0.85) 50%, rgba(13,27,62,0.5) 100%)`,
        }}
      />

      {/* Gold geometric accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-10"
        style={{
          background: `radial-gradient(ellipse at top right, var(--gold) 0%, transparent 70%)`,
        }}
      />

      {/* Diagonal gold line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
      />

      {/* Floating elements */}
      <div
        className="absolute top-32 right-16 w-64 h-64 rounded-full opacity-5 hidden xl:block"
        style={{ border: '2px solid var(--gold)', animation: 'spin 30s linear infinite' }}
      />
      <div
        className="absolute bottom-32 right-32 w-32 h-32 rounded-full opacity-5 hidden xl:block"
        style={{ border: '1px solid var(--gold)', animation: 'spin 20s linear infinite reverse' }}
      />

      {/* Year badge */}
      <div className="absolute top-28 right-8 md:right-16 text-right hidden md:block">
        <div
          className="text-8xl font-bold opacity-5 text-white leading-none"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          2003
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* Label */}
          <div className="section-label mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            For Excellence &amp; All Round Development
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            <span className="text-white block animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Empowering
            </span>
            <span className="text-white block animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Young
            </span>
            <span
              className="block animate-fade-up gradient-text"
              style={{ animationDelay: '0.4s' }}
            >
              Leaders.
            </span>
          </h1>

          <p
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg animate-fade-up"
            style={{ animationDelay: '0.5s', fontFamily: 'var(--font-dm-sans)' }}
          >
            YDLF is committed to raising a new generation of transformational leaders through
            training, mentorship, and community impact — since 2003.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            <a href="#trainings" className="btn-gold">
              <span>Register for Training</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#about" className="btn-white">
              <span>Learn More</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
            </a>
          </div>

          {/* Quick stats inline */}
          <div
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10 animate-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            {[
              { value: '500+', label: 'Leaders Trained' },
              { value: '20+', label: 'Projects Done' },
              { value: '21+', label: 'Years of Impact' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold gradient-text"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/50 text-xs tracking-widest uppercase mt-1"
                  style={{ fontFamily: 'var(--font-dm-mono)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image collage */}
        <div className="hidden lg:flex items-center justify-center relative h-[520px]">
          {/* Main image */}
          <div
            className="absolute right-0 top-8 w-72 h-96 overflow-hidden shadow-2xl"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 90%, 85% 100%, 0 100%)',
              animation: 'fadeIn 1s ease 0.8s both',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop"
              alt="YDLF Leaders"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{ background: 'linear-gradient(135deg, var(--gold) 0%, transparent 60%)' }}
            />
          </div>

          {/* Secondary image */}
          <div
            className="absolute left-0 bottom-8 w-52 h-64 overflow-hidden shadow-xl"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%)',
              animation: 'fadeIn 1s ease 1s both',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop"
              alt="YDLF Community"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{ background: 'linear-gradient(135deg, var(--navy) 0%, transparent 60%)' }}
            />
          </div>

          {/* Gold accent card */}
          <div
            className="absolute right-4 bottom-4 bg-[#C99A2E] px-6 py-4 shadow-lg z-10"
            style={{ animation: 'fadeIn 1s ease 1.2s both' }}
          >
            <div
              className="text-white text-2xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Est. 2003
            </div>
            <div className="text-white/80 text-xs tracking-widest uppercase mt-1">
              Transforming Communities
            </div>
          </div>

          {/* Global badge */}
          <div
            className="absolute left-16 top-4 bg-[#0D1B3E] border border-[#C99A2E]/30 px-4 py-3 shadow-lg z-10"
            style={{ animation: 'fadeIn 1s ease 1.4s both' }}
          >
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C99A2E" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <div>
                <div className="text-white text-sm font-semibold">Global Reach</div>
                <div className="text-[#C99A2E] text-xs">Across Communities</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div
          className="text-white/60 text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-dm-mono)' }}
        >
          Scroll
        </div>
        <div
          className="w-px h-12 bg-gradient-to-b from-[#C99A2E] to-transparent"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        />
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease both;
        }
        .animate-fade-up {
          animation: fadeUp 0.7s ease both;
        }
      `}</style>
    </section>
  )
}
