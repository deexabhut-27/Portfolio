# Deexa Portfolio

A modern portfolio website built with HTML, Tailwind CSS, and JavaScript.

## Project Structure

```
Deexa Portfolio/
├── index.html              # Main HTML file
├── package.json            # Dependencies & build scripts
├── package-lock.json       # Locked dependency versions
├── tailwind.config.js      # Tailwind CSS configuration
├── assets/
│   └── images/            # All image assets (21 files)
│       ├── c.jpg
│       ├── c1.jpg
│       ├── cc.jpg
│       ├── cc1.jpg
│       ├── cc2.jpg
│       ├── cc3.jpg
│       ├── cc4.jpg
│       ├── cc5.jpg
│       ├── cc6.jpg
│       ├── cc7.jpg
│       ├── cc10.jpg
│       ├── cc11.jpg
│       ├── deexa.png
│       ├── deexa1.png
│       ├── deexa2.png
│       ├── download (1).png
│       ├── download.png
│       ├── et-logo.jpg
│       ├── logo.png
│       ├── s1.jpg
│       └── s2.jpg
├── src/
│   ├── css/
│   │   └── input.css      # Tailwind CSS source file
│   └── js/
│       └── global.js      # JavaScript functionality
└── dist/
    └── output.css         # Compiled Tailwind CSS output
```

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Build and watch for changes:
```bash
npm run build
```

This will:
- Watch `src/css/input.css` for changes
- Compile Tailwind CSS to `dist/output.css`
- Automatically rebuild on file changes

## Technologies Used

- **HTML5** - Structure
- **Tailwind CSS** - Styling framework
- **JavaScript** - Interactivity
- **Typed.js** - Typing animation library
- **Swiper.js** - Carousel/slider functionality

## Features

- Responsive design
- Smooth scrolling navigation
- Typed text animations
- Image carousel for certificates
- Modern UI with Tailwind CSS

## File Organization

- **Root**: Configuration files and main HTML
- **assets/images/**: All static image assets
- **src/**: Source files (CSS and JavaScript)
- **dist/**: Compiled/build output files
