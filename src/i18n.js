import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {getActiveLanguage} from './util/function'
import common_en from './locales/en/translation.json'
import common_nor from './locales/nor/translation.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: common_en,
      },
      nor: {
        translation: common_nor,
      },
    },
    lng: getActiveLanguage(),
    fallbackLng: getActiveLanguage(),
    interpolation: {
      escapeValue: false,
    },
  })

  export default i18n;