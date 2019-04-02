import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Mainpage from './components/layout/Mainpage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Mainpage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
