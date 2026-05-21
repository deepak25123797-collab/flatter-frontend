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
    },
    {
        id: 2,
        quoteKey: 'testimonials.quote2',
        authorKey: 'testimonials.author2',
        companyKey: 'testimonials.company2',
    },
    {
        id: 3,
        quoteKey: 'testimonials.quote3',
        authorKey: 'testimonials.author3',
        companyKey: 'testimonials.company3',
    },
];
export default function Testimonials() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonial = testimonials[activeIndex];
    return (_jsx("section", { className: "bg-[#F7F7F5] py-20", children: _jsxs("div", { className: "container-custom", children: [_jsxs("div", { className: "text-center mb-10", children: [_jsx("p", { className: "text-sm uppercase tracking-[0.32em] text-[#6B7280] mb-3", children: t('sections.testimonials') }), _jsx("h2", { className: "text-4xl md:text-5xl font-bold text-[#0F172A]", children: t('testimonials.heading') })] }), _jsxs("div", { className: "relative rounded-[32px] bg-white p-10 shadow-[0_25px_70px_rgba(15,23,42,0.08)]", children: [_jsxs("p", { className: "text-3xl leading-relaxed text-[#0F172A] italic", children: ["\"", t(testimonial.quoteKey), "\""] }), _jsxs("div", { className: "mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-[#F4D000]/20 text-xl font-semibold text-[#0F172A]", children: t(testimonial.authorKey)
                                                .split(' ')
                                                .map((part) => part[0])
                                                .join('') }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-[#0F172A]", children: t(testimonial.authorKey) }), _jsx("p", { className: "text-sm text-[#6B7280]", children: t(testimonial.companyKey) })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("button", { type: "button", onClick: () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length), className: "h-12 w-12 rounded-full border border-[#E5E7EB] text-[#0F172A] transition hover:bg-[#F7F7F5]", children: _jsx(FaChevronLeft, {}) }), _jsx("button", { type: "button", onClick: () => setActiveIndex((prev) => (prev + 1) % testimonials.length), className: "h-12 w-12 rounded-full border border-[#E5E7EB] text-[#0F172A] transition hover:bg-[#F7F7F5]", children: _jsx(FaChevronRight, {}) })] })] })] })] }) }));
}
