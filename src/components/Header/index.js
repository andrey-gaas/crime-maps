import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@material-ui/core';
import useStyles from './styles';

function Header(props) {
  const classes = useStyles();
  const { children } = props;
  
  return (
    <AppBar
      color="default"
      className={classes.root}
      position="static"
    >
      <Toolbar>
        {children}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
