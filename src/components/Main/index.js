import React from 'react';
import PropTypes from 'prop-types';
import {
  Fab,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import {
  NearMe as NearMeIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon, 
} from '@material-ui/icons';
import DesctopMenu from '../../containers/DesctopMenu';
import useStyles from './styles';

function Main(props) {
  const {
    history,
    location,
    userIconDisabled: isDisabled,
    isSelectorOpen,
    viewMe,
    zoomIn,
    zoomOut,
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DesctopMenu location={location} />
      {/*  isSelectorOpen && <CitiesSelector isOpen={isSelectorOpen} />  */}
      <Fab
        color="primary"
        size="large"
        className={classes.buttonUserPosition}
        disabled={isDisabled}
        onClick={viewMe}
      >
        <NearMeIcon />
      </Fab>
      <div className={classes.zoomButtonsContainer}>
        <ButtonGroup orientation="vertical">
          <Button variant="contained" onClick={zoomIn}>
            <ZoomInIcon />
          </Button>
          <Button variant="contained" onClick={zoomOut}>
            <ZoomOutIcon />
          </Button>
        </ButtonGroup>
      </div>
      {/* <Map redirect={history.push} /> */}

      {/* <Route path="/map/news/:newsId" render={({ match }) => <News newsId={match.params.newsId} redirect={history.push} />} /> */}
    </div>
  );
}

Main.propTypes = {
  location:         PropTypes.object.isRequired,
  history:          PropTypes.object.isRequired,
  userIconDisabled: PropTypes.bool.isRequired,
  isSelectorOpen:   PropTypes.bool.isRequired,
  viewMe:           PropTypes.func.isRequired,
  zoomIn:           PropTypes.func.isRequired,
  zoomOut:          PropTypes.func.isRequired,
};

export default Main;