import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography, Button, Paper, Divider } from '@material-ui/core';
import Context from '../../../Context';
import Header from '../../../components/Header';
import Loader from '../../../components/Loader';
import Select from './SelectCity';
import List from './List';
import CreateNews from './CreateNews';
import useStyles from './styles';

function News(props) {
  const {
    news,
    isCityLoading,
    cities,
    citiesLoading,
    selectedCityId,
  } = props;

  const [selectedCity, changeSelectedCity] = useState(selectedCityId);
  const [isOpen, setOpen] = useState(false);

  const classes = useStyles();
  const { fetchCabinetNews, fetchCities, removeNews } = useContext(Context);

  useEffect(() => {
    fetchCabinetNews(selectedCity);
  }, [fetchCabinetNews, selectedCity]);

  useEffect(() => {
    if (isCityLoading) fetchCities();
  }, [isCityLoading, fetchCities]);

  return (
    <Fragment>
      <Header>
        <Typography variant="subtitle1">Новости</Typography>
        <div className={classes.grow} />
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Создать</Button>
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
        <Divider />
        {
          news === null &&
            <Typography variant="subtitle1" className={classes.loadingText}>
              Загрузка списка новостей
              <Loader />
            </Typography>
        }
        { news && news.length ? <List list={news} onRemove={removeNews} /> : null }
        {
          news && !news.length ? 
            <Typography variant="subtitle1" className={classes.loadingText}>
              Новостей нет
            </Typography>
            : null
        }
        
      </Paper>

      <CreateNews isOpen={isOpen} onClose={() => setOpen(false)} />
    </Fragment>
  );
}

News.propTypes = {
  news:           PropTypes.array,
  isCityLoading:  PropTypes.bool,
  cities:         PropTypes.array.isRequired,
  citiesLoading:  PropTypes.bool.isRequired,
  selectedCityId: PropTypes.number.isRequired,
};

News.defaultProps = {
  isCityLoading: true,
};

const mapStateToProps = ({ news, system, cities }) => ({
  news:           news.cabinetNews,
  isCityLoading:  system.cabinetNewsLoading,
  cities:         cities.data,
  citiesLoading:  cities.loading,
  selectedCityId: cities.selectedCityId,
});

export default connect(mapStateToProps)(News);
