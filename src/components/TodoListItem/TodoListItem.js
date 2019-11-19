import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, TodoTitleWrapper, TodoSelectionIconWrapper, TodoIconWrapper, ErrorMessage } from './styled';
import Icon from '../Icon';
import EditTextValue from '../EditTextValue';
import { noop } from 'ramda-extension';

/**API**/
//  title: string
//  selected: bool
//  editing: bool
//  errorMessage: string
//  onBtnSelectionClick: function()
//  onBtnEditClick: function()
//  onBtnDeleteClick: function()
//  onInputTextBlur: function(value)
//  onInputTextOnChange: function(value)
//  onInputTextSubmit: function(value)

const TodoListItem = ({
                          title = '',
                          selected = false,
                          editing = false,
                          errorMessage = '',
                          onBtnSelectionClick = noop,
                          onBtnEditClick = noop,
                          onBtnDeleteClick = noop,
                          onInputTextBlur = noop,
                          onInputTextOnChange = noop,
                          onInputTextSubmit = noop,
                      }) => {

    const textInputRef = useRef(null);

    const onBlur = value => {
        onInputTextBlur(value);
        if (editing) {
            textInputRef.current.focus();
        }
    };

    useEffect(() => {
        if (editing) {
            textInputRef.current.focus();
        }
    }, [editing]);

    return (
        <Row>
            <TodoSelectionIconWrapper>
                <Icon
                    type={selected ? "circle-filled" : "circle-outlined"}
                    onClick={onBtnSelectionClick}
                />
            </TodoSelectionIconWrapper>
            <TodoTitleWrapper>
                {
                    editing
                        ? (
                            <EditTextValue
                                value={title}
                                placeholder="Enter new todo title"
                                onBlur={onBlur}
                                onSubmit={onInputTextSubmit}
                                ref={textInputRef}
                                onChange={onInputTextOnChange}
                            />
                        )
                        : title
                }
                {
                    errorMessage && (
                        <ErrorMessage>
                            {errorMessage}
                        </ErrorMessage>
                    )
                }
            </TodoTitleWrapper>
            {
                editing
                    ? null
                    : (
                        <>
                            <TodoIconWrapper>
                                <Icon
                                    type="edit"
                                    onClick={onBtnEditClick}
                                />
                            </TodoIconWrapper>
                            <TodoIconWrapper>
                                <Icon
                                    type="delete"
                                    onClick={onBtnDeleteClick}
                                />
                            </TodoIconWrapper>
                        </>
                    )
            }
        </Row>
    );
};

TodoListItem.propTypes = {
    title: PropTypes.string,
    selected: PropTypes.bool,
    editing: PropTypes.bool,
    errorMessage: PropTypes.string,
    onBtnSelectionClick: PropTypes.func,
    onBtnEditClick: PropTypes.func,
    onBtnDeleteClick: PropTypes.func,
    onInputTextBlur: PropTypes.func,
    onInputTextOnChange: PropTypes.func,
    onInputTextSubmit: PropTypes.func
};

export default TodoListItem;
