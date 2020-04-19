import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import { changeCoordinates } from '../../store/AC/map';

function Map(props) {
  const {
    lat,
    lng,
    geodata,
    changeCoordinates,
  } = props;
  const handleDrag = ({ target }) => {
    const { lat, lng } = target.getCenter();
    changeCoordinates(lat, lng);
  };

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
        onDragEnd={handleDrag}
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
  changeCoordinates: PropTypes.func.isRequired,
};

const mapStateToProps = ({ map, geodata }) => ({
  lat: map.lat,
  lng: map.lng,
  geodata: geodata.geodata,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCoordinates,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
