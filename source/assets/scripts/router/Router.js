import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
}


export class Router extends Component {

  state = {
    route: getCurrentPath()
  };

  handleLinkClick = (route) => {
    this.setState({route});
    history.pushState(null, '', route);
  }

  // Expõe contexto de Router para children
  static childContextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func,
  }

  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick,
    }
  }

  render() {
    return(
      <React.Fragment>{this.props.children}</React.Fragment>
    );
  }
}
