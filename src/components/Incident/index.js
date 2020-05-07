import React from 'react';
import PropTypes from 'prop-types';
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

function Incident(props) {
  const {
    close,
    incident: {
      title,
      text,
      date: timestamp,
      views,
      sources,
    },
  } = props;

  const classes = useStyles();
  const date = getDate(timestamp);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open
      onClose={close}
      maxWidth="md"
      fullWidth
      fullScreen={fullScreen}
    >
      <DialogTitle className={classes.titleContainer}>
        {title}
        <IconButton onClick={close} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <div className={classes.infoContainer}>
          <Typography variant="body1" className={classes.date}>{date}</Typography>
          <Typography variant="body1" className={classes.views}>{views} <VisibilityIcon className={classes.viewsIcon} /></Typography>
        </div>
        <Typography variant="body1">{text}</Typography>
        <div className={classes.sourcesContainer}>
          <Typography variant="h6">Источники:</Typography>
          <div className={classes.sourceBorder} />
          {
            sources.map((source, i) => <Link key={i} href={source.link}>{source.name}</Link>)
          }
        </div>
      </DialogContent>
    </Dialog>
  );
}

Incident.propTypes = {
  incident: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    coords: PropTypes.array.isRequired,
    media: PropTypes.array.isRequired,
    sources: PropTypes.array.isRequired,
  }).isRequired,
  close: PropTypes.func.isRequired,
};

export default Incident;
