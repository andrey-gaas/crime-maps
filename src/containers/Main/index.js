import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Fab } from '@material-ui/core';
import {
  NearMe as NearMeIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from '@material-ui/icons';
import Menu from '../../components/Menu';
import Map from '../../components/Map';
import CitiesSelector from '../../components/CitiesSelector';
import useStyles from './styles';
import {
  changeCoordinates,
  incrementZoom,
  decrementZoom,
} from '../../store/AC/map';
import { MAX_ZOOM, MIN_ZOOM } from '../../constants/map';

function Main(props) {
  const {
    changeCoordinates,
    geodata,
    incrementZoom,
    decrementZoom,
    zoom,
  } = props;
  const classes = useStyles();

  const zoomIn = () => {
    if (zoom === MAX_ZOOM) return;
    incrementZoom();
  };

  const zoomOut = () => {
    if (zoom === MIN_ZOOM) return;
    decrementZoom();
  };

  return (
    <div className={classes.root}>
      <Menu />
      <Map />
      <CitiesSelector />
      <Fab
        color="primary"
        size="large"
        className={classes.buttonUserPosition}
        onClick={() => changeCoordinates(geodata.coords.latitude, geodata.coords.longitude)}
        disabled={geodata === null}
      >
        <NearMeIcon />
      </Fab>
      <div className={classes.zoomButtonsContainer}>
        <Fab
          size="large"
          onClick={zoomIn}
        >
          <ZoomInIcon />
        </Fab>
        <Fab
          size="large"
          className={classes.buttonZoomOut}
          onClick={zoomOut}
        >
          <ZoomOutIcon />
        </Fab>
      </div>
    </div>
  );
}

Main.propTypes = {
  changeCoordinates: PropTypes.func.isRequired,
  geodata: PropTypes.object,
  incrementZoom: PropTypes.func.isRequired,
  decrementZoom: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
};

const mapStateToProps = ({ geodata, map}) => ({
  geodata: geodata.geodata,
  zoom: map.zoom,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCoordinates,
  incrementZoom,
  decrementZoom,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
