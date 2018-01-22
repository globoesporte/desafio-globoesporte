import React, { Component } from 'react';
import ReactDOM  from "react-dom";
import {modifiedData, addTodo, deleteTodo, createNewTodo, findById, toogleTodo, updateTodo} from './lib';
import {Header, TodosList, Todo, TodoEdit, Input, Footer} from './components';
import {Router} from './router';
import data from '../../../api/data.json';
import uuidv4 from 'uuid/v4';

class App extends Component {

  state = {
    todos: [],
    newTodo: ''
  };

  componentDidMount() {
    this.setState({
      todos: modifiedData(data)
    });
  }

  handleInputChange = (e) => this.setState({newTodo: e.target.value});

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
    const listaDeItens = this.state.todos.map(todo => (
        todo.isBeingEdit 
        ? <TodoEdit key={todo.id} text={todo.text} /> 
        : <Todo 
            key={todo.id} 
            id={todo.id} 
            text={todo.text} 
            deleteTodo={this.handleDeleteTodo} 
            toogle={this.handleStatusChange} 
            status={todo.status} />
    ));
    return (
      <main className="x app-container">
        <Header />
        <Input 
          value={this.state.newTodo}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputSubmit} 
        />
        <TodosList todos={listaDeItens} />
        <Footer />
      </main>
    );
  }
} 

ReactDOM.render(
  <Router ><App /></Router >,
  document.getElementById("app")
);

