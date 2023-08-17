import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function Map({location}) {
  return (
    <div className="h-80">
      <MapContainer
      center={[location.latitude, location.longitude]}
      zoom={50}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[location.latitude, location.longitude]}
        draggable={true}>
        <Popup>{location.name}</Popup>
      </Marker>
    </MapContainer>
    </div>
  )
}

export default Map
