import React from 'react';
import { del } from '../components';

export const Todo = props => {
  const { id, status, text, toogleStatus, toogleEditTodo, deleteTodo } = props;
  return (
  <li className="todos__list__item x" onDoubleClick={() => toogleEditTodo(id)}>
    <input 
      className="todos__list__item__checkbox x" 
      type="checkbox" 
      onChange={() => toogleStatus(id)} 
      checked={status === 'done' ? true : false}
      id={id} /> 
    <label className="todos__list__item__label x" htmlFor={id}/>
    <small className="todos__list__item__text x">{text}</small> 
    <button className="todos__list__item__delete x" onClick={() => deleteTodo(id)}>
      {del}
    </button>
  </li>
  )
};