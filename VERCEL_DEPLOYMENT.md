# 🚀 Vercel Deployment Guide for Slate Protocol

This guide will help you deploy the Slate Protocol interactive whitepaper to Vercel for production use.

## 📋 Prerequisites

- [Vercel Account](https://vercel.com/signup) (free tier available)
- [Vercel CLI](https://vercel.com/cli) installed globally
- GitHub repository access
- Node.js 18+ installed locally

## 🛠️ Setup Instructions

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate with your Vercel account.

### 3. Navigate to Whitepaper Directory

```bash
cd slate-whitepaper
```

### 4. Configure Environment Variables

The project includes environment configuration files:
- `.env.example` - Template with all available variables
- `.env.local` - Local development configuration

For production deployment, you'll set these in the Vercel dashboard.

### 5. Deploy to Vercel

#### Option A: Automatic Deployment (Recommended)

1. **Connect GitHub Repository**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository: `Anteneh-T-Tessema/slateprotocol`
   - Select the `slate-whitepaper` directory as the root

2. **Configure Build Settings**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `slate-whitepaper`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install`

3. **Set Environment Variables**:
   ```
   NEXT_PUBLIC_APP_NAME=Slate Protocol
   NEXT_PUBLIC_APP_VERSION=2.0
   NEXT_PUBLIC_GITHUB_URL=https://github.com/Anteneh-T-Tessema/slateprotocol
   NEXT_PUBLIC_DISCORD_URL=https://discord.gg/slate-protocol
   NEXT_PUBLIC_ENABLE_LIVE_STATS=true
   NEXT_PUBLIC_ENABLE_INTERACTIVE_CHARTS=true
   ```

4. **Deploy**: Click "Deploy" and wait for the build to complete.

#### Option B: CLI Deployment

```bash
# From the slate-whitepaper directory
vercel

# Follow the prompts:
# ? Set up and deploy "~/slateprotocol/slate-whitepaper"? [Y/n] y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] n
# ? What's your project's name? slate-protocol
# ? In which directory is your code located? ./
```

For production deployment:
```bash
vercel --prod
```

## 🔧 Configuration Details

### Vercel Configuration (`vercel.json`)

The project includes a comprehensive `vercel.json` configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1", "sfo1", "lhr1"],
  "headers": [
    // Security headers
  ],
  "rewrites": [
    // URL rewrites
  ],
  "redirects": [
    // Convenient redirects
  ]
}
```

### Environment Variables

Set these in your Vercel project settings:

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_APP_NAME` | `Slate Protocol` | Application name |
| `NEXT_PUBLIC_APP_VERSION` | `2.0` | Version number |
| `NEXT_PUBLIC_GITHUB_URL` | `https://github.com/Anteneh-T-Tessema/slateprotocol` | GitHub repository |
| `NEXT_PUBLIC_DISCORD_URL` | `https://discord.gg/slate-protocol` | Discord invite |
| `NEXT_PUBLIC_ENABLE_LIVE_STATS` | `true` | Enable live statistics |
| `NEXT_PUBLIC_ENABLE_INTERACTIVE_CHARTS` | `true` | Enable interactive charts |

### Custom Domain Setup (Optional)

1. **Purchase Domain**: Buy a domain (e.g., `slate-protocol.org`)
2. **Add to Vercel**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed
3. **SSL Certificate**: Vercel automatically provisions SSL certificates

## 🌐 Deployment URLs

After deployment, your whitepaper will be available at:

- **Vercel URL**: `https://slate-protocol.vercel.app`
- **Custom Domain**: `https://slate-protocol.org` (if configured)
- **Preview URLs**: Generated for each pull request

### Useful Redirects

The configuration includes helpful redirects:
- `/github` → GitHub repository
- `/discord` → Discord server
- `/whitepaper` → Main page
- `/docs` → GitHub README

## 📊 Performance Optimization

### Automatic Optimizations

Vercel automatically provides:
- **Global CDN**: Content delivered from edge locations worldwide
- **Image Optimization**: Automatic WebP/AVIF conversion and resizing
- **Code Splitting**: Automatic JavaScript bundle optimization
- **Compression**: Gzip/Brotli compression for all assets

### Manual Optimizations

The project includes:
- **Next.js Optimization**: Configured in `next.config.ts`
- **Bundle Analysis**: Run `npm run build:analyze`
- **Performance Monitoring**: Built-in Vercel analytics

## 🔍 Monitoring & Analytics

### Vercel Analytics

Enable in project settings:
1. Go to Project → Analytics
2. Enable Web Analytics
3. View performance metrics and user insights

### Custom Analytics (Optional)

Add Google Analytics or other services:
```bash
# Set environment variable
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🚀 Continuous Deployment

### Automatic Deployments

Once connected to GitHub:
- **Production**: Deploys automatically on pushes to `main` branch
- **Preview**: Creates preview deployments for pull requests
- **Branch Deployments**: Deploy specific branches for testing

### Manual Deployments

```bash
# Deploy current branch
vercel

# Deploy to production
vercel --prod

# Deploy with custom alias
vercel --prod --alias slate-protocol.org
```

## 🛡️ Security Features

### Automatic Security Headers

The configuration includes security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

### HTTPS Enforcement

- Automatic HTTPS redirect
- HTTP Strict Transport Security (HSTS)
- SSL certificate auto-renewal

## 🔧 Troubleshooting

### Common Issues

1. **Build Failures**:
   ```bash
   # Check build locally
   npm run build
   
   # Check TypeScript errors
   npm run type-check
   ```

2. **Environment Variables**:
   - Ensure all `NEXT_PUBLIC_` variables are set in Vercel dashboard
   - Check variable names match exactly (case-sensitive)

3. **Import Errors**:
   - Verify all dependencies are in `package.json`
   - Check import paths are correct

### Debug Commands

```bash
# Local development
npm run dev

# Production build test
npm run build && npm run start

# Lint check
npm run lint

# Clean build artifacts
npm run clean
```

## 📞 Support & Resources

- **Vercel Documentation**: [https://vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Project Repository**: [https://github.com/Anteneh-T-Tessema/slateprotocol](https://github.com/Anteneh-T-Tessema/slateprotocol)

## 🎉 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test interactive components (charts, animations)
- [ ] Check mobile responsiveness
- [ ] Validate all external links work
- [ ] Test performance with Lighthouse
- [ ] Set up custom domain (optional)
- [ ] Enable analytics (optional)
- [ ] Share deployment URL with team

---

**🚀 Your Slate Protocol whitepaper is now live and ready to impress the blockchain community!**