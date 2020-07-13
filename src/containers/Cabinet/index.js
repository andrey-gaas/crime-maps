import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Menu from '../../components/ResponsiveMenu';
import useStyles from './styles';

function Cabinet(props) {
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <Fragment>
      <Menu
        isOpenMobile={isOpen}
        onClose={() => setOpen(false)}
      >
        Menu
      </Menu>
      <div className={classes.content}>
        <h1>CONTENT</h1>
      </div>
    </Fragment>
  );
}

export default connect()(Cabinet);
