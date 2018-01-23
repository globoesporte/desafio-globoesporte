import React from 'react';

export const Todo = (props) => (
  <li className="todos__list__item x" onDoubleClick={() => props.toogleEditTodo(props.id)}>
    <input 
      className="todos__list__item__checkbox x" 
      type="checkbox" 
      onChange={() => props.toogleStatus(props.id)} 
      checked={ props.status === 'done' ? true : false} /> 
    <label className="todos__list__item__text x">{props.text}</label> 
    <button className="todos__list__item__delete x" onClick={() => props.deleteTodo(props.id)}>x</button>
  </li>
);