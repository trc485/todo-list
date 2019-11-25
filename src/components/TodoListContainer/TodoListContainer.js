import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import TodoListItem from '../TodoListItem';
import { findItemWithKeyValue } from '../../utilities';
import showDeleteConfirm from '../ShowDeleteConfirm';
import {
    addNewTodo,
    deleteTodo,
    selectTodos,
    setTodoTitle,
    toggleTodoEditing,
    toggleTodoSelected
} from '../../redux/ducks/todos';
import TodoList from '../TodoList';

const TodoListContainer = ({
                               todos,
                               addNewTodo,
                               toggleTodoSelected,
                               toggleTodoEditing,
                               deleteTodo,
                               setTodoTitle,
                           }) => {

    const isEditingTodo = !!findItemWithKeyValue(todos, 'editing', true);
    const findTodoWithSameTitle = (str = '') => {
        return todos.find(todo => todo.title.toLowerCase() === str.toLowerCase());
    };

    const onBtnNewItemClick = () => {
        if (!isEditingTodo) {
            addNewTodo();
        }
    };

    const onBtnEditClick = (todoId = '') => {
        if (!isEditingTodo) {
            toggleTodoEditing(todoId);
        }
    };

    const onSubmit = (todoId = '') => (values = {}) => {
        const {title = ''} = values;
        setTodoTitle(todoId, title);
        toggleTodoEditing(todoId);
    };


    const validate = (todoId = '') => (values = {}) => {
        const errors = {};
        const {title = ''} = values;
        const todoWithSameTitle = findTodoWithSameTitle(title);
        if (!title) {
            errors.title = 'Please enter todo title!';
        }
        if (!!todoWithSameTitle && todoWithSameTitle.id !== todoId) {
            errors.title = 'This Todo already exists!';
        }
        return errors;
    };

    return (
        <>
            <TodoList
                dataSource={todos}
                renderItem={todo => (
                    <TodoListItem
                        title={todo.title}
                        selected={todo.selected}
                        editing={todo.editing}
                        onBtnSelectClick={() => toggleTodoSelected(todo.id)}
                        onBtnEditClick={() => onBtnEditClick(todo.id)}
                        onBtnDeleteClick={() => showDeleteConfirm({
                            title: 'Are you sure to delete this todo?',
                            content: 'Click Yes to continue',
                            onConfirmDelete: () => deleteTodo(todo.id)
                        })}
                        onSubmit={onSubmit(todo.id)}
                        validate={validate(todo.id)}
                        placeholder="Enter new todo title"
                        onBtnCancelClick={
                            todo.title
                                ? () => toggleTodoEditing(todo.id)
                                : () => deleteTodo(todo.id)
                        }
                    />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
