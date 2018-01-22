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
  filterTodos } from './lib';
import {Header, TodosList, Todo, TodoEdit, Input, Footer} from './components';
import {Router} from './router';
import data from '../../../api/data.json';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';


class App extends Component {

  static contextTypes = {
    route: PropTypes.string,
  }

  state = {
    todos: [],
    newTodo: ''
  };

  componentDidMount() {
    this.setState({
      todos: modifiedData(data)
    });
  }

  handleInputChange = (e) => this.setState({
    newTodo: e.target.value,
    error: ''
  });

  handleInputSubmit = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      const newTodo = createNewTodo(e.target.value);
      const updateTodos = addTodo(this.state.todos, newTodo);
      this.setState({
        todos: updateTodos,
        newTodo: ''
      });
    }
  }

  handleEmptySubmit = (e) => {
    
    if (e.keyCode == 13) {
      this.setState({
        error: 'Você precisa fornecer uma tarefa'
      })
    }
  }

  handleDeleteTodo = (id) => {
    const updateTodos = deleteTodo(this.state.todos, id);
    this.setState({todos: updateTodos});
  }

  handleStatusChange = (id) => {
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

    return (
      <main className="x app-container">
        <Header />
        <Input 
          value={this.state.newTodo}
          onChange={this.handleInputChange}
          onKeyDown={validInput} 
        />
        {this.state.error && <span className="error x">{this.state.error}</span>}
        <TodosList 
          todos={displayTodos}         
          deleteTodo={this.handleDeleteTodo} 
          toogle={this.handleStatusChange} />
        <Footer remainingTodos={remainingTodos} />
      </main>
    );
  }
} 

ReactDOM.render(
  <Router ><App /></Router >,
  document.getElementById("app")
);

