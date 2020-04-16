import React from 'react';
import { Fab } from '@material-ui/core';
import { NearMe as NearMeIcon } from '@material-ui/icons';
import Menu from '../../components/Menu';
import Map from '../../components/Map';
import CitiesSelector from '../../components/CitiesSelector';
import useStyles from './styles';

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Menu />
      <Map />
      <CitiesSelector />
      <Fab
        color="primary"
        size="large"
        className={classes.buttonUserPosition}
      >
        <NearMeIcon />
      </Fab>
    </div>
  );
}

export default Main;
