# Deployment Guide

This guide covers deploying the ROFECH website to various hosting platforms.

## Build the Project

First, create a production build:

```bash
npm run build
```

This generates optimized static files in the `dist/` directory.

## Deployment Options

### 1. Vercel (Recommended)

Vercel offers the best experience for React + Vite projects with zero configuration.

#### Via GitHub (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite and configure everything
6. Click "Deploy"

#### Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

**Custom Domain:**
- Go to project settings in Vercel
- Add your custom domain
- Update DNS records as instructed

**Environment Variables:**
- Add in Vercel dashboard under Settings > Environment Variables

---

### 2. Netlify

#### Via Drag & Drop
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist/` folder to the deployment area

#### Via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

#### Via Git Integration
1. Push code to GitHub
2. In Netlify, click "New site from Git"
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

**Redirects for SPA:**
Create `public/_redirects` file:
```
/*    /index.html   200
```

---

### 3. GitHub Pages

#### Setup
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/rofech",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/rofech/',  // Your repo name
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. AWS S3 + CloudFront

#### S3 Setup
1. Create S3 bucket
2. Enable static website hosting
3. Upload `dist/` contents
4. Make bucket public or use CloudFront

#### CloudFront Setup
1. Create CloudFront distribution
2. Point to S3 bucket
3. Set default root object to `index.html`
4. Configure error pages to redirect to `index.html` (for SPA routing)

#### Deploy Script
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

### 5. Firebase Hosting

#### Setup
1. Install Firebase CLI:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

2. Configure `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

3. Deploy:
```bash
npm run build
firebase deploy
```

---

### 6. Docker + Any Cloud Provider

#### Dockerfile
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Build & Run
```bash
docker build -t rofech-website .
docker run -p 80:80 rofech-website
```

---

## Post-Deployment Checklist

### 1. Test All Pages
- [ ] Home page loads correctly
- [ ] Portfolio grid displays projects
- [ ] Individual project pages work
- [ ] About page loads
- [ ] Services page loads
- [ ] Contact form submits (if backend connected)

### 2. Test Navigation
- [ ] All nav links work
- [ ] Back/forward browser buttons work
- [ ] Direct URL access works for all pages
- [ ] 404 redirects to home or error page

### 3. Check Performance
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Test on mobile devices
- [ ] Check image loading
- [ ] Verify lazy loading works

### 4. SEO Verification
- [ ] Meta tags display correctly
- [ ] Open Graph preview works (test on Facebook/Twitter)
- [ ] Sitemap accessible (if generated)
- [ ] Robots.txt allows crawling

### 5. Analytics Setup (Optional)
```html
<!-- Add to index.html before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Custom Domain Setup

### DNS Configuration
Add these records to your DNS provider:

**For root domain (example.com):**
```
A     @     [Provider's IP Address]
```

**For www subdomain:**
```
CNAME www   [Provider's domain]
```

### SSL Certificate
Most hosting providers offer free SSL certificates via Let's Encrypt. Enable HTTPS in your hosting dashboard.

---

## Environment Variables

If you need environment variables:

1. Create `.env.production`:
```
VITE_API_URL=https://api.yourdomain.com
VITE_CONTACT_EMAIL=info@rofech.com
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Add to hosting provider's environment variables section

---

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Troubleshooting

### Routes Return 404
**Problem:** Direct URLs like `/portfolio` return 404

**Solution:** Configure server to redirect all routes to `index.html`

### Images Not Loading
**Problem:** Images work locally but not in production

**Solution:** 
- Ensure images are in `public/` directory
- Check image paths don't start with `/` if using subdirectory deployment
- Verify base URL is set correctly in `vite.config.ts`

### Build Fails
**Problem:** `npm run build` fails with TypeScript errors

**Solution:**
- Fix TypeScript errors shown in output
- Run `npm run build` locally first
- Check all imports are correct

### CSS Not Applied
**Problem:** Tailwind styles missing in production

**Solution:**
- Verify `postcss.config.js` is present
- Check `index.css` has Tailwind directives
- Clear build cache and rebuild

---

## Performance Optimization

### Image Optimization
1. Use WebP format with JPG fallback
2. Compress images (TinyPNG, ImageOptim)
3. Use appropriate sizes (don't use 4K images for thumbnails)

### Code Splitting
Already implemented via:
- Route-based splitting with `React.lazy()`
- Dynamic imports for heavy components

### CDN Configuration
If using CDN:
1. Set appropriate cache headers
2. Enable compression (gzip/brotli)
3. Configure browser caching

---

## Monitoring

### Recommended Tools
- **Google Analytics**: Track visitors
- **Sentry**: Error tracking
- **Vercel Analytics**: Performance monitoring
- **Google Search Console**: SEO monitoring

---

## Support

If you encounter issues:
1. Check hosting provider's documentation
2. Review build logs for errors
3. Test production build locally with `npm run preview`
4. Verify all environment variables are set

Happy deploying! 🚀

