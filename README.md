# Profile Web

A minimal personal profile page built with Next.js, designed to be deployed so anyone on the internet can access it.

## Setup

```bash
cd profile-web
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

The app is configured for static export. The built site is output to `out/`.

```bash
npm run build
# or
npm run export
```

## Deployment

### Option 1: GitHub Pages

**Using the included workflow (recommended):**

1. Push this repo to GitHub (the repo should contain only profile-web).
2. In the repo go to **Settings → Pages**. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Each push to `main` will run the workflow in `.github/workflows/deploy-pages.yml`, build the site, and deploy to GitHub Pages. The site will be available at `https://<username>.github.io/profile-web/`.

   If the first run fails with "Get Pages site failed" or "Not Found", wait a minute after enabling Pages, then go to **Actions** → open the failed run → **Re-run all jobs**. The repo must be **public** for GitHub Free accounts.

**Manual deploy:**

1. **Build the site** (from this directory):
   ```bash
   npm run build
   ```

2. **Deploy the `out/` folder** to GitHub Pages using one of these approaches:

   **A. Manual push to `gh-pages` branch**
   - Copy the contents of `out/` into a branch named `gh-pages` and push it to your repo.
   - In the repo **Settings → Pages**, set source to "Deploy from a branch" and choose the `gh-pages` branch and `/ (root)`.

   **B. GitHub Actions (recommended)**
   - Add a workflow under `.github/workflows/` that runs `npm ci && npm run build` and uses `peaceiris/actions-gh-pages` (or similar) to upload the `out/` directory to the `gh-pages` branch. Trigger on push to `main`.

3. **Base path (project sites only)**  
   If the site is a **project site** (e.g. `https://username.github.io/profile-web/`), set `basePath` in `next.config.mjs`:
   ```js
   const nextConfig = {
     output: 'export',
     basePath: '/profile-web',  // use your repo name
     trailingSlash: true,
   };
   ```
   For a **user/org site** (`https://username.github.io/`), leave `basePath` unset.

### Option 2: Vercel

1. Push this repo (or the `profile-web` folder as its own repo) to GitHub.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **Add New Project**.
3. Import the repository. If the app lives in a subfolder (e.g. `profile-web`), set **Root Directory** to `profile-web`.
4. Leave the build settings as default (Vercel detects Next.js). Optionally turn off serverless and use static export; with `output: 'export'` the build already produces static files.
5. Deploy. Your profile will be available at a public URL (e.g. `https://your-project.vercel.app`).

## Customization

- **Content**: Edit [app/page.tsx](app/page.tsx) to change your name, bio, skills, links, and email.
- **Metadata**: Update `title` and `description` in [app/layout.tsx](app/layout.tsx).
- **Avatar**: Replace the placeholder in the profile section with a real image (e.g. using Next.js `Image` and a file in `public/`).
- **Theme**: Adjust colors in [tailwind.config.ts](tailwind.config.ts) (e.g. `accent`) and [app/globals.css](app/globals.css).
