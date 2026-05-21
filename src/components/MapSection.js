import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
const locations = [
    {
        id: 1,
        nameKey: 'neighborhoods.kotagede',
        addressKey: 'neighborhoods.address1',
        query: 'Kotagede Yogyakarta',
    },
    {
        id: 2,
        nameKey: 'neighborhoods.makam',
        addressKey: 'neighborhoods.address2',
        query: 'Makam Imogiri Jogja',
    },
    {
        id: 3,
        nameKey: 'neighborhoods.condong',
        addressKey: 'neighborhoods.address3',
        query: 'Condongcatur Sleman',
    },
];
export default function MapSection() {
    const { t } = useTranslation();
    const [selectedLocation, setSelectedLocation] = useState(null);
    const mapSrc = useMemo(() => {
        const base = 'https://www.google.com/maps?q=';
        if (selectedLocation) {
            const location = locations.find((item) => item.id === selectedLocation);
            return location
                ? `${base}${encodeURIComponent(location.query)}&z=15&output=embed`
                : `${base}${encodeURIComponent('Yogyakarta, Indonesia')}&z=12&output=embed`;
        }
        const combinedQuery = locations.map((item) => item.query).join('%20OR%20');
        return `${base}${combinedQuery}&z=12&output=embed`;
    }, [selectedLocation]);
    return (_jsx("section", { className: "bg-[#F7F7F5] py-20", children: _jsxs("div", { className: "container-custom", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("p", { className: "text-sm uppercase tracking-[0.32em] text-[#6B7280] mb-3", children: t('sections.findUs') }), _jsx("h2", { className: "text-4xl md:text-5xl font-bold text-[#0F172A]", children: t('sections.ourServiceArea') })] }), _jsxs("div", { className: "grid gap-8 lg:grid-cols-[1.7fr_0.9fr]", children: [_jsx("div", { className: "overflow-hidden rounded-[32px] shadow-[0_25px_70px_rgba(15,23,42,0.12)] h-[460px]", children: _jsx("iframe", { title: "Google Map", src: mapSrc, className: "w-full h-full border-0", allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }), _jsx("div", { className: "space-y-4", children: locations.map((location) => (_jsxs("button", { type: "button", onClick: () => setSelectedLocation(location.id), className: `w-full rounded-[28px] border p-6 text-left transition ${selectedLocation === location.id
                                    ? 'border-[#F4D000] bg-white shadow-[0_20px_50px_rgba(244,208,0,0.14)]'
                                    : 'border-[#E5E7EB] bg-white/80 hover:border-[#F4D000]'}`, children: [_jsx("h3", { className: "text-lg font-semibold text-[#0F172A]", children: t(location.nameKey) }), _jsx("p", { className: "mt-2 text-sm text-[#6B7280]", children: t(location.addressKey) })] }, location.id))) })] })] }) }));
}
