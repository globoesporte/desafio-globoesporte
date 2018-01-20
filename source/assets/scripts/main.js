import React, { Component } from 'react';
import ReactDOM  from "react-dom";
import Header from './components/header';
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
    const listaDeItens = this.state.todos.map(todo => {
      if(true) {
        return(
          <li className="todos__list__item x" key={todo.id}>
            <input className="todos__list__item__checkbox x" type="checkbox"/> 
            <label className="todos__list__item__text x">{todo.text}</label> 
            <button className="todos__list__item__delete x">x</button>
          </li>
        );
      } else {
        return(
          <li className="todos__list__item x" key={todo.id}>
            <input className="todos__list__item__checkbox x" type="checkbox"/> 
            <input className="todos__list__item__text x" type="text" placeholder={todo.text}/> 
            <button className="todos__list__item__delete x">x</button>
          </li>
        );
      }
    });

    return(
      <main className="x app-container">
        <Header />
        <input 
          className="new-todo-input x" 
          type="text" 
          placeholder="Escreva aqui uma nova tarefa..." 
          value={this.state.newTodo} 
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputEnter}/>
        <section className="todos x">
          <ul className="todos__list x">
            {listaDeItens}
          </ul>
        </section>
      </main>
    );
  }
} 

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

