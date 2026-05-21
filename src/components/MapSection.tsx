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

const defaultCenter: [number, number] = [-7.8130, 110.3886];

function RecenterMap({ center }: { center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, 12, { duration: 0.8 });
  }, [center, map]);

  return null;
}

export default function MapSection() {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const activeLocation = locations.find((location) => location.id === selectedLocation);
  const mapCenter: [number, number] = activeLocation ? [activeLocation.lat, activeLocation.lng] : defaultCenter;

  return (
    <section className="bg-[#F7F7F5] py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.32em] text-[#6B7280] mb-3">{t('sections.findUs')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">{t('sections.ourServiceArea')}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.7fr_0.9fr]">
          <div className="overflow-hidden rounded-[32px] shadow-[0_25px_70px_rgba(15,23,42,0.12)] h-[320px] sm:h-[380px] lg:h-[460px]">
            <MapContainer center={mapCenter} zoom={12} scrollWheelZoom className="w-full h-full">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <RecenterMap center={mapCenter} />
              {locations.map((location) => (
                <CircleMarker
                  key={location.id}
                  center={[location.lat, location.lng]}
                  radius={10}
                  pathOptions={{
                    color: selectedLocation === location.id ? '#0F172A' : '#94A3B8',
                    fillColor: '#F4D000',
                    fillOpacity: 0.9,
                  }}
                >
                  <Popup>
                    <span className="font-semibold">{t(location.nameKey)}</span>
                    <br />
                    <span>{t(location.addressKey)}</span>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>

          <div className="space-y-4">
            {locations.map((location) => (
              <button
                type="button"
                key={location.id}
                onClick={() => setSelectedLocation(location.id)}
                className={`w-full rounded-[28px] border p-6 text-left transition ${
                  selectedLocation === location.id
                    ? 'border-[#F4D000] bg-white shadow-[0_20px_50px_rgba(244,208,0,0.14)]'
                    : 'border-[#E5E7EB] bg-white/80 hover:border-[#F4D000]'
                }`}
              >
                <h3 className="text-lg font-semibold text-[#0F172A]">{t(location.nameKey)}</h3>
                <p className="mt-2 text-sm text-[#6B7280]">{t(location.addressKey)}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
