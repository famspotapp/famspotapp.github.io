# Famspot! — Privacy Policy & Terms of Service

A single static page containing Famspot's Terms of Service and Privacy Policy,
meant to be hosted for free via GitHub Pages so you have a public URL to give
Apple/Google during app store submission.

## How to publish this with GitHub Pages

1. Create a new **public** repo on GitHub (e.g. `famspot-legal`).
2. Push this folder's contents to that repo's `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Add privacy policy and terms"
   git branch -M main
   git remote add origin https://github.com/<your-username>/famspot-legal.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. GitHub will give you a URL like:
   `https://<your-username>.github.io/famspot-legal/`
6. Use that URL as your Privacy Policy link in App Store Connect / Google Play Console.

## Keeping it in sync

The same text also lives in the app at
`Famspot/src/constants/legalContent.js` (shown in-app under Profile →
"Privacy & Terms"). If you edit one, update the other so both stay identical.
