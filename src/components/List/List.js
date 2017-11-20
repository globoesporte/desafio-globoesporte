import React, { Component } from 'react';
import './List.css';

export default props => {
  const renderList = () => {
    const listTask = props.listTask || [];
    const filter = props.filter;
    let list;
    if (filter === 'todo') {
      list = listTask.map(function(elem, index) {
        if (elem.status === 'todo') {
          return (
            <tr key={index} id={index}>
              <td><input type="text" value={props.listTask[index].text} onChange={props.handlerTextList}/></td>
              <td><button>{elem.status}</button></td>
              <td><button value={index} onClick={props.remove}>Deletar</button></td>
            </tr>
          )          
        }
      });
    } else if (filter === 'done') {
      list = listTask.map(function(elem, index) {
        if (elem.status === 'done') {
          return (
            <tr key={index} id={index}>
              <td><input type="text" value={props.listTask[index].text} onChange={props.handlerTextList}/></td>
              <td><button>{elem.status}</button></td>
              <td><button value={index} onClick={props.remove}>Deletar</button></td>
            </tr>
          )
        }
      });
    } else {
      list = listTask.map(function(elem, index) {
        return (
          <li key={index}>
            <input type="text" className="c-list__text" value={props.listTask[index].text} onChange={props.handlerTextList} id={index}/>
            <button value={props.listTask[index].status} onClick={props.onClickStatus} id={index}>{props.listTask[index].status}</button>
            <button value={index} onClick={props.remove} id={index}>Deletar</button>
          </li>
        )
      });
    }
    return list;
  }

  return (
    <ul className='c-list'>
      {renderList()}
    </ul>
  )
}

