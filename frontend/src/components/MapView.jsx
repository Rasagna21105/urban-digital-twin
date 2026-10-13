import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const hyderabadPosition = [17.3850, 78.4867];

function MapView() {
  return (
    <section className="card map-card">
      <h3>Urban GIS Map</h3>

      <MapContainer
        center={hyderabadPosition}
        zoom={12}
        scrollWheelZoom={true}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={hyderabadPosition}>
          <Popup>
            Hyderabad — Urban Digital Twin study area
          </Popup>
        </Marker>
      </MapContainer>

      <p className="map-note">
        Base map: OpenStreetMap. Additional urban data layers
        will be integrated in later stages.
      </p>
    </section>
  );
}

export default MapView;