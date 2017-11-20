import React from 'react';

export default (props) => {
  const todoNumber = () => {
    let count = 0;
    props.listTask.forEach((elem) => {
      if (elem.status === 'todo') count += 1;
    });
    return count
  }

  return (
    <div className='c-filter'>
      <label>Faltam {todoNumber()} tarefas</label>
      <button value='all' onClick={props.onClickFilter}>Todos</button>
      <button value='done' onClick={props.onClickFilter}>Feitos</button>
      <button value='todo' onClick={props.onClickFilter}>A fazer</button>
    </div>
  )
}
