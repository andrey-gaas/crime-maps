import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  List,
} from '@material-ui/core';
import Header from '../../components/Header';
import Menu from '../../components/ResponsiveMenu';
import useStyles from './styles';
import {
  ROLE_ADMIN,
  ROLE_MODERATOR,
  ROLE_USER,
} from '../../constants/user';
import {
  UserMenu,
  ModeratorMenu,
  AdminMenu,
} from './getMenu';

function Cabinet(props) {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  
  const {
    history,
    role,
  } = props;

  return (
    <div className={classes.root}>
      <Header title="Личный кабинет" goBack={history.goBack} className={classes.appBar} />
      <Menu
        isOpenMobile={isOpen}
        onClose={() => setOpen(false)}
        toolbar
      >
        <List component="nav" aria-label="user menu actions">
          {role === ROLE_ADMIN && <AdminMenu />}
          {role === ROLE_MODERATOR && <ModeratorMenu />}
          {role === ROLE_USER && <UserMenu />}
        </List>
      </Menu>
    </div>
  );
}

Cabinet.propTypes = {
  history: PropTypes.object.isRequired,
  role:    PropTypes.number,
};

Cabinet.defaultProps = {
  role: ROLE_USER,
};

const mapStateToProps = ({ user }) => ({
  role: user.role,
}); 

export default connect(mapStateToProps)(Cabinet);
