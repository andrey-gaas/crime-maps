import React, { useEffect } from 'react';
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
import useStyles from './styles';

function Main(props) {
  const { geodata } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        size="large"
        className={classes.buttonUserPosition}
        disabled={geodata === null}
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
