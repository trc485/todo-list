import React, { useState, forwardRef } from 'react';
import { noop } from 'ramda-extension';
import PropTypes from 'prop-types';

/**API**/
// value: string
// placeholder: string
// onBlur: function(value)
// onSubmit: function(value)
// onChange: function(value)


const EditTextValue = forwardRef(({
                                      value = '',
                                      placeholder = '',
                                      onBlur = noop,
                                      onSubmit = noop,
                                      onChange = noop,
                                  }, ref) => {

    const [state, setState] = useState(value);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(state);
            }}
        >
            <input
                type="text"
                name="edit-text"
                placeholder={placeholder}
                ref={ref}
                value={state}
                onChange={(e) => {
                    setState(e.target.value);
                    onChange(state);
                }}
                onBlur={() => onBlur(state)}
            />
        </form>
    );
});

EditTextValue.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
};

export default EditTextValue;
