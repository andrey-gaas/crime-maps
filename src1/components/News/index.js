import React, { useContext, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import {
  Close as CloseIcon,
  Visibility as VisibilityIcon,
} from '@material-ui/icons';
import Context from '../../Context';
import useStyles from './styles';

function getDate(timestamp) {
  const date = new Date(timestamp);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;

  return `${hours}:${minutes} ${day}.${month}.${year}`;
}

function News(props) {
  const { news, newsId, redirect } = props;
  const { fetchNews, setActiveNews } = useContext(Context);

  const classes = useStyles();
  const date = news instanceof Object ? getDate(news.date) : null;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!news) {
      fetchNews(newsId);
    }
  }, [fetchNews, news, newsId]);

  const close = () => {
    redirect('/map');
    setActiveNews(null);
  };

  return (
    <Dialog
      open
      onClose={close}
      maxWidth="md"
      fullWidth
      fullScreen={fullScreen}
      className={classes.root}
    >
      {
        news && !news.error && 
          <Fragment>
            <DialogTitle className={classes.titleContainer}>
              {news.title}
              <IconButton onClick={close} className={classes.closeButton}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <div className={classes.infoContainer}>
                <Typography variant="body1" className={classes.date}>{date}</Typography>
                <Typography variant="body1" className={classes.views}>{news.views} <VisibilityIcon className={classes.viewsIcon} /></Typography>
              </div>
              <Typography variant="body1">{news.text}</Typography>
              <div className={classes.sourcesContainer}>
                <Typography variant="h6">Источники:</Typography>
                <div className={classes.sourceBorder} />
                {
                  news.sources.map((source, i) => <Link key={i} href={source.link}>{source.name}</Link>)
                }
              </div>
            </DialogContent>
          </Fragment>
      }
      {
        news && news.error &&
          <DialogContent className={classes.container}>
            <IconButton onClick={close} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">
              {news.error}
            </Typography>
          </DialogContent>
      }
      {
        !news &&
          <DialogContent className={classes.container}>
            <IconButton onClick={close} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">
              Загрузка
            </Typography>
          </DialogContent>
      }
    </Dialog>
  );
};

News.propTypes = {
  news:     PropTypes.any,
  newsId:   PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired,
};

const mapStateToProps = ({ news }) => ({
  news: news.activeNews,
});

export default connect(mapStateToProps)(News);
