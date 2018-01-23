import React from 'react';
import cancel from '../../img/cancel.svg';
import imgPath from '../lib/imgPath'

export const Todo = (props) => {
  return (
  <li className="todos__list__item x" onDoubleClick={() => props.toogleEditTodo(props.id)}>
    <input 
      className="todos__list__item__checkbox x" 
      type="checkbox" 
      onChange={() => props.toogleStatus(props.id)} 
      checked={ props.status === 'done' ? true : false}
      id={props.id} /> 
    <label className="todos__list__item__label x" htmlFor={props.id}/>
    <small className="todos__list__item__text x">{props.text}</small> 
    <button className="todos__list__item__delete x" onClick={() => props.deleteTodo(props.id)}>
      <svg enableBackground="new 0 0 212.982 212.982" version="1.1" viewBox="0 0 212.982 212.982" xmlns="http://www.w3.org/2000/svg">
        <g fill="#e74c3c">
          <path d="m131.8 106.49 75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0l-75.937 75.937-75.937-75.938c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0s6.99-18.322 0-25.312z" clipRule="evenodd" fill="#e74c3c" fillRule="evenodd"/>
        </g>
      </svg>
    </button>
  </li>
  )
};