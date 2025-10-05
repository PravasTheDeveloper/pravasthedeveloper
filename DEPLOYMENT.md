# Deployment Guide

This Next.js portfolio can be deployed to various platforms. Here are the most popular options:

## 🚀 Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional):
   - Add your custom domain in Vercel dashboard
   - Update DNS records as instructed

## 🌐 Netlify

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**:
   - Connect GitHub repository
   - Configure build settings
   - Deploy automatically

## 🐳 Docker Deployment

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run**:
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

## 📱 Performance Tips

- Images are optimized with Next.js Image component
- Static generation for better SEO
- Tailwind CSS purged for smaller bundle size
- TypeScript for better development experience

## 🔧 Environment Variables

If you add any API integrations, create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add other environment variables as needed
```

## 📊 Analytics

To add analytics, you can integrate:
- Google Analytics
- Vercel Analytics
- Plausible Analytics

Add the tracking code to `app/layout.tsx`.
