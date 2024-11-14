import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, Polygon } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pinIcon from "../images/pin.png";
import { useNavigate } from 'react-router-dom';

const { BaseLayer, Overlay } = LayersControl;

const customIcon = L.icon({
  iconUrl: pinIcon, // Caminho para a imagem do ícone
  iconSize: [32, 32], // Tamanho do ícone
  iconAnchor: [16, 32], // Ponto de ancoragem do ícone (centro inferior)
  popupAnchor: [0, -32] // Ponto de abertura do popup em relação ao ícone
});

const polygonCoordinates1 = [
  [-27.584276, -10.010303],
  [-32.078358, -13.526398],
  [-29.053484, -16.427176],
  [-11.077821, -17.306199],
  [-2.011405, -13.26269],
  [-9.262182, -9.394986],
];

const polygonCoordinates2 = [
  [-20.5999, -39.2114],
  [-21.6860, -37.6296],
  [-22.1141, -35.4326],
  [-22.1141, -32.7743],
  [-22.0327, -30.2477],
  [-21.8289, -27.7871],
  [-19.8163, -28.0507],
  [-19.3609, -31.3902],
  [-19.1535, -33.7190],
  [-18.7170, -36.5531],
];

const markerCoordinates1 = [-22.0, -13.0];
const markerCoordinates2 = [-20.0, -34.0];

function DataVisualization() {
  const navigate = useNavigate();

  const handlePolygonClick1 = () => {
    navigate('/polygon1-content');
  };

  const handlePolygonClick2 = () => {
    navigate('/polygon2-content');
  };

  return (
    <div id="map-container">
      <h1>NautiScope</h1>
      <MapContainer 
        center={[-10, -30]}
        zoom={3}
        style={{ height: "500px", width: "100%" }}
        maxBounds={[
          [-50, -80],
          [20, 20]
        ]}
        maxBoundsViscosity={1.0}
        minZoom={3}
        maxZoom={8}
        noWrap={true}
      >
        <LayersControl position="topright">
          <BaseLayer checked name="World Imagery">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/en-us/home">Esri</a>'
              noWrap={true}
            />
          </BaseLayer>
          <BaseLayer name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              noWrap={true}
            />
          </BaseLayer>
          <Overlay checked name="Area Outline 1">
            <Polygon positions={polygonCoordinates1} color="blue" eventHandlers={{ click: handlePolygonClick1 }} />
            <Marker position={markerCoordinates1} icon={customIcon}>
              <Popup>
                <strong>Cadeia Dorsal Atlântico Sul</strong>
              </Popup>
            </Marker>
          </Overlay>
          <Overlay checked name="Area Outline 2">
            <Polygon positions={polygonCoordinates2} color="red" eventHandlers={{ click: handlePolygonClick2 }} />
            <Marker position={markerCoordinates2} icon={customIcon}>
              <Popup>
                <strong>Cadeia Vitória Trindade</strong>
              </Popup>
            </Marker>
          </Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default DataVisualization;
