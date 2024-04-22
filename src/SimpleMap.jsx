import {useRef}  from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const SimpleMap = () => {
    const mapRef = useRef(null);
    const latitude = 45.764;
    const longitude = 4.83;
    const markerPoint = [45.72686816775435, 4.835384144990427];

    return (
        // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "75vh", width: "75vw"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={markerPoint}>
                <Popup>
                    Welcome to M2i Lyon Gerland<br /> <a href="https://www.m2iformation.fr/" target="_blank noopener">https://www.m2iformation.fr/</a>
                </Popup>
            </Marker>
            {/* Additional map layers or components can be added here */}
        </MapContainer>
    );
};