import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';

function SelectCity(props) {
  const { cities, isLoading, value, onChange, defaultValue } = props;
  const handleChange = e => onChange(e.target.value);

  return !isLoading ?
    <FormControl variant="outlined">
      <InputLabel id="cabinet-city-select">Город</InputLabel>
      <Select
        labelId="cabinet-city-select"
        label="Город"
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
      >
        {
          cities.map(
            city =>
              <MenuItem key={city.id} value={city.id}>{city.name}</MenuItem>
          )
        }
      </Select>
    </FormControl> :
    <Typography variant="subtitle1">Загрузка списка городов...</Typography>
}

SelectCity.propTypes = {
  cities:       PropTypes.array.isRequired,
  isLoading:    PropTypes.bool.isRequired,
  onChange:     PropTypes.func.isRequired,
  value:        PropTypes.number.isRequired,
  defaultValue: PropTypes.number.isRequired,
};

export default SelectCity;
