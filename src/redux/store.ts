import { createStore, compose } from 'redux';
import reducer from './reducer'
import { combineReducers } from 'redux'
import initialState from './initialState'

const store = createStore(combineReducers({ reducer }), {reducer: initialState}, compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()));

export default store;