import { useTranslation } from 'react-i18next';

const logoUrl = new URL('../assets/logo-full.svg', import.meta.url).href;

interface FooterProps {
  scrollToTop: () => void;
}

export default function Footer({ scrollToTop }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#05060C] pt-24 pb-10 text-white">
      <div className="container-custom">
        <div className="relative overflow-visible rounded-[40px] bg-[#05060C] px-8 pb-10 pt-16 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={scrollToTop}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F4D000] text-[#0F172A] shadow-[0_20px_40px_rgba(244,208,0,0.22)] transition hover:bg-[#e6c700]"
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-start">
            <div>
              <h2 className="text-5xl font-semibold leading-tight tracking-[-0.03em]">
                Have something to
                <span className="block">talk about ?</span>
              </h2>
            </div>
            <div className="flex justify-start lg:justify-end">
              <button className="inline-flex h-11 min-w-[180px] items-center justify-center rounded-full border border-white/40 bg-transparent px-7 text-sm font-semibold text-white transition hover:bg-white/10">
                {t('nav.getStarted')}
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.9fr_1fr] items-end">
            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex rounded-full border border-white/40 px-5 py-2 text-sm text-white transition hover:bg-white/10">
                {t('footer.about')}
              </a>
              <a href="#" className="inline-flex rounded-full border border-white/40 px-5 py-2 text-sm text-white transition hover:bg-white/10">
                {t('footer.solutions')}
              </a>
              <a href="#" className="inline-flex rounded-full border border-white/40 px-5 py-2 text-sm text-white transition hover:bg-white/10">
                {t('footer.pricing')}
              </a>
              <a href="#" className="inline-flex rounded-full border border-white/40 px-5 py-2 text-sm text-white transition hover:bg-white/10">
                {t('footer.resources')}
              </a>
            </div>

            <div className="flex flex-col items-start gap-3 lg:items-end">
              <div className="flex items-center gap-3">
                <img src={logoUrl} alt="flatter logo" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-[#94A3B8]">© Copyright 2021, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
