import React, { Component } from 'react';
import ReactDOM  from "react-dom";
import {
  modifiedData, 
  addTodo, 
  deleteTodo, 
  createNewTodo, 
  findById, 
  toogleTodo, 
  updateTodo, 
  filterTodos,
  toogleEditTodo,
  changeTextTodo 
} from './lib';
import { Header, TodosList, Todo, TodoEdit, Input, Footer } from './components';
import { Router } from './routes';
import data from '../../../api/data.json';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';


class App extends Component {

  static contextTypes = {
    route: PropTypes.string,
  }

  state = {
    todos: [],
    newTodo: '',
    editText: ''
  };

  componentDidMount() {
    this.setState({
      todos: modifiedData(data)
    });
  }

  handleInputChange = e => this.setState({
    newTodo: e.target.value,
    error: ''
  });

  handleEditInputChange = e => this.setState({
    editText: e.target.value,
    error: ''
  });

  handleInputSubmit = e => {
    e.preventDefault();
    const newTodo = createNewTodo(this.state.newTodo);
    const updateTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updateTodos,
      newTodo: ''
    });
  }

  handleEditSubmit = id => {
    const todo = findById(id, this.state.todos);
    const text = this.state.editText || todo.text;
    const newTextTodo = changeTextTodo(text, todo);
    const updateTodos = updateTodo(this.state.todos, newTextTodo);
    this.setState({
      todos: updateTodos,
      editText: ''
    });
  }

  handleEmptySubmit = e => {
    e.preventDefault();
    this.setState({
      error: 'Você precisa fornecer uma tarefa'
    })
  }

  handleDeleteTodo = id => {
    const updateTodos = deleteTodo(this.state.todos, id);
    this.setState({todos: updateTodos});
  }

  handleToogleEditTodo = id => {
    const todo = findById(id, this.state.todos);
    const editTodo = toogleEditTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, editTodo);
    this.setState({
      todos: updatedTodos,
      editText: ''
    });
  }

  handleStatusChange = id => {
    const todo = findById(id, this.state.todos);
    const toogle = toogleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toogle);
    this.setState({
      todos: updatedTodos
    });
  }

  render() {

    const displayTodos = filterTodos(this.state.todos, this.context.route);
    const remainingTodos = filterTodos(this.state.todos, '/fazer').length;
    const validInput = this.state.newTodo ? this.handleInputSubmit : this.handleEmptySubmit;
    const errorInputMessage = this.state.error && <span className="error x">{this.state.error}</span>;

    return (
      <main className="x app-container">
        <Header />
        <Input 
          value={this.state.newTodo}
          onChange={this.handleInputChange}
          onSubmit={validInput} 
        />
        {errorInputMessage}
        <TodosList 
          todos={displayTodos}         
          deleteTodo={this.handleDeleteTodo} 
          toogleEditTodo={this.handleToogleEditTodo} 
          editText={this.state.editText}
          toogleStatus={this.handleStatusChange}
          editInputChange={this.handleEditInputChange}
          editSubmit={this.handleEditSubmit}
          handleBlur={this.handleBlur} />
        <Footer remainingTodos={remainingTodos} />
      </main>
    );
  }
} 

ReactDOM.render(
  <Router ><App /></Router >,
  document.getElementById("app")
);

if(module.hot) {
  module.hot.accept();
}