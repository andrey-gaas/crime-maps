import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect, batch } from 'react-redux';
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
import Context from '../../Context';
import useStyles from './styles';

function Main(props) {
  const { geodata } = props;
  const classes = useStyles();
  const {
    changeCoordinates,
    changeZoom,
    incrementZoom,
    decrementZoom,
  } = useContext(Context);

  const viewMe = () => batch(() => {
    changeCoordinates(geodata.coords.latitude, geodata.coords.longitude);
    changeZoom(16);
  });

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        size="large"
        className={classes.buttonUserPosition}
        disabled={geodata === null}
        onClick={viewMe}
      >
        <NearMeIcon />
      </Fab>
    </div>
  );
}

Main.propTypes = {
  geodata: PropTypes.object,
};

const mapStateToProps = ({ map }) => ({
  geodata: map.geodata,
});

export default connect(mapStateToProps)(Main);
