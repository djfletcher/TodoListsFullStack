import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO } from '../actions/todo_actions';
import { buildTodosArray } from './selectors';
import merge from 'lodash/merge';

//
// const initialState = {
//   1: {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   2: {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// };

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TODOS:
      // return action.todos;
      action.todos.forEach(todo => newState[todo.id] = todo)
      return newState;
      // return {};
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      delete newState[action.todo.id];
      return newState;
    case UPDATE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

// const todosReducer = (state = initialState, action) => {
//   Object.freeze(state);
//   // const currentTodosArray = buildTodosArray(state);
//   switch(action.type) {
//     case RECEIVE_TODOS:
//       // return [...currentTodosArray, ...action.todos];
//       return merge({}, state, action.todos);
//       // let stateLength = Object.keys(state).length;
//       // let actionLength = Object.keys(action.todos).length;
//       // for (let i = stateLength; i < stateLength + actionLength; i++) {
//       //   newState[i] = action.todos[i];
//       // }
//       // return Object.assign(state, newState);
//     case RECEIVE_TODO:
//       // return [...currentTodosArray, action.todo];
//       return merge({}, state, action.todo);
//     default:
//       return state;
//   }
// };

export default todosReducer;
