import React, { useState, forwardRef } from 'react';

const EditTextValue = forwardRef(({
                                      originalValue = '',
                                      placeholder = '',
                                      onBlur,
                                      onSubmit,
                                      onChange,
                                  }, ref) => {

    const [value, setValue] = useState(originalValue);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(value);
            }}
        >
            <input
                type="text"
                name="edit-text"
                placeholder={placeholder}
                ref={ref}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange();
                }}
                onBlur={onBlur}
            />
        </form>
    );
});

export default EditTextValue;
