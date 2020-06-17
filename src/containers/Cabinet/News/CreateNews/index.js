import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import useStyles from './styles';

import Info from './Info';

const steps = ['Информация', 'Медиафайлы', 'Местоположение', 'Готово'];

function getContent(activeStep) {
  switch(activeStep) {
    case 0:
      return <Info />;
    default:
      return null;
  }
}

function CreateNews(props) {
  const { isOpen, onClose } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const done = () => {
    onClose();
    setActiveStep();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
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
          activeStep !== steps.length - 1 &&
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
          activeStep === steps.length - 1 &&
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

CreateNews.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateNews;
