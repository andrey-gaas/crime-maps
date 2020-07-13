import React from 'react';
import { Loop as LoopIcon } from '@material-ui/icons';
import useStyles from './styles';

function Loader() {
  const classes = useStyles();

  return (
    <LoopIcon className={classes.rotate} />
  );
}

export default Loader;
