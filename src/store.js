import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer } from "react-router-redux";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const devTools = NODE_ENV === 'production' ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    serialize: {
        options: true
    }
});

const store = createStore(
    combineReducers({
        routing: routerReducer,
    }),
    devTools,
    applyMiddleware(sagaMiddleware),
);


export default store;
