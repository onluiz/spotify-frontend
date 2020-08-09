import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          header: {
            title: 'Spotify Frontend',
            signOut: 'Sign Out',
          },
          login: {
            btnContinue: 'Click here to continue',
          },
          "Welcome to React": "Welcome to React and react-i18next"
        }
      }
    },
    lng: "pt",
    fallbackLng: "pt",

    interpolation: {
      escapeValue: false
    }
  })

export default i18n