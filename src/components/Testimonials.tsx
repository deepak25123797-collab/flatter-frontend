import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    id: 1,
    quoteKey: 'testimonials.quote1',
    authorKey: 'testimonials.author1',
    companyKey: 'testimonials.company1',
    image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    quoteKey: 'testimonials.quote2',
    authorKey: 'testimonials.author2',
    companyKey: 'testimonials.company2',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    quoteKey: 'testimonials.quote3',
    authorKey: 'testimonials.author3',
    companyKey: 'testimonials.company3',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
];

export default function Testimonials() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  return (
    <section className="bg-[#F7F7F5] py-20">
      <div className="container-custom">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#6B7280] mb-3">{t('sections.testimonials')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">{t('testimonials.heading')}</h2>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-medium text-[#0F172A] shadow-sm transition hover:bg-[#F7F7F5]"
          >
            {t('sections.viewMore')}
          </button>
        </div>

        <div className="relative rounded-[32px] bg-white p-10 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
          <p className="text-2xl md:text-3xl leading-relaxed text-[#0F172A] italic">
            "{t(testimonial.quoteKey)}"
          </p>

          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-center lg:text-left">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[#E5E7EB] bg-[#F4D000]/20">
                <img
                  src={testimonial.image}
                  alt={t(testimonial.authorKey)}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-semibold text-[#0F172A]">{t(testimonial.authorKey)}</p>
                <p className="text-sm text-[#6B7280]">{t(testimonial.companyKey)}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label={t('testimonials.previous')}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#0F172A] transition hover:bg-[#F7F7F5]"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                aria-label={t('testimonials.next')}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#0F172A] transition hover:bg-[#F7F7F5]"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
