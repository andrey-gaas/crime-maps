import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container,
  Paper,
  Typography,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import useStyles from './styles';
import { incidents } from '../../../constants/incidents';
import { changeField } from '../../../store/AC/forms';

/* 
type,
title,
text,
coords,
sources,
media,
city,
date,
*/

function CreateNews(props) {
  const {
    cities,
    title,
    text,
    type,
    city,
    date,
    time,
    changeField,
  } = props;
  const classes = useStyles();

  const handleChange = ({ target }) => changeField(target.name, target.value);

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h6">Создание новости</Typography>
        <Divider />

        <TextField
          value={title}
          onChange={handleChange}
          label="Заголовок новости"
          name="createNewsTitle"
          className={classes.field}
          fullWidth
        />

        <TextField
          value={text}
          onChange={handleChange}
          label="Текст новости"
          name="createNewsText"
          fullWidth
          multiline
          rows={3}
          rowsMax={15}
          variant="outlined"
          className={classes.field}
        />

        <FormControl className={classes.field}>
          <InputLabel id="type">Тип происшествия</InputLabel>
          <Select
            value={type}
            onChange={handleChange}
            name="createNewsType"
            labelId="type"
          >
            {
              incidents.map(incident => (
                  <MenuItem
                    key={incident.type}
                    value={incident.type}
                  >
                    {incident.name}
                  </MenuItem>
              ))
            }
          </Select>
        </FormControl>

        <FormControl className={classes.field}>
          <InputLabel id="city">Город</InputLabel>
          <Select
            value={city}
            onChange={handleChange}
            name="createNewsCity"
            labelId="city"
          >
            {
              cities.map(city => (
                <MenuItem
                  key={city.id}
                  value={city.id}
                >
                  {city.name}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>

        <div className={classes.dateContainer}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Дата"
              format="dd/MM/yyyy"
              value={date}
              onChange={date => changeField('createNewsDate', +date)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />

            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Время"
              value={time}
              onChange={time => changeField('createNewsTime', +time)}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </MuiPickersUtilsProvider>
        </div>

      </Paper>
    </Container>
  );
}

CreateNews.propTypes = {
  cities:      PropTypes.array,
  changeField: PropTypes.func.isRequired,
  title:       PropTypes.string,
  text:        PropTypes.string,
  type:        PropTypes.any,
  city:        PropTypes.any,
  date:        PropTypes.number,
  time:        PropTypes.number,
};

CreateNews.defaultProps = {
  cities: [],
  title:  '',
  text:   '',
  type:   '',
  city:   '',
  date:   Date.now(),
  time:   Date.now(),
};

const mapStateToProps = ({ cities, forms }) => ({
  cities: cities.data,
  title:  forms.createNewsTitle,
  text:   forms.createNewsText,
  type:   forms.createNewsType,
  city:   forms.createNewsCity,
  date:   forms.createNewsDate,
  time:   forms.createNewsTime,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeField,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateNews);
