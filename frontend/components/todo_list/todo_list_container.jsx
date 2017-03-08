import { connect } from 'react-redux';
import TodoList from './todo_list';
import { createTodo, removeTodo, updateTodo, fetchTodos } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: state.todos,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

// debugger;
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
