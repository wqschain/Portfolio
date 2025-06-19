# Personal Portfolio Website

A modern, minimalist portfolio website built with Next.js 15 and React, featuring fluid animations, interactive elements, and responsive design. The site showcases professional projects and technical skills through a clean, engaging interface.

## Features

### Core Features
- Responsive design optimized for all device sizes
- Dynamic page transitions and smooth scrolling
- Interactive UI elements with magnetic hover effects
- Dark theme optimization
- Project showcase with video demonstrations
- Skills section with interactive animations
- Modern minimalist design language

### Technical Implementations
- Server-side rendering with Next.js 15
- Fluid animations using Framer Motion
- Type-safe development with TypeScript
- Styling with TailwindCSS and CSS modules
- Component library integration with Shadcn/UI
- 3D effects using Three.js
- Optimized performance with Next.js Image and Video components

## Technology Stack

### Frontend
- Next.js 15.3.3
- React 19.0.0
- TypeScript 5
- TailwindCSS 3.3.0
- Framer Motion 12.16.0
- Three.js 0.177.0
- Shadcn/UI

### Development Tools
- ESLint
- PostCSS
- Autoprefixer
- TurboPack

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── projects/          # Projects page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Navigation component
│   └── sections/          # Page sections
│       ├── About.tsx      # About section
│       ├── Hero.tsx       # Hero section
│       ├── Projects.tsx   # Projects section
│       └── Skills.tsx     # Skills section
└── styles/               # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/wqschain/Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Features

### Projects Showcase
- Sentryx: AI-powered cryptocurrency sentiment analysis platform
- Scrynt: Advanced stock market analysis platform
- Portfolio: This website

### Interactive Elements
- Magnetic hover effects on project tags
- Smooth transitions between sections
- Responsive navigation
- Dynamic content loading
- Video demonstrations of projects

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Server-side rendering
- Optimized asset loading
- Efficient styling with TailwindCSS

## Development Practices

- Type-safe development with TypeScript
- Component-based architecture
- Responsive design principles
- Modern JavaScript features
- Clean code practices

## License

This project is licensed under the MIT License - see the LICENSE file for details
