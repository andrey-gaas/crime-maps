import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import useStyles from './styles';

function Person(props) {
  const classes = useStyles();
  
  const {
    history,
  } = props;

  return (
    <Header title="Личный кабинет" goBack={history.goBack} />
  );
}

Person.propTypes = {
  history: PropTypes.object.isRequired,
};

export default connect()(Person);
