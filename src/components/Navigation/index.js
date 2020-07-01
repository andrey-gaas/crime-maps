import React from 'react';
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

function Navigation(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <div className={classes.buttonsContainer}>
        <Link to="/cabinet">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to="/map/tape">
          <IconButton>
            <ArtTrackIcon />
          </IconButton>
        </Link>
        <Link to="/map">
          <IconButton>
            <HomeWorkIcon />
          </IconButton>
        </Link>
        <Link to="/map/recommendations">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Link>
        <Link to="/cabinet/gossip">
          <IconButton>
            <PlusOneIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
