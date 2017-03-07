import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, removeTodo, updateTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

// debugger;
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
