import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import todosReducer from './ducks/todos';

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
    // Epics go here
);

const rootReducer = combineReducers({
    // State properties reducers go here,
    todos: todosReducer,
});

export default function configureStore() {
    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(epicMiddleware),
        // other store enhancers if any
    ));

    epicMiddleware.run(rootEpic);

    return store;
}
