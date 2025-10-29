# Setup Guide for ROFECH Website

This guide will help you get the ROFECH design & development website up and running.

## Prerequisites

- Node.js 16+ and npm installed
- Basic knowledge of React and TypeScript
- A code editor (VS Code recommended)

## Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React & React DOM
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- And all development dependencies

### 2. Add Your Images

The website needs architectural images to look complete. You have two options:

#### Option A: Use Your Own Images
1. Navigate to `public/images/`
2. Add your images following the naming convention in `public/images/README.md`
3. Ensure all images are optimized (< 500KB for gallery images)

#### Option B: Use Placeholder Images
For development/testing, you can use placeholder images from:
- [Unsplash](https://unsplash.com/) - Search "modern architecture"
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Placeholder.com](https://placeholder.com/) - Quick placeholders

**Required Images:**
```
public/images/
├── hero-villa-37.jpg
├── villa-37-thumb.jpg
├── villa-37-1.jpg
├── villa-37-2.jpg
├── villa-37-3.jpg
├── residence-b21-thumb.jpg
├── residence-b21-1.jpg
├── residence-b21-2.jpg
├── residence-b21-3.jpg
├── garden-pavilion-thumb.jpg
├── garden-pavilion-1.jpg
├── garden-pavilion-2.jpg
├── garden-pavilion-3.jpg
├── about-office.jpg
├── service-1.jpg
├── service-2.jpg
├── service-3.jpg
├── service-4.jpg
├── logo.svg
└── og-image.jpg
```

### 3. Start Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### 4. Customize Content

#### Update Project Data
Edit `src/data/projects.ts` to customize:
- Project names and descriptions
- Locations and years
- Features and materials
- Image paths

#### Update Services
Edit `src/data/services.ts` to modify:
- Service titles and descriptions
- Process steps
- Icons (emojis or replace with icon components)

#### Update Contact Information
Edit `src/pages/Contact.tsx` to update:
- Office address
- Phone number
- Email address
- Social media links
- Business hours

#### Customize Footer
Edit `src/components/layout/Footer.tsx` for:
- Company tagline
- Contact details
- Social media links
- Copyright information

### 5. Customize Branding

#### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'rofech-yellow': '#FFED00', // Change to your brand color
  'rofech-black': '#000000',
}
```

Don't forget to update the CSS classes in components if you change color names.

#### Fonts
The site uses Google Fonts (Inter & Montserrat). To change:
1. Update the Google Fonts link in `index.html`
2. Update font-family in `tailwind.config.js`

#### Logo
Replace the logo component in `src/components/layout/Header.tsx` and `Footer.tsx`

### 6. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

To preview the production build:
```bash
npm run preview
```

## Common Customizations

### Adding New Projects

1. Add images to `public/images/`
2. Add project data to `src/data/projects.ts`:

```typescript
{
  id: 'new-project',
  name: 'Project Name',
  category: 'Residential',
  location: 'City, Country',
  year: 2024,
  area: '300 sqm',
  type: 'Villa',
  description: 'Project description...',
  features: ['Feature 1', 'Feature 2'],
  materials: ['Material 1', 'Material 2'],
  images: ['/images/project-1.jpg', '/images/project-2.jpg'],
  thumbnail: '/images/project-thumb.jpg',
  featured: true
}
```

### Adding New Services

Edit `src/data/services.ts`:

```typescript
{
  id: 'new-service',
  title: 'Service Title',
  description: 'Service description...',
  icon: '🏠',
  process: ['Step 1', 'Step 2', 'Step 3']
}
```

### Modifying Page Content

All page components are in `src/pages/`:
- `Home.tsx` - Homepage sections
- `Portfolio.tsx` - Project grid
- `ProjectDetail.tsx` - Individual project pages
- `About.tsx` - Company information
- `Services.tsx` - Service details
- `Contact.tsx` - Contact form

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure custom domain (optional)

### Other Platforms
The `dist/` folder contains static files that can be hosted anywhere:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static hosting service

## Troubleshooting

### Images Not Loading
- Check that images are in `public/images/`
- Verify image paths in project data match actual filenames
- Check browser console for 404 errors

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`
- Clear cache: Delete `node_modules` and `dist`, then reinstall

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that custom classes in `index.css` are defined
- Verify PostCSS is processing Tailwind directives

## Performance Tips

1. **Image Optimization**: Compress images before adding them
2. **Lazy Loading**: Already implemented for routes and images
3. **Code Splitting**: React.lazy() is used for route-based splitting
4. **Lighthouse Score**: Run Lighthouse audit in Chrome DevTools
5. **WebP Format**: Consider converting images to WebP for better compression

## Getting Help

- Check the README.md for feature documentation
- Review component files for inline comments
- Check console for error messages
- Ensure all required images are present

## Next Steps

1. ✅ Install dependencies
2. ✅ Add your images
3. ✅ Start dev server
4. ✅ Customize content
5. ✅ Test all pages
6. ✅ Build for production
7. ✅ Deploy

Good luck with your ROFECH website! 🎉

