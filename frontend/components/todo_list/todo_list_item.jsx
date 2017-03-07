import React from 'react';


class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { todo: props.todo, bodyRevealed: false };
    this.toggleBody = this.toggleBody.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleBody(e) {
    e.preventDefault();
    this.setState({ bodyRevealed: !this.state.bodyRevealed });
  }

  removeTodo(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  toggleDone(e) {
    e.preventDefault();
    const newTodo = this.state.todo;
    newTodo.done = !newTodo.done;
    this.setState({ todo: newTodo });
    this.props.updateTodo(this.state.todo);
  }

  render() {
    const body = (<p>{this.props.todo.body}</p>);
    return (
      <li>
        <h2 onClick={this.toggleBody}>{this.props.todo.title}</h2>
        {this.state.bodyRevealed ? body : ""}
        <button onClick={this.toggleDone}>
          {this.props.todo.done ? "Undo" : "Done"}
        </button>
        <button onClick={this.removeTodo}>Delete Todo Item</button>
      </li>
    );
  }
}

export default TodoListItem;
