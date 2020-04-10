import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core';
import {
  Close as CloseIcon,
  Loop as LoopIcon,
} from '@material-ui/icons';
import { setModal } from '../../store/AC/cities';
import useStyles from './styles';

function CitiesSelector(props) {
  const classes = useStyles();
  const {
    isOpen,
    loading,
    setModal,
    cities,
  } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={() => setModal(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle className={classes.title}>
        Выберите город
        <IconButton onClick={() => setModal(false)} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {
          loading && (
            <Typography variant="h6" color="textSecondary" className={classes.loadingText}>
              Загрузка списка городов
              <LoopIcon className={classes.rotate} />
            </Typography>
          )
        }
        {
          !loading && (
            <List component="nav">
              {
                cities.map(city =>
                  <ListItem button key={city.id}>
                    <ListItemText>{city.name}</ListItemText>
                  </ListItem>
                )
              }
            </List>
          )
        }
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button>Подтвердить</Button>
      </DialogActions>
    </Dialog>
  );
}

CitiesSelector.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  cities: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired
};

const mapStateToProps = ({ cities: {
  isSelectorOpen,
  data,
  loading,
  error,
}}) => ({
  isOpen: isSelectorOpen,
  cities: data,
  loading,
  error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setModal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CitiesSelector);
