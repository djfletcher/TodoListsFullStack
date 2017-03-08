import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';
import { receiveTodos, receiveTodo, fetchTodos } from './actions/todo_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  window.store = store;
  window.allTodos = allTodos;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.fetchTodos = fetchTodos;

  ReactDOM.render(<Root store={ store } />, root);
});
