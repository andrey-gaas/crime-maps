import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Menu from '../../components/ResponsiveMenu';
import { ROLE_ADMIN, ROLE_MODERATOR, ROLE_USER } from '../../constants/user';
import { UserMenu, ModeratorMenu, AdminMenu } from './Menu';
import Loader from '../../components/Loader';
import useStyles from './styles';

import Profile from './Profile';
import News from './News';

function Cabinet(props) {
  const { role } = props;
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <Fragment>
      <Menu
        isOpenMobile={isOpen}
        onClose={() => setOpen(false)}
      >
        {role === null && <Typography className={classes.loader}>Загрузка меню <Loader /></Typography>}
        {role === ROLE_ADMIN && <AdminMenu />}
        {role === ROLE_MODERATOR && <ModeratorMenu />}
        {role === ROLE_USER && <UserMenu />}
      </Menu>
      <div className={classes.content}>
        <Switch>
          <Route exact path="/cabinet" component={Profile} />
          <Route path="/cabinet/news" component={News} />
        </Switch>
      </div>
    </Fragment>
  );
}

Cabinet.propTypes = {
  role: PropTypes.number,
};

Cabinet.defaultProps = {
  role: null,
};

const mapStateToProps = ({ user }) => ({
  role: user.role,
});

export default connect(mapStateToProps)(Cabinet);
