"use client";
import LanguageButton from './languageButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
// استيراد دالة العميل المتوافقة تماماً مع الـ useState والـ use client
import { useI18n } from '@/app/locales/client';

export default function Nav() {
  // استدعاء دالة الترجمة بشكل فوري مباشر بدون await
  const t = useI18n();
  
  // متغير بوليان تفاعلي نقي للتحكم في المنيو
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#fbf9f8]/80 backdrop-blur-xl border-b border-[#c1c6d7]/30">
        <div className="flex justify-between items-center h-16 px-5 md:px-20 max-w-[1200px] mx-auto">
          <a href="#hero" className="text-[24px] font-bold text-[#1b1c1c] md:text-[32px]">{t('nav.brand')}</a>

          {/* القائمة الثابتة للشاشات الكبيرة */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-[#0058c3] font-bold border-b-2 border-[#0058c3] pb-1">{t('nav.about')}</a>
            <a href="#skills" className="text-[#414754] hover:text-[#0058c3] transition-colors duration-300 relative group">
              {t('nav.skills')}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#0058c3] transition-all group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#projects" className="text-[#414754] hover:text-[#0058c3] transition-colors duration-300 relative group">
              {t('nav.projects')}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#0058c3] transition-all group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#contact" className="text-[#414754] hover:text-[#0058c3] transition-colors duration-300 relative group">
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#0058c3] transition-all group-hover:w-full group-hover:left-0"></span>
            </a>
          </nav>

          <div className="flex items-center gap-4 text-[#0058c3]">
            <LanguageButton />
            {/* ربط الزر بحدث onClick لتغيير حالة المنيو بسلاسة */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="menu" 
              className="md:hidden hover:text-[#0070f3] transition-colors"
            >
              <span className="material-symbols-outlined"><MenuIcon /></span>
            </button>
          </div>
        </div>

        {/* قائمة الجوال التفاعلية - تظهر وتختفي برمجياً بدقة */}
        {isOpen && (
          <nav className="flex md:hidden flex-col gap-4 p-5 bg-[#fbf9f8] border-t border-[#c1c6d7]/30 absolute w-full left-0 transition-all duration-300">
            <a href="#about" className="text-[#0058c3] font-bold border-b-2 border-[#0058c3] pb-1 w-fit" onClick={() => setIsOpen(!isOpen)}>{t('nav.about')}</a>
            <a href="#skills" className="text-[#414754] hover:text-[#0058c3] transition-colors duration-300 w-fit" onClick={() => setIsOpen(!isOpen)}>{t('nav.skills')}</a>
            <a href="#projects" className="text-[#414754] hover:text-[#0058c3] transition-colors duration-300 w-fit" onClick={() => setIsOpen(!isOpen)}>{t('nav.skills')}</a>
            <a href="#contact" className="text-[#414754] hover:text-[#0058c3] transition-colors duration-300 w-fit" onClick={() => setIsOpen(!isOpen)}>{t('nav.contact')}</a>
          </nav>
        )}
      </header>
    </>
  );
}
