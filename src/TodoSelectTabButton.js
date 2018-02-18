import React, { Component } from 'react';

import './TodoSelectTab.css';


export class TodoSelectTabButton extends Component {

  handleToggle() {

  }

  render() {
    return (
      <li class="tg-list-item">
        <input className="tgl tgl-flip" id={this.props.item.text} type="radio" name={this.props.name} onClick={this.handleToggle.bind(this)} />
        <label className="tgl-btn" data-tg-off={this.props.item.text} data-tg-on={this.props.item.text} for={this.props.item.text}></label>
      </li>
    );
  }
}

