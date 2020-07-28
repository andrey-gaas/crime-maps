import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
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
  Check as CheckIcon,
} from '@material-ui/icons';
import Context from '../../Context';
import Loader from '../../components/Loader';
import useStyles from './styles';

function CitiesSelector(props) {
  const { isOpen, loading, cities } = props;
  const [selectedCityId, setSelectedCityId] = useState(null);
  const { toggleCities, fetchCities, changeCoordinates, changeCity } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  const handleClick = id => {
    const city = cities.find(city => city.id === id);
    localStorage.setItem('selectedCity', id);
    batch(() => {
      changeCity(id);
      toggleCities();
      changeCoordinates(city.lat, city.lng);
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={toggleCities}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle className={classes.title}>
        Выберите город
        <IconButton
          onClick={toggleCities}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {
          loading &&
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.loadingText}
          >
            Загрузка списка городов
            <Loader />
          </Typography>
        }

        {
          !loading &&
          <List component="nav">
            {
              cities.map(
                city =>
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
        }
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={() => handleClick(selectedCityId)} disabled={selectedCityId === null}>Подтвердить</Button>
      </DialogActions>
    </Dialog>
  );
}

CitiesSelector.propTypes = {
  isOpen:         PropTypes.bool.isRequired,
  loading:        PropTypes.bool.isRequired,
  cities:         PropTypes.array.isRequired,
};

const mapStateToProps = ({ cities }) => ({
  loading:        cities.loading,
  cities:         cities.data,
});

export default connect(mapStateToProps)(CitiesSelector);
