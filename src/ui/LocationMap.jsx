import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../styles/Map.css";

const LocationMap = ({ lat, lng, popupContent }) => {
  return (
    <MapContainer
      className="map"
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>{popupContent}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
