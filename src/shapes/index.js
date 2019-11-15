// This files contains reusable propTypes

import PropTypes from 'prop-types';

export const todoPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
});

export const todosPropType = PropTypes.arrayOf(todoPropType);
