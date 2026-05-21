import { useState } from 'react';
import { FaArrowUp, FaSun } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function MortgageCalculator() {
  const { t } = useTranslation();
  const [locations, setLocations] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [loanYears, setLoanYears] = useState(15);

  const sliderPosition = ((loanYears - 5) / 25) * 100;

  const handleLocationChange = (field: keyof typeof locations, value: string) => {
    setLocations((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="bg-[#F7F7F5] py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.32em] text-[#6B7280] mb-3">{t('features.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
            {t('sections.estimateMortgage')}
          </h2>
        </div>

        <div className="rounded-[40px] bg-[#0F172A] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-6 text-white">
              <div>
                <label className="block text-xs uppercase tracking-[0.5em] text-[#94A3B8] mb-3">{t('mortgage.location')}</label>
                <input
                  value={locations.first}
                  onChange={(e) => handleLocationChange('first', e.target.value)}
                  type="text"
                  placeholder={t('search.placeholder')}
                  className="w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white placeholder:text-[#475569] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.5em] text-[#94A3B8] mb-3">{t('mortgage.location')}</label>
                <input
                  value={locations.second}
                  onChange={(e) => handleLocationChange('second', e.target.value)}
                  type="text"
                  placeholder={t('search.placeholder')}
                  className="w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white placeholder:text-[#475569] outline-none"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-xs uppercase tracking-[0.5em] text-[#94A3B8] mb-3">{t('mortgage.location')}</label>
                  <input
                    value={locations.third}
                    onChange={(e) => handleLocationChange('third', e.target.value)}
                    type="text"
                    placeholder={t('search.placeholder')}
                    className="w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white placeholder:text-[#475569] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.5em] text-[#94A3B8] mb-3">{t('mortgage.location')}</label>
                  <input
                    value={locations.fourth}
                    onChange={(e) => handleLocationChange('fourth', e.target.value)}
                    type="text"
                    placeholder={t('search.placeholder')}
                    className="w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white placeholder:text-[#475569] outline-none"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.35em] text-[#94A3B8]">
                  <span>{t('mortgage.loanLength')}</span>
                  <span>{loanYears} {t('mortgage.years')}</span>
                </div>
                <div className="relative pt-4">
                  <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/15"></div>
                  <input
                    type="range"
                    min={5}
                    max={30}
                    step={1}
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                    className="custom-range relative z-10 h-2 w-full appearance-none bg-transparent accent-[#F4D000]"
                  />
                  <div
                    className="pointer-events-none absolute -top-8 left-0 inline-flex items-center justify-center rounded-full bg-[#F4D000] px-3 py-1 text-[11px] font-semibold text-[#0F172A] shadow-[0_10px_20px_rgba(244,208,0,0.25)]"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                  >
                    {loanYears} {t('mortgage.years')}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-[32px] bg-[#FCFBF8] p-10 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#94A3B8]">
                  <FaSun className="text-[#94A3B8]" />
                  <span>{t('mortgage.monthlyPayment')}</span>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#0F172A]/20 text-[#0F172A]">
                  <FaArrowUp size={22} />
                </div>
              </div>
              <div className="mt-6">
                <p className="text-[3.75rem] leading-tight font-semibold tracking-[-0.04em] text-[#0F172A]">$17,8120.20</p>
                <p className="mt-3 text-sm text-[#475569]">{t('mortgage.estimatedPayment')}</p>
              </div>
              <div className="mt-8 rounded-[30px] bg-[#F4F7FF] p-5">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                  <span className="text-sm text-[#475569]">{t('mortgage.totalLoan')}</span>
                  <span className="text-sm text-[#94A3B8]">{t('search.placeholder')}</span>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm text-[#475569]">{t('mortgage.totalLoan')}</span>
                  <span className="text-sm text-[#94A3B8]">{t('search.placeholder')}</span>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-[11px] leading-5 text-[#64748B]">{t('mortgage.disclaimer1')}</p>
                <p className="text-[11px] leading-5 text-[#64748B]">{t('mortgage.disclaimer2')}</p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button className="w-full rounded-full border border-[#0F172A] bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0F172A] transition hover:bg-[#F7F7F7] sm:w-auto">
                  {t('mortgage.share')}
                </button>
                <button className="w-full rounded-full bg-[#0F172A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#111827] sm:w-auto">
                  {t('mortgage.getInTouch')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
