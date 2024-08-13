import 'i18next'
import defaultLocale from 'resources/locales/pt_BR.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof defaultLocale
    }
  }
}
