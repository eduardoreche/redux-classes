import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, list } from '../actions/todos';

class Todos extends Component {
  componentWillMount() {
    this.props.list();
  }

  render() {
    const renderTodos = todos => {
      return todos.map( todo => {
        return (
          <li>todo.text</li>
        );
      });
    }

    return(
      <div>
        <h1>Todos</h1>
        <ul>
          {renderTodos(this.props.todos)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoList.todos
  };
}

export default connect(mapStateToProps, { add, list })(Todos);
