import React, { Component } from 'react';

//Resources
import header from './svg/logo-ge.svg';
import './TodoApp.css';

// Componentes
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoHoje } from './TodoHoje';
import { TodoSelectTab } from './TodoSelectTab';
import { TodoSummary } from './TodoSummary';

import axios from 'axios';


export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: [], todoCount: 0 };
  }

  componentDidMount() {
    var me = this;
    axios
      .get('data.json')
      .then(res => {

        var c = 0;
        res.data.forEach(x => {
          if (x.status === "todo") {
            c++;
          }
        });

        me.setState({ todoItems: res.data, todoCount: c });

      })
      .catch(err => console.log(err))
  }

  addItem(todoItem) {
    let todoItems = this.state.todoItems;

    todoItems.unshift({
      text: todoItem.newItemValue,
      status : 'todo'
    });
    this.setState({ todoItems: todoItems });
  }
  removeItem(itemIndex) {
    let todoItems = this.getState()['todoItems'];

    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  markTodoDone(itemIndex) {
    let todoItems = this.getState()['todoItems'];
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }
  render() {
    const tabs = [
      { text: 'Todos' },
      { text: 'Feitos' },
      { text: 'A fazer' }

    ];

    const items = this.state.todoItems;

    return (
      <div className="main">
        <TodoHeader />

        <main className="body" >
          <TodoForm addItem={this.addItem} />

          <div className="todolist">
            <TodoList items={items} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
          </div>
          <div className="footer" >
            <div className="footersummary">
              <TodoSummary total={this.state.todoCount} />
            </div>
            <div className="footertabs">
              <TodoSelectTab selected="Todos" name="filtro" items={tabs} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

class TodoHeader extends Component {
  render() {
    return (
      <header >
        <TodoHoje />
        <div className="header">
          <img src={header} className="logo" alt="logo" />
        </div>
      </header>
    );
  }
}


export default TodoApp;