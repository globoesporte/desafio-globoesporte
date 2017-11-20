import React, { Component } from 'react';
import './App.css';

// Componentes
import Filter from '../Filter/Filter';
import List from '../List/List';
import Text from '../Text/Text';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: 'all',
      listTask: [
        {
          'text': 'Ir pra praia',
          'status': 'done'
        }
      ],
      task: ''      
    }
    this.onText = this.onText.bind(this);
    this.onClickFilter = this.onClickFilter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.handlerTextList = this.handlerTextList.bind(this);
    this.onClickStatus = this.onClickStatus.bind(this);
    
    
  }

  onText(e) {
    this.setState({
      ...this.state,
      task: e.target.value,    
    });
  }

  onClickFilter(e) {
    this.setState({
      ...this.state,
      filter: e.target.value,    
    });
  }

  onSubmit() {
    const list = this.state.listTask;
    list.push({ 'text': this.state.task, 'status': 'todo' });
    this.setState({
      ...this.state,
      listTask: list,
      task: '',
    });
  }

  removeElement(e) {
    const list = this.state.listTask;
    list.splice(e.target.id, 1);
    this.setState({
      ...this.state,  
      listTask: list,
    });
  }

  onClickStatus(e) {
    const list = this.state.listTask;    
    if (e.target.value === 'todo') {
      list[e.target.id].status = 'done';      
    } else {
      list[e.target.id].status = 'todo';      
    }
    this.setState({
      ...this.state,  
      listTask: list,
    });
  }

  handlerTextList(e) {
    const list = this.state.listTask;
    list[e.target.id].text = e.target.value;
    this.setState({
      ...this.state,
      listTask: list,
    });
  }

  componentDidMount() {
    fetch('api/data.json', {})
      .then((response) => response.json()
      .then(list => this.setState({...this.state, listTask: list})))
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <div className='c-todo'>
          <Text task={this.state.task} onChange={this.onText} onSubmit={this.onSubmit}/>
          <List 
            listTask={this.state.listTask}
            filter={this.state.filter}
            remove={this.removeElement}
            handlerTextList={this.handlerTextList}
            onClickStatus={this.onClickStatus}
          />
          <Filter onClickFilter={this.onClickFilter} listTask={this.state.listTask}/>
        </div>
      </div>
    );
  }
}

export default App;
