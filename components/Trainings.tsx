'use client'

const courses = [
  { num: '01', title: 'Vision & Goal Setting', desc: 'Discover your purpose and set clear, achievable goals for life and leadership.' },
  { num: '02', title: 'Making Right Choices', desc: 'Navigating sexuality, character building, and integrity in every decision.' },
  { num: '03', title: 'Leadership, Integrity & Commitment', desc: 'Build the character foundation every great leader must have.' },
  { num: '04', title: 'Your Work a Ministry', desc: 'Transform your career and daily work into a platform for impact.' },
  { num: '05', title: 'Motivation & Mobilisation for Service', desc: 'Ignite passion for service and learn how to rally others around a vision.' },
  { num: '06', title: 'Practical Evangelism & Discipleship', desc: 'Effective approaches to sharing faith and raising disciples.' },
  { num: '07', title: 'Marriage Issues', desc: 'Building healthy relationships and understanding the foundations of family.' },
  { num: '08', title: 'Leading Small Groups & MCing', desc: 'Master the art of facilitating groups and public speaking.' },
  { num: '09', title: 'Creating Wealth', desc: 'Financial intelligence, stewardship, and entrepreneurial thinking.' },
  { num: '10', title: 'Understanding Spiritual Gifts', desc: 'Discover and deploy your spiritual gifts for community transformation.' },
  { num: '11', title: 'Mental Health', desc: 'Emotional wellness, resilience, and maintaining a healthy mind as a leader.' },
]

export default function Trainings() {
  return (
    <section id="trainings" className="py-28 relative overflow-hidden" style={{ background: 'var(--cream)' }}>
      {/* Diagonal background element */}
      <div
        className="absolute top-0 right-0 w-96 h-full opacity-5"
        style={{ background: 'linear-gradient(135deg, var(--navy) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: Sticky header */}
          <div className="lg:sticky lg:top-32 reveal">
            <div className="section-label mb-6">Training Program</div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              YDLF Training Courses
            </h2>
            <div className="gold-line" />
            <p
              className="text-gray-600 leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Our comprehensive leadership curriculum is designed to develop the whole person —
              mind, character, and spirit — for lasting community impact.
            </p>

            {/* Course count */}
            <div
              className="w-24 h-24 flex flex-col items-center justify-center border-2 border-[#C99A2E] mb-10"
            >
              <span
                className="text-4xl font-bold text-[#C99A2E]"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                11
              </span>
              <span
                className="text-xs text-[#0D1B3E]/60 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-dm-mono)' }}
              >
                Modules
              </span>
            </div>

            <a
              href="#contact"
              className="btn-gold inline-flex"
            >
              <span>View Training Details</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right: Course list */}
          <div className="space-y-0">
            {courses.map((course, i) => (
              <div
                key={course.num}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex items-start gap-6 py-6 border-b border-gray-200 hover:border-[#C99A2E] transition-all cursor-pointer`}
              >
                {/* Number */}
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-gray-200 group-hover:border-[#C99A2E] group-hover:bg-[#C99A2E] transition-all"
                >
                  <span
                    className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-dm-mono)' }}
                  >
                    {course.num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-base font-bold text-[#0D1B3E] mb-1 group-hover:text-[#C99A2E] transition-colors"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {course.title}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {course.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-[#C99A2E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
