import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import Menu from '../../components/Menu';
import Map from '../../components/Map';
import CitiesSelector from '../../components/CitiesSelector';
import Incident from '../../components/Incident';
import useStyles from './styles';
import {
  changeCoordinates,
  incrementZoom,
  decrementZoom,
} from '../../store/AC/map';
import { fetchAllIncidents } from '../../store/AC/incidents';
import { closeIncident } from '../../store/AC/incident';
import { MAX_ZOOM, MIN_ZOOM } from '../../constants/map';

function Main(props) {
  const {
    changeCoordinates,
    geodata,
    incrementZoom,
    decrementZoom,
    zoom,
    fetchAllIncidents,
    loading,
    selectedCityid,
    incident,
    closeIncident,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    if (loading) {
      fetchAllIncidents(selectedCityid);
    }
  }, [loading, fetchAllIncidents, selectedCityid]);

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
        <ButtonGroup orientation="vertical">
          <Button variant="contained" onClick={zoomIn}>
            <ZoomInIcon />
          </Button>
          <Button variant="contained" onClick={zoomOut}>
            <ZoomOutIcon />
          </Button>
        </ButtonGroup>
      </div>
      { incident && <Incident incident={incident} close={closeIncident} /> }
    </div>
  );
}

Main.propTypes = {
  changeCoordinates: PropTypes.func.isRequired,
  geodata: PropTypes.object,
  incrementZoom: PropTypes.func.isRequired,
  decrementZoom: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
  fetchAllIncidents: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  selectedCityid: PropTypes.number.isRequired,
  incident: PropTypes.object,
  closeIncident: PropTypes.func.isRequired,
};

const mapStateToProps = ({ geodata, map, incidents, cities, incident }) => ({
  geodata: geodata.geodata,
  zoom: map.zoom,
  loading: incidents.isLoading,
  selectedCityid: cities.selectedCity,
  incident,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCoordinates,
  incrementZoom,
  decrementZoom,
  fetchAllIncidents,
  closeIncident,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
