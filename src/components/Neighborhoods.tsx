import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: 1,
    nameKey: 'neighborhoods.kotagede',
    addressKey: 'neighborhoods.address1',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    price: '$17,8120.20',
    typeKey: 'neighborhoods.typeForSale',
  },
  {
    id: 2,
    nameKey: 'neighborhoods.makam',
    addressKey: 'neighborhoods.address2',
    image:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
    price: '$17,8120.20',
    typeKey: 'neighborhoods.typeForSale',
  },
  {
    id: 3,
    nameKey: 'neighborhoods.condong',
    addressKey: 'neighborhoods.address3',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    price: '$17,8120.20',
    typeKey: 'neighborhoods.typeForSale',
  },
  {
    id: 4,
    nameKey: 'neighborhoods.cangkringan',
    addressKey: 'neighborhoods.address4',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    price: '$18,2500.00',
    typeKey: 'neighborhoods.typeForSale',
  },
  {
    id: 5,
    nameKey: 'neighborhoods.prawirotaman',
    addressKey: 'neighborhoods.address5',
    image:
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b25?auto=format&fit=crop&w=1200&q=80',
    price: '$16,9500.75',
    typeKey: 'neighborhoods.typeForSale',
  },
  {
    id: 6,
    nameKey: 'neighborhoods.parangtritis',
    addressKey: 'neighborhoods.address6',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    price: '$19,1250.40',
    typeKey: 'neighborhoods.typeForSale',
  },
];

export default function Neighborhoods() {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const displayedNeighborhoods = showMore ? neighborhoods : neighborhoods.slice(0, 3);

  return (
    <section className="bg-[#F7F7F5] py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.32em] text-[#6B7280] mb-3">{t('features.tag')}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-[#0F172A]">
            {t('sections.mostPopular')}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedNeighborhoods.map((neighborhood) => (
            <div key={neighborhood.id} className="rounded-[32px] bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] overflow-hidden transition hover:-translate-y-1">
              <div className="h-72 overflow-hidden">
                <img
                  src={neighborhood.image}
                  alt={t(neighborhood.nameKey)}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-6">
                <p className="text-xl font-semibold text-[#0F172A]">{neighborhood.price}</p>
                <p className="text-sm uppercase tracking-[0.22em] text-[#F4D000]">{t(neighborhood.typeKey)}</p>
                <p className="text-sm text-[#6B7280]">{t(neighborhood.nameKey)} · {t('neighborhoods.spacious')}</p>
                <p className="text-sm text-[#6B7280]">{t(neighborhood.addressKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xl font-semibold text-[#0F172A]">{t('neighborhoods.searchMore')}</p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center justify-center rounded-full border border-[#0F172A] bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#0F172A] transition hover:bg-[#0F172A] hover:text-white"
          >
            {showMore ? t('neighborhoods.viewLess') : t('neighborhoods.viewMore')}
          </button>
        </div>
      </div>
    </section>
  );
}
