import React from 'react';
import check from '../../images/check.png';
import remove from '../../images/remove.png';
import yes from '../../images/yes.png';

const style = {
  check: {
    backgroundImage: `url(${check})`,
  },
  remove: {
    backgroundImage: `url(${remove})`,
  },
  yes: {
    backgroundImage: `url(${yes})`,
  }
}

export default props => {
  return (
    <li key={props.index} id={props.index}>
      <input 
        type="text"
        className={`c-list__text ${props.listTask[props.index].status === 'done' ? 'c-list__text-active' : ''}`}
        value={props.listTask[props.index].text}
        onChange={props.handlerTextList}
        id={props.index} 
      />
      <button
        value={props.listTask[props.index].status}
        className="c-list__button"
        onClick={props.onClickStatus}
        id={props.index}
        style={props.listTask[props.index].status === 'done' ? style.yes : style.check}>
      </button>
      <button
        value={props.index}
        onClick={props.remove}
        className="c-list__button c-list__remove"
        id={props.index}
        style={style.remove}>
      </button>
    </li>
  )
}  