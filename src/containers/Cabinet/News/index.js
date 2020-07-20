import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography, Button, Paper } from '@material-ui/core';
import Context from '../../../Context';
import Header from '../../../components/Header';
import Loader from '../../../components/Loader';
import Select from './SelectCity';
import useStyles from './styles';

function News(props) {
  const {
    /* news, */
    isLoading,
    cities,
    citiesLoading,
    selectedCityId,
  } = props;

  const [selectedCity, changeSelectedCity] = useState(selectedCityId);

  const classes = useStyles();
  const { fetchNewsForCabinet, fetchCities } = useContext(Context);

  useEffect(() => {
    fetchNewsForCabinet();
  }, [fetchNewsForCabinet]);

  useEffect(() => {
    if (isLoading) fetchCities();
  }, [isLoading, fetchCities]);

  return (
    <Fragment>
      <Header>
        <Typography variant="subtitle1">Новости</Typography>
        <div className={classes.grow} />
        <Button variant="contained" color="primary">Создать</Button>
      </Header>
      <Paper className={classes.newsContainer}>
        <div className={classes.header}>
          <Typography variant="h6">Список новостей</Typography>
          <div className={classes.selectContainer}>
            <Select
              isLoading={citiesLoading}
              cities={cities}
              value={selectedCity}
              onChange={changeSelectedCity}
              defaultValue={selectedCityId}
            />
          </div>
        </div>
        {
          isLoading &&
          <Typography variant="h6" className={classes.loadingText}>
            Загрузка списка новостей
            <Loader />
          </Typography>
        }
      </Paper>
    </Fragment>
  );
}

News.propTypes = {
  news:           PropTypes.array.isRequired,
  isLoading:      PropTypes.bool,
  cities:         PropTypes.array.isRequired,
  citiesLoading:  PropTypes.bool.isRequired,
  selectedCityId: PropTypes.number.isRequired,
};

News.defaultProps = {
  isLoading: true,
};

const mapStateToProps = ({ news, system, cities }) => ({
  news:           news.allNews,
  isLoading:      system.cabinetNewsLoading,
  cities:         cities.data,
  citiesLoading:  cities.loading,
  selectedCityId: cities.selectedCityId,
});

export default connect(mapStateToProps)(News);
