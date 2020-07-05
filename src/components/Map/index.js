import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import Context from '../../Context';
import { MAX_ZOOM, MIN_ZOOM } from '../../constants/map';
import getPin from './getPin';

function Map(props) {
  const {
    lat,
    lng,
    zoom,
    geodata,
  } = props;

  const {
    changeZoom,
    changeCoordinates,
  } = useContext(Context);

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
        geodata &&
          <Marker
            position={[geodata.coords.latitude, geodata.coords.longitude]}
            icon={getPin()}
          >
            
          </Marker>
      }
    </LeafletMap>
  );
}

Map.propTypes = {
  lat:     PropTypes.number.isRequired,
  lng:     PropTypes.number.isRequired,
  zoom:    PropTypes.number.isRequired,
  geodata: PropTypes.object,
};

const mapStateToProps = ({ map }) => ({
  lat:     map.lat,
  lng:     map.lng,
  zoom:    map.zoom,
  geodata: map.geodata,
});

export default connect(mapStateToProps)(Map);
