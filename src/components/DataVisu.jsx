import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, Polygon } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom'; // Hook para navegação entre páginas

const { BaseLayer, Overlay } = LayersControl; // Desestruturação para facilitar o uso das subcomponentes

// Definição de um ícone personalizado para os marcadores no mapa
const customIcon = L.icon({
  iconUrl: "./images/pin.png", // Caminho para a imagem do ícone
  iconSize: [32, 32], // Tamanho do ícone
  iconAnchor: [16, 32], // Ponto de ancoragem do ícone (centro inferior)
  popupAnchor: [0, -32] // Ponto de abertura do popup em relação ao ícone
});

// Coordenadas para o contorno do primeiro polígono (Area Outline 1)
const polygonCoordinates1 = [
  [-33.137551, -7.110829],
  [-30.394548, -23.639098],
  [-9.482889, -26.959653],
  [-9.3041, -4.615224],
];

// Coordenadas para o contorno do segundo polígono (Area Outline 2)
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

// Coordenadas dos marcadores (posicionadas aproximadamente no centro de cada polígono)
const markerCoordinates1 = [-22.0, -13.0];  // Ajuste para o centro do Polígono 1
const markerCoordinates2 = [-20.0, -34.0];  // Ajuste para o centro do Polígono 2

function DataVisualization() {
  const navigate = useNavigate(); // Hook para navegação entre páginas

  // Função para lidar com o clique no primeiro polígono
  const handlePolygonClick1 = () => {
    navigate('/polygon1-content'); // Navega para a página de conteúdo do Polígono 1
  };

  // Função para lidar com o clique no segundo polígono
  const handlePolygonClick2 = () => {
    navigate('/polygon2-content'); // Navega para a página de conteúdo do Polígono 2
  };

  return (
    <div id="map-container">
      <h1>NautiScope</h1> {/* Título da página */}
      <MapContainer 
        center={[-10, -30]} // Centraliza o mapa no Oceano Atlântico
        zoom={3} 
        style={{ height: "500px", width: "100%" }} // Define a altura e largura do mapa
        maxBounds={[
          [-50, -80],  // Limite sudoeste (aproximado)
          [20, 20]     // Limite nordeste (aproximado)
        ]}
        maxBoundsViscosity={1.0} // Evita que o mapa seja movido para fora dos limites
        minZoom={3} // Define o nível mínimo de zoom
        maxZoom={8} // Define o nível máximo de zoom
        noWrap={true} // Evita a repetição do mapa nas bordas
      >
        <LayersControl position="topright">
          {/* Camada base do mapa - Imagem mundial */}
          <BaseLayer checked name="World Imagery">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/en-us/home">Esri</a>'
              noWrap={true} // Evita a repetição do tile layer
            />
          </BaseLayer>
          {/* Camada base do mapa - OpenStreetMap */}
          <BaseLayer name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              noWrap={true} // Evita a repetição do tile layer
            />
          </BaseLayer>
          {/* Sobreposição - Primeiro polígono e marcador associado */}
          <Overlay checked name="Area Outline 1">
            <Polygon positions={polygonCoordinates1} color="blue" eventHandlers={{ click: handlePolygonClick1 }} />
            <Marker position={markerCoordinates1} icon={customIcon}>
              <Popup>
                <strong>Cadeia Dorsal Atlântico Sul</strong> {/* Texto exibido ao clicar no marcador */}
              </Popup>
            </Marker>
          </Overlay>
          {/* Sobreposição - Segundo polígono e marcador associado */}
          <Overlay checked name="Area Outline 2">
            <Polygon positions={polygonCoordinates2} color="red" eventHandlers={{ click: handlePolygonClick2 }} />
            <Marker position={markerCoordinates2} icon={customIcon}>
              <Popup>
                <strong>Cadeia Vitória Trindade</strong> {/* Texto exibido ao clicar no marcador */}
              </Popup>
            </Marker>
          </Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default DataVisualization;
