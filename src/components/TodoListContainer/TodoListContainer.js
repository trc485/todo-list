import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, List } from 'antd';
import TodoListItem from '../TodoListItem';
import { ListItem } from './styled';
import { findItemWithKeyValue } from '../../utilities';
import showDeleteConfirm from '../ShowDeleteConfirm';
import { defaultProps } from '../../defaultProps';
import {
    addNewTodo,
    deleteTodo,
    selectTodos, setTodoErrorMessage,
    setTodoTitle,
    toggleTodoEditing,
    toggleTodoSelected
} from '../../redux/ducks/todos';

const TodoListContainer = ({
                               todos = defaultProps.todos,
                               addNewTodo,
                               toggleTodoSelected,
                               toggleTodoEditing,
                               deleteTodo,
                               setTodoTitle,
                               setTodoErrorMessage
                           }) => {

    const isEditingTodo = !!findItemWithKeyValue(todos, 'editing', true);

    const onBtnNewItemClick = () => {
        if (!isEditingTodo) {
            addNewTodo();
        }
    };

    const findTodoWithSameTitle = str => {
        return todos.find(todo => todo.title.toLowerCase() === str.toLowerCase());
    };

    const onInputTextBlur = todoId => () => {
        const todo = findItemWithKeyValue(todos, 'id', todoId);
        if (todo.title) {
            setTodoErrorMessage(todo.id, '');
            toggleTodoEditing(todo.id);
        } else {
            setTodoErrorMessage(todo.id, 'Please enter new todo title');
        }
    };

    const onBtnEditClick = todoId => {
        if (!isEditingTodo) {
            toggleTodoEditing(todoId);
        }
    };

    const onInputTextOnChange = todoId => () => {
        setTodoErrorMessage(todoId, '');
    };

    const onInputTextSubmit = todoId => (value = '') => {

        if (value.length === 0) {
            setTodoErrorMessage(todoId, 'Cannot submit an empty value!');
        } else {
            const todoWithSameTitle = findTodoWithSameTitle(value);
            if (todoWithSameTitle && todoWithSameTitle.id !== todoId) {
                setTodoErrorMessage(todoId, 'This Todo already exists!');
            } else {
                setTodoTitle(todoId, value);
                setTodoErrorMessage(todoId, '');
                toggleTodoEditing(todoId);
            }
        }

    };

    return (
        <>
            <List
                bordered
                dataSource={todos}
                renderItem={todo => (
                    <ListItem>
                        <TodoListItem
                            title={todo.title}
                            selected={todo.selected}
                            editing={todo.editing}
                            errorMessage={todo.errorMessage}
                            onBtnSelectionClick={() => toggleTodoSelected(todo.id)}
                            onBtnEditClick={() => onBtnEditClick(todo.id)}
                            onBtnDeleteClick={() => showDeleteConfirm({
                                title: 'Are you sure to delete this todo?',
                                content: 'Click Yes to continue',
                                onConfirmDelete: () => deleteTodo(todo.id)
                            })}
                            onInputTextBlur={onInputTextBlur(todo.id)}
                            onInputTextOnChange={onInputTextOnChange(todo.id)}
                            onInputTextSubmit={onInputTextSubmit(todo.id)}
                        />
                    </ListItem>
                )}
            />
            <Button
                style={{
                    float: 'right',
                    marginTop: '1rem',
                }}
                type="primary"
                size="large"
                onClick={onBtnNewItemClick}
            >
                New Item
                <Icon type="plus" />
            </Button>
        </>
    );
};

const mapStateToProps = state => ({
    todos: selectTodos(state),
});

const mapDispatchToProps = {
    toggleTodoSelected,
    toggleTodoEditing,
    addNewTodo,
    deleteTodo,
    setTodoTitle,
    setTodoErrorMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
