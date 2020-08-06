import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { WarningRounded as WarningIcon } from '@material-ui/icons';
import { YMaps, Map, SearchControl, Placemark } from 'react-yandex-maps';
import Context from '../../../../Context';
import { PRIMARY_COLOR } from '../../../../constants/styles';
import useStyles from './styles';

function Position(props) {
  const {
    coords,
    zoom,
    cityId,
    cities,
  } = props;
  const { changeField } = useContext(Context);
  const classes = useStyles();

  if (cityId) {
    const selectedCity = cities.find(city => city.id === cityId);
    const center = [selectedCity.lat, selectedCity.lng];

    return (
      <div className={classes.mapContainer}>
        <YMaps query={{ apikey: '0bd05560-e3d1-4ff5-bcc3-1816f623de41' }}>
          <Map
            /* onBoundsChange={(e) => console.log(e)} Движение карты */
            onClick={e => changeField('createNewsCoords', e.get('coords'))}
            defaultState={{ center, zoom }}
            width="100%"
            height="100%"
          >
            <SearchControl />
            { coords && <Placemark geometry={coords} options={{ iconColor: PRIMARY_COLOR }} /> }
          </Map>
        </YMaps>
      </div>
    );
  } else {
    return (
      <div className={classes.selectCityContainer}>
        <WarningIcon />
        <Typography variant="h6">Выберите город на первом шаге</Typography>
      </div>
    );
  }
}

Position.propTypes = {
  coords:        PropTypes.arrayOf(PropTypes.number),
  zoom:          PropTypes.number.isRequired,
  cityId:        PropTypes.number,
  cities:        PropTypes.array.isRequired,
};

Position.defaultProps = {
  coords: null,
  cityId: null,
};

const mapStateToProps = ({ map, forms, cities }) => ({
  zoom:          map.zoom,
  coords:        forms.createNewsCoords,
  cityId:        forms.createNewsCity,
  cities:        cities.data,
});

export default connect(mapStateToProps)(Position);

