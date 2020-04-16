import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';

function Map(props) {
  const { lat, lng, geodata } = props;

  return (
    <LeafletMap
        center={[lat, lng]}
        zoom={13}
        maxZoom={17}
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
        {
          geodata ?
            <Marker position={[geodata.coords.latitude, geodata.coords.longitude]}>
              
            </Marker>
            : null
        }
      </LeafletMap>
  );
}

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  geodata: PropTypes.object,
};

const mapStateToProps = ({ map, geodata }) => ({
  lat: map.lat,
  lng: map.lng,
  geodata: geodata.geodata,
});

export default connect(mapStateToProps)(Map);
