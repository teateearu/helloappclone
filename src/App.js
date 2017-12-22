import React, { Component } from 'react';
import HostsContainer from './hosts/HostsContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="main">
        <HostsContainer />
      </div>
    );
  }
}

export default App;
