import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useStyles from './styles';

function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/map" className={classes.link}>
        <Button variant="contained" color="primary">К приложению</Button>
      </Link>
    </div>
  );
}

export default Index;
