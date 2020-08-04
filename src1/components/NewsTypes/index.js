import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';
import Context from '../../Context';
import getSrcIcon from './getSrcIcon';
import { newsTypes } from '../../constants/news';
import useStyles from './styles';

function NewsTypes(props) {
  const { types } = props;
  const classes = useStyles();

  const { changeNewsTypes } = useContext(Context);

  const activeTypes = JSON.parse(localStorage.getItem('activeTypes')) || types;

  function isActive(currentType) {
    return !!activeTypes.find(({ type }) => type === currentType);
  }

  const handleClick = type => {
    const selectedElement = activeTypes.find(activeType => activeType.type === type.type);
    let newActiveTypes;

    if (selectedElement) {
      newActiveTypes = activeTypes.filter(({ type }) => type !== selectedElement.type);
    } else {
      newActiveTypes = [...activeTypes, type];
    }

    localStorage.setItem('activeTypes', JSON.stringify(newActiveTypes));
    
    changeNewsTypes(type.type);
  };

  return (
    <div className={classes.root}>
      {
        newsTypes.map(
          type =>
            <button className={classes.button} key={type.name} onClick={() => handleClick(type)}>
              <div className={cn(classes.imageContainer, { [classes.active]: isActive(type.type) })}>
                <img alt={type.name} src={getSrcIcon(type.type)} width="100%" />
              </div>
              <span className={classes.label}>{type.name}</span>
            </button>
        )
      }
    </div>
  );
}

NewsTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ map }) => ({
  types: map.showTypes,
});

export default connect(mapStateToProps)(NewsTypes);
