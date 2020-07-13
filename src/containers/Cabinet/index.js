import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from '../../components/ResponsiveMenu';
import useStyles from './styles';

import Profile from './Profile';

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
        <Switch>
          <Route exact path="/cabinet" component={Profile} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default Cabinet;
