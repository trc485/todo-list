import { path } from 'ramda';
import { v4 } from 'node-uuid';
import { defaultProps } from '../../defaultProps';

const initialState = defaultProps.todos;

const createNewTodo = () => ({
    id: v4(),
    title: '',
    selected: false,
    editing: true,
    errorMessage: '',
});

// action types
const ADD_NEW_TODO = 'ADD_NEW_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO_KEYS = 'TOGGLE_TODO_KEYS';
const SET_TODO_KEYS = 'SET_TODO_KEYS';

/** ACTION CREATORS **/
export const addNewTodo = () => ({
    type: ADD_NEW_TODO
});

export const deleteTodo = todoId => ({
    type: DELETE_TODO,
    payload: todoId
});

// keys is an array of keys to toggle
export const toggleTodoKeys = (todoId, keys = []) => ({
    type: TOGGLE_TODO_KEYS,
    payload: {
        keys,
        todoId
    }
});

export const toggleTodoSelected = todoId => toggleTodoKeys(todoId, ['selected']);
export const toggleTodoEditing = todoId => toggleTodoKeys(todoId, ['editing']);

// entries is an object that contains keys and values
export const setTodoKeys = (todoId, entries = {}) => ({
    type: SET_TODO_KEYS,
    payload: {
        entries,
        todoId
    }
});

// error can be a string or nil
export const setTodoTitle = (todoId, title) => setTodoKeys(todoId, {title});
export const setTodoErrorMessage = (todoId, errorMessage) => setTodoKeys(todoId, {errorMessage});

/** SELECTORS **/
export const selectTodos = path(['todos']);

/** REDUCER **/
export default (state = initialState, action) => {
    if (action.type === ADD_NEW_TODO) {
        const newTodo = createNewTodo();
        return [
            ...state,
            {...newTodo}
        ];
    }

    if (action.type === DELETE_TODO) {
        return state.filter(todo => todo.id !== action.payload);
    }

    if (action.type === TOGGLE_TODO_KEYS) {
        const {keys = [], todoId} = action.payload;
        return state.map(todo => {
            if (todo.id === todoId) {
                const toggledKeysObj = keys.reduce((acc, curr) => {
                    acc[curr] = !todo[curr];
                    return acc;
                }, {});
                return {...todo, ...toggledKeysObj};
            } else {
                return todo;
            }
        });
    }

    if (action.type === SET_TODO_KEYS) {
        const {entries = {}, todoId} = action.payload;
        return state.map(todo => todo.id === todoId
            ? {...todo, ...entries}
            : todo
        );
    }

    return state;
};
