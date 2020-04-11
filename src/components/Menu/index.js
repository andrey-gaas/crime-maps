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
    selectedCityId,
    citiesList,
    loading,
  } = props;

  const selectedCity = citiesList.find(city => city.id === selectedCityId);

  return (
    <nav>
      <DesctopMenu
        selectedCity={selectedCity}
        loading={loading}
        fetchCities={fetchCities}
        setModal={setModal}
      />
      <Mobile
        selectedCity={selectedCity}
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
  selectedCityId: PropTypes.number.isRequired,
  citiesList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ cities: { selectedCity, data, loading } }) => ({
  selectedCityId: selectedCity,
  citiesList: data,
  loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCities,
  setModal,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
