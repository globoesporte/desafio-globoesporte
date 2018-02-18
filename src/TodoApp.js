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


export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: props.todoItems };
  }
  addItem(todoItem) {
    let todoItems = this.getState()['todoItems'];

    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
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

    var todoCount = 0;

    items.forEach(x => {
      if (x.status === "todo") {
        todoCount++;
      }
    });

    return (
      <div id="TodoApp" className="main">
        <TodoHeader />

        <main className="body" >
          <TodoForm addItem={this.addItem} />


          <div className="todolist">
            <TodoList items={items} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
          </div>
          <div className="footer" >
            <div className="footersummary">
              <TodoSummary total={todoCount} />
            </div>
            <div className="footertabs">
              <TodoSelectTab name="filtro" items={tabs} />
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