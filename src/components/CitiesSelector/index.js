import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Dialog
} from '@material-ui/core';

function CitiesSelector(props) {
  const { isOpen } = props;
  return (
    <Dialog open={isOpen}>
      sadsdads
    </Dialog>
  );
}

CitiesSelector.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
};

const mapStateToProps = ({ cities }) => ({
  isOpen: cities.isSelectorOpen,
  data: cities.data
});

export default connect(mapStateToProps)(CitiesSelector);
