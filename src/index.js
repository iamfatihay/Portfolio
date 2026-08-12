import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CopyProvider, detectLocale } from './i18n';

/*
 * The URL decides the language before React renders anything, so the first
 * paint is already in the right language — see src/i18n/index.js.
 */
const locale = detectLocale();
document.documentElement.lang = locale;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CopyProvider locale={locale}>
      <App />
    </CopyProvider>
  </React.StrictMode>
);
