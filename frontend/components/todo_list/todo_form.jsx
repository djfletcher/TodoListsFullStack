import React from 'react';
import { receiveTodo } from '../../actions/todo_actions';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", id: this.uniqueId(), done: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.uniqueId = this.uniqueId.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  uniqueId() {
    return new Date().getTime();
  }

  resetState() {
    this.setState({ title: "", body: "", id: this.uniqueId(), done: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.resetState();
  }

  updateTitle(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  render () {
    return (
      <form className="addTodoForm" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            type="text"
            onChange={this.updateTitle}
            value={this.state.title}
            />
        </label>
        <label>Body:
          <textarea
            onChange={this.updateBody}
            value={this.state.body}
            />
        </label>
        <button>Create todo!</button>
      </form>
    );
  }
}

export default TodoForm;
