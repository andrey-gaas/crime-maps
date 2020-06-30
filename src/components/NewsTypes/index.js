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

  function isActive(currentType) {
    return !!types.find(({ type }) => type === currentType);
  }

  return (
    <div className={classes.root}>
      {
        newsTypes.map(
          ({ type, name }) =>
            <button className={classes.button} key={name} onClick={() => changeNewsTypes(type)}>
              <div className={cn(classes.imageContainer, { [classes.active]: isActive(type) })}>
                <img alt={name} src={getSrcIcon(type)} width="100%" />
              </div>
              <span className={classes.label}>{name}</span>
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
