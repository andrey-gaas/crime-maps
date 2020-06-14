import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Typography,
  Paper,
  IconButton,
} from '@material-ui/core';
import {
  Add as AddButton,
  Loop as LoopIcon,
} from '@material-ui/icons';
import Header from '../../../components/Header';
import useStyles from './styles';
import { changeField } from '../../../store/AC/forms';
import { fetchAllIncidents } from '../../../store/AC/incidents';

function News(props) {
  const {
    isLoading,
    fetchAllIncidents,
    selectedCityId,
    news,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    if (isLoading) {
      fetchAllIncidents(selectedCityId);
    }
  }, [isLoading, fetchAllIncidents, selectedCityId]);

  return (
    <Fragment>
      <Header>
        <Typography variant="subtitle1">Новости</Typography>
        <IconButton color="primary" className={classes.addButton}>
          <AddButton />
        </IconButton>
      </Header>
      <Paper className={classes.paper}>
        {
          isLoading &&
            <Typography variant="h6" color="textSecondary" className={classes.loadingText}>
              Загрузка списка новостей
              <LoopIcon className={classes.rotate} />
            </Typography>
        }
        {
          !isLoading && news.lenght === 0 && 
            <Typography variant="h6" color="textSecondary" className={classes.loadingText}>
              Список новостей пуст
            </Typography>
        }
      </Paper>
    </Fragment>
  );
}

News.propTypes = {
  isLoading:         PropTypes.bool.isRequired,
  news:              PropTypes.array.isRequired,
  selectedCityId:    PropTypes.number.isRequired,
  fetchAllIncidents: PropTypes.func.isRequired,
};

const mapStateToProps = ({ incidents, cities }) => ({
  isLoading:      incidents.isLoading,
  news:           incidents.data,
  selectedCityId: cities.selectedCity, 
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeField,
  fetchAllIncidents,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(News);

/* 
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

        <Button
          color="secondary"
          variant="contained"
          fullWidth
          className={classes.button}
          onClick={() => setOpen(true)}
        >
          Указать место
        </Button>

      </Paper>

      <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className={classes.dialogTitle}>
          <Typography>Укажите место</Typography>
          <IconButton onClick={() => setOpen(false)} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Map />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary">Подтвердить</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
*/
