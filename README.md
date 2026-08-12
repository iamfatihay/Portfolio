# Fatih Ay — Portfolio

Personal portfolio for selected production work, AI products and web projects.

Live site: [portfolio-fay-react.netlify.app](https://portfolio-fay-react.netlify.app/)

## Stack

- React 18 and Create React App
- EmailJS contact form
- AOS for scroll reveals, react-icons for inline SVG icons
- Self-hosted Poppins via @fontsource
- Netlify deployment

## Languages

The site is published in English at `/` and in German at `/de/`. Both are the
same bundle: `src/i18n/` holds the two dictionaries and the context that picks
one, and the language comes from the URL rather than from React state so each
version has its own indexable address.

`npm run build` runs `scripts/build-locales.js` after CRA, which writes
`build/de/index.html` with its own `lang`, title, description, canonical, Open
Graph locale and JSON-LD, and adds the reciprocal `hreflang` set to both pages.
A crawler and every link preview read that HTML before any script runs, so the
head has to be correct in the file itself.

When adding copy, add the key to `src/i18n/en.js` **and** `src/i18n/de.js` — a
test compares the two shapes and fails if one is missing a key.

## Local development

```bash
npm install
cp .env.example .env
npm start
```

The site is available at `http://localhost:3000`.

## Contact form

Add the following values to `.env` to enable EmailJS:

```dotenv
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Without those values, the form stays visible and directs visitors to email or WhatsApp instead.

## Verification

```bash
npm test -- --watchAll=false
npm run build
```

The production build is published from `build/` by Netlify.
