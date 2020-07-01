import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Drawer,
  InputBase,
  Divider,
} from '@material-ui/core';
import { Reorder as ReorderIcon } from '@material-ui/icons';
import cn from 'classnames';
import makeStyles from './styles';
import LogoDark from '../../images/logo_dark.svg';
import Geolocation from '../Geolocation';
import NewsTypes from '../NewsTypes';

function DesctopMenu(props) {
  const {
    selectedCityId,
    citiesList,
  } = props;
  const classes = makeStyles();
  const selectedCity = citiesList.find(city => city.id === selectedCityId);

  return (
    <Drawer
      variant="permanent"
      className={classes.root}
      classes={{
        paper: classes.rootPaper
      }}
    >
      <div className={cn(classes.header, classes[selectedCity.title])}>
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

      <NewsTypes />

      <div className={classes.subscriptionsContainer}>
        <Divider />
        <Link to="/subscriptions" className={classes.subscriptionsLink}>
          <ReorderIcon className={classes.subscriptionsIcon} /> Подписки
        </Link>
        <Divider />
      </div>
    </Drawer>
  )
}

DesctopMenu.propTypes = {
  selectedCityId: PropTypes.number.isRequired,
  citiesList:     PropTypes.array.isRequired,
};

const mapStateToProps = ({ cities }) => ({
  selectedCityId: cities.selectedCityId,
  citiesList:     cities.data,
});

export default connect(mapStateToProps)(DesctopMenu);
