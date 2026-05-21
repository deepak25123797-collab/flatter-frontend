import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const features = [
  { id: 1, titleKey: 'features.cards.1.title', subtitleKey: 'features.cards.1.subtitle' },
  { id: 2, titleKey: 'features.cards.2.title', subtitleKey: 'features.cards.2.subtitle' },
  { id: 3, titleKey: 'features.cards.3.title', subtitleKey: 'features.cards.3.subtitle' },
];

export default function FeaturesSlider() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((s) => (s + 1) % features.length), 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setActive((s) => (s - 1 + features.length) % features.length);
  const next = () => setActive((s) => (s + 1) % features.length);

  return (
    <section className="bg-[#F7F7F5] py-20">
      <div className="container-custom">
        <div className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-[#6B7280]">
          <span className="text-[#F4D000]">★</span>
          {t('features.tag')}
        </div>

        <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-[#0F172A]">{t('features.title')}</h2>
          </div>
          <p className="text-sm leading-7 text-[#475569]">{t('features.description')}</p>
        </div>

        <div className="rounded-[32px] bg-[#0F172A] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] items-center">
            <div className="flex items-center justify-center">
              <button onClick={prev} className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition hover:bg-white/10" aria-label="previous">
                <FaArrowLeft size={18} />
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, idx) => (
                <div key={feature.id} className={`rounded-[28px] border border-white/10 bg-[#0F172A] p-8 text-white transition-transform duration-300 ${idx === active ? 'scale-100' : 'scale-95 opacity-60'}`}>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-[#F4D000] text-lg font-semibold mb-6">{feature.id}</div>
                  <h3 className="text-2xl font-semibold leading-tight mb-4">{t(feature.titleKey)}</h3>
                  <p className="text-sm text-[#94A3B8]">{t(feature.subtitleKey)}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <button onClick={next} className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition hover:bg-white/10" aria-label="next">
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
