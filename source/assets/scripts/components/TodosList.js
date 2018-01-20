import React from 'react';

export const TodosList = (props) => (
  <section className="todos x">
    <ul className="todos__list x">
      {props.todos}
    </ul>
  </section>
);