import React from 'react';

export const Input = (props) =>  (
  <form onSubmit={props.onSubmit}>
    <input 
    className="new-todo-input x" 
    type="text" 
    placeholder="Escreva aqui uma nova tarefa..."
    value={props.value}
    onChange={props.onChange}
    />
  </form>
);
