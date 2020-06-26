import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField, Button, Chip } from '@material-ui/core';
import { Eco as EcoIcon } from '@material-ui/icons';
import { changeField } from '../../../../store/AC/forms';
import useStyles from './styles';

function Source(props) {
  const classes = useStyles();
  const { sources, changeField } = props;

  const [state, setState] = useState({
    name: '',
    link: '',
  });

  const handleChange = ({ target }) => setState({ ...state, [target.name]: target.value });

  const add = () => {
    const { name, link } = state;
    if (!name || !link) return false;

    changeField('createNewsSources', [...sources, { name, link }]);

    setState({ name: '', link: '' });
  };

  const deleteSource = sourceToDelete => {
    const newSources = sources.filter(source => source.name !== sourceToDelete);
    changeField('createNewsSources', newSources);
  };

  return (
    <div>
      <div className={classes.chips}>
        {
          sources.map(
            (source, i) =>
              <Chip
                key={i}
                color="primary"
                onDelete={() => deleteSource(source.name)}
                icon={<EcoIcon />}
                label={source.name}
                className={classes.sourceChip}
              />
          )
        }
      </div>

      <div className={classes.sourceForm}>
        <TextField
          label="Название источника"
          className={classes.sourceName}
          value={state.name}
          name="name"
          onChange={handleChange}
        />
        <TextField
          label="Ссылка"
          className={classes.sourceLink}
          value={state.link}
          name="link"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.sourceButton}
          size="small"
          onClick={add}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
}

Source.propTypes = {
  sources: PropTypes.array,
};

Source.defaultProps = {
  sources: [],
}

const mapStateToProps = ({ forms }) => ({
  sources: forms.createNewsSources,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeField,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Source);
