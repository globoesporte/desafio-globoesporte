import React, { Component } from 'react';
import header from './svg/logo-ge.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={header} className="logo" alt="header" />
          <div className="hoje" />
        </header>

        <body className="body" >
          <div className="tarefa">

            <form>
              <input placeHolder="Escreva aqui a nova tarefa..."
              />
            </form>
          </div>
        </body>

      </div>
    );
  }
}

export default App;
