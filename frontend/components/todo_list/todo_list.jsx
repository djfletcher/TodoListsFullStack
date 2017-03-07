import React from 'react';
import { buildTodosArray } from '../../reducers/selectors';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const todoItems = buildTodosArray(this.props.todos);
    const liItems = todoItems.map((todoItem, idx) =>
      <TodoListItem
        removeTodo={this.props.removeTodo}
        updateTodo={this.props.updateTodo}
        todo={todoItem}
        key={idx} />
    );
    return (
      <div>
        <h1>Todo List</h1>
        <ul>{liItems}</ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
