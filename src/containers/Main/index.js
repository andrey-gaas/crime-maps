import React from 'react';
import Menu from '../../components/Menu';
import Map from '../../components/Map';
import useStyles from './styles';

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Menu />
      <Map />
    </div>
  );
}

export default Main;
