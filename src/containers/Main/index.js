import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, batch } from 'react-redux';
import {
  Fab,
  ButtonGroup,
  Button,
  Snackbar,
} from '@material-ui/core';
import {
  NearMe as NearMeIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from '@material-ui/icons';
import Context from '../../Context';
import DesctopMenu from '../../components/DesctopMenu';
import Map from '../../components/Map';
import useStyles from './styles';
import { MAX_ZOOM, MIN_ZOOM } from '../../constants/map';

function Main(props) {
  const {
    geodata,
    zoom,
    location,
    snackbar,
  } = props;
  const classes = useStyles();
  const {
    changeCoordinates,
    changeZoom,
    incrementZoom,
    decrementZoom,
    fetchNews,
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
    fetchNews();
  }, [fetchNews]);

  return (
    <div className={classes.root}>
      <DesctopMenu location={location} />
      <Fab
        color="primary"
        size="large"
        className={classes.buttonUserPosition}
        disabled={geodata === null}
        onClick={viewMe}
      >
        <NearMeIcon />
      </Fab>
      <div className={classes.zoomButtonsContainer}>
        <ButtonGroup orientation="vertical">
          <Button variant="contained" onClick={zoomIn}>
            <ZoomInIcon />
          </Button>
          <Button variant="contained" onClick={zoomOut}>
            <ZoomOutIcon />
          </Button>
        </ButtonGroup>
      </div>
      <Map />

      <Snackbar
        open={!!snackbar}
        message={snackbar}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      />
    </div>
  );
}

Main.propTypes = {
  geodata:  PropTypes.object,
  zoom:     PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
  snackbar: PropTypes.string,
};

Main.defaultProps = {
  snackbar: '',
};

const mapStateToProps = ({ map, system }) => ({
  geodata:  map.geodata,
  zoom:     map.zoom,
  snackbar: system.newsFetchSnackbar,
});

export default connect(mapStateToProps)(Main);
