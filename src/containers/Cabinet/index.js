import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
} from '@material-ui/core';
import Header from '../../components/Header';
import useStyles from './styles';

function Cabinet(props) {
  const classes = useStyles();
  
  const {
    history,
  } = props;

  return (
    <Fragment>
      <Header title="Личный кабинет" goBack={history.goBack} />
    </Fragment>
  );
}

Cabinet.propTypes = {
  history: PropTypes.object.isRequired,
};

export default connect()(Cabinet);
