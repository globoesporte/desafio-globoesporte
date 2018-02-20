import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';


class App extends Component {
   render() {
      return (
         <div>
            <Header />
            <Content />
         </div>
      )
   }
}

export default App;