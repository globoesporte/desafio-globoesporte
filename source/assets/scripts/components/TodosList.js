import React from 'react';
import {Todo, TodoEdit} from '../components';

export const TodosList = (props) => {

  const todos = props.todos.map(todo => (
    todo.isBeingEdit 
    ? <TodoEdit key={todo.id} text={todo.text} /> 
    : <Todo 
        key={todo.id} 
        id={todo.id} 
        text={todo.text} 
        deleteTodo={props.deleteTodo} 
        toogle={props.toogle} 
        status={todo.status} />
  ));

  return (
    <section className="todos x">
      <ul className="todos__list x">
        {todos}
      </ul>
    </section>
  )
};