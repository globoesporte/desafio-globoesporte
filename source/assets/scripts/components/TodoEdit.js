import React from 'react';

export const TodoEdit = (props) => (
  <li className="todos__list__item x">
    <input className="todos__list__item__checkbox x" type="checkbox"/> 
    <input className="todos__list__item__text x" type="text" placeholder={props.text}/> 
    <button className="todos__list__item__delete x">x</button>
  </li>
);
