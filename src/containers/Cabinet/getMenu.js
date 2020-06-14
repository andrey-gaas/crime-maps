import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  AddBox as AddBoxIcon,
  Settings as SettingsIcon,
  Forum as ForumIcon,
  LocationCity as LocationCityIcom,
  People as PeopleIcon,
  Map as MapIcon,
} from '@material-ui/icons';
import useStyles from './styles';

export function UserMenu () {
  const classes = useStyles();
  return (
    <List>
      <Link to="/" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText>Карта</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/cabinet" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Моя страница</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet/gossip" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText>Слухи</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/cabinet/settings" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Настройки</ListItemText>
        </ListItem>
      </Link>
    </List>
  );
};

export function ModeratorMenu() {
  const classes = useStyles();
  return (
    <List>
      <Link to="/" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText>Карта</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Моя страница</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/cabinet/news" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText>Новости</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet/gossip" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText>Слухи</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/cabinet/cities" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <LocationCityIcom />
          </ListItemIcon>
          <ListItemText>Города</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet/users" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText>Пользователи</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/cabinet/settings" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Настройки</ListItemText>
        </ListItem>
      </Link>
    </List>
  );
};


export function AdminMenu () {
  const classes = useStyles();
  return (
    <List>
      <Link to="/" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText>Карта</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Моя страница</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/cabinet/news" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText>Новости</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet/gossip" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText>Слухи</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/cabinet/cities" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <LocationCityIcom />
          </ListItemIcon>
          <ListItemText>Города</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet/users" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText>Пользователи</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/cabinet/settings" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Настройки</ListItemText>
        </ListItem>
      </Link>
    </List>
  );
};