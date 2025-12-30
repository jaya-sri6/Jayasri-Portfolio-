# Jayasri Jonnalagadda - Portfolio

A high-end, animated personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Dark Theme** - Deep black/charcoal background with neon gradient accents
- **Smooth Animations** - Page transitions, scroll reveals, and hover effects powered by Framer Motion
- **3D Parallax Effects** - Mouse-tracking parallax on hero section
- **Glassmorphism Design** - Frosted glass cards with backdrop blur
- **Responsive** - Fully responsive design for all devices
- **Smooth Scrolling** - Lenis smooth scroll integration
- **Interactive Components** - Animated skill cards, project cards, and timeline

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles & Tailwind utilities
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Home page
├── components/
│   ├── Hero.tsx          # Hero section with parallax
│   ├── About.tsx         # About section with education
│   ├── Skills.tsx        # Skills grid with categories
│   ├── Projects.tsx      # Projects showcase
│   ├── ProjectCard.tsx   # Individual project card
│   ├── Experience.tsx    # Work experience timeline
│   ├── Contact.tsx       # Contact section with socials
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Site footer
│   ├── PageTransition.tsx # Page transition wrapper
│   └── SmoothScroll.tsx  # Lenis smooth scroll
├── data/
│   └── projects.ts       # Portfolio data (projects, skills, etc.)
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (Google Fonts)

## 🎨 Design Features

- Gradient text effects
- Glow border animations on hover
- Animated skill cards with tilt effect
- Timeline with animated connecting lines
- Floating background orbs
- Custom scrollbar styling
- Noise texture overlay

## 📱 Sections

1. **Hero** - Animated name reveal, role, CTA buttons, social links
2. **About** - Bio, education, certifications, statistics
3. **Skills** - Categorized skill cards with hover effects
4. **Projects** - Featured and other projects with tech stacks
5. **Experience** - Work timeline with animated reveals
6. **Contact** - Email CTA, social links grid

## 🚢 Deployment

This project is ready for deployment on Vercel:

```bash
# Deploy to Vercel
vercel
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!
