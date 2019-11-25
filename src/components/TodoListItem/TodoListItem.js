import React from 'react';
import PropTypes from 'prop-types';
import { Row, TodoTitleWrapper, TodoSelectionIconWrapper, TodoIconWrapper } from './styled';
import Icon from '../Icon';
import EditTextValue from '../EditTextValue';
import { noop } from 'ramda-extension';

const TodoListItem = ({
                          title = '',
                          selected = false,
                          editing = false,
                          onBtnSelectClick = noop,
                          onBtnEditClick = noop,
                          onBtnDeleteClick = noop,
                          ...rest
                      }) => {
    return (
        <Row>
            <TodoSelectionIconWrapper>
                <Icon
                    type={selected ? "circle-filled" : "circle-outlined"}
                    onClick={onBtnSelectClick}
                    style={{
                        visibility: editing ? 'hidden' : 'visible',
                    }}
                />
            </TodoSelectionIconWrapper>
            <TodoTitleWrapper>
                {
                    editing
                        ? (
                            <>
                                <EditTextValue
                                    initialValues={{
                                        title
                                    }}
                                    {...rest}
                                />
                            </>
                        )
                        : title
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
    onBtnSelectClick: PropTypes.func,
    onBtnEditClick: PropTypes.func,
    onBtnDeleteClick: PropTypes.func,
};

export default TodoListItem;
