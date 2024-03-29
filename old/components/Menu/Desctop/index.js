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
import Auth from '../Auth';

function DesctopMenu(props) {
  const {
    selectedCity,
    loading,
    fetchCities,
    setModal,
  } = props;
  const classes = makeStyles();

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
                titleCity={selectedCity.title}
                city={selectedCity.name}
              />
            </div>
          </div>
          <Auth />
        </Drawer>
    </Hidden>
  );
}

DesctopMenu.propTypes = {
  selectedCity: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCities: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default DesctopMenu;
