import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  IconButton
} from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import useStyles from './styles';
import gerb from '../../../images/emblems/novosibirsk-gerb.svg';

function Geo(props) {
  const { fetchCities, setModal, loading } = props;

  const classes = useStyles();

  useEffect(() => {
    if (loading) fetchCities();
  }, [loading, fetchCities]);

  return (
    <div className={classes.root}>
      <div className={classes.emblemContainer}>
        <img className={classes.emblem} src={gerb} alt="Новосибирск" />
      </div>
      <Typography variant="h6" className={classes.cityName}>
        Санкт-Петербург
      </Typography>
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
};

export default Geo;
