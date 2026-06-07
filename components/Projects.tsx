"use client";

const projects = [
  {
    title: "Annual Leadership Summit",
    category: "Summit",
    year: "2022",
    desc: "Bringing together over 200 young leaders for a transformative 3-day summit of training and networking.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop",
    color: "#C99A2E",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
          <div>
            <div className="section-label mb-6">Our Work</div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0D1B3E] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Recent <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="btn-navy inline-flex flex-shrink-0 self-start md:self-auto"
          >
            <span>View All Projects</span>
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal reveal-delay-${i + 1} card-lift group relative overflow-hidden bg-white shadow-md`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${project.color} 0%, transparent 60%)`,
                  }}
                />

                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-white text-xs font-semibold uppercase tracking-widest"
                  style={{
                    background: "var(--gold)",
                    fontFamily: "var(--font-dm-mono)",
                  }}
                >
                  {project.category}
                </div>

                {/* Year */}
                <div
                  className="absolute top-4 right-4 text-white/70 text-xs"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div
                  className="w-8 h-0.5 mb-4 transition-all group-hover:w-16"
                  style={{ background: "var(--gold)" }}
                />
                <h3
                  className="text-xl font-bold text-[#0D1B3E] mb-3 group-hover:text-[#C99A2E] transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-gray-500 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {project.desc}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#C99A2E] text-sm font-semibold group/link"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="group-hover/link:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
