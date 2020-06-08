import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import {
  ArrowBack as ArrowBackIcon,
} from '@material-ui/icons';
import useStyles from './styles';

function Header(props) {
  const {
    title,
    goBack,
    className,
    leftContent,
    position,
  } = props;
  const classes = useStyles();
  
  return (
    <AppBar position={position} className={className} >
      <Toolbar>
        {
          goBack &&
            <IconButton onClick={goBack} color="inherit" className={classes.backIcon}>
              <ArrowBackIcon />
            </IconButton>
        }
        {leftContent && leftContent}
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  title:       PropTypes.string,
  goBack:      PropTypes.func,
  className:   PropTypes.string,
  leftContent: PropTypes.node,
  position:    PropTypes.string,
};

Header.defaultProps = {
  title:       'Crime Maps',
  goBack:      null,
  className:   '',
  leftContent: null,
  position:    'static',
};

export default connect()(Header);
