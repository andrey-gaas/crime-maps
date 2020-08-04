import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, Divider, Button } from '@material-ui/core';
import {
  Reorder as ReorderIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';
import makeStyles from './styles';

function Menu(props) {
  const { location, isAuth } = props;
  const classes = makeStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.root}
      classes={{
        paper: classes.rootPaper
      }}
    >
      123123123
    </Drawer>
  );
}

Menu.propTypes = {
  location: PropTypes.object.isRequired,
  isAuth:   PropTypes.bool.isRequired,
};

export default Menu;  
