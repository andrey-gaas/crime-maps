import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import Context from '../../Context';
import useStyles from './styles';
import emblems from '../../other/cityEmblems';

function Geolocation(props) {
  const {
    titleCity,
    city,
  } = props;
  const { toggleCities } = useContext(Context);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.emblemContainer}>
        <img className={classes.emblem} src={emblems[titleCity]} alt="" />
      </div>
      <Typography variant="h6" className={classes.cityName}>{city}</Typography>
      <div className={classes.grow} />
      <Tooltip title="Изменить город">
        <IconButton onClick={toggleCities}>
          <EditIcon className={classes.changeCityButton} />
        </IconButton>
      </Tooltip>
    </div>
  );
}

Geolocation.propTypes = {
  loading:   PropTypes.bool.isRequired,
  titleCity: PropTypes.string.isRequired,
  city:      PropTypes.string.isRequired,
};

const mapStateToProps = ({ cities }) => ({
  loading: cities.loading,
});

export default connect(mapStateToProps)(Geolocation);
