import React, { Fragment } from 'react';
import { TextField } from '@material-ui/core';
import Map from '../../../../components/Map';
import useStyles from './styles';

function Position() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.positionSearch}>
        <TextField
          variant="outlined"
          label="Улица"
          className={classes.streetField}
        />
        <TextField
          variant="outlined"
          label="Дом"
          className={classes.homeField}
        />
      </div>
      <div className={classes.mapContainer}>
        <Map />
      </div>
    </Fragment>
  );
}

export default Position;
