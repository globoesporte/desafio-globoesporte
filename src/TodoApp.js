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
    this.onToggle = this.onToggle.bind(this);
    this.onSelectFiltro = this.onSelectFiltro.bind(this);
    this.state = { todoItems: [], todoCount: 0, filtro : 'Todos' };
  }

  countTodo(todoList){
    var c = 0;
    todoList.forEach(x => {
      if (x.status === "todo") {
        c++;
      }
    });
  
    return c;
  }

  componentDidMount() {
    var me = this;
    axios
      .get('data.json')
      .then(res => {

        res.data.forEach((item,index)=>{item['index']=index});

        me.setState({ todoItems: res.data, todoCount: this.countTodo(res.data) });

      })
      .catch(err => console.log(err))
  }

  addItem(todoItem) {
    let todoItems = this.state.todoItems;

    todoItems.unshift({
      text: todoItem.newItemValue,
      status : 'todo'
    });

    todoItems.forEach((item,index)=>{item['index']=index});

    this.setState({ todoItems: todoItems, todoCount: this.countTodo(todoItems) });
  }
  
  removeItem(index) {
    let todoItems = this.state.todoItems;

    todoItems.splice(index, 1);
    
    todoItems.forEach((item,index)=>{item['index']=index});
    this.setState({ todoItems: todoItems, todoCount: this.countTodo(todoItems) });
  }

  onToggle(index) {
    let todoItems = this.state.todoItems;

    var todo = todoItems[index];
    todo.status = todo.status ==='todo'?'done':'todo';
    this.setState({ todoItems: todoItems, todoCount: this.countTodo(todoItems)});
  }

  onSelectFiltro(text){

    this.setState({filtro:text});
    
  }

  render() {
    const tabs = [
      { text: 'Todos' },
      { text: 'Feitos' },
      { text: 'A fazer' }

    ];

    const items = [];

    this.state.todoItems.forEach((item,index)=>{
          switch(this.state.filtro ){
            case 'A fazer' :
            if(item.status==='todo')items.push(item);
              break;
            case 'Feitos' :
              if(item.status==='done')items.push(item);
              break;
            default:
              items.push(item);
          } 
    });

    return (
      <div className="main">
        <TodoHeader />

        <main className="body" >
          <TodoForm addItem={this.addItem} />

          <div className="todolist">
            <TodoList items={items} removeItem={this.removeItem} onToggle={this.onToggle} />
          </div>
          <div className="footer" >
            <div className="footersummary">
              <TodoSummary total={this.state.todoCount} />
            </div>
            <div className="footertabs">
              <TodoSelectTab selected={this.state.filtro} name="filtro" items={tabs} onClick={this.onSelectFiltro.bind(this)}/>
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