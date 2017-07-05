import {
  TODO_ADD,
  TODO_DELETE,
  TODO_LIST,
  TODO_TOGGLE
} from './types';

export const list = () => {
  return {
    type: TODO_LIST
  }
};

export const add = (todo) => {
  return {
    type: TODO_ADD, 
    payload: todo
  }
};

export const remove = (todo) => {
  return {
    type: TODO_DELETE, 
    payload: todo
  }
};

export const toggle = (todo) => {
  return {
    type: TODO_TOGGLE, 
    payload: todo
  }
};

