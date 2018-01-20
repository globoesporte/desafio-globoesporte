import React from 'react';

export const Input = (props) =>  (
  <input 
    className="new-todo-input x" 
    type="text" 
    placeholder="Escreva aqui uma nova tarefa..." 
    {...props} />
);
