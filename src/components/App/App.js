import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../Layout';
import TodoList from '../TodoList';
import { Button, Icon } from 'antd';
import showDeleteConfirm from '../ShowDeleteConfirm';
import {
    selectTodos,
    toggleTodoSelected,
    toggleTodoEditing,
    addNewTodo,
    deleteTodo,
    setTodoTitle,
    setTodoErrorMessage,
} from '../../redux/ducks/todos';
import { todosPropType } from '../../shapes';
import { defaultProps } from '../../defaultProps';

const App = ({
                 todos = defaultProps.todos,
                 toggleTodoSelected,
                 toggleTodoEditing,
                 addNewTodo,
                 deleteTodo,
                 setTodoTitle,
                 setTodoErrorMessage

             }) => {

        const textInputRef = useRef(null);

        const todoBeingEdited = todos.find(todo => todo.editing === true); // todo-object or undefined

        const findTodoWithSameTitle = str => {
            return todos.find(todo => todo.title.toLowerCase() === str.toLowerCase()); // todo-object or undefined
        };

        const onInputTextBlur = todo => {
            if (todo.title) {
                setTodoErrorMessage(todo.id, '');
                toggleTodoEditing(todo.id);
            } else {
                setTodoErrorMessage(todo.id, 'Please enter new todo title');
                textInputRef.current.focus();
            }
        };

        const onBtnEditClick = todoId => {
            if (!todoBeingEdited) {
                toggleTodoEditing(todoId);
            }
        };

        const onInputTextOnChange = todoId => {
            setTodoErrorMessage(todoId, '');
        };

        const onInputTextSubmit = todoId => (submittedValue = '') => {

            if (submittedValue.length === 0) {
                setTodoErrorMessage(todoId, 'Cannot submit an empty value!');
            } else {
                const todoWithSameTitle = findTodoWithSameTitle(submittedValue);
                if (todoWithSameTitle && todoWithSameTitle.id !== todoId) {
                    setTodoErrorMessage(todoId, 'This Todo already exists!');
                } else {
                    setTodoTitle(todoId, submittedValue);
                    setTodoErrorMessage(todoId, '');
                    toggleTodoEditing(todoId);
                }
            }

        };


        const onBtnNewItemClick = () => {
            if (!todoBeingEdited) {
                addNewTodo();
            }
        };

        useEffect(() => {
            if (textInputRef && textInputRef.current) {
                textInputRef.current.focus();
            }
        }, [todos]);

        return (
            <Layout>
                <TodoList
                    todos={todos}
                    ref={textInputRef}
                    onBtnSelectionClick={toggleTodoSelected}
                    onBtnEditClick={onBtnEditClick}
                    onBtnDeleteClick={showDeleteConfirm(deleteTodo)}
                    onInputTextBlur={onInputTextBlur}
                    onInputTextOnChange={onInputTextOnChange}
                    onInputTextSubmit={onInputTextSubmit}
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
            </Layout>
        );
    }
;

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

App.propTypes = {
    todos: todosPropType,
    toggleTodoSelected: PropTypes.func,
    toggleTodoEditing: PropTypes.func,
    addNewTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
    setTodoTitle: PropTypes.func,
    setTodoErrorMessage: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
