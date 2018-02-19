import React from 'react';

import './TodoForm.css';

export class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
      this.refs.todoInput.focus();
    }
    onSubmit(event) {
      event.preventDefault();
      var newItemValue = this.refs.todoInput.value;
      
      if(newItemValue) {
        this.props.addItem({newItemValue});
        this.refs.todoForm.reset();
      }
    }
    render () {
      return (
        <div className="todofield">

        <form id="todoForm" ref="todoForm" onSubmit={this.onSubmit}>
          <input id="todoInput" name="todoInput" ref="todoInput" placeholder="Escreva aqui a nova tarefa..." maxLength="20"
          />
        </form>
      </div>
      );   
    }
  }