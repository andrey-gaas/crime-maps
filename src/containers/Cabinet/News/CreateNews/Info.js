import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import {
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { newsTypes } from '../../../../constants/news';
import Context from '../../../../Context';
import useStyles from './styles';

function Info(props) {
  const {
    title,
    text,
    city,
    type,
    date,
    time,
    selectedCityId,
    cities,
  } = props;
  const { changeField } = useContext(Context);
  const classes = useStyles();

  const handleChange = ({ target }) => {
    changeField(target.name, target.value);
  };

  // eslint-disable-next-line
  useEffect(() => {
    changeField('createNewsDate', date); 
    changeField('createNewsTime', time);
  }, [changeField, date, time]);

  return (
    <Fragment>
      <Divider />
      <TextField
        label="Заголовок"
        value={title}
        onChange={handleChange}
        name="createNewsTitle"
        fullWidth
        className={classes.textField}
      />

      <TextField
        label="Текст"
        value={text}
        onChange={handleChange}
        name="createNewsText"
        fullWidth
        className={classes.textField}
        multiline
        rows={2}
        rowsMax={7}
        variant="outlined"
      />

      <FormControl fullWidth className={classes.textField}>
        <InputLabel id="city">
          Укажите город
        </InputLabel>
        <Select
          defaultValue={selectedCityId}
          value={city}
          labelId="city"
          name="createNewsCity"
          onChange={handleChange}
        >
          {
            cities.map(city => <MenuItem key={city.id} value={city.id}>{city.name}</MenuItem>)
          }
        </Select>
      </FormControl>

      <FormControl fullWidth className={classes.textField}>
        <InputLabel id="type">
          Укажите тип происшествия
        </InputLabel>
        <Select
          value={type}
          labelId="type"
          name="createNewsType"
          onChange={handleChange}
        >
          {
            newsTypes.map(
              ({ type, name }) =>
                <MenuItem key={type} value={type}>{name}</MenuItem>
            )
          }
        </Select>
      </FormControl>

      <div className={classes.dateContainer}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date"
            label="Дата"
            value={date}
            onChange={e => changeField('createNewsDate', +e)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time"
            label="Время"
            value={time}
            onChange={e => changeField('createNewsTime', +e)}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            ampm={false}
          />
        </MuiPickersUtilsProvider>
      </div>
    </Fragment>
  );
}

Info.propTypes = {
  title:          PropTypes.string,
  text:           PropTypes.string,
  city:           PropTypes.any,
  type:           PropTypes.any,
  date:           PropTypes.number,
  time:           PropTypes.number,
  selectedCityId: PropTypes.number.isRequired,
  cities:         PropTypes.array.isRequired,
};

Info.defaultProps = {
  title: '',
  text:  '',
  city:  '',
  type:  '',
  date:  Date.now(),
  time:  Date.now(),
};

const mapStateToProps = ({ forms, cities }) => ({
  title:          forms.createNewsTitle,
  text:           forms.createNewsText,
  city:           forms.createNewsCity,
  type:           forms.createNewsType,
  date:           forms.createNewsDate,
  time:           forms.createNewsTime,
  selectedCityId: cities.selectedCityId,
  cities:         cities.data,
});

export default connect(mapStateToProps)(Info);
