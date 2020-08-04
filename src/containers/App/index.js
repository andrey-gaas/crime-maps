import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CssBaseline, Snackbar } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Context from '../../Context';
import { INDEX } from '../../constants/links';

import Index from '../../components/Index';

function App() {
  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>
      <CssBaseline />
      <Switch>
        <Route path={INDEX} exact component={Index} />
      </Switch>

      {/* <Snackbar
        open={!!snackbar}
        message={snackbar}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      /> */}
    </Context.Provider>
  );
}

export default App;
