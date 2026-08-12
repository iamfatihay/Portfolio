# Fatih Ay — Portfolio

Personal portfolio for selected production work, AI products and web projects.

Live site: [portfolio-fay-react.netlify.app](https://portfolio-fay-react.netlify.app/)

## Stack

- React 18 and Create React App
- EmailJS contact form
- AOS for scroll reveals, react-icons for inline SVG icons
- Netlify deployment

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
