import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Link extends Component {

  // Recebe contexto de Router
  static contextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func,
  }

  handleClick = (e) => {
    e.preventDefault();
    this.context.linkHandler(this.props.to);
  }
  
  render() {
    return (
      <a href="#" onClick={this.handleClick} className="x footer__nav__link">{this.props.children}</a>
    );
  }
}

