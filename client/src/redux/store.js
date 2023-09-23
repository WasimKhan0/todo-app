import {createStore,combineReducers,applyMiddleware} from "redux";

import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension';

import {todosReducers} from "./reducers/todosReducers";

const middleware = [thunk];

const reducer = combineReducers({
    todos: todosReducers
})


 
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
