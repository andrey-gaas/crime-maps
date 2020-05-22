import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container,
} from '@material-ui/core';
import useStyles from './styles';
import Header from '../../components/Header';

function Settings(props) {
  const { history } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <Header
        title="Настройки"
        goBack={history.goBack}
      />
      <Container>
        sdasd
      </Container>
    </Fragment>
  );
}

Settings.propTypes = {};

Settings.defaultProps = {};

export default connect()(Settings);
