import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from '@material-ui/core';

function ListItemComponent(props) {
  const { isFirst, name } = props;
  return (
    <Fragment>
      { !isFirst && <Divider /> }
      <ListItem button>
        <ListItemText>{name}</ListItemText>
      </ListItem>
    </Fragment>
  );
}

ListItemComponent.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  name:    PropTypes.string.isRequired,
};

export default ListItemComponent;
