import React from 'react';

export const TodoEdit = (props) => {
  const btnOn = props.editText === '' ? true : false;
  const disableClasse = btnOn ? '__disable' : '';
  const btnClasses = `todos__list__item__edit__form__confirm${disableClasse} x `;
  return (
    <li className="todos__list__item__edit x">
      <form 
        className="todos__list__item__edit__form x"
        onSubmit={() => props.confirmButtonSubmit(props.id)}>
        <input 
          className="todos__list__item__edit__form__input x" 
          type="text" 
          placeholder={props.text} 
          value={props.editText}
          onChange={props.editInputChange}
          /> 
        <button 
          className={btnClasses}
          onClick={() => props.confirmButtonSubmit(props.id)}
          disabled={btnOn}>
            Confirmar
        </button>
        <button 
          className="todos__list__item__edit__form__cancel x"
          onClick={() => props.toogleEditTodo(props.id)}>
            Cancelar
        </button>
      </form>
    </li>
  );

}


