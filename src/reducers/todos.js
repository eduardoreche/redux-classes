import {
  TODO_ADD,
  TODO_DELETE,
  TODO_LIST,
  TODO_TOGGLE
} from '../actions/types';

const INITIAL_STATE = {
  todos: []
}

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_ADD:
      state.push({
        text: action.payload.text,
        done: false
      });

      return state;

    case TODO_DELETE: 
      return state;

    case TODO_LIST:
      return state;

    case TODO_TOGGLE:
      return state;

    default:
      return state;
  }
}

export default todos;