import { useState } from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const locations = [
  { name: 'Kotagede Yogyakarta', address: 'Jln Kotagede, Yogyakarta' },
  { name: 'Makam Imogiri Jogja', address: 'Jln Makam, Yogyakarta' },
  { name: 'Condongcatur Sleman', address: 'Jln Condongcatur, Sleman' },
];

export default function Hero() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchClick = () => {
    if (searchQuery.trim().length === 0) return;

    const match = filteredLocations[0];
    if (match) {
      setSearchQuery(match.name);
      setSelectedLocation(match.name);
    } else {
      setSelectedLocation(searchQuery.trim());
    }
  };

  return (
    <section className="bg-[#F7F7F5] text-[#0F172A]">
      <div className="container-custom py-20 lg:py-24">
        <div className="grid gap-10 xl:grid-cols-[1fr_0.95fr] items-start">
          <div>
            <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-8 items-start">
              <div className="flex flex-col gap-10 text-sm uppercase tracking-[0.35em] text-[#6B7280]">
                <span>01</span>
                <span>02</span>
                <span>03</span>
              </div>
              <div className="space-y-6">
                <div className="space-y-5">
                  <h1 className="text-4xl sm:text-[3.75rem] md:text-[4.5rem] font-semibold leading-[0.95] tracking-[-0.03em]">
                    {t('hero.title1')}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4">
                    <h1 className="text-4xl sm:text-[3.75rem] md:text-[4.5rem] font-semibold leading-[0.95] tracking-[-0.03em]">
                      {t('hero.title2')}
                    </h1>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-full border-4 border-white bg-[#0F172A] p-1 shadow-[0_8px_20px_rgba(15,23,42,0.12)] transition hover:opacity-95"
                      aria-label={t('hero.buttonAlt')}
                    >
                      <div className="flex items-center gap-2 rounded-full bg-[#0F172A] px-1 py-0.5">
                        <img
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80"
                          alt={t('hero.buttonAlt')}
                          className="h-10 w-10 rounded-full border-2 border-[#0F172A] object-cover"
                        />
                        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-xl">🚧</div>
                      </div>
                    </button>
                    <h1 className="text-4xl sm:text-[3.75rem] md:text-[4.5rem] font-semibold leading-[0.95] tracking-[-0.03em]">
                      {t('hero.title3')}
                    </h1>
                  </div>
                  <h1 className="text-4xl sm:text-[3.75rem] md:text-[4.5rem] font-semibold leading-[0.95] tracking-[-0.03em]">
                    {t('hero.title4')}
                  </h1>
                </div>

                <p className="max-w-xl text-base leading-8 text-[#475569]">
                  {t('hero.description')}
                </p>

                <button className="mt-6 inline-flex items-center justify-center rounded-full border border-[#0F172A] bg-white px-10 py-3 text-sm font-semibold text-[#0F172A] transition hover:bg-[#f8faf7]">
                  {t('hero.getStarted')}
                </button>
              </div>
            </div>
          </div>

          <div className="relative pb-12">
            <div className="rounded-[38px] bg-[#0F172A] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="overflow-hidden rounded-[32px] border border-[#111827] bg-[#111827]">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80"
                  alt="Modern home exterior"
                  className="h-[280px] w-full object-cover sm:h-[360px] md:h-[420px]"
                />
                <div className="bg-gradient-to-t from-[#0F172A] via-[#0F172A]/90 to-transparent px-6 py-6">
                  <p className="text-lg font-semibold text-white">{t('hero.uniqueJourney')}</p>
                </div>
              </div>
            </div>
            <button className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4D000] text-[#0F172A] shadow-[0_20px_40px_rgba(244,208,0,0.28)] transition hover:bg-[#e6c700]">
              <FaArrowDown size={18} />
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.4fr_0.6fr] items-start">
          <div className="rounded-[32px] bg-[#0F172A] p-6 shadow-[0_30px_60px_rgba(15,23,42,0.18)]">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] items-center">
              <div className="grid gap-5 md:grid-cols-[260px_minmax(0,1fr)] items-start">
                <div className="overflow-hidden rounded-[28px] bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80"
                    alt="Modern interior"
                    className="h-32 w-full object-cover"
                  />
                </div>
                <div>
                  <label htmlFor="location-search" className="text-sm uppercase tracking-[0.35em] text-white/70 mb-3 block">
                    {t('mortgage.location')}
                  </label>
                  <input
                    id="location-search"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSelectedLocation('');
                    }}
                    type="text"
                    placeholder={t('search.placeholder')}
                    className="mt-2 w-full rounded-[26px] border border-white/15 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
                  />

                  {searchQuery.trim().length > 0 && (
                    <div className="mt-4 space-y-2">
                      {filteredLocations.length > 0 ? (
                        filteredLocations.map((location) => (
                          <button
                            key={location.name}
                            type="button"
                            onClick={() => {
                              setSearchQuery(location.name);
                              setSelectedLocation(location.name);
                            }}
                            className="w-full rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white transition hover:border-white/30 hover:bg-white/10"
                          >
                            {location.name}
                          </button>
                        ))
                      ) : (
                        <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/50">
                          {t('hero.noLocations')}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={handleSearchClick}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-[20px] border border-white/20 text-white transition hover:bg-white/10"
              >
                <FaArrowRight size={18} />
              </button>
            </div>

            {selectedLocation && (
              <p className="mt-6 text-sm text-white/70">
                {t('hero.showingResults', { location: selectedLocation })}
              </p>
            )}
          </div>

          <div className="text-center lg:text-right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug tracking-tight text-[#0F172A] max-w-xl mx-auto lg:mx-0 whitespace-normal">
              {t('hero.startSearchNow')}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
