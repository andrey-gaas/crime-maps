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
  Snackbar,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import useStyles from './styles';
import Header from '../../components/Header';
import { changeField } from '../../store/AC/forms';
import {
  validateNewName as validateName,
  validateNewEmail as validateEmail,
  validateNewPassword as validatePassword,
} from '../../store/AC/settings';

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
    isDisabledNameButton,
    isDisabledEmailButton,
    isDisabledPasswordButton,
    changeField,
    validateName,
    validateEmail,
    validatePassword,
    snackbar,
  } = props;
  const classes = useStyles();

  const handleChange = ({ target }) => {
    changeField(target.name, target.value);
    changeField(target.name + 'Error', '');
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
                disabled={isDisabledNameButton}
                onClick={validateName}
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
                onClick={validateEmail}
                disabled={isDisabledEmailButton}
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
                disabled={isDisabledPasswordButton}
                onClick={validatePassword}
              >
                Сохранить
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>

      <Snackbar
        open={!!snackbar}
        message={snackbar}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      />
    </Fragment>
  );
}

Settings.propTypes = {
  isAuth:                   PropTypes.bool.isRequired,
  name:                     PropTypes.string,
  nameError:                PropTypes.string,
  email:                    PropTypes.string,
  emailError:               PropTypes.string,
  oldPassword:              PropTypes.string,
  oldPasswordError:         PropTypes.string,
  newPassword:              PropTypes.string,
  newPasswordError:         PropTypes.string,
  snackbar:                 PropTypes.string,
  isDisabledNameButton:     PropTypes.bool,
  isDisabledEmailButton:    PropTypes.bool,
  isDisabledPasswordButton: PropTypes.bool,
  changeField:              PropTypes.func.isRequired,
  validateName:             PropTypes.func.isRequired,
  validateEmail:            PropTypes.func.isRequired,
  validatePassword:         PropTypes.func.isRequired,
};

Settings.defaultProps = {
  name:                     '',
  nameError:                '',
  email:                    '',
  emailError:               '',
  oldPassword:              '',
  oldPasswordError:         '',
  newPassword:              '',
  newPasswordError:         '',
  snackbar:                 '',
  isDisabledNameButton:     false,
  isDisabledEmailButton:    false,
  isDisabledPasswordButton: false,
};

const mapStateToProps = ({ forms, user, system }) => ({
  isAuth:                   user.isAuth,
  snackbar:                 system.settingSnackbar,
  name:                     forms.settingsName,
  nameError:                forms.settingsNameError,
  email:                    forms.settingsEmail,
  emailError:               forms.settingsEmailError,
  oldPassword:              forms.settingsOldPassword,
  oldPasswordError:         forms.settingsOldPasswordError,
  newPassword:              forms.settingsNewPassword,
  newPasswordError:         forms.settingsNewPasswordError,
  isDisabledNameButton:     forms.settingsNameButtonDisabled,
  isDisabledEmailButton:    forms.settingsEmailButtonDisabled,
  isDisabledPasswordButton: forms.settingsPasswordButtonDisabled,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeField,
  validateName,
  validateEmail,
  validatePassword,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
