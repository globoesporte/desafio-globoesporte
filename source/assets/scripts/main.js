import React, { Component } from 'react';
import ReactDOM  from "react-dom";
import Topbar from './components/topabar';

// import data from '../../../api/data.json';
// console.log(data)

class App extends Component {
  render() {
    return(
      <Topbar />
    );
  }
} 

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

