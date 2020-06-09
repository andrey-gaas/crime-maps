import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@material-ui/core';
import useStyles from './styles';
import logo from '../../images/logo_dark.svg';

function Header(props) {
  const classes = useStyles();
  const { children } = props;
  
  return (
    <AppBar
      color="default"
      className={classes.root}
    >
      <div className={classes.logoContainer}>
        <Toolbar>
          <img src={logo} alt="Logo" width="20px" />
          <span className={classes.title}>Crime Maps</span>
        </Toolbar>
      </div>
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
