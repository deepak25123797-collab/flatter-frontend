import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';
const locations = [
    {
        id: 1,
        nameKey: 'neighborhoods.kotagede',
        addressKey: 'neighborhoods.address1',
        lat: -7.8130,
        lng: 110.3886,
    },
    {
        id: 2,
        nameKey: 'neighborhoods.makam',
        addressKey: 'neighborhoods.address2',
        lat: -7.8285,
        lng: 110.3869,
    },
    {
        id: 3,
        nameKey: 'neighborhoods.condong',
        addressKey: 'neighborhoods.address3',
        lat: -7.7325,
        lng: 110.4499,
    },
];
const defaultCenter = [-7.8130, 110.3886];
function RecenterMap({ center }) {
    const map = useMap();
    useEffect(() => {
        map.flyTo(center, 12, { duration: 0.8 });
    }, [center, map]);
    return null;
}
export default function MapSection() {
    const { t } = useTranslation();
    const [selectedLocation, setSelectedLocation] = useState(null);
    const activeLocation = locations.find((location) => location.id === selectedLocation);
    const mapCenter = activeLocation ? [activeLocation.lat, activeLocation.lng] : defaultCenter;
    return (_jsx("section", { className: "bg-[#F7F7F5] py-20", children: _jsxs("div", { className: "container-custom", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("p", { className: "text-sm uppercase tracking-[0.32em] text-[#6B7280] mb-3", children: t('sections.findUs') }), _jsx("h2", { className: "text-4xl md:text-5xl font-bold text-[#0F172A]", children: t('sections.ourServiceArea') })] }), _jsxs("div", { className: "grid gap-8 lg:grid-cols-[1.7fr_0.9fr]", children: [_jsx("div", { className: "overflow-hidden rounded-[32px] shadow-[0_25px_70px_rgba(15,23,42,0.12)] h-[320px] sm:h-[380px] lg:h-[460px]", children: _jsxs(MapContainer, { center: mapCenter, zoom: 12, scrollWheelZoom: true, className: "w-full h-full", children: [_jsx(TileLayer, { attribution: '\u00A9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }), _jsx(RecenterMap, { center: mapCenter }), locations.map((location) => (_jsx(CircleMarker, { center: [location.lat, location.lng], radius: 10, pathOptions: {
                                            color: selectedLocation === location.id ? '#0F172A' : '#94A3B8',
                                            fillColor: '#F4D000',
                                            fillOpacity: 0.9,
                                        }, children: _jsxs(Popup, { children: [_jsx("span", { className: "font-semibold", children: t(location.nameKey) }), _jsx("br", {}), _jsx("span", { children: t(location.addressKey) })] }) }, location.id)))] }) }), _jsx("div", { className: "space-y-4", children: locations.map((location) => (_jsxs("button", { type: "button", onClick: () => setSelectedLocation(location.id), className: `w-full rounded-[28px] border p-6 text-left transition ${selectedLocation === location.id
                                    ? 'border-[#F4D000] bg-white shadow-[0_20px_50px_rgba(244,208,0,0.14)]'
                                    : 'border-[#E5E7EB] bg-white/80 hover:border-[#F4D000]'}`, children: [_jsx("h3", { className: "text-lg font-semibold text-[#0F172A]", children: t(location.nameKey) }), _jsx("p", { className: "mt-2 text-sm text-[#6B7280]", children: t(location.addressKey) })] }, location.id))) })] })] }) }));
}
