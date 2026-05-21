import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
const neighborhoods = [
    {
        id: 1,
        nameKey: 'neighborhoods.kotagede',
        addressKey: 'neighborhoods.address1',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        price: '$17,8120.20',
        typeKey: 'neighborhoods.typeForSale',
    },
    {
        id: 2,
        nameKey: 'neighborhoods.makam',
        addressKey: 'neighborhoods.address2',
        image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
        price: '$17,8120.20',
        typeKey: 'neighborhoods.typeForSale',
    },
    {
        id: 3,
        nameKey: 'neighborhoods.condong',
        addressKey: 'neighborhoods.address3',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        price: '$17,8120.20',
        typeKey: 'neighborhoods.typeForSale',
    },
    {
        id: 4,
        nameKey: 'neighborhoods.cangkringan',
        addressKey: 'neighborhoods.address4',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
        price: '$18,2500.00',
        typeKey: 'neighborhoods.typeForSale',
    },
    {
        id: 5,
        nameKey: 'neighborhoods.prawirotaman',
        addressKey: 'neighborhoods.address5',
        image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b25?auto=format&fit=crop&w=1200&q=80',
        price: '$16,9500.75',
        typeKey: 'neighborhoods.typeForSale',
    },
    {
        id: 6,
        nameKey: 'neighborhoods.parangtritis',
        addressKey: 'neighborhoods.address6',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        price: '$19,1250.40',
        typeKey: 'neighborhoods.typeForSale',
    },
];
export default function Neighborhoods() {
    const { t } = useTranslation();
    const [showMore, setShowMore] = useState(false);
    const displayedNeighborhoods = showMore ? neighborhoods : neighborhoods.slice(0, 3);
    return (_jsx("section", { className: "bg-[#F7F7F5] py-20", children: _jsxs("div", { className: "container-custom", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("p", { className: "text-sm uppercase tracking-[0.32em] text-[#6B7280] mb-3", children: t('features.tag') }), _jsx("h2", { className: "text-4xl md:text-5xl font-bold tracking-[-0.04em] text-[#0F172A]", children: t('sections.mostPopular') })] }), _jsx("div", { className: "grid gap-6 lg:grid-cols-3", children: displayedNeighborhoods.map((neighborhood) => (_jsxs("div", { className: "rounded-[32px] bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] overflow-hidden transition hover:-translate-y-1", children: [_jsx("div", { className: "h-72 overflow-hidden", children: _jsx("img", { src: neighborhood.image, alt: t(neighborhood.nameKey), className: "h-full w-full object-cover transition duration-500 hover:scale-105" }) }), _jsxs("div", { className: "space-y-3 p-6", children: [_jsx("p", { className: "text-xl font-semibold text-[#0F172A]", children: neighborhood.price }), _jsx("p", { className: "text-sm uppercase tracking-[0.22em] text-[#F4D000]", children: t(neighborhood.typeKey) }), _jsxs("p", { className: "text-sm text-[#6B7280]", children: [t(neighborhood.nameKey), " \u00B7 ", t('neighborhoods.spacious')] }), _jsx("p", { className: "text-sm text-[#6B7280]", children: t(neighborhood.addressKey) })] })] }, neighborhood.id))) }), _jsxs("div", { className: "mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [_jsx("p", { className: "text-xl font-semibold text-[#0F172A]", children: t('neighborhoods.searchMore') }), _jsx("button", { onClick: () => setShowMore(!showMore), className: "inline-flex items-center justify-center rounded-full border border-[#0F172A] bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#0F172A] transition hover:bg-[#0F172A] hover:text-white", children: showMore ? t('neighborhoods.viewLess') : t('neighborhoods.viewMore') })] })] }) }));
}
