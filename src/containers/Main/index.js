import React from 'react';
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
    </div>
  );
}

export default Main;
