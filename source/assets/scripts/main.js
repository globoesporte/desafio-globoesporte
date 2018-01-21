import React, { Component } from 'react';
import ReactDOM  from "react-dom";
import {modifiedData, addTodo, deleteTodo, createNewTodo} from './lib';
import {Header, TodosList, Todo, TodoEdit, Input} from './components';
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

  render() {
    const listaDeItens = this.state.todos.map(todo => (
        todo.isBeingEdit 
        ? <TodoEdit key={todo.id} text={todo.text} /> 
        : <Todo key={todo.id} id={todo.id} text={todo.text} deleteTodo={this.handleDeleteTodo} />
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
      </main>
    );
  }
} 

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

