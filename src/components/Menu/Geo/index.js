import React from 'react';
import {
  Typography
} from '@material-ui/core';
import useStyles from './styles';
import gerb from '../../../images/novosibirsk-gerb.svg';

function Geo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.emblem} src={gerb} alt="Новосибирск" width="30px" />
      <Typography variant="h5" className={classes.cityName}>
        Новосибирск
      </Typography>
    </div>
  );
}

export default Geo;
