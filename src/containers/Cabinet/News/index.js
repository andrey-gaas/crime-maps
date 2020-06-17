import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Typography,
  Paper,
  IconButton,
} from '@material-ui/core';
import {
  Add as AddIcon,
  Loop as LoopIcon,
} from '@material-ui/icons';
import Header from '../../../components/Header';
import useStyles from './styles';
import { changeField } from '../../../store/AC/forms';
import { fetchAllIncidents } from '../../../store/AC/incidents';

import List from './List';
import CreateNews from './CreateNews';

function News(props) {
  const {
    isLoading,
    fetchAllIncidents,
    selectedCityId,
    news,
  } = props;
  const classes = useStyles();

  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    if (isLoading) {
      fetchAllIncidents(selectedCityId);
    }
  }, [isLoading, fetchAllIncidents, selectedCityId]);

  return (
    <Fragment>
      <Header>
        <Typography variant="subtitle1">Новости</Typography>
        <IconButton color="primary" className={classes.addButton} onClick={() => setOpen(true)}>
          <AddIcon />
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
        { !isLoading && news.length > 0 && <List news={news} />}
      </Paper>
      <CreateNews
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
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
