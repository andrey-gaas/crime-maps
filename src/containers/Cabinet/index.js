import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import useStyles from './styles';

function Cabinet(props) {
  return (
    <h1>Cabinet</h1>
  );
}

export default connect()(Cabinet);
