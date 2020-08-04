import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputBase } from '@material-ui/core';
import cn from 'classnames';
import Geolocation from '../Geolocation';
import useStyles from './styles';
import LogoDark from '../../images/logo_dark.svg';

function HeaderMenu(props) {
  const {
    selectedCityId,
    citiesList,
  } = props;
  const classes = useStyles();
  const selectedCity = citiesList.find(city => city.id === selectedCityId);

  return (
    <div className={cn(classes.root, classes[selectedCity.title] )}>
      <div className={classes.blackout}>
        <div className={classes.searchContainer}>
          <img src={LogoDark} alt="" height="35px" />
          <InputBase
            className={classes.search}
            placeholder="Поиск по Crime Maps..."
          />
        </div>
        
        <Geolocation
          titleCity={selectedCity.title}
          city={selectedCity.name}
        />
      </div>
    </div>
  );
}

HeaderMenu.propTypes = {
  selectedCityId: PropTypes.number.isRequired,
  citiesList:     PropTypes.array.isRequired,
};

const mapStateToProps = ({ cities }) => ({
  selectedCityId: cities.selectedCityId,
  citiesList:     cities.data,
});

export default connect(mapStateToProps)(HeaderMenu);
