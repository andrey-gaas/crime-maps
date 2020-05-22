import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container,
  Paper,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import Header from '../../components/Header';

function Settings(props) {
  const {
    history,
    name,
    email,
    isAuth,
  } = props;
  const classes = useStyles();

  return (
    !isAuth ? <Redirect to="/sign-in" />:
    <Fragment>
      <Header
        title="Настройки"
        goBack={history.goBack}
      />
      <Container>
        <Typography variant="subtitle1" className={classes.title}>Аккаунт</Typography>
        <Paper elevation={0} className={classes.paper}>
          asdasd
        </Paper>
      </Container>
    </Fragment>
  );
}

Settings.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  isAuth: PropTypes.bool.isRequired,
};

Settings.defaultProps = {
  name: '',
  email: '',
};

const mapStateToProps = ({ user }) => ({
  name:   user.name,
  email:  user.email,
  isAuth: user.isAuth,
});

export default connect(mapStateToProps)(Settings);
