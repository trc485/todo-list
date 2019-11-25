import React, { useRef, useEffect } from 'react';
import { Form, Input, Button, Icon } from 'antd';
import { reduxForm, Field } from 'redux-form';
import { noop } from 'ramda-extension';
import PropTypes from 'prop-types';

const TextInput = ({input, meta, ...rest}) => {

    const textInputRef = useRef(null);
    console.log(meta);

    useEffect(() => {
        if (textInputRef) {
            textInputRef.current.focus();
        }
    }, []);

    return (
        <Form.Item
            validateStatus={meta.touched && meta.error ? 'error' : ''}
            help={meta.touched && meta.error ? meta.error : ''}
        >
            <Input
                prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
                ref={textInputRef}
                {...input}
                // I need this hack to not fire blur event when clicking cancel btn
                // this hack has to override the onBlur handler prop passed from redux-form
                onBlur={event => {
                    const {relatedTarget} = event;
                    if (relatedTarget && ('btn-cancel-form' === relatedTarget.getAttribute('id'))) {
                        event.preventDefault();
                    } else {
                        input.onBlur(event);
                        textInputRef.current.focus();
                    }
                }}
                {...rest}
                type="text"
            />
        </Form.Item>
    );
};

const EditTextValue = ({
                           handleSubmit = noop,
                           placeholder = '',
                           onBtnCancelClick = noop
                       }) => {
    return (
        <Form
            layout="inline"
            onSubmit={handleSubmit}
        >
            <Field
                component={TextInput}
                name="title"
                placeholder={placeholder}
            />
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    OK
                </Button>
            </Form.Item>
            <Form.Item>
                <Button
                    // this id is needed to not fire blur event when clicking cancel btn
                    id="btn-cancel-form"
                    onClick={onBtnCancelClick}
                >
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
};

EditTextValue.propTypes = {
    placeholder: PropTypes.string,
    handleSubmit: PropTypes.func,
    onBtnCancelClick: PropTypes.func,
};

export default reduxForm({
    // a unique name for the form
    form: 'todo-title',
})(EditTextValue);
