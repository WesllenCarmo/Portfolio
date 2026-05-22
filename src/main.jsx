import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import global_en from './translations/en/global.json';
import global_ptbr from './translations/ptbr/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: true },
  lng: 'ptbr',
  resources: {
    ptbr: {
      global: global_ptbr
    },
    en: {
      global: global_en
    }
  }
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>,
);
