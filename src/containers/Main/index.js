import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Fab } from '@material-ui/core';
import { NearMe as NearMeIcon } from '@material-ui/icons';
import Menu from '../../components/Menu';
import Map from '../../components/Map';
import CitiesSelector from '../../components/CitiesSelector';
import useStyles from './styles';
import { changeCoordinates } from '../../store/AC/map';

function Main(props) {
  const {
    changeCoordinates,
    geodata,
  } = props;
  const classes = useStyles();

  console.log(geodata);

  return (
    <div className={classes.root}>
      <Menu />
      <Map />
      <CitiesSelector />
      <Fab
        color="primary"
        size="large"
        className={classes.buttonUserPosition}
        onClick={() => changeCoordinates(geodata.coords.latitude, geodata.coords.longitude)}
        disabled={geodata === null}
      >
        <NearMeIcon />
      </Fab>
    </div>
  );
}

Main.propTypes = {
  changeCoordinates: PropTypes.func.isRequired,
  geodata: PropTypes.object,
};

const mapStateToProps = ({ geodata }) => ({ geodata: geodata.geodata });

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCoordinates,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
