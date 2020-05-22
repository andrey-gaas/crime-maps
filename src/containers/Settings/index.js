import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TextField,
  Button,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import useStyles from './styles';
import Header from '../../components/Header';
import { changeField } from '../../store/AC/forms';

function Settings(props) {
  const {
    history,
    name,
    nameError,
    email,
    emailError,
    oldPassword,
    oldPasswordError,
    newPassword,
    newPasswordError,
    isAuth,
    changeField,
  } = props;
  const classes = useStyles();

  const handleChange = ({ target }) => {
    changeField(target.name, target.value);
  };

  return (
    !isAuth ? <Redirect to="/sign-in" />:
    <Fragment>
      <Header
        title="Настройки"
        goBack={history.goBack}
      />
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="body1" className={classes.title}>Аккаунт</Typography>

        <ExpansionPanel className={classes.firstExpansionPanel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Изменить имя
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.formContainer}>
              <TextField
                name="settingsName"
                onChange={handleChange}
                value={name}
                error={!!nameError}
                helperText={nameError}
                className={classes.field}
                label="Введите новое имя"
              />
              <Button
                variant="contained"
                className={classes.button}
                color="primary"
              >
                Сохранить
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Изменить E-Mail
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.formContainer}>
              <TextField
                name="settingsEmail"
                onChange={handleChange}
                value={email}
                error={!!emailError}
                helperText={emailError}
                className={classes.field}
                label="Введите новый E-Mail"
              />
              <Button
                variant="contained"
                className={classes.button}
                color="primary"
              >
                Сохранить
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Изменить пароль
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.formContainer}>
              <TextField
                name="settingsOldPassword"
                onChange={handleChange}
                value={oldPassword}
                error={!!oldPasswordError}
                helperText={oldPasswordError}
                className={classes.fieldPassword}
                type="password"
                label="Введите старый пароль"
              />
              <TextField
                name="settingsNewPassword"
                onChange={handleChange}
                value={newPassword}
                error={!!newPasswordError}
                helperText={newPasswordError}
                className={classes.fieldPassword}
                type="password"
                label="Введите новый пароль"
              />
              <Button
                variant="contained"
                className={classes.button}
                color="primary"
              >
                Сохранить
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    </Fragment>
  );
}

Settings.propTypes = {
  name:             PropTypes.string,
  nameError:        PropTypes.string,
  email:            PropTypes.string,
  emailError:       PropTypes.string,
  isAuth:           PropTypes.bool.isRequired,
  changeField:      PropTypes.func.isRequired,
  oldPassword:      PropTypes.string,
  oldPasswordError: PropTypes.string,
  newPassword:      PropTypes.string,
  newPasswordError: PropTypes.string,
};

Settings.defaultProps = {
  name:  '',
  email: '',
};

const mapStateToProps = ({ forms, user }) => ({
  isAuth:           user.isAuth,
  name:             forms.settingsName,
  nameError:        forms.settingsNameError,
  email:            forms.settingsEmail,
  emailError:       forms.settingsEmailError,
  oldPassword:      forms.settingsPassword,
  oldPasswordError: forms.settingsPasswordError,
  newPassword:      forms.settingsPassword,
  newPasswordError: forms.settingsPassword,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeField,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
