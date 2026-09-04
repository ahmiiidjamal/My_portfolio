'use client'
import { useChangeLocale, useCurrentLocale, useI18n } from '../../locales/client'
import LanguageIcon from '@mui/icons-material/Language';
export default function LanguageButton() {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()
  const t = useI18n()

  return (
    <button 
      onClick={() => changeLocale(currentLocale === 'ar' ? 'en' : 'ar')}
      style={{ padding: '8px 16px', cursor: 'pointer', borderRadius: '5px' }}
    >
      
      {t('change_lang')}
            <LanguageIcon/>

    </button>
  )
}
