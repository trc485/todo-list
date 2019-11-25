import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import todosReducer from './ducks/todos';
import throttle from 'lodash.throttle';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from '../localStorage';

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
    // Epics go here
);

const rootReducer = combineReducers({
    // State properties reducers go here,
    form: formReducer,
    todos: todosReducer,
});

export default function configureStore() {

    const persistedState = loadStateFromLocalStorage();

    const store = createStore(rootReducer,
        persistedState,
        composeWithDevTools(
            applyMiddleware(epicMiddleware),
            // other store enhancers if any
        )
    );

    epicMiddleware.run(rootEpic);

    store.subscribe(throttle(() => {
        saveStateToLocalStorage({
            todos: store.getState().todos
        });
    }, 1000));

    return store;
}
