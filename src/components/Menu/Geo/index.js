import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  IconButton
} from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import useStyles from './styles';
import emblems from './emblems';

function Geo(props) {
  const {
    fetchCities,
    setModal,
    loading,
    city,
    titleCity,
  } = props;

  const classes = useStyles();

  useEffect(() => {
    if (loading) fetchCities();
  }, [loading, fetchCities]);

  return (
    <div className={classes.root}>
      <div className={classes.emblemContainer}>
        <img className={classes.emblem} src={emblems[titleCity]} alt="" />
      </div>
      <Typography variant="h6" className={classes.cityName}>{city}</Typography>
      <div className={classes.grow} />
      <IconButton onClick={() => setModal(true)}>
        <EditIcon className={classes.changeCityButton} />
      </IconButton>
    </div>
  );
}

Geo.propTypes = {
  fetchCities: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  titleCity: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Geo;
