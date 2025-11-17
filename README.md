# Michael Bronikowski Portfolio

A stunning, modern portfolio website showcasing AI research, entrepreneurship, and sustainable beekeeping. Built with cutting-edge technologies and inspired by the design philosophies of Virgil Abloh and Jony Ive.

## 🚀 Live Site

Visit: [michaelbronikowski.github.io](https://michaelbronikowski.github.io/portfolio)

## ✨ Features

- **Bold, Minimalist Design**: Inspired by Virgil Abloh's industrial aesthetics and Jony Ive's precision craftsmanship
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and micro-interactions
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Complete metadata and semantic HTML structure
- **Performance Focused**: Static site generation for lightning-fast load times

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.tsx              # Landing section
│   │   ├── About.tsx             # About & Education
│   │   ├── Research.tsx          # Research & Publications
│   │   ├── Experience.tsx        # Professional Experience
│   │   ├── Entrepreneurship.tsx  # Startup Ventures
│   │   ├── Awards.tsx            # Awards & Recognition
│   │   ├── Skills.tsx            # Technical Skills
│   │   ├── Contact.tsx           # Contact Information
│   │   ├── ThemeProvider.tsx     # Dark mode provider
│   │   └── ThemeToggle.tsx       # Theme switcher
│   ├── lib/
│   │   └── data.ts               # Content data
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── public/                       # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions workflow
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── package.json                  # Dependencies

```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mbron64/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The static files will be generated in the `out` directory.

## 🎨 Customization

### Updating Content

All content is centralized in `app/lib/data.ts`. Simply update the data objects to reflect your information:

- `personalInfo`: Name, title, contact information
- `education`: Educational background
- `research`: Research labs, publications, pre-publications
- `experience`: Professional experience
- `entrepreneurship`: Startup ventures
- `awards`: Awards and recognition
- `skills`: Technical skills by category
- `leadership`: Leadership roles
- `accelerators`: Startup accelerators

### Styling

The design uses a monochromatic color palette with honey gold accents:
- Primary: Black/White
- Accent: Amber (#D99D24)
- Grays: Zinc scale

Modify colors in `globals.css` and component files as needed.

## 📦 Deployment

### GitHub Pages

This portfolio is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be live at `https://[username].github.io/portfolio`

### Manual Deployment

```bash
npm run build
# Upload the contents of the 'out' directory to your hosting provider
```

## 🎯 Design Philosophy

This portfolio merges two iconic design philosophies:

**Virgil Abloh's Approach**:
- Bold, industrial typography
- Strategic use of transparency and layering
- Minimalist yet impactful visual elements

**Jony Ive's Principles**:
- Precision and attention to detail
- Generous use of whitespace
- Functional beauty
- Subtle depth and dimension

The result is a portfolio that's both striking and sophisticated, perfectly suited for showcasing technical expertise and creative entrepreneurship.

## 📄 License

© 2025 Michael Bronikowski. All rights reserved.

## 🤝 Contact

Michael Bronikowski
- Email: mbronik1@binghamton.edu
- GitHub: [@mbron64](https://github.com/mbron64)
- LinkedIn: [michaelbronikowski](https://linkedin.com/in/michaelbronikowski)

---

Built with ❤️ and 🐝 by Michael Bronikowski
