import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

function Map(props) {
  const { lat, lng } = props;

  return (
    <LeafletMap
        center={[lat, lng]}
        zoom={15}
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
        <Marker position={[54.983376, 82.892057]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
  );
}

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

const mapStateToProps = ({ map }) => ({
  lat: map.lat,
  lng: map.lng,
});

export default connect(mapStateToProps)(Map);
