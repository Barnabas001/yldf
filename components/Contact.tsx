'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const inputClass =
    'w-full bg-transparent border border-gray-200 focus:border-[#C99A2E] outline-none px-5 py-3.5 text-sm text-[#0D1B3E] placeholder-gray-400 transition-colors'

  return (
    <section id="contact" className="py-28" style={{ background: 'var(--navy)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="reveal">
            <div className="section-label mb-6">Get In Touch</div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Connect With
              <span className="gradient-text block">YDLF</span>
            </h2>
            <div className="gold-line" />
            <p
              className="text-white/50 leading-relaxed mb-12 max-w-md"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Have questions about our training programs, partnership opportunities, or want to
              connect with our alumni network? We'd love to hear from you.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: 'Location',
                  value: 'Nigeria — Serving Communities Nationwide',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  label: 'Phone',
                  value: 'Contact via alumni representatives',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'info@ydlf.org',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#C99A2E]"
                    style={{ background: 'rgba(201,154,46,0.1)', border: '1px solid rgba(201,154,46,0.2)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-[#C99A2E] text-xs uppercase tracking-widest mb-1"
                      style={{ fontFamily: 'var(--font-dm-mono)' }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-white/70 text-sm"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2">
            <div
              className="bg-white p-8 md:p-10"
              style={{ boxShadow: '0 20px 80px rgba(0,0,0,0.3)' }}
            >
              <h3
                className="text-2xl font-bold text-[#0D1B3E] mb-2"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Send a Message
              </h3>
              <p
                className="text-gray-400 text-sm mb-8"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Fill in the form and we'll get back to you shortly.
              </p>

              {submitted && (
                <div
                  className="mb-6 px-5 py-4 text-sm text-white flex items-center gap-3"
                  style={{ background: 'var(--gold)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Message sent! We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={inputClass}
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className={inputClass}
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  />
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={`${inputClass} bg-white text-gray-400`}
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    <option value="">Subject</option>
                    <option value="training">Training Registration</option>
                    <option value="partnership">Partnership</option>
                    <option value="alumni">Alumni Network</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
                <textarea
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className={inputClass}
                  style={{ fontFamily: 'var(--font-dm-sans)', resize: 'none' }}
                />
                <button
                  type="submit"
                  className="btn-gold w-full justify-center py-4"
                >
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
