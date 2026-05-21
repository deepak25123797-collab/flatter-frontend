import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-[#F7F7F5] py-20">
      <div className="container-custom">
        <div className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-[#6B7280]">
          <span className="text-[#F4D000]">☼</span>
          {t('sections.aboutUs')}
        </div>

        <div className="mb-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-[#0F172A]">
              {t('about.title')}
            </h2>
          </div>
        </div>

        <div className="rounded-[32px] bg-[#0F172A] p-8 shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] items-center">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
              <div className="space-y-2 rounded-[28px] bg-[#0F172A]/80 p-6 text-white">
                <p className="text-4xl font-semibold text-[#F4D000]">90k+</p>
                <p className="text-sm uppercase tracking-[0.16em] text-[#CBD5E1]">{t('about.customers')}</p>
              </div>
              <div className="space-y-2 rounded-[28px] bg-[#0F172A]/80 p-6 text-white">
                <p className="text-4xl font-semibold text-[#F4D000]">45k+</p>
                <p className="text-sm uppercase tracking-[0.16em] text-[#CBD5E1]">{t('about.unitsReady')}</p>
              </div>
              <div className="space-y-2 rounded-[28px] bg-[#0F172A]/80 p-6 text-white">
                <p className="text-4xl font-semibold text-[#F4D000]">5k+</p>
                <p className="text-sm uppercase tracking-[0.16em] text-[#CBD5E1]">{t('about.unitsSold')}</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition hover:bg-white/10">
                <FaArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-6">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80"
              alt={t('about.buildingAlt')}
              className="h-[220px] w-full object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
