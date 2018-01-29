import React, { Component } from 'react';

export class TodoEdit extends Component {

  componentDidMount(){
    this.nameInput.focus();
  }

  render() {
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
        </form>
      </li>
    );
  }
}

