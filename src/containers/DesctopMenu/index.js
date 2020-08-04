import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../../components/DesctopMenu';

function DesctopMenu(props) {
  const { location, isAuth } = props;

  return <Menu location={location} isAuth={isAuth} />;
}

DesctopMenu.propTypes = {
  location: PropTypes.object.isRequired,
  isAuth:   PropTypes.bool.isRequired,
};

const mapStateToProps = ({ user }) => ({
  isAuth: user.isAuth,
});

export default connect(mapStateToProps)(DesctopMenu);
