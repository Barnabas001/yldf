# YDLF Website — Next.js

**Youth Development Leadership Foundation**  
*Empowering Young Leaders. Transforming Communities.*

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
ydlf-website/
├── app/
│   ├── globals.css          # Design tokens, utilities, animations
│   ├── layout.tsx           # Root layout + metadata/SEO
│   └── page.tsx             # Homepage (assembles all sections)
├── components/
│   ├── Navbar.tsx           # Sticky nav, mobile menu
│   ├── Hero.tsx             # Full-screen hero with parallax
│   ├── Stats.tsx            # Animated stats bar
│   ├── About.tsx            # About Us with image collage
│   ├── Foundation.tsx       # Vision / Mission / Values tabs
│   ├── Trainings.tsx        # 11 training courses list
│   ├── Alumni.tsx           # Cohort grid 2003–2023 (from booklet)
│   ├── Projects.tsx         # Recent projects cards
│   ├── Testimonials.tsx     # Auto-rotating testimonials
│   ├── CTABanner.tsx        # Full-width gold call-to-action
│   ├── Contact.tsx          # Contact form + info
│   └── Footer.tsx           # Links, newsletter, socials
├── public/
│   └── images/              # → Replace Unsplash URLs with real images here
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--navy` | `#0D1B3E` | Primary dark background |
| `--navy-light` | `#162548` | Card backgrounds |
| `--navy-dark` | `#080F22` | Darkest backgrounds |
| `--gold` | `#C99A2E` | Primary accent, CTAs |
| `--gold-light` | `#E4B84A` | Hover states |
| `--cream` | `#FAF7F0` | Light section backgrounds |

---

## 🖼 Replacing Images

All images currently use Unsplash URLs. To use real YDLF photos:

1. Add your images to `/public/images/` (e.g. `hero.jpg`, `team.jpg`)
2. Replace the `src` URLs in each component:

```tsx
// Before (Unsplash)
<img src="https://images.unsplash.com/photo-xxx..." />

// After (your image)
<img src="/images/hero.jpg" />
```

Or use Next.js `<Image>` component for optimization:
```tsx
import Image from 'next/image'
<Image src="/images/hero.jpg" alt="YDLF Team" fill className="object-cover" />
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px — stacked layout, hamburger nav
- **Tablet**: 768px–1024px — partial grid layouts
- **Desktop**: 1024px+ — full side-by-side layouts

---

## ✅ Sections Checklist

- [x] Navbar (sticky, scroll-aware, mobile menu)
- [x] Hero (parallax, image collage, stats inline)
- [x] Stats Bar (animated count-up on scroll)
- [x] About Us (image collage, value pillars)
- [x] Foundation (Vision / Mission / Values — tabbed)
- [x] Training Courses (all 11 modules)
- [x] Alumni Grid (2003–2023, 20 cohorts, contact info)
- [x] Recent Projects (4 project cards)
- [x] Testimonials (auto-rotating carousel)
- [x] CTA Banner (gold full-width)
- [x] Contact Form (validation, success state)
- [x] Footer (newsletter, links, socials)

---

## 🔧 Customisation Tips

- **Fonts**: Google Fonts loaded in `globals.css`. Change `Playfair Display` / `DM Sans` as needed.
- **Animations**: All scroll-reveal uses the `.reveal` CSS class + IntersectionObserver in `page.tsx`.
- **Add pages**: Create `app/about/page.tsx`, `app/trainings/page.tsx` etc for inner pages.
- **CMS**: Connect to Sanity, Contentful, or WordPress headless for dynamic content.

---

## 📞 Support

Built for YDLF — Youth Development Leadership Foundation  
© 2024 YDLF. All Rights Reserved.
