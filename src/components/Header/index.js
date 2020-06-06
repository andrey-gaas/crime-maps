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
  } = props;
  const classes = useStyles();
  
  return (
    <AppBar position="static">
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
};

Header.defaultProps = {
  title: 'Crime Maps',
  goBack: null,
};

export default connect()(Header);
