# 🚀 Vercel Deployment Guide for Electronics Shop

## Prerequisites
- ✅ GitHub account
- ✅ Vercel account (free at vercel.com)
- ✅ Your project is ready at `C:\Users\TRAINER 1\Desktop\ELECTRONICS SHOP\electronics-shop`

## Step 1: Prepare Your Project for Deployment

### 1.1 Update Environment Variables
Create a `.env.local` file for production environment variables:

```bash
# In electronics-shop/.env.local
DATABASE_URL="file:./dev.db"
```

### 1.2 Update Package.json Scripts (Optional)
Ensure your `package.json` has the correct scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

### 1.3 Create .gitignore (if not exists)
```bash
# .gitignore
node_modules/
.next/
.env.local
.env
dev.db
*.log
.DS_Store
```

## Step 2: Upload to GitHub

### 2.1 Initialize Git Repository
```bash
cd C:\Users\TRAINER 1\Desktop\ELECTRONICS SHOP\electronics-shop
git init
git add .
git commit -m "Initial commit: Electronics Shop with home page"
```

### 2.2 Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New Repository"
3. Name it: `electronics-shop`
4. Make it Public or Private
5. Don't initialize with README (we already have code)

### 2.3 Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/electronics-shop.git
git push -u origin main
```

## Step 3: Deploy to Vercel

### 3.1 Connect Vercel to GitHub
1. Go to [Vercel.com](https://vercel.com)
2. Sign up/Sign in with your GitHub account
3. Click "New Project"

### 3.2 Import Your Repository
1. Select your `electronics-shop` repository from GitHub
2. Click "Import"

### 3.3 Configure Project Settings
**Framework Preset:** Next.js
**Root Directory:** Leave as default (./)
**Build Command:** Leave as default (`npm run build`)
**Output Directory:** Leave as default (./.next)

### 3.4 Environment Variables
In Vercel dashboard, add these environment variables:

```
DATABASE_URL=file:./dev.db
```

### 3.5 Deploy
1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Your site will be live at: `https://your-project-name.vercel.app`

## Step 4: Database Considerations

### Option A: Keep SQLite (Simple)
For development/prototyping, SQLite works fine:
- Your `dev.db` file will be included in deployment
- All data will be persistent

### Option B: Upgrade to PostgreSQL (Recommended for Production)
For better performance and scalability:

1. **Create PostgreSQL Database:**
   - Use [Neon.tech](https://neon.tech) (free)
   - Or [Supabase](https://supabase.com) (free tier)
   - Or [PlanetScale](https://planetscale.com) (free tier)

2. **Update Schema:**
```prisma
// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

3. **Update Environment Variable in Vercel:**
```
DATABASE_URL=postgresql://username:password@host:port/database
```

4. **Run Migration:**
```bash
npx prisma migrate deploy
```

## Step 5: Custom Domain (Optional)

### 5.1 Add Custom Domain in Vercel
1. Go to your project dashboard
2. Click "Domains" tab
3. Add your custom domain (e.g., `electroshop.com`)
4. Follow DNS configuration instructions

### 5.2 Update DNS Records
Add these records to your domain provider:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

## Step 6: Post-Deployment Checklist

- ✅ [ ] Test all pages load correctly
- ✅ [ ] Verify API endpoints work
- ✅ [ ] Check responsive design on mobile
- ✅ [ ] Test form submissions (if any)
- ✅ [ ] Verify environment variables are set
- ✅ [ ] Check for any build errors in Vercel logs

## Troubleshooting Common Issues

### Build Fails
- Check Vercel build logs for specific errors
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation passes locally

### Database Connection Issues
- Confirm `DATABASE_URL` is set in Vercel environment variables
- For SQLite, ensure `dev.db` is included in deployment
- For PostgreSQL, verify connection string is correct

### API Routes Not Working
- Check that API routes are in the correct location (`app/api/`)
- Verify no server-side errors in Vercel function logs

## Production Optimizations

### 1. Add Analytics (Optional)
```bash
npm install @vercel/analytics
```

### 2. Enable Image Optimization
Your Next.js project already includes automatic image optimization.

### 3. Set up Automatic Deployments
Vercel automatically deploys when you push to your main branch.

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Prisma Deployment Guide](https://www.prisma.io/docs/guides/deployment)

---

**🎉 Congratulations!** Your Electronics Shop is now live on Vercel!

**Live URL:** `https://your-project-name.vercel.app`

Remember to replace `your-project-name` with your actual Vercel project name.