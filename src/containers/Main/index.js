import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect, batch } from 'react-redux';
import {
  Fab,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import {
  NearMe as NearMeIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from '@material-ui/icons';
import Context from '../../Context';
import DesctopMenu from '../../components/DesctopMenu';
import Map from '../../components/Map';
import News from '../../components/News';
import useStyles from './styles';
import { MAX_ZOOM, MIN_ZOOM } from '../../constants/map';

function Main(props) {
  const {
    geodata,
    zoom,
    location,
    history,
  } = props;

  const classes = useStyles();
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
      <Map redirect={history.push} />

      <Route path="/map/news/:newsId" render={({ match }) => <News newsId={match.params.newsId} redirect={history.push} />} />
    </div>
  );
}

Main.propTypes = {
  geodata:  PropTypes.object,
  zoom:     PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = ({ map, system }) => ({
  geodata:  map.geodata,
  zoom:     map.zoom,
});

export default connect(mapStateToProps)(Main);
