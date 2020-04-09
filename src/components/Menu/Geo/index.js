import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Typography,
  IconButton
} from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import useStyles from './styles';
import gerb from '../../../images/emblems/novosibirsk-gerb.svg';
import { fetchCities, setModal } from '../../../store/AC/cities';

function Geo(props) {
  const { /* fetchCities, */ setModal } = props;
  
  const classes = useStyles();

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
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCities,
  setModal
}, dispatch);

export default connect(null, mapDispatchToProps)(Geo);
