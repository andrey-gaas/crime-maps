import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Fragment>
  );
}

export default App;
