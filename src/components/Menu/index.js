import React from 'react';
import DesctopMenu from './Desctop';
import Mobile from './Mobile';

function Menu() {
  return (
    <nav>
      <DesctopMenu />
      <Mobile />
    </nav>
  );
}

export default Menu;
