import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CssBaseline, Snackbar } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Context from '../../Context';
import * as links from '../../constants/links';
import * as systemAC from '../../store/AC/system';
import * as mapAC from '../../store/AC/map';
import * as userAC from '../../store/AC/user';
import * as newsAC from '../../store/AC/news';

import Index from '../../components/Index';
import Main from '../Main';

function App(props) {
  const {
    isAuth,
    snackbar,
    fetchUserData,
    setLocation,
    setLocationError,
    ...contextValue
  } = props;

  navigator.geolocation.getCurrentPosition(setLocation, setLocationError);

  useEffect(() => {
    if (isAuth) {
      fetchUserData();
    }
  }, [isAuth, fetchUserData]);

  return (
    <Context.Provider value={contextValue}>
      <CssBaseline />
      <Switch>
        <Route path={links.INDEX} exact component={Index} />
        <Route path={links.MAP} exact component={Main} />
      </Switch>

      <Snackbar
        open={!!snackbar}
        message={snackbar}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      />
    </Context.Provider>
  );
}

App.propTypes = {
  snackbar:            PropTypes.string,
  isAuth:              PropTypes.bool.isRequired,
  changeSystemField:   PropTypes.func.isRequired,
  setLocation:         PropTypes.func.isRequired,
  setLocationError:    PropTypes.func.isRequired,
  changeCoordinates:   PropTypes.func.isRequired,
  changeZoom:          PropTypes.func.isRequired,
  incrementZoom:       PropTypes.func.isRequired,
  decrementZoom:       PropTypes.func.isRequired,
  changeNewsTypes:     PropTypes.func.isRequired,
  fetchUserData:       PropTypes.func.isRequired,
  signInValidate:      PropTypes.func.isRequired,
  signUpValidate:      PropTypes.func.isRequired,
  logout:              PropTypes.func.isRequired,
  fetchAllNews:        PropTypes.func.isRequired,
  fetchNews:           PropTypes.func.isRequired,
  setActiveNews:       PropTypes.func.isRequired,
  fetchCabinetNews:    PropTypes.func.isRequired,
  createNews:          PropTypes.func.isRequired,
  removeNews:          PropTypes.func.isRequired,
};

App.defaultProps = {
  snackbar: '',
};

const mapStateToProps = ({ system, user }) => ({
  snackbar: system.snackbar,
  isAuth:   user.isAuth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeSystemField:   systemAC.changeSystemField,
  setLocation:         mapAC.setLocation,
  setLocationError:    mapAC.setLocationError,
  changeCoordinates:   mapAC.changeCoordinates,
  changeZoom:          mapAC.changeZoom,
  incrementZoom:       mapAC.incrementZoom,
  decrementZoom:       mapAC.decrementZoom,
  changeNewsTypes:     mapAC.changeNewsTypes,
  fetchUserData:       userAC.fetchUserData,
  signInValidate:      userAC.signInValidate,
  signUpValidate:      userAC.signUpValidate,
  logout:              userAC.logoutRequest,
  fetchAllNews:        newsAC.fetchAllNews,
  fetchNews:           newsAC.fetchNews,
  setActiveNews:       newsAC.setActiveNews,
  fetchCabinetNews:    newsAC.fetchCabinetNews,
  createNews:          newsAC.createNewsValidation,
  removeNews:          newsAC.removeNewsRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
