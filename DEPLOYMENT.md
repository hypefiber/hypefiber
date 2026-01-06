## Deployment Instructions

Your website is configured to automatically deploy to GitHub Pages using GitHub Actions.

### What's Been Set Up:

✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Automatically builds and deploys on every push to `main` branch
   - Uses Node.js 20 and npm for building
   - Deploys to GitHub Pages

✅ **Custom Domain Configuration** (`public/CNAME`)
   - Configured for: hypefiber.com

✅ **Vite Build Configuration**
   - Optimized for production deployment
   - Assets properly configured

### Next Steps to Complete Deployment:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Configure GitHub Pages Settings:**
   - Go to your repository: https://github.com/hypefiber/hypefiber
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - The custom domain `hypefiber.com` will be automatically configured from the CNAME file

3. **DNS Configuration:**
   Configure your domain's DNS records at your domain registrar:
   
   **For apex domain (hypefiber.com):**
   - Type: A
   - Host: @
   - Value: 185.199.108.153
   - Value: 185.199.109.153
   - Value: 185.199.110.153
   - Value: 185.199.111.153
   
   **For www subdomain:**
   - Type: CNAME
   - Host: www
   - Value: hypefiber.github.io

4. **Wait for DNS Propagation:**
   - DNS changes can take up to 24-48 hours to propagate
   - Check status at: https://dnschecker.org

5. **Enable HTTPS (Recommended):**
   - After DNS is configured, go to repository Settings → Pages
   - Check "Enforce HTTPS"

### Automatic Updates:

Once set up, your website will automatically update whenever you push changes to the `main` branch. The GitHub Action will:
1. Checkout your code
2. Install dependencies
3. Build the production version
4. Deploy to GitHub Pages

### Verify Deployment:

After pushing, you can monitor the deployment:
- Go to your repository → **Actions** tab
- Watch the "Deploy to GitHub Pages" workflow
- Once complete, visit https://hypefiber.com

### Local Testing Before Deploy:

Test the production build locally:
```bash
npm run build
npm run preview
```

---

**Need Help?**
- GitHub Pages Docs: https://docs.github.com/en/pages
- Custom Domain Setup: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
