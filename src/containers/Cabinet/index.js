import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
} from '@material-ui/core';
import Header from '../../components/Header';
import Menu from '../../components/ResponsiveMenu';
import useStyles from './styles';

function Cabinet(props) {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  
  const {
    history,
  } = props;

  return (
    <div className={classes.root}>
      <Header title="Личный кабинет" goBack={history.goBack} className={classes.appBar} />
      <Menu
        isOpenMobile={isOpen}
        onClose={() => setOpen(false)}
        toolbar
      >
        123
      </Menu>
    </div>
  );
}

Cabinet.propTypes = {
  history: PropTypes.object.isRequired,
};

export default connect()(Cabinet);
