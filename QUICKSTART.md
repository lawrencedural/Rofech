# Quick Start Guide 🚀

Get the ROFECH website running in 5 minutes!

## Prerequisites

- Node.js 16+ installed ([Download](https://nodejs.org/))
- A terminal/command prompt
- A code editor (VS Code recommended)

## Installation

```bash
# 1. Navigate to the project directory
cd Rofech

# 2. Install dependencies (this may take 1-2 minutes)
npm install

# 3. Start the development server
npm run dev
```

The website will open at: **http://localhost:5173**

## ⚠️ Important: Add Images

The website won't look complete without images. You need to add images to the `public/images/` folder.

### Quick Option: Download from Unsplash

1. Go to [Unsplash.com](https://unsplash.com)
2. Search for "modern architecture"
3. Download 20 images
4. Rename them according to `public/images/README.md`
5. Place them in `public/images/`

### Required Images (minimum):
```
public/images/
├── hero-villa-37.jpg          (any luxury house exterior)
├── villa-37-thumb.jpg         (same as above, smaller)
├── villa-37-1.jpg
├── residence-b21-thumb.jpg    (another modern house)
├── residence-b21-1.jpg
├── garden-pavilion-thumb.jpg  (outdoor structure)
├── garden-pavilion-1.jpg
├── about-office.jpg           (office or team photo)
└── service-1.jpg through service-4.jpg
```

**Tip**: For testing, you can use the same image multiple times with different names.

## What You Should See

### Home Page
- Full-screen hero with overlay text
- 3 featured projects
- 4 service cards
- Statistics counter

### Navigation
- Home
- Portfolio (project grid)
- About (company info)
- Services (detailed services)
- Contact (form)

## Customization Checklist

### Before going live:

1. **Images** (Required)
   - [ ] Add all project images
   - [ ] Add hero image
   - [ ] Add service images
   - [ ] Optimize images (< 500KB each)

2. **Content** (Quick)
   - [ ] Update contact info in `src/pages/Contact.tsx`
   - [ ] Update footer in `src/components/layout/Footer.tsx`
   - [ ] Modify projects in `src/data/projects.ts`

3. **Branding** (Optional)
   - [ ] Change colors in `tailwind.config.js`
   - [ ] Replace logo in Header/Footer
   - [ ] Update site title in `index.html`

## Common Issues

### "Cannot find module" error
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Images not showing
- Check that files are in `public/images/` (not `src/images/`)
- Verify filenames match exactly (case-sensitive)
- Refresh your browser

### Port 5173 already in use
```bash
# Solution: Kill the process or use different port
npm run dev -- --port 3000
```

## Next Steps

1. ✅ Website is running
2. ✅ Add your images
3. ✅ Customize content
4. ✅ Test all pages
5. ✅ Read [SETUP.md](SETUP.md) for detailed customization
6. ✅ Read [DEPLOYMENT.md](DEPLOYMENT.md) when ready to deploy

## Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure (Simplified)

```
Rofech/
├── public/
│   └── images/          # ⚠️ ADD YOUR IMAGES HERE
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Main pages
│   ├── data/           # Project & service data
│   └── App.tsx         # Main app
├── index.html          # Entry HTML
└── package.json        # Dependencies
```

## Need Help?

1. Check [SETUP.md](SETUP.md) for detailed instructions
2. Check [FEATURES.md](FEATURES.md) for feature documentation
3. Check console for error messages
4. Ensure all images are added

## Ready to Deploy?

Once everything looks good:

```bash
npm run build
```

Then follow [DEPLOYMENT.md](DEPLOYMENT.md) to deploy to Vercel, Netlify, or other platforms.

---

**That's it!** You're ready to go. Happy building! 🎉

