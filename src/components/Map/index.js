import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

function Map() {
  return (
    <LeafletMap
        center={[54.983376, 82.892057]}
        zoom={15}
        maxZoom={100}
        attributionControl={true}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[54.983376, 82.892057]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
  );
}

export default Map;
