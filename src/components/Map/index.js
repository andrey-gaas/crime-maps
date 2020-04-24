import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import { changeCoordinates, changeZoom } from '../../store/AC/map';
import { MAX_ZOOM, MIN_ZOOM } from '../../constants/map';
import getIcon from './getIcon';

function Map(props) {
  const {
    lat,
    lng,
    zoom,
    geodata,
    changeCoordinates,
    changeZoom,
    incidents,
  } = props;

  const handleDrag = ({ target }) => {
    const { lat, lng } = target.getCenter();
    changeCoordinates(lat, lng);
  };

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
              icon={getIcon()}
            >
              
            </Marker>
            : null
        }
        {
          incidents.map(
            incident =>
              <Marker
                key={incident.id}
                position={incident.coords}
                icon={getIcon(incident.type)}
              />
          )
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
  incidents: PropTypes.array.isRequired,
};

const mapStateToProps = ({ map, geodata, incidents }) => ({
  lat: map.lat,
  lng: map.lng,
  zoom: map.zoom,
  geodata: geodata.geodata,
  incidents: incidents.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCoordinates,
  changeZoom,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
