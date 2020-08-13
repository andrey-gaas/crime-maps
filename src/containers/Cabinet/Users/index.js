import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Paper,
  Typography,
  List,
  TextField,
} from '@material-ui/core';
import Context from '../../../Context';
import Header from '../../../components/Header';
import ListItem from './ListItem';
import { ROLE_USER } from '../../../constants/user';
import useStyles from './styles';

/* const data = [
  {createdAt: "2020-05-28T18:37:39.641Z",email: "gaas.dron@yandex.ru",id: 0,isBanned: false,name: "Андрей",password: "$2a$10$3ONXvo6xk11sVbnIfc0nd.cFjCbdAOKmi9HqA6U1Cl8RVfUVKCIsW",role: 0,updatedAt: "2020-06-05T16:26:21.704Z",__v: 0,_id: "5ed004f350b71b01b068c3b3"},
  {createdAt: "2020-04-28T18:37:39.641Z",email: "123gaas.dron@yandex.ru",id: 10,isBanned: false,name: "Андрей123",password: "$2a$10$3ONXvo6xk11sVbnIfc0nd.cFjCbdAOKmi9HqA6U1Cl8RVfUVKCIsW",role: 0,updatedAt: "2020-06-05T16:26:21.704Z",__v: 0,_id: "5ed004f350b71b23423468c3b3"},
]; */

function Users(props) {
  const {
    isAuth,
    role,
    userName,
    isLoading,
    usersList,
  } = props;
  const classes = useStyles();
  const {
    fetchCabinetUsers,
    changeField,
  } = useContext(Context);

  if (!isAuth || role === ROLE_USER) {
    return <Redirect to="/map" />;
  }

  const handleChange = ({ target }) => {
    const { value } = target;
    changeField('cabinetSearchUser', value);

    if (value.length >= 6) {
      fetchCabinetUsers(value);
    }
  };

  return (
    <Fragment>
      <Header>
        <Typography variant="subtitle1">Пользователи</Typography>
        <div className={classes.grow} />
        <TextField
          variant="outlined"
          placeholder="Имя пользователя"
          onChange={handleChange}
          value={userName}
        />
      </Header>
      
      <Paper className={classes.paper}>
        {
          isLoading === null &&
          <Typography variant="h6" color="textSecondary" className={classes.text}>Введите имя пользователя в поле.</Typography>
        }
        {
          isLoading !== null && !usersList.length ?
          <Typography variant="h6" color="textSecondary" className={classes.text}>Пользователей с таким именем нет.</Typography>
          : null
        }
        {
          isLoading === false && usersList.length ?
            <List className={classes.listContainer}>
              {
                usersList.map(
                  (user, i) =>
                    <ListItem
                      key={user.id}
                      isFirst={i === 0}
                      name={user.name}
                    />
                )
              }
            </List>
            : null
        }
      </Paper>
    </Fragment>
  );
}

Users.propTypes = {
  isAuth:    PropTypes.bool.isRequired,
  role:      PropTypes.number.isRequired,
  userName:  PropTypes.string,
  isLoading: PropTypes.bool,
  usersList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Users.defaultProps = {
  userName:  '',
  isLoading: null,
};

const mapStateToProps = ({ user, forms, system, cabinet }) => ({
  isAuth:    user.isAuth,
  role:      user.role,
  userName:  forms.cabinetSearchUser,
  isLoading: system.cabinetUsersLoading,
  usersList: cabinet.users,
});

export default connect(mapStateToProps)(Users);
