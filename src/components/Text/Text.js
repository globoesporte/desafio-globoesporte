import React from 'react';
import './Text.css';

export default props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      props.onSubmit()
    }
  }

  return (
    <input 
      type='text'
      placeholder='Escreva aqui uma nova tarefa'
      className='c-text'
      value={props.task}
      onChange={props.onChange}
      onKeyUp={keyHandler}
    />  
  )
}
