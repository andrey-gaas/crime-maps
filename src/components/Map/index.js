import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import L from 'leaflet';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import { changeCoordinates, changeZoom } from '../../store/AC/map';
import userPinIcon from '../../images/user-pin.svg';
import { MAX_ZOOM, MIN_ZOOM } from '../../constants/map';

function Map(props) {
  const {
    lat,
    lng,
    zoom,
    geodata,
    changeCoordinates,
    changeZoom,
  } = props;

  const handleDrag = ({ target }) => {
    const { lat, lng } = target.getCenter();
    changeCoordinates(lat, lng);
  };

  const iconPerson = new L.Icon({
    iconUrl: userPinIcon,
    iconRetinaUrl: userPinIcon,
    iconSize: new L.Point(50, 75),
  });

  return (
    <LeafletMap
        center={[lat, lng]}
        zoom={zoom}
        maxZoom={MAX_ZOOM}
        minZoom={MIN_ZOOM}
        attributionControl={true}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        onDragEnd={handleDrag}
        onZoomEnd={test => changeZoom(test.target.getZoom())}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {
          geodata ?
            <Marker
              position={[geodata.coords.latitude, geodata.coords.longitude]}
              icon={iconPerson}
            >
              
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
  zoom: PropTypes.number.isRequired,
  changeZoom: PropTypes.func.isRequired,
};

const mapStateToProps = ({ map, geodata }) => ({
  lat: map.lat,
  lng: map.lng,
  zoom: map.zoom,
  geodata: geodata.geodata,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCoordinates,
  changeZoom,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
