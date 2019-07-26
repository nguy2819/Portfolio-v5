import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Mainpage from './components/layout/Mainpage';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Mainpage />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
