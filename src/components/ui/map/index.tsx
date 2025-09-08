"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// แก้ไข icon ของ marker
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function ContactMap() {
  const position: LatLngTuple = [13.7563, 100.5018];

  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer
        center={position}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>YNP Coding - สำนักงานใหญ่</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
