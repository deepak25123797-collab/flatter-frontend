import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { className: "bg-[#F7F7F5] py-20", children: _jsxs("div", { className: "container-custom", children: [_jsxs("div", { className: "mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm uppercase tracking-[0.32em] text-[#6B7280] mb-3", children: t('sections.testimonials') }), _jsx("h2", { className: "text-4xl md:text-5xl font-bold text-[#0F172A]", children: t('testimonials.heading') })] }), _jsx("button", { type: "button", className: "inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-medium text-[#0F172A] shadow-sm transition hover:bg-[#F7F7F5]", children: t('sections.viewMore') })] }), _jsxs("div", { className: "relative rounded-[32px] bg-white p-10 shadow-[0_25px_70px_rgba(15,23,42,0.08)]", children: [_jsxs("p", { className: "text-2xl md:text-3xl leading-relaxed text-[#0F172A] italic", children: ["\"", t(testimonial.quoteKey), "\""] }), _jsxs("div", { className: "mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-center lg:text-left", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "relative h-16 w-16 overflow-hidden rounded-full border border-[#E5E7EB] bg-[#F4D000]/20", children: _jsx("img", { src: testimonial.image, alt: t(testimonial.authorKey), className: "h-full w-full object-cover", loading: "lazy" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-[#0F172A]", children: t(testimonial.authorKey) }), _jsx("p", { className: "text-sm text-[#6B7280]", children: t(testimonial.companyKey) })] })] }), _jsxs("div", { className: "flex items-center justify-end gap-3", children: [_jsx("button", { type: "button", onClick: () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length), "aria-label": t('testimonials.previous'), className: "inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#0F172A] transition hover:bg-[#F7F7F5]", children: _jsx(FaChevronLeft, {}) }), _jsx("button", { type: "button", onClick: () => setActiveIndex((prev) => (prev + 1) % testimonials.length), "aria-label": t('testimonials.next'), className: "inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#0F172A] transition hover:bg-[#F7F7F5]", children: _jsx(FaChevronRight, {}) })] })] })] })] }) }));
}
