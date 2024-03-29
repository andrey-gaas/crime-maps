import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  Button,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import Context from '../../../../Context';
import Loader from '../../../../components/Loader';
import useStyles from './styles';

import Info from './Info';
import Media from './Media';
import Position from './Position';
import Sources from './Sources';
import Done from './Done';

const steps = ['Информация', 'Медиафайлы', 'Местоположение', 'Источники', 'Готово'];

function getContent(activeStep) {
  switch(activeStep) {
    case 0:
      return <Info />;
    case 1:
      return <Media />;
    case 2:
      return <Position />;
    case 3:
      return <Sources />;
    case 4:
      return <Done />;
    default:
      return null;
  }
}
function Create(props) {
  const { isOpen, onClose, requestStatus } = props;
  const { createNews } = useContext(Context);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const done = () => {
    onClose();
    setActiveStep(0);
  };

  useEffect(() => {
    if (requestStatus === 'success') {
      setActiveStep(4);
    }
  }, [requestStatus]);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle className={classes.titleContainer}>
        Создание новости
        <IconButton onClick={onClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Stepper activeStep={activeStep} alternativeLabel>
          {
            steps.map((step, i) => (
              <Step key={i}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))
          }
        </Stepper>
        <div>
          {getContent(activeStep)}
        </div>
      </DialogContent>

      <DialogActions>
        {
          activeStep < 3 &&
          <div className={classes.buttonsContainer}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setActiveStep(activeStep - 1)}
              disabled={!activeStep}
            >
              Назад
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Далее
            </Button>
          </div>
        }
        {
          activeStep === 3 &&
          <div className={classes.buttonsContainer}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setActiveStep(activeStep - 1)}
            >
              Назад
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={createNews}
              disabled={requestStatus === 'request'}
            >
              {
                requestStatus === 'request' ?
                  <Loader /> : 'Создать новость'
              }
            </Button>
          </div>
        }

        {
          activeStep === 4 &&
          <Button
            variant="contained"
            color="secondary"
            onClick={done}
          >
            Завершить
          </Button>
        }
      </DialogActions>
    </Dialog>
  );
}

Create.propTypes = {
  isOpen:        PropTypes.bool.isRequired,
  onClose:       PropTypes.func.isRequired,
  requestStatus: PropTypes.string,
};

Create.defaultProps = {
  requestStatus: '',
};

const mapStateToProps = ({ system }) => ({
  requestStatus: system.createNewsRequestStatus,
});

export default connect(mapStateToProps)(Create);
