import React, { Component } from 'react';

class Todo extends Component {

  handleOnClick(event){
    this.props.store.dispatch({
      type: "DELETE_TODO",
      id: this.props.id,
    });
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={(event)=>this.handleOnClick(event)}>X</button>
      </li>
    );
  }
};

export default Todo
