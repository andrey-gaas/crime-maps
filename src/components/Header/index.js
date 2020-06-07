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
  } = props;
  const classes = useStyles();
  
  return (
    <AppBar position="static" className={className}>
      <Toolbar>
        {
          goBack &&
            <IconButton onClick={goBack} color="inherit" className={classes.backIcon}>
              <ArrowBackIcon />
            </IconButton>
        }
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  goBack: PropTypes.func,
  className: PropTypes.string,
};

Header.defaultProps = {
  title: 'Crime Maps',
  goBack: null,
  className: '',
};

export default connect()(Header);
