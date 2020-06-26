import React from 'react';
import PropTypes from 'prop-types';

function List() {
  return (
    <h3>Тут будет история новостей</h3>
  );
}

List.propTypes = {
  news: PropTypes.array.isRequired,
};

export default List;
