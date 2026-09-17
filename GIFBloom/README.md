# GIFBloom App Store Pages

This folder contains the GIFBloom marketing page, support page, and privacy policy for GitHub Pages.

## Files

- `index.html`: marketing page
- `support.html`: support and FAQs
- `privacy-policy.html`: privacy policy
- `site.js`: localized page copy and client-side rendering
- `site.css`: shared responsive styling
- `appicon.png`: app icon used on the marketing page

The language selector covers the same 17 languages as the iOS app: English, Simplified Chinese, Traditional Chinese, German, Spanish, French, Italian, Japanese, Korean, Russian, Brazilian Portuguese, Arabic, Hindi, Indonesian, Thai, Turkish, and Vietnamese. The app name remains `GIFBloom` in every language. A selected language is carried in the page URL as `?lang=<code>`; the site does not store a cookie or use analytics.

## Preview

From the `App-Store-pages` repository root, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/GIFBloom/`.

## Publish

GitHub Pages is configured to publish the repository root from the `main` branch. Add the changed files to a commit and push to `main`; GitHub Pages publishes the static site automatically. No separate build step is required.

## URLs after publishing

- Marketing: `https://13098806890.github.io/App-Store-pages/GIFBloom/`
- Privacy: `https://13098806890.github.io/App-Store-pages/GIFBloom/privacy-policy.html`
- Support: `https://13098806890.github.io/App-Store-pages/GIFBloom/support.html`
