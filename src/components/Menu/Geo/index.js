import React from 'react';
import {
  Typography,
  IconButton
} from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import useStyles from './styles';
import gerb from '../../../images/emblems/novosibirsk-gerb.svg';

function Geo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.emblemContainer}>
        <img className={classes.emblem} src={gerb} alt="Новосибирск" />
      </div>
      <Typography variant="h6" className={classes.cityName}>
        Санкт-Петербург
      </Typography>
      <div className={classes.grow} />
      <IconButton>
        <EditIcon className={classes.changeCityButton} />
      </IconButton>
    </div>
  );
}

export default Geo;
