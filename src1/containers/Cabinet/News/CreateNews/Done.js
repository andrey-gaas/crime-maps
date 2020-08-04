import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

function Done() {
  const classes = useStyles();
  return (
    <Typography variant="h5" className={classes.doneText}>Новость успешно создана</Typography>
  );
}

export default Done;
