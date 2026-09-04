'use client'
import { createI18nClient } from 'next-international/client'

export const { useI18n, useCurrentLocale, useChangeLocale, I18nProviderClient } = createI18nClient({
  ar: () => import('./ar'),
  en: () => import('./en')
})
