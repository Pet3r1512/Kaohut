import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import vi from "./locales/vi/common.json";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18next
i18n
  .use(Backend) // lazy loads translations from /public/locales
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // Connects React with i18next
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    lng: localStorage.getItem("locale") || "en",
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
