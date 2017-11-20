import React from 'react';
import './List.css';

import Element from './Element';

export default props => {
  const renderList = () => {
    const listTask = props.listTask || [];
    const filter = props.filter;
    let list;
    if (filter === 'todo') {
      list = listTask.map(function(elem, index) {
        if (elem.status === 'todo') {
          return (
            <Element
              key={index}
              index={index}
              listTask={props.listTask}
              handlerTextList={props.handlerTextList}
              onClickStatus={props.onClickStatus}
              remove={props.remove} 
            />
          )
        }
        return false        
      });
    } else if (filter === 'done') {
      list = listTask.map(function(elem, index) {
        if (elem.status === 'done') {
          return (
            <Element 
              key={index}            
              index={index}
              listTask={props.listTask}
              handlerTextList={props.handlerTextList}
              onClickStatus={props.onClickStatus}
              remove={props.remove} 
            />
          )
        }
        return false
      });
    } else {
      list = listTask.map(function(elem, index) {
        return (
          <Element 
            key={index}          
            index={index}
            listTask={props.listTask}
            handlerTextList={props.handlerTextList}
            onClickStatus={props.onClickStatus}
            remove={props.remove} 
          />
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

