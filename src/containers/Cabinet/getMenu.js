import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  AddCircle as AddCircleIcon,
  AddBox as AddBoxIcon,
  Settings as SettingsIcon,
  Forum as ForumIcon,
  History as HistoryIcon,
  LocationCity as LocationCityIcom,
  People as PeopleIcon,
  List as ListIcon,
} from '@material-ui/icons';
import useStyles from './styles';

export function UserMenu () {
  const classes = useStyles();
  return (
    <Fragment>
      <Link to="/cabinet" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Моя страница</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet/create-gossip" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText>Создать слух</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/settings" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Настройки</ListItemText>
        </ListItem>
      </Link>
    </Fragment>
  );
};

export function ModeratorMenu() {
  const classes = useStyles();
  return (
    <Fragment>
      <Link to="/cabinet" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Моя страница</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/cabinet/create-news" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText>Создать новость</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet/news-history" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText>История новостей</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet/moderation-gossip" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText>Модерация слухов</ListItemText>
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
      <Link to="/settings" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Настройки</ListItemText>
        </ListItem>
      </Link>
    </Fragment>
  );
};


export function AdminMenu () {
  const classes = useStyles();
  return (
    <Fragment>
      <Link to="/cabinet" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Моя страница</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/cabinet/create-gossip" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText>Создать слух</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet/moderation-gossip" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText>Модерация слухов</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet/create-news" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText>Создать новость</ListItemText>
        </ListItem>
      </Link>
      <Link to="/cabinet/news-history" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText>История новостей</ListItemText>
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
      <Link to="/settings" className={classes.linkMenu}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Настройки</ListItemText>
        </ListItem>
      </Link>
    </Fragment>
  );
};