import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  Hidden,
  InputBase
} from '@material-ui/core';
import cn from 'classnames';
import makeStyles from './styles';
import LogoDark from '../../../images/logo_dark.svg';
import Geo from '../Geo';

function DesctopMenu(props) {
  const {
    selectedCityId,
    citiesList,
    loading,
    fetchCities,
    setModal,
  } = props;
  const classes = makeStyles();
  const selectedCity = citiesList.find(city => city.id === selectedCityId);

  return (
    <Hidden smDown implementation="css">
      <Drawer
          variant="permanent"
          className={classes.root}
          classes={{
            paper: classes.rootPaper
          }}
        >
          <div className={cn(classes.header, classes[selectedCity.title])}>
            <div className={classes.darkBG}>
              <div className={classes.searchContainer}>
                <img src={LogoDark} alt="" height="35px" />
                <InputBase
                  className={classes.search}
                  placeholder="Поиск по Crime Maps..."
                />
              </div>
              <Geo
                loading={loading}
                fetchCities={fetchCities}
                setModal={setModal}
              />
            </div>
          </div>
        </Drawer>
    </Hidden>
  );
}

DesctopMenu.propTypes = {
  selectedCityId: PropTypes.number.isRequired,
  citiesList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCities: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default DesctopMenu;
