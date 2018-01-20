import React, { Component } from 'react';
import ReactDOM  from "react-dom";
import {Header, TodosList, Todo, TodoEdit, Input} from './components';
import data from '../../../api/data.json';
import uuidv4 from 'uuid/v4';

const modifiedData = data.map(todo => Object.assign({}, todo, {
  id: uuidv4(),
  isBeingEdit: false
}));

class App extends Component {

  state = {
    todos: [],
    newTodo: ''
  };

  componentDidMount() {
    this.setState({
      todos: modifiedData
    });
  }

  handleInputChange = (e) => this.setState({newTodo: e.target.value});

  handleInputEnter = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      const newId = uuidv4();
      const newTodo = {
        text: e.target.value,
        status: 'todo',
        id: newId,
        isBeingEdit: false
      };
      const updateTodos = this.state.todos.concat(newTodo);
      this.setState({
        todos: updateTodos,
        newTodo: ''
      });
    }
  }

  render() {
    const listaDeItens = this.state.todos.map(todo => (
        todo.isBeingEdit 
        ? <TodoEdit key={todo.id} text={todo.text} /> 
        : <Todo key={todo.id} text={todo.text} />
    ));
    return (
      <main className="x app-container">
        <Header />
        <Input 
          value={this.state.newTodo}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputEnter} />
        <TodosList todos={listaDeItens}/>
      </main>
    );
  }
} 

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

