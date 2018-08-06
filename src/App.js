import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </HashRouter>
    );
  }
}

export default App;
