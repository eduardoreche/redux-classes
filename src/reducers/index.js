import { combineReducers } from 'redux';
import jokesReducer from './jokes';
import todos from './todos';

const rootReducer = combineReducers({
  joke: jokesReducer,
  todoList: todos
});

export default rootReducer;
