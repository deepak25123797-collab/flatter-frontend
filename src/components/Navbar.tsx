import { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const logoUrl = new URL('../assets/logo-full.svg', import.meta.url).href;

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'es', name: 'ES', flag: '🇪🇸' },
    { code: 'fr', name: 'FR', flag: '🇫🇷' },
  ];

  const getLanguageFlag = (lng: string) => {
    return languages.find((language) => language.code === lng)?.flag ?? '🌐';
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
    setMobileOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#090B11]/95 backdrop-blur-xl text-white">
      <div className="container-custom mx-auto flex max-w-[1200px] items-center justify-between gap-6 rounded-[32px] border border-white/10 bg-[#090B11]/95 px-5 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl text-white">
        <a href="#home" className="flex items-center gap-3">
          <img src={logoUrl} alt="flatter logo" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="transition hover:text-[#F4D000]">{t('nav.home')}</a>
          <a href="#about" className="transition hover:text-[#F4D000]">{t('nav.aboutUs')}</a>
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 transition hover:text-[#F4D000]">
              {t('nav.partners')}
              <FaChevronDown size={12} />
            </div>
          </div>
          <a href="#career" className="transition hover:text-[#F4D000]">{t('nav.career')}</a>
          <a href="#faq" className="transition hover:text-[#F4D000]">{t('nav.faq')}</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
            >
              <span>{getLanguageFlag(i18n.language)}</span>
              <span>{i18n.language.toUpperCase()}</span>
              <FaChevronDown size={12} />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 min-w-[120px] rounded-2xl border border-white/10 bg-[#12161f] shadow-xl">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="block w-full px-4 py-2 text-left text-sm text-white transition hover:bg-white/10"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>

          <button className="hidden rounded-full border border-[#F4D000] bg-transparent px-6 py-2 text-sm font-semibold transition hover:bg-[#F4D000]/10 md:inline-flex">
            {t('nav.getStarted')}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#090B11]/95 px-5 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-5 text-sm font-medium">
            <a href="#home" onClick={closeMobileMenu} className="transition hover:text-[#F4D000]">{t('nav.home')}</a>
            <a href="#about" onClick={closeMobileMenu} className="transition hover:text-[#F4D000]">{t('nav.aboutUs')}</a>
            <button className="flex items-center gap-1 transition hover:text-[#F4D000]" type="button">
              {t('nav.partners')}
              <FaChevronDown size={12} />
            </button>
            <a href="#career" onClick={closeMobileMenu} className="transition hover:text-[#F4D000]">{t('nav.career')}</a>
            <a href="#faq" onClick={closeMobileMenu} className="transition hover:text-[#F4D000]">{t('nav.faq')}</a>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setLangOpen((prev) => !prev)}
              className="inline-flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <span className="flex items-center gap-2">
                <span>{getLanguageFlag(i18n.language)}</span>
                {i18n.language.toUpperCase()}
              </span>
              <FaChevronDown size={12} />
            </button>

            {langOpen && (
              <div className="space-y-2 rounded-2xl border border-white/10 bg-[#12161f] p-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="flex w-full items-center gap-2 rounded-2xl px-4 py-3 text-left text-sm text-white transition hover:bg-white/10"
                  >
                    <span>{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            )}

            <button className="rounded-full border border-[#F4D000] bg-transparent px-6 py-3 text-sm font-semibold transition hover:bg-[#F4D000]/10">
              {t('nav.getStarted')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
