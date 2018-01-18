import React, { Component } from 'react';
import ReactDOM  from "react-dom";
import Header from './components/header';
import data from '../../../api/data.json';
import uuidv4 from 'uuid/v4';

class App extends Component {
  render() {

    const todos = data.slice();

    const listaDeItens = todos.map(todo => 
      <li className="todos__list__item x" key={uuidv4()}>
        <input className="todos__list__item__checkbox x" type="checkbox" name={uuidv4()} /> 
        <label className="todos__list__item__text x" htmlFor={uuidv4()}>{todo.text}</label> 
        <button className="todos__list__item__delete x">x</button>
      </li>
    );

    return(
      <main>
        <Header key={uuidv4()} />
        <div className="wrapper x">
          <input className="new-todo-input x" type="text" placeholder="Escreva aqui uma nova tarefa..." />
          <section className="todos x">
            <ul className="todos__list x">
              {listaDeItens}
            </ul>
          </section>
        </div>
      </main>
    );
  }
} 

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

