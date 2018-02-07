import React from 'react';

export const Input = ({onSubmit, value, onChange}) =>  (
  <form onSubmit={onSubmit}>
    <input 
    className="new-todo-input x" 
    type="text" 
    placeholder="Escreva aqui uma nova tarefa..."
    value={value}
    onChange={onChange}
    />
  </form>
);
