import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Routes from './Routes';
import Sidebar from './Components/Sidebar';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Sidebar />
          <Routes />
        </div>
      </HashRouter>
    );
  }
}

export default App;
