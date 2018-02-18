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
        this.refs.form.reset();
      }
    }
    render () {
      return (
        <div className="todofield">

        <form ref="todoForm" onSubmit={this.onSubmit}>
          <input ref="todoInput" placeHolder="Escreva aqui a nova tarefa..."
          />
        </form>
      </div>
      );   
    }
  }