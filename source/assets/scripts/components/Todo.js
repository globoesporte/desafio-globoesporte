import React from 'react';

export const Todo = (props) => (
  <li className="todos__list__item x">
    <input className="todos__list__item__checkbox x" type="checkbox"/> 
    <label className="todos__list__item__text x">{props.text}</label> 
    <button className="todos__list__item__delete x">x</button>
  </li>
);