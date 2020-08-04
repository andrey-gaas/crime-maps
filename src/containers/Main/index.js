import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, batch } from 'react-redux';
import Context from '../../Context';
import { MAX_ZOOM, MIN_ZOOM } from '../../constants/map';
import MainComponent from '../../components/Main';

function Main(props) {
  const {
    geodata,
    zoom,
    location,
    history,
    isSelectorOpen,
  } = props;

  const {
    changeCoordinates,
    changeZoom,
    incrementZoom,
    decrementZoom,
    fetchAllNews,
  } = useContext(Context);

  const viewMe = () => batch(() => {
    changeCoordinates(geodata.coords.latitude, geodata.coords.longitude);
    changeZoom(16);
  });

  const zoomIn = () => {
    if (zoom === MAX_ZOOM) return;
    incrementZoom();
  };

  const zoomOut = () => {
    if (zoom === MIN_ZOOM) return;
    decrementZoom();
  };

  useEffect(() => {
    fetchAllNews();
  }, [fetchAllNews]);

  return (
    <MainComponent
      history={history}
      location={location}
      userIconDisabled={geodata === null}
      isSelectorOpen={isSelectorOpen}
      viewMe={viewMe}
      zoomIn={zoomIn}
      zoomOut={zoomOut}
    />
  );
}

Main.propTypes = {
  geodata:  PropTypes.object,
  zoom:     PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = ({ map, cities }) => ({
  geodata:        map.geodata,
  zoom:           map.zoom,
  isSelectorOpen: cities.isSelectorOpen
});

export default connect(mapStateToProps)(Main);


