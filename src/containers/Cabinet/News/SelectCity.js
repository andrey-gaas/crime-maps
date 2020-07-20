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
  const { cities, isLoading, selectedCityId } = props;

  return !isLoading ?
    <FormControl>
      <InputLabel id="demo-simple-select-outlined-label">Город</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        label="Age"
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </Select>
    </FormControl> :
    <Typography variant="subtitle1">Загрузка списка городов...</Typography>
}

SelectCity.propTypes = {
  cities:         PropTypes.array.isRequired,
  isLoading:      PropTypes.bool.isRequired,
  selectedCityId: PropTypes.number.isRequired,
};

export default SelectCity;
