import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Divider, IconButton } from '@material-ui/core';
import {
  Home as HomeIcon,
  ArtTrack as ArtTrackIcon,
  HomeWork as HomeWorkIcon,
  Search as SearchIcon,
  PlusOne as PlusOneIcon,
} from '@material-ui/icons';
import useStyles from './styles';

const menuItems = [
  { path: "/cabinet", icon: <HomeIcon /> },
  { path: "/map/tape", icon: <ArtTrackIcon /> },
  { path: "/map", icon: <HomeWorkIcon /> },
  { path: "/map/recommendations", icon: <SearchIcon /> },
  { path: "/cabinet/gossip", icon: <PlusOneIcon /> },
];

function Navigation(props) {
  const { location } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <div className={classes.buttonsContainer}>
        {
          menuItems.map(
            (item, i) =>
              <Link key={i} to={item.path}>
                <IconButton className={cn({ [classes.active]: location === item.path })}>
                  {item.icon}
                </IconButton>
              </Link>
          )
        }
      </div>
    </div>
  );
}

Navigation.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Navigation;
