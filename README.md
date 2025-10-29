# ROFECH Design & Development Website

A premium, modern website for ROFECH design & development, an architecture firm specializing in tropical modern residential design.

## 🎨 Features

- **Modern Tech Stack**: Built with React, TypeScript, and Vite for optimal performance
- **Smooth Animations**: Framer Motion for professional, engaging interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Navigation**: React Router with lazy loading for instant page transitions
- **SEO Optimized**: Meta tags and semantic HTML for better discoverability
- **Premium UI/UX**: Clean, bold design with strategic use of brand yellow (#FFED00)

## 🚀 Pages

1. **Home** - Hero section, featured projects, services overview, trust indicators
2. **Portfolio** - Filterable project grid with detailed project pages
3. **About** - Company story, values, design philosophy, and process
4. **Services** - Comprehensive service offerings with detailed descriptions
5. **Contact** - Contact form with office information and social links

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for lightning-fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React Lazy Load Image Component** for optimized image loading

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Brand Colors

- **Primary Yellow**: #FFED00
- **Black**: #000000
- **White/Neutrals**: For backgrounds and text

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── home/            # Home page sections
│   └── layout/          # Header, Footer
├── pages/               # Main page components
├── data/                # Project and service data
├── types/               # TypeScript type definitions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🖼️ Image Setup

The website expects images in the `public/images/` directory:

### Required Images:
- `hero-villa-37.jpg` - Hero background (luxury residential with wooden slats)
- `villa-37-thumb.jpg`, `villa-37-1.jpg`, `villa-37-2.jpg`, `villa-37-3.jpg`
- `residence-b21-thumb.jpg`, `residence-b21-1.jpg`, `residence-b21-2.jpg`, `residence-b21-3.jpg`
- `garden-pavilion-thumb.jpg`, `garden-pavilion-1.jpg`, `garden-pavilion-2.jpg`, `garden-pavilion-3.jpg`
- `about-office.jpg` - Office/team image for About page
- `service-1.jpg`, `service-2.jpg`, `service-3.jpg`, `service-4.jpg` - Service section images
- `logo.svg` - Company logo
- `og-image.jpg` - Social media preview image

## 🎯 Key Features

### Animations
- Smooth scroll animations using Framer Motion
- Hover effects on project cards with yellow overlay
- Counter animations for statistics
- Page transition effects
- Parallax scrolling on hero images

### Performance
- Code splitting with React lazy loading
- Image lazy loading below the fold
- Optimized Tailwind CSS build
- Fast page load times

### SEO
- Semantic HTML structure
- Meta descriptions on all pages
- Open Graph tags for social sharing
- Schema markup for business info
- Alt tags on all images

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  'rofech-yellow': '#FFED00',
  'rofech-black': '#000000',
}
```

### Fonts
The site uses:
- **Inter** for body text
- **Montserrat** for headings

Update in `index.html` Google Fonts link if needed.

### Content
- Edit project data in `src/data/projects.ts`
- Edit service data in `src/data/services.ts`
- Modify page content in respective `src/pages/` files

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

Build the production version:
```bash
npm run build
```

The `dist` folder can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

Copyright © 2024 ROFECH design & development. All rights reserved.

## 🤝 Support

For support or inquiries:
- Email: info@rofech.com
- Phone: +63 912 345 6789

