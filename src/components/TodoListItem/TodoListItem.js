import React, { forwardRef } from 'react';
import { Row, TodoTitleWrapper, TodoSelectionIconWrapper, TodoIconWrapper, ErrorMessage } from './styled';
import Icon from '../Icon';
import EditTextValue from '../EditTextValue';

const TodoListItem = forwardRef(({
                                     todo,
                                     onBtnSelectionClick,
                                     onBtnEditClick,
                                     onBtnDeleteClick,
                                     onInputTextBlur,
                                     onInputTextOnChange,
                                     onInputTextSubmit,
                                 }, ref) => {
    const {
        title,
        selected,
        id,
        editing,
        error,
    } = todo;

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
                                onBlur={() => onInputTextBlur(todo)}
                                onSubmit={onInputTextSubmit(id)}
                                ref={ref}
                                onChange={() => onInputTextOnChange(id)}
                            />
                        )
                        : title
                }
                {
                    error && (
                        <ErrorMessage>
                            {error.message}
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
});

export default TodoListItem;
