import React, { Component } from 'react';

import './TodoSelectTab.css';


export class TodoSelectTabButton extends Component {
  constructor(props) {
    super(props);
    
    this.state = { selected : this.props.selected };

  }

  handleToggle() {
    if(!this.state.selected){
    this.setState({selected : !this.state.selected});
    }
  }

  render() {
    return (
      <li className="tg-list-item">
        <input className="tgl tgl-flip" id={this.props.item.text} type="radio" name={this.props.name} onClick={this.handleToggle.bind(this)} checked={this.state.selected} />
        <label className="tgl-btn" data-tg-off={this.props.item.text} data-tg-on={this.props.item.text} htmlFor={this.props.item.text}></label>
      </li>
    );
  }
}