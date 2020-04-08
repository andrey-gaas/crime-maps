import React from 'react';
import DesctopMenu from './Desctop';
/* import { Menu as MenuIcon } from '@material-ui/icons'; */

function Menu() {
  return (
    <nav>
      <DesctopMenu />
      {/* <Hidden mdUp implementation="css">
        <Fab color="primary" className={classes.buttonMenu} onClick={mobileMenuToogler}>
          <MenuIcon />
        </Fab>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={mobileMenuToogler}
        >
          asdasdasds
        </Drawer>
      </Hidden> */}
    </nav>
  );
}

export default Menu;
