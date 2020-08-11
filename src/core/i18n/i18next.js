import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          header: {
            title: 'Spotifood',
            signOut: 'Sair',
          },
          login: {
            btnContinue: 'Clique aqui para continuar',
          },
          home: {
            filters: {
              pending: 'Carregando filtros',
              error: 'Não foi possível carregar os filtros',
            }
          },
          filters: {
            locale: {
              name: 'Locale'
            },
            minmax: {
              empty: 'Selecione um item'
            }
          }
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