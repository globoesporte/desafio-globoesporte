import React, { Component } from 'react';

export class TodoEdit extends Component {

  componentDidMount(){
    this.nameInput.focus();
  }

  render() {

    const btnOn = this.props.editText === '' ? true : false;
    const disableClasse = btnOn ? '__disable' : '';
    const btnClasses = `todos__list__item__edit__form__confirm${disableClasse} x `;

    return (
      <li className="todos__list__item__edit x" >
        <form 
          onBlur={() => this.props.editSubmit(this.props.id)} 
          className="todos__list__item__edit__form x"
          onSubmit={() => this.props.editSubmit(this.props.id)}>
          <input 
            ref={(input) => {this.nameInput = input }} 
            className="todos__list__item__edit__form__input x" 
            type="text" 
            placeholder={this.props.text} 
            value={this.props.editText}
            onChange={this.props.editInputChange}
            /> 
          {/* <button 
            className={btnClasses}
            onClick={() => this.props.confirmButtonSubmit(this.props.id)}
            disabled={btnOn}>
              Confirmar
          </button>
          <button 
            className="todos__list__item__edit__form__cancel x"
            onClick={() => this.props.toogleEditTodo(this.props.id)}>
              Cancelar
          </button> */}
        </form>
      </li>
    );
  }
}

