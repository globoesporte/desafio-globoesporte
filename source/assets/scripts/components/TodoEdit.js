import React, { Component } from 'react';

export class TodoEdit extends Component {

  componentDidMount(){
    this.nameInput.focus();
  }

  render() {
    const { id, editSubmit, text, editText, editInputChange } = this.props;
    return (
      <li className="todos__list__item__edit x" >
        <form 
          onBlur={() => editSubmit(id)} 
          className="todos__list__item__edit__form x"
          onSubmit={() => editSubmit(id)}>
          <input 
            ref={(input) => {this.nameInput = input }} 
            className="todos__list__item__edit__form__input x" 
            type="text" 
            placeholder={text} 
            value={editText}
            onChange={editInputChange}
            /> 
        </form>
      </li>
    );
  }
}

