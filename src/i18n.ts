import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import vi from "./locales/vi/common.json";

// Initialize i18next
i18n
  .use(initReactI18next) // Connects React with i18next
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if the selected language is not available
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
