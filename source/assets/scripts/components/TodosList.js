import React from 'react';
import {Todo, TodoEdit} from '../components';

export const TodosList = (props) => {
  
  const todos = props.todos.map(todo => (
    todo.isBeingEdit 
    ? <TodoEdit 
        key={todo.id} 
        id={todo.id} 
        text={todo.text} 
        editText={props.editText}
        toogleEditTodo={props.toogleEditTodo}
        editInputChange={props.editInputChange}
        handleBlur={props.handleBlur}
        editSubmit={props.editSubmit} /> 
    : <Todo 
        key={todo.id} 
        id={todo.id} 
        text={todo.text} 
        deleteTodo={props.deleteTodo} 
        toogleStatus={props.toogleStatus} 
        toogleEditTodo={props.toogleEditTodo}
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