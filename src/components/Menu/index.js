import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DesctopMenu from './Desctop';
import Mobile from './Mobile';
import { fetchCities, setModal } from '../../store/AC/cities';

function Menu(props) {
  const {
    fetchCities,
    setModal,
    selectedCity,
    citiesList,
    loading,
  } = props;
  return (
    <nav>
      <DesctopMenu
        selectedCityId={selectedCity}
        citiesList={citiesList}
        loading={loading}
        fetchCities={fetchCities}
        setModal={setModal}
      />
      <Mobile
        loading={loading}
        fetchCities={fetchCities}
        setModal={setModal}
      />
    </nav>
  );
}

Menu.propTypes = {
  fetchCities: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  selectedCity: PropTypes.number.isRequired,
  citiesList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ cities: { selectedCity, data, loading } }) => ({
  selectedCity,
  citiesList: data,
  loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCities,
  setModal,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
