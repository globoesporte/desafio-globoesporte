import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';


var todoItems = [
    {
      "text": "Ir pra praia",
      "status": "done"
    },
    {
      "text": "Fazer exercício",
      "status": "done"
    },
    {
      "text": "Estudar React",
      "status": "done"
    },
    {
      "text": "Assistir série",
      "status": "todo"
    },
    {
      "text": "Ler o Globosporte",
      "status": "todo"
    }
  ];
  

ReactDOM.render(<TodoApp initItems={todoItems}/>, document.getElementById('root'));
registerServiceWorker();
