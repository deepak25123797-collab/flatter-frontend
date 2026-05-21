import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaArrowLeft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const features = [
    {
        id: 1,
        titleKey: 'features.cards.1.title',
        subtitleKey: 'features.cards.1.subtitle',
    },
    {
        id: 2,
        titleKey: 'features.cards.2.title',
        subtitleKey: 'features.cards.2.subtitle',
    },
    {
        id: 3,
        titleKey: 'features.cards.3.title',
        subtitleKey: 'features.cards.3.subtitle',
    },
];
export default function FeaturesSlider() {
    const { t } = useTranslation();
    return (_jsx("section", { className: "bg-[#F7F7F5] py-20", children: _jsxs("div", { className: "container-custom", children: [_jsxs("div", { className: "mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-[#6B7280]", children: [_jsx("span", { className: "text-[#F4D000]", children: "\u2605" }), t('features.tag')] }), _jsxs("div", { className: "mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start", children: [_jsx("div", { children: _jsx("h2", { className: "text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-[#0F172A]", children: t('features.title') }) }), _jsx("p", { className: "text-sm leading-7 text-[#475569]", children: t('features.description') })] }), _jsx("div", { className: "rounded-[32px] bg-[#0F172A] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.18)]", children: _jsxs("div", { className: "grid gap-6 lg:grid-cols-[auto_1fr] items-center", children: [_jsx("div", { className: "flex items-center justify-center", children: _jsx("button", { className: "inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition hover:bg-white/10", children: _jsx(FaArrowLeft, { size: 18 }) }) }), _jsx("div", { className: "grid gap-5 lg:grid-cols-3", children: features.map((feature) => (_jsxs("div", { className: "rounded-[28px] border border-white/10 bg-[#0F172A] p-8 text-white", children: [_jsx("div", { className: "h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-[#F4D000] text-lg font-semibold mb-6", children: feature.id }), _jsx("h3", { className: "text-2xl font-semibold leading-tight mb-4", children: t(feature.titleKey) }), _jsx("p", { className: "text-sm text-[#94A3B8]", children: t(feature.subtitleKey) })] }, feature.id))) })] }) })] }) }));
}
