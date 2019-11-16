import React, { useRef, useEffect } from 'react';
import { Row, TodoTitleWrapper, TodoSelectionIconWrapper, TodoIconWrapper, ErrorMessage } from './styled';
import Icon from '../Icon';
import EditTextValue from '../EditTextValue';

const TodoListItem = ({
                          todo,
                          onBtnSelectionClick,
                          onBtnEditClick,
                          onBtnDeleteClick,
                          onInputTextBlur,
                          onInputTextOnChange,
                          onInputTextSubmit,
                      }) => {
    const {
        title,
        selected,
        id,
        editing,
        errorMessage,
    } = todo;

    const textInputRef = useRef(null);

    const onBlur = () => {
        onInputTextBlur(todo);
        if (editing) {
            textInputRef.current.focus();
        }
    };

    useEffect(() => {
        if (editing) {
            textInputRef.current.focus();
        }
    }, [editing, errorMessage]);

    return (
        <Row>
            <TodoSelectionIconWrapper>
                <Icon
                    type={selected ? "circle-filled" : "circle-outlined"}
                    onClick={() => onBtnSelectionClick(id)}
                />
            </TodoSelectionIconWrapper>
            <TodoTitleWrapper>
                {
                    editing
                        ? (
                            <EditTextValue
                                originalValue={title}
                                placeholder="Enter new todo title"
                                onBlur={onBlur}
                                onSubmit={onInputTextSubmit(id)}
                                ref={textInputRef}
                                onChange={() => onInputTextOnChange(id)}
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
                                    onClick={() => onBtnEditClick(id)}
                                />
                            </TodoIconWrapper>
                            <TodoIconWrapper>
                                <Icon
                                    type="delete"
                                    onClick={onBtnDeleteClick(id)}
                                />
                            </TodoIconWrapper>
                        </>
                    )
            }
        </Row>
    );
};

export default TodoListItem;
