import { createI18nServer } from 'next-international/server'

export const { getI18n, getScopedI18n, getCurrentLocale } = createI18nServer({
  ar: () => import('./ar'),
  en: () => import('./en')
})
