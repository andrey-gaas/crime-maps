import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { YMaps, Map, SearchControl, Placemark } from 'react-yandex-maps';
import { changeField } from '../../../../store/AC/forms';
import { ORANGE } from '../../../../constants/styles';
import useStyles from './styles';

function Position(props) {
  const {
    defaultCoords,
    coords,
    zoom,
    changeField,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <YMaps query={{ apikey: '0bd05560-e3d1-4ff5-bcc3-1816f623de41' }}>
        <Map
          /* onBoundsChange={(e) => console.log(e)} Движение карты */
          onClick={e => changeField('createNewsCoords', e.get('coords'))}
          defaultState={{ center: defaultCoords, zoom }}
          width="100%"
          height="100%"
        >
          <SearchControl />
          { coords && <Placemark geometry={coords} options={{ iconColor: ORANGE }} /> }
        </Map>
      </YMaps>
    </div>
  );
}

Position.propTypes = {
  defaultCoords: PropTypes.arrayOf(PropTypes.number).isRequired,
  coords:        PropTypes.arrayOf(PropTypes.number),
  zoom:          PropTypes.number.isRequired,
  changeField:   PropTypes.func.isRequired,
};

Position.defaultProps = {
  coords: null,
};

const mapStateToProps = ({ map, forms }) => ({
  defaultCoords: [map.lat, map.lng],
  zoom:          map.zoom,
  coords:        forms.createNewsCoords,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeField,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Position);
