import React from 'react';
import { Todo, TodoEdit, empty } from '../components';

export const TodosList = props => {

  const showedTodos = props.todos.map(todo => {
    const { id } = todo;
    return (
      todo.isBeingEdit 
      ? <TodoEdit 
          key={id} 
          {...todo}
          {...props}
          /> 
      : <Todo 
          key={id} 
          {...todo}
          {...props}
          />
    )
  });

  const emptyTodos = showedTodos.length === 0 && empty;
  const classes = emptyTodos ? undefined : "todos x";

  return (
    <section className={classes}>
      {emptyTodos}
      <ul className="todos__list x">
        {showedTodos}
      </ul>
    </section>
  )
};