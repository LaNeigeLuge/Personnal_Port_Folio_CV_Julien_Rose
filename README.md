# Rose Portfolio — Backend Cloud & IoT Engineer

A stunning personal portfolio website featuring a **liquid glass aesthetic** over a dark forest/nature background.

## 🎨 Design

- **Visual Style**: Liquid glass morphism with emerald/lime green accents (#4ADE80)
- **Typography**: Syne (headings) + DM Sans (body)
- **Animations**: Framer Motion for smooth entrance and hover effects
- **Responsive**: Mobile-first design

## 🚀 Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glass utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed glass navbar with active section tracking
│   ├── Hero.tsx            # Full-height hero with floating profile card
│   ├── About.tsx           # Bio + personality badges
│   ├── Skills.tsx          # Skill clusters by domain
│   ├── Experience.tsx      # Vertical timeline with glass cards
│   ├── Teaching.tsx        # ESILV teaching section
│   ├── Projects.tsx        # Project card grid
│   ├── Contact.tsx         # Contact links + footer
│   ├── GlassCard.tsx       # Reusable glass panel component
│   └── SectionTitle.tsx    # Styled section headers
├── assets/
│   ├── background.jpg      # TODO: Add your dark forest/nature image
│   ├── profile.jpg         # TODO: Add your profile photo
│   └── cv.pdf              # TODO: Add your CV/resume
├── App.tsx
├── main.tsx
└── index.css               # Global styles + glass design system
```

## 🛠️ Setup & Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## 📝 Customization Guide

### 1. Add Your Assets

Place these files in `src/assets/`:
- **background.jpg** — Dark atmospheric nature/forest scene
- **profile.jpg** — Your profile photo (will be displayed in a circular frame)
- **cv.pdf** — Your CV/resume

### 2. Update Personal Information

**Contact Details** — [src/components/Contact.tsx](src/components/Contact.tsx)
```typescript
const contactLinks = [
  { icon: Mail, label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: '...' },
  { icon: Github, label: 'GitHub', value: 'github.com/yourprofile', href: '...' },
];
```

**Bio Text** — [src/components/About.tsx](src/components/About.tsx)
Replace the TODO paragraph with your personal story.

**Experience** — [src/components/Experience.tsx](src/components/Experience.tsx)
Update the placeholder entries with your actual work history.

**Projects** — [src/components/Projects.tsx](src/components/Projects.tsx)
Replace "Coming Soon" cards with your real projects (add GitHub/demo links).

### 3. Profile Image

In [src/components/Hero.tsx](src/components/Hero.tsx), replace the placeholder `<div>` with:

```tsx
<img
  src="/src/assets/profile.jpg"
  alt="Rose"
  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover glow-ring"
/>
```

## 🎨 Glass Design System

CSS variables in [src/index.css](src/index.css):

```css
--glass-bg: rgba(255, 255, 255, 0.06);
--glass-border: rgba(255, 255, 255, 0.12);
--glass-blur: 24px;
--glass-shadow: 0 8px 32px rgba(80, 200, 100, 0.15);
--accent: #4ADE80;
```

Utility classes:
- `.glass` — Standard glass panel
- `.glass-hover` — Glass panel with hover lift effect
- `.glass-green` — Glass with green tint
- `.text-gradient` — Gradient text (accent colors)
- `.glow-ring` — Green glow ring (for profile image)
- `.glow-text` — Text with green glow shadow

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

Drag & drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages

Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

Then:
```bash
npm run build
# Deploy dist/ to gh-pages branch
```

## 📄 License

© 2024 Rose. All rights reserved.

---

Built with 💚 using React, TypeScript, Tailwind CSS, and Framer Motion.