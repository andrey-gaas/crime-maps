import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect, batch } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from '@material-ui/core';
import {
  Close as CloseIcon,
  Loop as LoopIcon,
  Check as CheckIcon,
} from '@material-ui/icons';
import { setModal, changeCity } from '../../store/AC/cities';
import { changeCoordinates } from '../../store/AC/map';
import useStyles from './styles';

function CitiesSelector(props) {
  const [selectedCityId, setSelectedCityId] = useState(null);
  const handleClick = id => {
    const city = cities.find(city => city.id === id);
    localStorage.setItem('selectedCity', id);
    batch(() => {
      changeCity(id);
      setModal(false);
      changeCoordinates(city.lat, city.lng);
    });
  };
  const classes = useStyles();
  const {
    isOpen,
    loading,
    setModal,
    cities,
    changeCity,
    changeCoordinates,
  } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={() => setModal(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle className={classes.title}>
        Выберите город
        <IconButton onClick={() => setModal(false)} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {
          loading && (
            <Typography variant="h6" color="textSecondary" className={classes.loadingText}>
              Загрузка списка городов
              <LoopIcon className={classes.rotate} />
            </Typography>
          )
        }
        {
          !loading && (
            <List component="nav">
              {
                cities.map(city =>
                  <ListItem
                    button
                    key={city.id}
                    selected={city.id === selectedCityId}
                    onClick={() => setSelectedCityId(city.id)}
                  >
                    <ListItemText>{city.name}</ListItemText>
                    {
                      city.id === selectedCityId &&
                        <ListItemSecondaryAction>
                          <IconButton>
                            <CheckIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                    }
                  </ListItem>
                )
              }
            </List>
          )
        }
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={() => handleClick(selectedCityId)} disabled={selectedCityId === null}>Подтвердить</Button>
      </DialogActions>
    </Dialog>
  );
}

CitiesSelector.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  cities: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeCoordinates: PropTypes.func.isRequired,
};

const mapStateToProps = ({ cities: {
  isSelectorOpen,
  data,
  loading,
  error,
}}) => ({
  isOpen: isSelectorOpen,
  cities: data,
  loading,
  error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setModal,
  changeCity,
  changeCoordinates,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CitiesSelector);
