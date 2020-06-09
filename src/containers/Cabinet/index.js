import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import CreateNews from './CreateNews';

function Person() {
  return (
    <Switch>
      <Route path="/cabinet" exact component={Profile} />
      <Route path="/cabinet/create-news" component={CreateNews} />
    </Switch>
  );
}

export default Person;

/* import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import {
  List,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
} from '@material-ui/icons';
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
import Profile from './Profile';
import CreateNews from './CreateNews';

function Cabinet(props) {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  
  const {
    role,
  } = props;

  return (
    <div className={classes.root}>
      <Header
        title="Личный кабинет"
        className={classes.appBar}
        leftContent={
          <IconButton
            className={classes.mobileMenuButton}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        }
        position="fixed"
      />
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
      <main className={classes.content}>
        <Toolbar />
        
        <Switch>
          <Route path="/cabinet" exact component={Profile} />
          <Route path="/cabinet/create-news" component={CreateNews} />
        </Switch>
      </main>
    </div>
  );
}

Cabinet.propTypes = {
  role: PropTypes.number,
};

Cabinet.defaultProps = {
  role: ROLE_USER,
};

const mapStateToProps = ({ user }) => ({
  role: user.role,
}); 

export default connect(mapStateToProps)(Cabinet);
 */